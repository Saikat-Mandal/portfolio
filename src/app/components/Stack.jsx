import React from 'react'

const Stack = (props) => {
    return (
        <div className="flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
            <div className={`text-4xl ${props.iconColor}`}>
                {props.icon}
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Stack