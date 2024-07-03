import React, { useRef } from 'react'
import './Book.css'
const Book = () => {
    const flip=useRef()
    // const nextpage=()=>{
    //     console.log(flip.current)
    //     document.getElementById('p1').classList.add('flipped');
    //     document.getElementById('p2').classList.add('flipped');
    //     document.getElementById('p3').classList.add('flipped');
    //     document.getElementById('p4').classList.add('flipped');
    //     document.getElementById('p5').classList.add('flipped');
    // }  
    // const prevpage=()=>{
    //     document.getElementById('p1').classList.remove('flipped')
    //     document.getElementById('p2').classList.remove('flipped')
    //     document.getElementById('p3').classList.remove('flipped')
    //     document.getElementById('p4').classList.remove('flipped')
    //     document.getElementById('p5').classList.remove('flipped')
    // }
  return (
    <div id='main'>
        <div className="book">
            {/* paper1 */}
            <div className="paper" id='p1'>
                <div className="front">
                    <div className="content">
                        <h1>front</h1>
                        <button onClick={()=>document.getElementById('p1').classList.add('flipped')}>next</button>
                    </div>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>back</h1>
                        <button onClick={()=>document.getElementById('p1').classList.remove('flipped')}>prev</button>
                    </div>
                </div>
            </div>
            {/* paper2 */}
            <div className="paper" id='p2'>
                <div className="front">
                    <div className="content">
                        <h1>front2</h1>
                        <input type="text" />
                        <button onClick={()=>document.getElementById('p2').classList.add('flipped')}>nexgut</button>
                    </div>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>back2</h1>
                        <button onClick={()=>document.getElementById('p2').classList.remove('flipped')}>prev</button>
                    </div>
                </div>
            </div>
            {/* paper3 */}
            <div className="paper" id='p3'>
                <div className="front">
                    <div className="content">
                        <h1>front3</h1>
                        <button onClick={()=>document.getElementById('p3').classList.add('flipped')}>next</button>
                    </div>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>back3</h1>
                        <button onClick={()=>document.getElementById('p3').classList.remove('flipped')}>prev</button>
                    </div>
                </div>
            </div>
            {/* paper4 */}
            <div className="paper" id='p4'>
                <div className="front">
                    <div className="content">
                        <h1>front4</h1>
                        <button onClick={()=>document.getElementById('p4').classList.add('flipped')}>next</button>
                    </div>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>back4</h1>
                        <button onClick={()=>document.getElementById('p4').classList.remove('flipped')}>prev</button>
                    </div>
                </div>
            </div>
            {/* paper5 */}
            <div className="paper" id='p5'>
                <div className="front">
                    <div className="content">
                        <h1>front5</h1>
                        <button onClick={()=>document.getElementById('p5').classList.add('flipped')}>next</button>
                    </div>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>back5</h1>
                        <button onClick={()=>document.getElementById('p5').classList.remove('flipped')}>prev</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book