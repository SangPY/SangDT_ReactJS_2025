import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Chào bạn!")

  function updateGreeting (){
    // setGreeting("Chào Sang");
    const currentHour = new Date().getHours();
    console.log(currentHour);

    //const currentHour = 23;

    if(currentHour >=5 && currentHour <12)
    {
      setGreeting("Chào Buổi Sáng");
    }
    else if(currentHour >=12 && currentHour <18)
    {
      setGreeting("Chào Buổi Chiều");
    }
    else
    {
      setGreeting("Chào Buổi Tối");
    }
  }

  return (
    <>
      <h1>{greeting}</h1>
      <button onClick={updateGreeting}>Cập nhập lời chào</button>
    </>
  );
}

export default App;