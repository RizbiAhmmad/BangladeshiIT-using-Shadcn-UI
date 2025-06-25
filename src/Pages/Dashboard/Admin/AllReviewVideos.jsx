import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllReviewVideos = () => {
  const axiosPublic = useAxiosPublic();

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
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-4">
        All Review Videos
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Video</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reviewVideos.map((video, index) => (
              <tr key={video._id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 text-gray-800 font-medium max-w-xs">
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
                    className="rounded border border-orange-300"
                  ></iframe>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(video)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete Video"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
            {reviewVideos.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
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
