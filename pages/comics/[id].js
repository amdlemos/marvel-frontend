import React from 'react'
import { useRouter } from 'next/router'
import { useGet } from "../../requests"

export default function Comic() {
    const { id } = useRouter().query
    const { data, error } = useGet(`/comics/` + id)

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const comic = data.data.results[0]
    console.log(comic)
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='p-10'>
                <img className="max-w-sm" src={comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension} alt='avatar'></img>
            </div>
            <div className='p-10 pl-0 sm:pl-10'>
                <div className='uppercase font-bold text-2xl'>
                    {comic.title}
                </div>
                <div className='my-2 indent-6 text-justify '>
                    {comic.description}
                </div>
                <div className='flex'>
                    <div className='my-2'>
                        <p className='font-bold'>Creators</p>
                        {
                            comic.creators.items.map((c) => {
                                return (
                                    <div key={c.name}>{c.name}</div>
                                )

                            })}
                    </div>
                    <div className='my-2 mx-10'>
                        <p className='font-bold'>Published:</p>                        
                        <span>{comic.dates[0].date}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
