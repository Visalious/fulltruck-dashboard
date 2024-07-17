import { FC } from 'react'
// import FullTruckLogo from './components/logo/FullTruckLogo'
import Dashboard from './components/Dashhboard/Dashboard'
import Nabar from './components/Navbar/Nabar'

const WelcomePage: FC = () => {
  return (
    <>
      <Nabar />
      <div className="pt-[4rem] w-full flex justify-center items-center">
        <Dashboard />
      </div>
    </>
  )
}

export default WelcomePage
