import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {Sangdata} from "../data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  
    function handleClick() {
      alert("Nút bấm được click");
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
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton onSelect={handleClick}>JSX</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
            {/* <TabButton batky="Components"></TabButton> */}
          </menu>
          Somee content
        </section>
      </main>
    </>
  );
}

export default App;