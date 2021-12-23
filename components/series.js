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
        <div>
            {
                data.data.results.map((series) => {
                    return (
                        <Thumbnail key={series.id} thumbnail={series.thumbnail} width="portrait_xlarge" />
                    )
                })
            }


        </div>
    )
}
