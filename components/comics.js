import Link from 'next/link'
import { useGet } from "../requests"

export default function Comics({ pageIndex, titleStartsWith, orderBy, noVariants }) {
    const offset = pageIndex >= 0 ? pageIndex * 20 : 0    
    const { data, error } = useGet(`/comics`, { offset, titleStartsWith, orderBy, noVariants })

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    return (
        <div className="container">
            <div className="container mx-auto px-4 py-2">
                <h1 className="text-3xl">
                    Comics
                </h1>
            </div>
            <div className="container flex flex-wrap justify-center">
                {
                    data ? data.data.results.map((comic) => {
                        return (
                            <div key={comic.id} className="card">
                                <Link href={"/comics/" + comic.id}>
                                    <div>
                                        <div className="text-sm text-ellipsis max-w-max-0 text-blue-600 font-semibold">{comic.title} </div>
                                        <img className="h-48 rounded border-4 border-solid border-black" src={comic.thumbnail.path + "/portrait_medium." + comic.thumbnail.extension} alt='avatar'></img>
                                    </div>
                                </Link>
                            </div>
                        )
                    }) : ''
                }
            </div>
        </div >
    )
}

