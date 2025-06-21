import './App.css'
import demoPic from "../src/assets/react.svg"

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const Welcome = [
  "Sang",
  "Sam",
  "Sung"
]

function ranDomTitle() {
  return Math.floor(Math.random() * Welcome.length);
}

function Header() {
  const title = Welcome[ ranDomTitle()];
  return (
    <>
     <h1>DO THANH SANG REACT 2025</h1>
     <h1>{title}</h1>
     <p>
      Hôm nay là: <strong>{today}</strong>. thời gian còn lại {" "}
      <strong>{time}</strong>
     </p>
    </>
  )
}

const name = "ahihia";

function DinamicValue () {
  return (
    <>
      <h2> Chao {name}</h2>
      <p>
        Ket qua {1 + 2 * 4}
      </p>
      <img src={demoPic}></img>
    </>
  )
}

function App() {

  return (
    <>
      <Header></Header>
      <DinamicValue></DinamicValue>
    </>
  )
}

export default App
