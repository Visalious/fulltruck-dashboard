import { FC } from 'react'
import './App.css'
import './index.css'
import Dashboard from './components/Dashhboard/Dashboard'
import Nabar from './components/Navbar/Nabar'
const App: FC = () => {
  return (
    <>
      <Nabar />
      <div className="pt-[4rem]">
        <Dashboard />
      </div>
    </>
  )
}

export default App
