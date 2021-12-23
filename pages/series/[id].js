import React, { useState } from 'react'
import { Router, useRouter } from 'next/router'
import { useGet } from "../../requests"
import ComicsBySerie from '../../components/comics_by_serie'
import Thumbnail from '../../components/thumbnail'
import NavPagination from '../../components/nav-pagination'

export default function Serie() {
    const { id } = useRouter().query
    const [pageIndex, setPageIndex] = useState(0)
    const onclick = (action) => setPageIndex(pageIndex + action)
    const { data, error } = useGet(`/series/` + id)

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const serie = data.data.results[0]
    
    return (
        <div className="flex flex-wrap justify-center">
            <div className='p-10'>
                <Thumbnail thumbnail={serie.thumbnail} width='portrait_uncanny' />
            </div>
            <div className='p-10 pl-0 sm:pl-10'>
                {serie.name}
            </div>
            <div className='my-2 ident-6 text-justify'>

            </div>
            <div>

                <ComicsBySerie serieId={serie.id} pageIndex={pageIndex} />
                <div style={{ display: 'none' }}><ComicsBySerie serieId={serie.id} pageIndex={pageIndex + 1} /></div>
                <NavPagination pageIndex={pageIndex} onclick={onclick} />

            </div>
        </div>
    )
}