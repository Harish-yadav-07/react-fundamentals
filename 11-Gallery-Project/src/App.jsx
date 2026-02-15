import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data)
  }

  useEffect(function () {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen text-white" >

      <div className='flex h-full flex-wrap gap-5 justify-evenly mx-4 my-6'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-5 pb-5'>
        <button
          style={{ opacity: index === 1 ? 0.3 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className='p-4 bg-amber-400 text-black rounded border-none text-2xl font-bold cursor-pointer active:scale-97'>
          Prev
        </button>
        <h4 className='text-2xl font-bold'>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className='p-4 bg-amber-400 text-black rounded border-none text-2xl font-bold cursor-pointer active:scale-97'>
          Next
        </button>
      </div>
    </div>

  )
}
export default App;