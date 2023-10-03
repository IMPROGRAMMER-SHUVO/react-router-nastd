import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Postdetails.css'
const Postdetails = () => {
    const post=useLoaderData()
   const {id,body}=post;
   const navigate=useNavigate();
   const Goback=()=>{
navigate(-1);
   }
    return (
        <div className='postdetals'>
            <h3> all deatais here</h3>
            <p>id:{id}</p>
            <p>Body :{body}</p>
            <button onClick={Goback}>Goback</button>
        </div>
    );
};

export default Postdetails;