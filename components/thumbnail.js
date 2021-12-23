import React from 'react'

export default function Thumbnail({ thumbnail, width }) {
    return (
        <div className=''>
            <img className="max-w-sm rounded border-4 border-solid border-black" src={thumbnail.path + `/${width}.${thumbnail.extension}`} alt='avatar'></img>
        </div>
    )
}
