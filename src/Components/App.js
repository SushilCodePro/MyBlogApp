import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import PostDetail from '../PostDetail';
import CreatePost from '../CreatePost';
import '../index.css';
// import { useParams } from 'react-router-dom';

function App() {
  // const{postId} =useParams();
  return (
    <div className="container">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/postdetail/:postId" element={<PostDetail/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
