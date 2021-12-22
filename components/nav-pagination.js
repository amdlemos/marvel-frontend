import React from 'react'

export default function NavPagination( { pageIndex, onclick } ) {    
    return (
        <div className='container flex justify-center'>
        <nav className=''>
          <ul className="flex">
            <li className=''><button onClick={() => onclick(-1)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
            <li className=''><button onClick={() => onclick(1)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>
          </ul>
        </nav>
      </div>
    )
}
