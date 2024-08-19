import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  async function getLove(){
      const response = await fetch('https://fakerapi.it/api/v1/persons?_gender=female');
      const finalData = await response.json();
      console.log(finalData);
      document.getElementById('here').innerText = finalData.data[0].firstname + " Loves You";
      await getImage();
  }

    async function getImage(){
        // const res = await fetch('');
        // const Data = await res.json();
        // console.log(Data);
        document.getElementById('ai').src = 'https://random.imagecdn.app/500/150';
    }

  return (
    <>
      <h1 className={'animate-ping py-10 text-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl'}>Welcome to LoveByte</h1>
        <button onClick={getLove} className={'bg-pink-600 rounded-xl text-3xl px-3 my-5 animate-pulse'}>Get Love</button>
        <br/><br/><br/><br/>
        <img src={'https://random.imagecdn.app/500/150'} id={'ai'} className={'my-3 mx-5'}/>
        <h2 id={'here'} className={'text-6xl text-center text-amber-950 font-bold py-12 border-2 animate-bounce rounded-xl bg-gradient-to-r from-purple-500 to-pink-500'}>Click on Get Love to Get Love</h2>
    </>
  )
}

export default App;
