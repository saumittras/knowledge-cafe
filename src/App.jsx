import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
