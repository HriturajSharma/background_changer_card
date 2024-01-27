import React from 'react';
import { useState } from 'react';

function Card() {
  const [color, setcolor] = useState("yellow") // default color yellow

  return (
    <div className='container flex overflow-hidden'>
      <div className="con flex flex-wrap ">
        <div className="card h-40 w-28 flex justify-center items-center  m-5" style={{ backgroundColor: "red" }} onClick={() => {
          setcolor("red")
        }}>
          <h2 className='text-white font-bold'>Red</h2>

        </div>
        <div className="card h-40 w-28 flex justify-center items-center  m-5" style={{ backgroundColor: "purple" }} onClick={() => {
          setcolor("purple")
        }}>
          <h2 className='text-white font-bold'>Purple</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center" style={{ backgroundColor: "blue" }} onClick={() => {
          setcolor("blue")
        }}>
          <h2 className='text-white font-bold'>Blue</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center " style={{ backgroundColor: "green" }} onClick={() => {
          setcolor("green")
        }}>
          <h2 className='text-white font-bold'>Green</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center" style={{ backgroundColor: "pink" }} onClick={() => {
          setcolor("pink")
        }}>
          <h2 className='text-white font-bold'>Pink</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center " style={{ backgroundColor: "orange" }} onClick={() => {
          setcolor("orange")
        }}>
          <h2 className='text-white font-bold'>Orange</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center " style={{ backgroundColor: "brown" }} onClick={() => {
          setcolor("brown")
        }}>
          <h2 className='text-white font-bold'>Brown</h2>

        </div>
        <div className="card h-40 w-28 m-5 flex justify-center items-center" style={{ backgroundColor: "gold" }} onClick={() => {
          setcolor("gold")
        }}>
          <h2 className='text-white font-bold'>Gold</h2>

        </div>
      </div>

      <div className='h-screen w-1/2 flex items-center justify-center'>
        <div className="preview h-80 w-80 border-2 border-gray-400 " style={{ backgroundColor: color }}>
        </div>
      </div>
    </div>
  )
}

export default Card