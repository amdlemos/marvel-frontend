import { useState } from 'react'
import Comics from '../../components/comics'
import NavPagination from '../../components/nav-pagination'

export default function IndexPage() {
  const searchComics = event => {
    event.preventDefault()
    setTitleStartsWith(event.target.search.value)
  }
  const [pageIndex, setPageIndex] = useState(0)
  const [titleStartsWith, setTitleStartsWith] = useState("")
  const onclick = (action) => setPageIndex(pageIndex + action)

  return (
    <div>
      <form onSubmit={searchComics}>
        <div className="relative text-gray-700">
          <input id="search" className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Search" />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700" type="submit">Search</button>
        </div>
      </form>
      <Comics pageIndex={pageIndex} titleStartsWith={titleStartsWith} orderBy='-modified' noVariants={false} />
      <div style={{ display: 'none' }}><Comics pageIndex={pageIndex + 1} titleStartsWith={titleStartsWith} orderBy='-modified' noVariants={false} /></div>
      <NavPagination pageIndex={pageIndex} onclick={onclick} />
    </div>
  )
}