import React from 'react'

const Stats = () => {
  return (
    <section className="text-black-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shop the Best</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Uncover a treasure trove of user profiles, each showcasing passionate individuals and their favorite purchases. Delve into our diverse downloads section, offering valuable resources and tools to enhance your shopping journey. Explore our hand-picked selection of remarkable places, bringing you closer to unique and exciting destinations. From trendy fashion to cutting-edge gadgets, each card represents a captivating product waiting for you to discover. Embark on a retail adventure like no other, where every card brings you one step closer to finding your perfect match.</p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-green-800 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-950 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-black-900">200k+</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-green-800 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-950  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-black-900">200k+</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-green-800 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-950  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-black-900">20k+</h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-green-800 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-950  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-black-900">80+</h2>
              <p className="leading-relaxed">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats;