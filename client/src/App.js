import React from 'react'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
