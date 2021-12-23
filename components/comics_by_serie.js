import Link from 'next/link'
import { useGet } from '../requests'
import Thumbnail from './thumbnail'

export default function ComicsBySerie({ serieId, pageIndex }) {
    console.log(serieId)
    const offset = pageIndex >= 0 ? pageIndex * 3 : 0
    const limit = 3
    const { data, error } = useGet(`/series/${serieId}/comics`, { offset, limit })
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log('comics_by_serie', data)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center'>
                <div className='min-w-min absolute text-left'>
                    Comics
                </div>
                {
                    data.data.results.map((comic) => {
                        return (
                            <Link key={comic.id} href={"/comics/" + comic.id}>
                                <div key={comic.id} className='p-6 max-w-[200px]'>
                                    <div className='truncate'>{comic.title}</div>
                                    <Thumbnail thumbnail={comic.thumbnail} width='standard_large' />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
