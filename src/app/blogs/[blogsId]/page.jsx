import React from 'react'

function page({ params }) {
    return (
        <div>page{params.blogsId}</div>
    )
}

export default page