import React from 'react'

function Button ( {text}) {
    return (
        <>
            <button
                className="count-button"
                type="button"

                > {text}
            </button>
        </>
    );
}

export default Button