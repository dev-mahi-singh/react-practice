import { useEffect, useState } from 'react'
import Card from './components/Card'
import RefreshBtn from './components/RefreshBtn'

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const result = await response.json();
    setData(result.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-teal-400 to-yellow-200 flex flex-col items-center justify-center gap-7'>
      <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-center gap-6">
      {data.map(function (elem, idx) {
        return <Card key={idx} first={elem.name.first} last={elem.name.last} email={elem.email} pic={elem.picture.large} />
      })}
      </div>
      <RefreshBtn onClick={getData} />

    </div>
  )
}

export default App