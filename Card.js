import React from 'react'

export default function Card (props) {
return (
    <div className='Card'>
        <h4>{props.quotes}</h4>
        <h1>{props.authors}</h1>

    </div>
);
}
