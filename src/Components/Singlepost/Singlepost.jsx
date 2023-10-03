
import './singlepost.css'
import { Link, useNavigate } from 'react-router-dom';
const Singlepost = ({post}) => {
    const {userId,title,id}=post;
    const navigate=useNavigate();
    const handlenavbutton=()=>{
    navigate(`/post/${id}`)
    }
    return (
        <div className='singlepost'>
            <h3>all single post heer</h3>
            <p>post iid={userId}</p>
            <h3>post iid={title}</h3>
            <Link to={`/post/${id}`}>Show deatais</Link>
          <Link to={`/post/${id}`}><button>Show post deltails</button></Link>
           <button onClick={handlenavbutton}> another button</button>
        </div>
    );
};

export default Singlepost;