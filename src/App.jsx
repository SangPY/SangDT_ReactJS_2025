import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {Sangdata} from "../data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  
    function handleClick(selectButton) {
      alert(`${selectButton} được chọn`);
    }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...Sangdata[0]} />
            <MainContent {...Sangdata[1]} />
            <MainContent {...Sangdata[2]} />
            <MainContent {...Sangdata[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>{handleClick('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleClick('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleClick('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleClick('state')}}>State</TabButton>
            {/* <TabButton batky="Components"></TabButton> */}
          </menu>
          Somee content
        </section>
      </main>
    </>
  );
}

export default App;