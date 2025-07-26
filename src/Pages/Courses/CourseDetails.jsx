import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/free-courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error("Error fetching course details:", err));
  }, [id]);

  if (!course) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded shadow">
      <img
        src={course.image}
        alt={course.name}
        className="object-cover w-full h-64 rounded"
      />
      <h2 className="mt-4 text-3xl font-bold text-green-600">{course.name}</h2>
      <p className="mt-2 text-gray-700">{course.description}</p>
      <p className="mt-2 text-lg font-semibold text-green-800">৳ {course.price}</p>

      <button
        onClick={() => navigate(`/enroll/${course._id}`)}
        className="px-6 py-2 mt-6 text-white transition bg-green-500 rounded hover:bg-orange-600"
      >
        Order Now
      </button>
    </div>
  );
};

export default CourseDetails;
