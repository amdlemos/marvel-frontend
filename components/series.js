import Link from 'next/link'
import React from 'react'
import { useGet } from '../requests'
import Thumbnail from './thumbnail'

export default function Series({ pageIndex }) {
    const offset = pageIndex >= 0 ? pageIndex * 20 : 0
    const { data, error } = useGet(`/series`, { offset })

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log('series data', data)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center'>
                {
                    data.data.results.map((serie) => {
                        console.log('serie_loop', serie)
                        return (
                            <Link href={`/series/${serie.id}`}>
                                <div className='card'>

                                <div className="text-sm text-ellipsis max-w-max-0 text-blue-600 font-semibold">{serie.title} </div>
                                    <Thumbnail key={serie.id} thumbnail={serie.thumbnail} width="portrait_medium" />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
