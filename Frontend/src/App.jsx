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
        const res = await fetch('');
        const Data = await res.json();
        console.log(Data);
        document.getElementById('ai').src = 'https://random.imagecdn.app/500/150';
    }

  return (
    <>
      <h1>Welcome to LoveByte</h1>
        <button onClick={getLove} className={'bg-blue-700'}>Get Love</button>
        <br/><br/><br/><br/>
        <img src={'https://random.imagecdn.app/500/150'} id={'ai'} className={'flex'}/>
        <h2 id={'here'} className={'text-6xl text-center text-amber-950'}></h2>
    </>
  )
}

export default App
