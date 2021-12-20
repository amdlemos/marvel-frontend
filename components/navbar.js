import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (

    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" alt="Home" className="text-white">Marvel API
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/characters" aria-current="page" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Characters</Link>

                <Link href="/comics" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Comics                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/characters" className="text-gray-300 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white block  text-base font-medium" aria-current="page">Characters
          </Link>

          <Link href="/comics" href="#" className="text-gray-300 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white block  text-base font-medium">Comics
          </Link>
        </div>
      </div>
    </nav>

  )
}
