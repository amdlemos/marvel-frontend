import React, { useState } from 'react'
import { Router, useRouter } from 'next/router'
import { useGet } from "../../requests"
import SeriesByChracter from '../../components/series-by-character'
import Thumbnail from '../../components/thumbnail'
import NavPagination from '../../components/nav-pagination'
import ComicsBy from '../../components/comics-by'

export default function Character() {
    const { id } = useRouter().query
    const [pageIndex, setPageIndex] = useState(0)
    const onclick = (action) => setPageIndex(pageIndex + action)
    const { data, error } = useGet(`/characters/` + id)

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const character = data.data.results[0]
    // Sconsole.log(character)
    return (
        <div className="flex flex-wrap justify-center">
            <div className='p-10'>
                <Thumbnail thumbnail={character.thumbnail} width='portrait_uncanny' />
            </div>
            <div className='p-10 pl-0 sm:pl-10'>
                {character.name}
            </div>
            <div className='my-2 ident-6 text-justify'>

            </div>
            <div>
                <SeriesByChracter characterId={character.id} pageIndex={pageIndex} />
                <ComicsBy path="/characters" id={character.id} pageIndex={pageIndex} />
                <div style={{ display: 'none' }}><SeriesByChracter characterId={character.id} pageIndex={pageIndex + 1} /></div>
                <NavPagination pageIndex={pageIndex} onclick={onclick} />
            </div>
        </div>
    )
}