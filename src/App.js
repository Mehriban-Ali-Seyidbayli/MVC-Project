import ListPostsController from './pages/ListPosts/ListPostsController';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/style.css"
import AddPostsController from './pages/AddPosts/AddPostsController';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPostsController />} />
        <Route path='/add-post' element={<AddPostsController />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
