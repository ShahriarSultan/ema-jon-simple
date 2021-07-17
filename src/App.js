import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const products = [
    { name: 'Photoshop', price: 'US$20.99/mo', quote: 'Create beautiful graphics,photos,and art anywhrer.', link: 'See plan and pricing details' }
    , { name: 'Illustator', price: 'US$29.99/mo' },
    { name: 'Adobe Reader', price: 'US$30.99/mo' }
  ]
  const nayoks = ['Razzak', 'Alomgir', 'Nisho', 'Siam', 'Shuvo'];

  const friends = ['Anik', 'Nahid', 'Tusher', 'Sworon', 'Fahim', 'Samiul'];
  return (
    <div className="App">
      <header className="App-header">
        <p>Starting with React</p>
        <Counter></Counter>
        <User></User>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        <ol>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ol>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {
          nayoks.map(nayok => <Person nayok={nayok}></Person>)
        }

        {
          friends.map(fd => <Friends friend={fd}></Friends>)
        }

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, [])
  return (
    <div>
      <h3>Dynamik User:{user.length}</h3>
      {
        user.map(usr => <li>{usr.email}</li>)
      }
    </div>
  )
}

function Friends(frnds) {
  const friensStyle = {
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: "white",
    color: 'black',
    float: "left"
  }
  const fr = frnds.friend;
  return (
    <div style={friensStyle}>
      <h3>{fr}</h3>
    </div>
  )

}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: "lightgray",
    color: 'black',
    float: "left"
  }
  const btn = {
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: "lightgreen",
    color: 'red',
    TextDecoder: 'none'

  }
  const { name, price, quote, link } = props.product;
  return (

    <div style={productStyle}>
      <h3>{name} </h3>
      <h2>{price}</h2>
      <p>{quote}</p>
      <a href="">{link}</a>
      <button style={btn}>Buy now</button>
    </div>
  )
}

function Person(props) {

  const personStyle = {
    color: 'lightgray',
    border: '2px solid cyan',
    borderRadius: '10px',
    margin: '5px',
    padding: '5px'
  }
  return (
    <div style={personStyle}>

      <h4>Heroine Name: {props.nayok}</h4>
    </div>
  )
}

export default App;
