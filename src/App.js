import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// function App() {
//   // const nayoks = [{ name: 'Ranbir Kapor', debt: '1988' }, { name: 'Mashesh Babu', debt: '2000' }, { name: 'Allu Arjun', debt: '1995' }, { name: 'SRK', debt: '1999' }, { name: 'Salman Khan', debt: '1992' }]


//   const [nayoks, setNayoks] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setNayoks(data))
//   }, [])
//   return (
//     <div className="App">
//       <MovieCounter></MovieCounter>

//       {
//         nayoks.map(nyk => <Nayok name={nyk.name} key={nyk.id} uname={nyk.username} debout={nyk.email}></Nayok>)

//       }


//       <header className="App-header">

//         <p>Starting with React</p>


//       </header>
//     </div>
//   );
// }

// function MovieCounter(props) {
//   const [count, setCount] = useState(0);
//   const handleClick = () => setCount(count + 1);
//   return (
//     <div>
//       <button onClick={handleClick}>Add Movie</button>
//       <h2>Number Of Movies:{count}</h2>
//       <MovieDisplay movies={count}></MovieDisplay>
//       <MovieDisplay movies={count + 8}></MovieDisplay>
//       <MovieDisplay movies={count + 10}></MovieDisplay>
//       <MovieDisplay movies={count + 12}></MovieDisplay>
//     </div>
//   )

// }



// function Nayok(props) {
//   const natokStyle = {
//     border: '3px solid blue',
//     margin: '5px'
//   }
//   return (
//     <div style={natokStyle}>
//       <h2>Meet The Super Star-{props.name}</h2>
//       <h3>User Name :{props.uname}</h3>
//       <h4>Email:{props.debout}</h4>



//     </div>
//   )

// }
// function MovieDisplay(props) {
//   return <h2>Movie Number:{props.movies}</h2>
// }



// export default App;


function App() {


  return (
    <div className="App">

    </div>


  )
}

export default App;