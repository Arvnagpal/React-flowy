import React from 'react'
import arrow from '../assets/arrow.svg';

export default function({ title, description, onSave }) {
  return (
    <>
       <div id="navigation">
        <div id="leftside">
            <div id="details">
            <div id="back"><img src={arrow}/></div>
            <div id="names">
                <p id="title">Your automation pipeline</p>
                <p id="subtitle">Marketing automation</p>
            </div>
        </div>            
        </div>
        <div id="centerswitch">
            <div id="leftswitch">Diagram view</div>
            <div id="rightswitch">Code editor</div>
        </div>
        <div id="buttonsright">
            <div id="discard">Discard</div>
            <div id="publish">Publish to site</div>
        </div>
    </div>
    </>
  )
}
