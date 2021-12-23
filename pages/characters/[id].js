import { Router, useRouter } from 'next/router'
import { useGet } from "../../requests"
import SeriesByChracter from '../../components/series-by-character'

export default function Character() {
    const { id } = useRouter().query
    const { data, error } = useGet(`/characters/` + id)

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const character = data.data.results[0]
    console.log(character)
    return (
        <div className="flex flex-wrap justify-center">
            <div className='p-10'>
                <img className="max-w-sm rounded border-4 border-solid border-black" src={character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension} alt='avatar'></img>
            </div>
            <div className='p-10 pl-0 sm:pl-10'>
                {character.name}
            </div>
            <div className='my-2 ident-6 text-justify'>

            </div>
            <div>
                {/* <h6>Comics</h6>
                <div className="container m-auto">
                    {
                        character.comics.items.map((c) => {
                            return (
                                <>
                                    {c.name}
                                    {c.resourceURI}
                                </>
                            )
                        })
                    }
                </div> */}

                {/* <h6>Events</h6>
                <div className="container m-auto">
                    {
                        character.events.items.map((c) => {
                            return (
                                <>
                                    {c.name}
                                    {c.resourceURI}
                                </>
                            )
                        })
                    }
                </div> */}
                <SeriesByChracter characterId={character.id} />
                    
                
                {/* <h6>Series</h6>
                <div className="container m-auto">
                    {
                        character.series.items.map((c) => {
                            return (
                                <>
                                    {c.name}
                                    {c.resourceURI}
                                </>
                            )
                        })
                    }
                </div> */}

                {/* <h6>Stories</h6>
                <div className="container m-auto">
                    {
                        character.stories.items.map((c) => {
                            return (
                                <>
                                    {c.name}
                                    {c.resourceURI}
                                </>
                            )
                        })
                    }
                </div> */}
            </div>
        </div>
    )
}