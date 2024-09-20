import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='d-flex flex-column'>
    <Header/>
    <Body/>
    <ChatWindow/>
    <Keyboard/>
    <Footer/>
    </div>
    </>
  )
}

function Header() {
  const date = new Date();
  let time_hour = date.getHours();
  let time_min = date.getMinutes();
  return (
    <>
    <div className='d-flex justify-content-between bg-dark top'>
      <p className='text-light m-3 h4' id='time'>{time_hour}:{time_min}</p>
      <p className='text-light m-3' id='status'>
        <span className='mx-2'></span>
        <span className='fa-solid fa-signal mx-2'></span>
        <span className='fa-solid fa-wifi mx-2'></span>
        <span className='fa-solid fa-battery-full mx-1'></span>
        <span className=''>100%</span>
      </p>
    </div>
    </>
  )
}
function Body() {
  return(
    <>
    <div id='details' className='d-flex justify-content-between bg-dark top text-light'>
    <p className='m-2'>
      <img src="https://pbs.twimg.com/media/Fb20sz7aAAMG8AB.jpg" alt="devasuram mohanlal" id='profile' className='rounded-circle'/>
      <span className='h4 mx-2'>Mangalasheeri</span>
    </p>
    <p className='d-flex m-2 p-2 h5'>
      <span className='fa-solid fa-video m-2'></span>
      <span className='fa-solid fa-phone m-2'></span>
      <span className='fa-solid fa-ellipsis-vertical m-2 h5'></span>
    </p>
    </div>
    <div id='messages' className='d-flex flex-column'>
    <div className="bubble left">Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps</div>
    <div className="bubble right">Ok, Thank you</div>
    <div className="bubble left"> ut labore et dolore magna </div>
    <div className="bubble right">👌</div>
    <div className='bubble left'>hello bro</div>
    <div className='bubble right'>poda patti</div>
    </div>
    </>
  )
}
function ChatWindow() {
  return(
    <>
    </>
  )
}
function Keyboard() {
  return(
    <>
    <div className='d-flex bottom bg-dark text-light flex-column'>
    <div id='emoji' className='d-flex flex-column'>fdf</div>
    <div id='keyboard' className='d-flex flex-column'>dfgdf</div>
    </div>
    </>
  )
}
function Footer() {
  return (
    <>
    <div className='h7 d-flex justify-content-between bg-dark fixed-bottom text-light p-4'>
      <span className='fa-solid fa-arrow-left mx-2'></span>
      <span className='fa-solid fa-house'></span>
      <span className='fa-solid fa-bars mx-3'></span>
    </div>
    </>
  )
}
export default App
