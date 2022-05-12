import React, { useEffect } from 'react'
import './Home.css'; 
import { homeObj } from './HomeHTML';


export default function Home() {
    useEffect(()=>{
        (document.querySelector('.homeAllAroundDiv') as HTMLElement).innerHTML=homeObj.innerHomeHTML
    },[])
    return (

            //<><div className="homeAllAroundDiv"> </div><SingInTeacher /></>
            <><div className="homeAllAroundDiv"> </div></>
    )
}
