
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name,id,email,phone,website,address}=friend;
    return (
        <div className='friend'>
            <h3>{website}</h3>
            <h2>{name}</h2>
            <h4>Email: {email}</h4>
            <h>phone: {phone}</h>
           
            <h4>{address.city}</h4>
          <p> 
<Link to={`/friend/${id}`}> show me   </Link>
          </p>
            
        </div>
    );
};

export default Friend;