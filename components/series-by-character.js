import { useGet } from '../requests'
import Thumbnail from './thumbnail'

export default function SeriesByChracter({ characterId, pageIndex }) {
    console.log(characterId)
    const offset = pageIndex >= 0 ? pageIndex * 3 : 0
    const limit = 3
    const { data, error } = useGet(`/characters/${characterId}/series`, { offset, limit })
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
                            <div key={serie.id} className='p-6 max-w-[200px]'>
                                <div className='truncate'>{serie.title}</div>
                                <Thumbnail thumbnail={serie.thumbnail} width='standard_large' />                                
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}
