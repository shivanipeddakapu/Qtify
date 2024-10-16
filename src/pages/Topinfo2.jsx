import React from 'react'
import Nav1 from '../components/Nav1'
import { useLocation } from 'react-router-dom'
import Fotter from '../components/Fotter';

export default function Topinfo2() {
    let loc=useLocation()
    console.log(loc);
    let topinner2=loc.state
  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
      <Nav1/>
      <div style={{color:'white',height:"500px",padding:'30px',alignItems:'center',justifyContent:'space-around'}} className='container d-flex h-500'>
        <div >
            <img style={{width:'300px',height:'300px',marginRight:'20px'}}  src={topinner2.x.image} alt="" />
        </div>
        <div>
            <h1>{topinner2.x.title}</h1>
            <p>{topinner2.x.description}</p>
        </div>
      </div>
      <Fotter/>
    </div>
  )
}