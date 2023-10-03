
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../Singlepost/Singlepost';
import './Postcss.css'
const Post = () => {
    const posts=useLoaderData()
    console.log(posts)
    return (
        <div >
            <h3>all post here: {posts.length}</h3>
   <div className='postcss'>
   {
        posts.map(post=><Singlepost
        key={post.id}
        post={post}
        
        ></Singlepost>)
       }
   </div>
        </div>
    );
};

export default Post;