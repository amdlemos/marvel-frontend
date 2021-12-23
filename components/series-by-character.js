import React from 'react'
import { useGet } from '../requests'

export default function SeriesByChracter({ characterId, pageIndex }) {
    console.log(characterId)
    const offset = pageIndex >= 0 ? pageIndex * 20 : 0
    const { data, error } = useGet(`/characters/${characterId}/series`, { offset })
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log('series', data)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center'>
                <div className='min-w-min absolute text-left'>
                    Series
                </div>
                {
                    data.data.results.map((serie) => {
                        return (
                            <div className='p-6 max-w-[200px]'>
                                <div className='truncate'>{serie.title}</div>
                                <img className="max-w-sm" src={serie.thumbnail.path + "/standard_large." + serie.thumbnail.extension} alt='avatar'></img>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}
