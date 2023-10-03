
import {  useLoaderData } from 'react-router-dom';
import './Friendetails.css'
const Friendetaills = () => {
    const friend=useLoaderData()
    console.log(friend)
    return (
        <div className='detailsfnd'>
            <h1> person all details</h1>
            <h3>Name: {friend.name}</h3>
            <p>userName: {friend.username}</p>
            <p>Adrees: { friend.address.street}</p>
            <p>company: {friend.company.catchPhrase}</p>
            
        </div>
    );
};

export default Friendetaills;