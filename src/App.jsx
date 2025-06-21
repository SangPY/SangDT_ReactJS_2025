import './App.css'

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

function App() {

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
