import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AllMembers = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const { data: members = [], refetch } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosPublic.get("/team");
      return res.data;
    },
  });

  const closeModal = () => setIsOpen(false);
  const openModal = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This member will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/team/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Team member removed.", "success");
          }
        });
      }
    });
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", selectedMember.name);
      formData.append("position", selectedMember.position);
      formData.append("facebook", selectedMember.facebook);
      formData.append("github", selectedMember.github);
      formData.append("linkedin", selectedMember.linkedin);

      if (selectedMember.newImageFile) {
        formData.append("image", selectedMember.newImageFile); // new uploaded image
      } else {
        formData.append("image", selectedMember.image); // keep old image path
      }

      const res = await axiosPublic.put(
        `/team/${selectedMember._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.modifiedCount > 0) {
        refetch();
        closeModal();
        Swal.fire("Success", "Member updated successfully", "success");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update member", "error");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-4">
        All Team Members
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {members.map((member, index) => (
              <tr
                key={member._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={`https://bangladeshi-it-server.vercel.app${member.image}`}
                    alt={member.name}
                    className="w-10 h-10 rounded-full border"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {member.name}
                </td>
                <td className="px-6 py-4">{member.position}</td>

                <td className="px-6 py-4 flex gap-4">
                  <button onClick={() => openModal(member)} title="Edit">
                    <FaEdit className="text-3xl text-blue-500 hover:text-blue-700 " />
                  </button>
                  <button
                    onClick={() => handleDelete(member._id)}
                    title="Delete"
                  >
                    <FaTrashAlt className="text-3xl text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-100 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-bold mb-4 text-center">
                    Edit Team Member
                  </Dialog.Title>

                  <div className="space-y-3">
                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded"
                      value={selectedMember?.name || ""}
                      onChange={(e) =>
                        setSelectedMember({
                          ...selectedMember,
                          name: e.target.value,
                        })
                      }
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded"
                      value={selectedMember?.position || ""}
                      onChange={(e) =>
                        setSelectedMember({
                          ...selectedMember,
                          position: e.target.value,
                        })
                      }
                      placeholder="Position"
                    />
                    <div>
                      <label className="block mb-1 font-medium">
                        Upload New Image
                      </label>

                      <div className="flex items-center gap-4">
                        <label
                          htmlFor="imageUpload"
                          className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                        >
                          Choose File
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedMember?.newImageFile?.name ||
                            "No file chosen"}
                        </span>
                      </div>

                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          setSelectedMember({
                            ...selectedMember,
                            newImageFile: e.target.files[0],
                          })
                        }
                      />
                    </div>

                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded"
                      value={selectedMember?.facebook || ""}
                      onChange={(e) =>
                        setSelectedMember({
                          ...selectedMember,
                          facebook: e.target.value,
                        })
                      }
                      placeholder="Facebook URL"
                    />
                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded"
                      value={selectedMember?.github || ""}
                      onChange={(e) =>
                        setSelectedMember({
                          ...selectedMember,
                          github: e.target.value,
                        })
                      }
                      placeholder="GitHub URL"
                    />
                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded"
                      value={selectedMember?.linkedin || ""}
                      onChange={(e) =>
                        setSelectedMember({
                          ...selectedMember,
                          linkedin: e.target.value,
                        })
                      }
                      placeholder="LinkedIn URL"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                    >
                      Update Member
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AllMembers;
