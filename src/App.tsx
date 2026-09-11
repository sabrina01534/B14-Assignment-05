import { Suspense } from 'react';
import Banner from './Components/Banner'
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar'
import type { Icard } from './Type/CardType';

const cardFetch=async ():Promise<Icard[]>=>{
  const res=await fetch("/data.json");
  const data=await res.json();
  return data;
}

function App() {
const cardPromise=cardFetch()
  return (
    <>
   <Navbar/>
   <Banner/>
   <Suspense fallback="loading.......!">
    <Card cardPromise={cardPromise}/>
   </Suspense>

    </>
  )
}

export default App
