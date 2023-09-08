import React, { useEffect, useState, useRef } from 'react';
import '../Styles/switch.css';

export default function Switch() {
    const [checked,setChecked]=useState(false);
    const ref =useRef(null);
    function handleChange(){
        console.log(ref.current.checked)
        setChecked(ref.current.checked);
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode');
            document.body.classList.add('is-dark-mode');
        } else {
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    }

    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setChecked(true);
        }
    },[])
  return (
    <div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input ref={ref} type="checkbox" className="checkbox" checked={checked} id="checkbox" onChange={handleChange}/>
        <label htmlFor="checkbox" className="switch"></label>
    </div>
  )
}
