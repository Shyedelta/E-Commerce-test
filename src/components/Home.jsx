import React, { Suspense } from 'react'
// import Carrusel from './Carrusel'
import Loading from './Loading'

const Carrusel = React.lazy(() => import('./Carrusel'))

function Home() {

  return (
    <div className='max-w-[75vw] mx-auto h-[75vh] overflow-y-auto'>
      <Suspense  fallback={<Loading />}>
        <Carrusel />
      </Suspense>
    </div>
  )
}

export default Home