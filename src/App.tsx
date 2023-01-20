import { AiOutlineSearch } from 'react-icons/ai';
import { IoSearchCircle } from 'react-icons/io5'
import HouseItem from './components/HouseItem';

function App() {

  const houseList = [];

  for (let i = 0; i < 20; i++) {
    houseList.push(<HouseItem />
    );
  }


  return (
    <div className=" flex flex-col bg-black h-min">

      {/* Navbar start */}
      <div className="flex justify-around items-center p-5 text-white w-full">
        <h1 className="text-red-500 text-xl font-bold">Red House</h1>
        <div className="flex justify-around place-items-center border-solid border border-red-600 rounded-full p-1 pl-6 pr-2 ">
          <p>Anywhere</p>
          <div className="border border-solid border-l-white min-h-full h-7 mx-4"></div>
          <p>Anyweek</p>
          <div className="border border-solid border-l-white min-h-full h-7 mx-4"></div>
          <p>Add guest</p>
          <IoSearchCircle className="ml-1" size="40" />
        </div>
        <h1 className='text-xl'>Account</h1>
      </div>
      {/* Navbar Ends */}

      {/* House list */}
      <div className='flex flex-wrap content-evenly justify-center w-full'>
        {
          houseList
        }
      </div>
      {/* House List */}

    </div>
  )
}



export default App
