import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const AllReviews = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  const handleDeleteReview = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/reviews/${review._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "The review has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="pb-4 mb-8 text-4xl font-bold text-center border-b-2 border-gray-200">
        All Reviews
      </h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/addReviewVideo")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
        >
          <FaPlus /> Add Review Video
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-sm text-left table-auto">
          <thead className="tracking-wider text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Reviewer</th>
              <th className="px-6 py-3">Feedback</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reviews.map((review, index) => (
              <tr key={review._id} className="transition duration-200 hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>

                <td className="flex items-center gap-3 px-6 py-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="object-cover w-10 h-10 border border-orange-300 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-700 max-w-[300px]">
                  {review.feedback}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteReview(review)}
                    className="text-red-600 transition hover:text-red-800"
                    title="Delete Review"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
