import Navbar from './navbar';
import Home from './home';
import {Routes,Route} from 'react-router-dom'
import About from './about';
import AddPosts from './AddPosts';
import Post from './post';
import SinglePost from './singleposts';
const HomePortal = () => {
    return ( 
    <div className="HomePortal">
        <Navbar/>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/add-posts' element={<AddPosts/>}/>
                <Route path='/posts' element={<Post/>}/>
                <Route path='/posts/:id' element={<SinglePost/>}/>
            </Routes>
    </div>
     );
}
 
export default HomePortal;