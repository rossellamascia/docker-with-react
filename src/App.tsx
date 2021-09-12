/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Navbar from './components/Navbar';


export interface AppProps {

}
const App: React.FC<AppProps> = () => {

  return (
    <>
      <Navbar/>
    </>
  )
};
export default App;