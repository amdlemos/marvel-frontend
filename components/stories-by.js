import Link from 'next/link'
import { useGet } from '../requests'
import Thumbnail from './thumbnail'

export default function StoriesBy({path, id, pageIndex }) {
    console.log(id)
    const offset = pageIndex >= 0 ? pageIndex * 3 : 0
    const limit = 3
    const { data, error } = useGet(`${path}/${id}/stories`, { offset, limit })
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log('stories_by', data)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center'>
                <div className='min-w-min absolute text-left'>
                    Stories
                </div>
                {
                    data.data.results.map((storie) => {
                        return (
                            <Link key={storie.id} href={"/stories/" + storie.id}>
                                <div key={storie.id} className='p-6 max-w-[200px]'>
                                    <div className='truncate'>{storie.originalIssue.name}</div>
                                    {/* <Thumbnail thumbnail={comic.thumbnail} width='standard_large' /> */}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
