import { AiOutlineSearch } from 'react-icons/ai';
import {IoSearchCircle} from 'react-icons/io5'

function App() {

  return (
    <div className="bg-black h-screen">
      {/* Navbar start */}
      <div className="flex justify-around items-center p-5 text-white h-fit">
        <h1 className="text-red-500">Rent House</h1>
        <div className="flex justify-around place-items-center border-solid border border-red-600 rounded-full p-1 pl-6 pr-2 ">
          <h3>Anywhere</h3>
          <div className="border border-solid border-l-white min-h-full h-7 mx-4"></div>
          <h3>Anyweek</h3>
          <div className="border border-solid border-l-white min-h-full h-7 mx-4"></div>
          <h3>Add guest</h3>
          <IoSearchCircle className="ml-1" size="40"/>
        </div>
        <h1>Account</h1>
      </div>
      {/* Navbar Ends */}



    </div>
  )
}

export default App
