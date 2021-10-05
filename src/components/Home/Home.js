import React, { useState, useEffect } from "react";
import Services from "../Services/Services";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.slice(0, 6).map((course) => (
          <Services key={course._id} course={course}></Services>
        ))}
      </div>
    </div>
  );
};

export default Home;
