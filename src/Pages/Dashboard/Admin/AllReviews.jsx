import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllReviews = () => {
  const axiosPublic = useAxiosPublic();

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
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-4">
        All Reviews
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Reviewer</th>
              <th className="px-6 py-3">Feedback</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reviews.map((review, index) => (
              <tr key={review._id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4">{index + 1}</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border border-orange-300 object-cover"
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
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete Review"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
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
