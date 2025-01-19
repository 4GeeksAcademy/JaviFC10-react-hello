import React from "react";

export const Spinner = () => {
    const spinner = {
        style: 'danger',
        visible: false
    }


    return (
        <div className="container">
            <div className={`spinner-grow text-${spinner.style} ${spinner.visible ? '' : "d-none"}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}