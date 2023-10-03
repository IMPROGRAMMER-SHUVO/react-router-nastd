
import './friends.css'
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
   const friends=useLoaderData();
//    console.log(friends)
    return (
        <div>
<h4> he is my friend:{friends.length}</h4>
<div className='friends'>

{
    friends.map(friend=><Friend 
    key={friend.id}
    friend={friend}
    ></Friend>)
}
</div>
        </div>
    );
};

export default Friends;