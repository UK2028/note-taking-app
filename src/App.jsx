
import { Footer, Header } from './components'
import { AllRoutes } from './routes'

import './App.css'

function App() {

  

  return (
    <>
      <div className='min-h-screen flex flex-col justify-between px-2'>
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </>
  )
}

export default App
