import { useState } from 'react'
import Characters from '../../components/characters'
import NavPagination from '../../components/nav-pagination'

export default function IndexPage() {
  const searchCharacters = event => {
    event.preventDefault()
    setNameStartsWith(event.target.search.value)
  }
  const [pageIndex, setPageIndex] = useState(0)
  const [nameStartsWith, setNameStartsWith] = useState("")
  const onclick = (action) => setPageIndex(pageIndex + action)

  return (
    <div>
      <form onSubmit={searchCharacters}>
        <div className="relative text-gray-700">
          <input id="search" className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border focus:shadow-outline" type="text" placeholder="Search" />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700" type="submit">Search</button>
        </div>
      </form>
      <Characters pageIndex={pageIndex} nameStartsWith={nameStartsWith} />
      <div style={{ display: 'none' }}><Characters pageIndex={pageIndex + 1} nameStartsWith={nameStartsWith} /></div>
      <NavPagination pageIndex={pageIndex} onclick={onclick} />
    </div>
  )
}
