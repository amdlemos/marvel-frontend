import Link from 'next/link'
import { useGet } from '../requests'
import Thumbnail from './thumbnail'

export default function CharacteresBy({ path, id, pageIndex }) {
    
    const offset = pageIndex >= 0 ? pageIndex * 3 : 0
    const limit = 3
    const { data, error } = useGet(`${path}/${id}/characters`, { offset, limit })
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log('character_by',data)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center'>
                <div className='min-w-min absolute text-left'>
                    Characters
                </div>
                {
                    data.data.results.map((character) => {
                        return (
                            <Link key={character.id} href={"/characters/" + character.id}>
                                <div key={character.id} className='p-6 max-w-[200px]'>
                                    <div className='truncate'>{character.title}</div>
                                    <Thumbnail thumbnail={character.thumbnail} width='standard_large' />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
