import React, { useState } from 'react'
import { contactUsCard } from '../utils/contactUsData'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function Contact() {
    // Extract data
    const { title, subheadline, infos } = contactUsCard
    const phoneInfo = infos.find(info => Array.isArray(info.content))
    const emailInfo = infos.find(info => typeof info.content === 'string' && info.content.includes('@'))
    const addressInfo = infos.find(info => typeof info.content === 'string' && info.content.includes('plazza'))

    // Form state
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSending, setIsSending] = useState(false)

    // Validation
    const isEmailValid = (email) => {
        // Basic email regex for format check
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.phone || !form.message) {
            toast.error('Please fill in all fields.')
            return
        }
        if (!isEmailValid(form.email)) {
            toast.error('Please enter a valid email address.')
            return
        }

        setIsSending(true)

        try {
            // Replace '/f/YOUR_FORMSPREE_ID' with your actual Formspree endpoint URL
            const response = await axios.post('https://formspree.io/f/mgvkqbqp', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            // Formspree typically returns a 200 OK status on success
            if (response.status === 200) {
                toast.success('Message sent successfully!')
                // Clear form fields
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            } else {
                 // This else block might not be reached with axios for non-2xx responses,
                 // as axios throws an error that will be caught below.
                toast.error('Failed to send message. Please try again.')
            }
        } catch (error) {
            console.error('Error sending message:', error)
            // Check if the error is an Axios error with a response
            if (axios.isAxiosError(error) && error.response) {
                 // Handle specific error responses from Formspree if needed
                console.error('Formspree error response:', error.response.data);
                toast.error('Failed to send message. Please check Formspree setup.');
            } else {
                 toast.error('An error occurred. Please try again later.')
            }
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div id="contact-section" className="min-h-screen flex items-center justify-center bg-darkGrayScale-700 py-6">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
                {/* Get In Touch Card */}
                <div className="flex-1 border border-white/10 rounded-[20px] backdrop-blur-[10px] bg-darkGrayScale-700 p-5 md:p-8 shadow-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-white text-3xl md:text-3xl font-bold mb-1 font-heading">{title}</h2>
                        <p className="font-normal font-body text-sm md:text-base text-white/50 mb-4">{subheadline}</p>
                        <div className="space-y-4">
                            {/* Phone Numbers */}
                            {phoneInfo && phoneInfo.content.map((phone) => (
                                <div key={phone.id} className="flex items-center gap-2 text-darkGrayScale-100 text-base md:text-lg font-body">
                                    <span role="img" aria-label="phone" className="text-lg">☎️</span>
                                    <span className="font-medium">+91 {phone.phoneNumber}</span>
                                </div>
                            ))}
                            {/* Email */}
                            {emailInfo && (
                                <div className="flex items-center gap-2 text-darkGrayScale-100 text-base md:text-lg font-body">
                                    <span role="img" aria-label="email" className="text-lg">📧</span>
                                    <a href={`mailto:${emailInfo.content}`} className="hover:text-orange-500 transition-colors duration-300">{emailInfo.content}</a>
                                </div>
                            )}
                            {/* Address */}
                            {addressInfo && (
                                <div className="flex items-center gap-2 text-darkGrayScale-100 text-base md:text-lg font-body">
                                    <span role="img" aria-label="location" className="text-lg">📍</span>
                                    <span className="font-medium">{addressInfo.content.replace('📍 ', '')}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Map */}
                    <div className="mt-5 rounded-lg overflow-hidden w-full h-36 md:h-32 shadow-lg">
                        <iframe
                            title="Infinite Capital Location"
                            src="https://www.google.com/maps?q=trident+plazza,+Zanzarda+Road,+Junagadh&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* Form Card */}
                <div className="flex-1 border-0 rounded-[20px] p-5 md:p-8 flex flex-col justify-between backdrop-blur-lg shadow-lg bg-gray-200/[0.03] font-body">
                    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="rounded-lg px-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none  focus:ring-white/30 shadow-md border-0 backdrop-blur-3xl bg-darkGrayScale-700"
                            disabled={isSending}
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="rounded-lg px-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none focus:ring-white/30 shadow-md backdrop-blur-3xl bg-darkGrayScale-700"
                            disabled={isSending}
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="rounded-lg px-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none focus:ring-white/30 shadow-md border-0 backdrop-blur-3xl bg-darkGrayScale-700"
                            disabled={isSending}
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={7}
                            className="rounded-lg px-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none focus:ring-white/30 shadow-md border-0 resize-none backdrop-blur-3xl bg-darkGrayScale-700"
                            disabled={isSending}
                        ></textarea>
                        <button
                            type="submit"
                            className="border border-white/20 rounded-[10px] px-6 py-2 bg-darkGrayScale-600 backdrop-blur-[2px] text-white font-semibold text-base mt-2 hover:bg-white/30 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default Contact