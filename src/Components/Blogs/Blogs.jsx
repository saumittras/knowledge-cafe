import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((blogs_data) => setBlogs(blogs_data));
  });
  return <div>{}</div>;
};

export default Blogs;
