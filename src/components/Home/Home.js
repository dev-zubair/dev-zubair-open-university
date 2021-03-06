import Services from "../Services/Services";
import useCourses from "../useCourses/useCourses";

const Home = () => {
  const courses = useCourses();
  return (
    <div className="container">
      <h2>Enroll Our Courses</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.slice(0, 6).map((course) => (
          <Services key={course._id} course={course}></Services>
        ))}
      </div>
    </div>
  );
};

export default Home;
