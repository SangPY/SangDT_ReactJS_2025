import PropTypes from 'prop-types';
import './App.css'
import logo from "./assets/logo-tuhoc.png";

import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

import {Sangdata} from "../data.js"

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React 2025</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function MainContent(props){
  return (
    <>
      <li>
        <img src={props.image} alt={props.title}/>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </li>
    </>
  )
}

MainContent.propType = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string 
}

function App() {

  return (
    <>
       <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <MainContent  
            image={Sangdata[0].image}
            title={Sangdata[0].title}
            desc={Sangdata[0].desc}/>
             <MainContent
            image={Sangdata[1].image}
            title={Sangdata[1].title}
            desc={Sangdata[1].desc}/>
             <MainContent 
            image={Sangdata[2].image}
            title={Sangdata[2].title}
            desc={Sangdata[2].desc}/>
             <MainContent 
             image={Sangdata[3].image}
             title={Sangdata[3].title}
             desc={Sangdata[3].desc}/>
        </section>
      </main>
    </>
  )
}

export default App