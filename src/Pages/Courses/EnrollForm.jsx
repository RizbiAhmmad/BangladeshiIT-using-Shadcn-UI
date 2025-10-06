import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading"; // ✅ Adjust path if needed

const EnrollForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    whatsapp: "",
    address: "",
    designation: "",
  });

  useEffect(() => {
    axios
      .get(`http://72.60.199.112:5000/free-courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading course:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enrollmentData = {
      ...formData,
      courseId: course?._id,
      courseName: course?.name,
      courseImage: course?.image,
      enrolledAt: new Date(),
    };

    try {
      const res = await axios.post("http://72.60.199.112:5000/enrollments", enrollmentData);
      if (res.data.insertedId) {
        Swal.fire("✅ Success", "Enrollment successful!", "success");
      } else {
        Swal.fire("Oops", "Enrollment failed.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Server error. Try again.", "error");
    }
  };

  if (loading) return <Loading />;

  return (
    <section className="pt-32 pb-20 bg-white dark:bg-black">
      <div className="max-w-3xl px-6 py-10 mx-auto transition bg-gray-100 border border-green-500 rounded-md shadow-lg dark:bg-black hover:shadow-2xl">
        <div className="mb-6">
          <h2 className="mb-1 text-3xl font-bold text-green-700">Enroll in {course.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{course.description.slice(0, 100)}...</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 text-sm border border-green-400 rounded-md focus:outline-green-500"
            required
          />
          <input
            name="email"
            value={formData.email}
            readOnly
            className="w-full p-3 text-sm bg-gray-100 border border-green-400 rounded-md cursor-not-allowed"
          />
          <input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number"
            className="w-full p-3 text-sm border border-green-400 rounded-md"
            type="number"
          />
          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Your Designation"
            className="w-full p-3 text-sm border border-green-400 rounded-md"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 text-sm border border-green-400 rounded-md sm:col-span-2"
          />

          <button onClick={() => navigate(`/dashboard/myEnrollments`)}
            type="submit"
            className="w-full px-6 py-3 mt-2 text-white transition bg-green-600 rounded-md hover:bg-orange-600 sm:col-span-2"
          >
            Confirm Enrollment
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnrollForm;
