
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './component/sunglass/watch/watch'
import Header from './component2/header'
import Bottles from '../public/bottles/Bottles'

 


function App() {
  // const [watches, setWatches] = useState([])

  // useEffect(() =>{
  //   fetch('watches.json')
  //   .then(res=> res.json())
  //   .then(data =>setWatches(data));
  // }, [])

    // const watchs = [
    //     {id: 1, name: 'Apple watch', price: 200},
    //     {id: 2, name: 'casio watch', price: 200},
    //     {id: 3, name: 'samsu watch', price: 200},
    // ]

//     const watchs = [
//         {
//           "id": 1,
//           "name": "Apple Watch Series 6",
//           "price": 399.99
//         },
//         {
//           "id": 2,
//           "name": "Samsung Galaxy Watch 4",
//           "price": 299.99
//         },
//         {
//           "id": 3,
//           "name": "Fitbit Sense",
//           "price": 299.95
//         },
//         {
//           "id": 4,
//           "name": "Garmin Forerunner 945",
//           "price": 599.99
//         },
//         {
//           "id": 5,
//           "name": "Huawei Watch GT 2 Pro",
//           "price": 249.99
//         }
//       ]
 
 return(

<>
<Header></Header>
<Bottles></Bottles>
{/* <h3>This is module number 41</h3> */}


{
    // watches.map(gori => <Watch key={gori.id} walWatch ={gori}></Watch>)
}


</>

 )
}

export default App
