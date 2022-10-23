import React, { useEffect, useState } from 'react'
import SideNavbar from '../Navbar'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row'
// import PolicyCards from './PolicyCards'
import './Policy.css';
import NDA from './NDA';
import IT from './IT';
import HR from './HR';
import PolicyNav from './PolicyNav';
import axios from 'axios';

function Policy() {
//   useEffect(()=>{
//       var url  = "http://localhost:8017/policies"
//       axios.get(url+`/${localStorage.username}`).then(data => {
//           if(data.data===""){
//               var policies = {
//                   username : localStorage.username,
//                   it : false,
//                   hr : false,
//                   nda : false
//               }
//               axios.post(url, policies).then(data2=>console.log("created policy table row"));
//           }
//       })
//   },[]);
  const [active, setActive] = useState(1);
    return (
    <div id="policy"> 
        <SideNavbar/>
        <PolicyNav setActive = {setActive} active = {active}/>
        {active===1 && <NDA />}
        {active===2 && <IT />}
        {active===3 && <HR />}
        
    </div>
  )
}

export default Policy