import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const AllReviewVideos = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // Fetch all review videos
  const { data: reviewVideos = [], refetch } = useQuery({
    queryKey: ["reviewVideos"],
    queryFn: async () => {
      const res = await axiosPublic.get("/review-videos");
      return res.data;
    },
  });

  // Handle delete
  const handleDelete = (video) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This video will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/review-videos/${video._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "The video has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="pb-4 mb-8 text-4xl font-bold text-center border-b-2 border-gray-200">
        All Review Videos
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
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Video</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reviewVideos.map((video, index) => (
              <tr key={video._id} className="transition duration-200 hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="max-w-xs px-6 py-4 font-medium text-gray-800">
                  {video.title}
                </td>
                <td className="px-6 py-4">
                  <iframe
                    width="160"
                    height="90"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border border-orange-300 rounded"
                  ></iframe>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(video)}
                    className="text-red-600 transition hover:text-red-800"
                    title="Delete Video"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
            {reviewVideos.length === 0 && (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-500">
                  No review videos found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviewVideos;
