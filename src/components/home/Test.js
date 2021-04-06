import React from 'react'

function Test(props) {
    return (
        <div className="card">
            <h1>Test Component</h1>

            <h2>{props.data.value}</h2>
        </div>
    )
}

export default Test
