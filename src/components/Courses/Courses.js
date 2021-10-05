import React from "react";
import Services from "../Services/Services";
import useCourses from "../useCourses/useCourses";

const Courses = () => {
  const courses = useCourses();
  return (
    <div className="container">
      <h2>Our All courses</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <Services key={course._id} course={course}></Services>
        ))}
      </div>
    </div>
  );
};

export default Courses;
