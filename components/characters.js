import { useGetCharacters } from "../requests"

export default function Characters({ indexPage, nameStartsWith }) {    
    const { data, error } = useGetCharacters(`/characters/`, { indexPage, nameStartsWith })
    
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log(data)
    return (
        <div className="container">
            <div className="container mx-auto px-4 py-2">
                <h1 className="text-3xl font-bo</span>ld underline">
                    Characters
                </h1>
            </div>
            <div className="container m-auto">
                {
                    data.data.results ?
                        data.data.results.map((character) => {
                            return (
                                <div key={character.id} className="max-w-md px-4 py-4 my-3.5 bg-yellow-50 rounded-xl shadow-md overflow-hidden m-auto md:max-w-2xl">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            {/* <img className="object-cover md:h-full" src={character.thumbnail.path + "/portrait_medium." + character.thumbnail.extension} alt='avatar'></img> */}
                                            <img className="h-48 rounded border-4 border-solid border-black" src={character.thumbnail.path + "/portrait_medium." + character.thumbnail.extension} alt='avatar'></img>
                                        </div>
                                        <div className="p-8">
                                            <div className="tracking-wide text-sm text-blue-600 font-semibold">{character.name} </div>
                                            <a></a>
                                            <p className="mt-2">{character.id}</p>
                                        </div>
                                    </div>


                                </div>
                            )
                        }) 
                        : "error"
                }
            </div>
        </div>
    )
}