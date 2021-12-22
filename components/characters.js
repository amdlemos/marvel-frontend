import Link from 'next/link'
import { useGet } from "../requests"

export default function Characters({ pageIndex, nameStartsWith }) {
    const offset = pageIndex >= 0 ? pageIndex * 20 : 0
    const { data, error } = useGet(`/characters/`, { offset, nameStartsWith })

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    return (
        <div className="container">
            <div className="container mx-auto px-4 py-2">
                <h1 className="text-3xl">
                    Characters
                </h1>
            </div>
            <div className="container flex flex-wrap justify-center">
                {
                    data.data.results ?
                        data.data.results.map((character) => {
                            return (
                                <div key={character.id} className="card">
                                    <Link href={"/characters/" + character.id}>
                                        <div className="">
                                            <div className="text-sm text-ellipsis max-w-max-0 text-blue-600 font-semibold">{character.name} </div>
                                            <img className="h-48 rounded border-4 border-solid border-black" src={character.thumbnail.path + "/portrait_medium." + character.thumbnail.extension} alt='avatar'></img>                                            
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        : "error"
                }
            </div>
        </div>
    )
}