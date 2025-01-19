import React from "react";

export const Alert = () => {
    const message = {
        text: 'A simple primary alert-check it out!',
        style: 'success',
        visible: true
    }


    return (
        <div className="container">
            <div className={`alert alert-${message.style} ${message.visible ? '' : "d-none"} `} role="alert">
                {message.text}
            </div>
        </div>
    )
}