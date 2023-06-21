import { useEffect, useState } from "react";
import Header from "./compontents/Header";
import Card from "./compontents/Card";

function App() {
  const [card, setcard] = useState([]);
  const addcard = () => {
    var tempcard = card;
    for (var i = 0; i < 12; i++) {
      console.log("i : ",i,"card.length : " ,card.length)
      var r = Math.floor(Math.random() * 255 + 1);
      var b = Math.floor(Math.random() * 255 + 1);
      var g = Math.floor(Math.random() * 255 + 1);
      var color=`rgb(${r},${g},${b})`;
      tempcard.push(color);
    }
    console.log("temparr : ", tempcard);
    setcard([...tempcard]);
  };


  
  const handlescroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      addcard();
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", handlescroll);
      addcard();
      console.log(card);
  
  }, []);
  
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          {card.map((obj,index) => (
            <Card obj={obj} id={index}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
