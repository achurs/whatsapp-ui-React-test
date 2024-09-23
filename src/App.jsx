import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {
  return (
    <>
      <div id="main" className="d-flex flex-column vh-100">
        <Header />
        <Body />
        <ChatWindow />
        <Keyboard />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  })
  let time_hour = date.getHours();
  let time_min = date.getMinutes();
  return (
    <>
      <div id="header" className="d-flex justify-content-between bg-dark sticky-top">
        <p className="text-light m-3 h4" id="time">
          {time_hour}:{time_min}
        </p>
        <p className="text-light m-3" id="status">
          <span className="mx-2"></span>
          <span className="fa-solid fa-signal mx-2"></span>
          <span className="fa-solid fa-wifi mx-2"></span>
          <span className="fa-solid fa-battery-full mx-1"></span>
          <span className="">100%</span>
        </p>
      </div>
    </>
  );
}
function Body() {
  return (
    <>
      <div
        id="details"
        className="d-flex justify-content-between bg-dark sticky-top text-light"
      >
        <p className="m-2">
          <img
            src="https://pbs.twimg.com/media/Fb20sz7aAAMG8AB.jpg"
            alt="devasuram mohanlal"
            id="profile"
            className="rounded-circle"
          />
          <span className="h4 mx-2">Mangalasheeri</span>
        </p>
        <p className="d-flex m-2 p-2 h5">
          <span className="fa-solid fa-video m-2"></span>
          <span className="fa-solid fa-phone m-2"></span>
          <span className="fa-solid fa-ellipsis-vertical m-2 h5"></span>
        </p>
      </div>
      <div id="messages" className="d-flex flex-column flex-grow-1">
        <br />
        <div className="bubble left">mundakkal shekara ninte samayam thirar ayii nee cheviyil nulikko</div>
        <br></br>
        <div className="bubble right">illa neela nine kollathe ente samayam theilla</div>
      </div>
    </>
  );
}

function ChatWindow() {
  const [inputText, setInputText] = useState('');
  const handleChange = (event) => {
    if(event.key == 'Backspace'){
      setInputText((prevInputText) => prevInputText.slice(0, -1));
    }
    else if(event.key.length === 1){
      event.stopPropagation();
      setInputText((prevInputText) => prevInputText + event.key);
    }
  };
  useEffect(() => {
    document.addEventListener('keyup', handleChange);
    return () => {
      document.removeEventListener('keyup', handleChange);
    };
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between sticky-bottom">
        <div
          id="chat"
          className="d-flex h1 justify-content-between bg-dark text-light flex-grow-1 rounded-pill"
        >
          <div>
            <span className="fa-regular fa-face-smile m-2"></span>
            {inputText}
          </div>
          <div>
            <span className="fa-solid fa-paperclip m-2"></span>
            <span className="fa-solid fa-indian-rupee-sign m-2"></span>
            <span className="fa-solid fa-camera m-2"></span>
          </div>
        </div>
        <div id="mic">
          <span className="microphone h1 m-2 fa-solid fa-microphone"></span>
        </div>
      </div>
    </>
  );
}
function Keyboard() {
  return (
    <>
      <div className="d-flex sticky-bottom bg-dark text-light flex-column">
        <div id="emoji" className="d-flex justify-content-around">
          <span>😂</span>
          <span>❣️</span>
          <span>😍</span>
          <span>😘</span>
          <span>🤣</span>
          <span>😎</span>
          <span>💀</span>
          <span>❤️</span>
          <span>🥲</span>
          <span>⭐</span>
        </div>
      </div>
    </>
  );
}
function Footer() {
  return (
    <>
      <div
        id="footer"
        className="h7 d-flex justify-content-between bg-dark text-light p-4 sticky-bottom"
      >
        <span className="fa-solid fa-arrow-left mx-2"></span>
        <span className="fa-solid fa-house"></span>
        <span className="fa-solid fa-bars mx-3"></span>
      </div>
    </>
  );
}
export default App;
