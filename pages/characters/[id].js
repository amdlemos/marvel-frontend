import { Router, useRouter } from 'next/router'
import { useGet } from "../../requests"

export default function Character() {    
    const {id}= useRouter().query
    const { data, error } = useGet(`/characters/`+id)  
 
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>    

    const character = data.data.results[0]
    return (
        <div className="container">
            <div className="container mx-auto px-4 py-2">
                <h1 className="text-3xl font-bo</span>ld underline">
                    Character
                </h1>
            </div>
            <img className="h-48 rounded border-4 border-solid border-black" src={character.thumbnail.path + "/portrait_medium." + character.thumbnail.extension} alt='avatar'></img>
            <h6>Comics</h6>
            <div className="container m-auto">                
                {   
                    character.comics.items.map((c)=> {
                        return (
                            <>
                                {c.name}
                                {c.resourceURI}
                            </>
                        )
                    })
                }
            </div>

            <h6>Events</h6>
            <div className="container m-auto">                
                {   
                    character.events.items.map((c)=> {
                        return (
                            <>
                                {c.name}
                                {c.resourceURI}
                            </>
                        )
                    })
                }
            </div>

            <h6>Series</h6>
            <div className="container m-auto">                
                {   
                    character.series.items.map((c)=> {
                        return (
                            <>
                                {c.name} 
                                {c.resourceURI}
                            </>
                        )
                    })
                }
            </div>

            <h6>Stories</h6>
            <div className="container m-auto">                
                {   
                    character.stories.items.map((c)=> {
                        return (
                            <>
                                {c.name}
                                {c.resourceURI}
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}