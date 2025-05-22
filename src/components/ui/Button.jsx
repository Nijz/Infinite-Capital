import React from 'react'

function Button({className, content}) {
    return (
        <div className={className}>
            {content}
        </div>
    )
}

export default Button 