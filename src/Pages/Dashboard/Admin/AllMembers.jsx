import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllMembers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  const { data: members = [], refetch } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axios.get(
        "http://72.60.199.112:5000/team"
      );
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
        axios
          .delete(`http://72.60.199.112:5000/team/${id}`)
          .then((res) => {
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
    let imageUrl = selectedMember.image; // existing image URL by default

    // Upload new image if selected
    if (selectedMember.newImageFile) {
      const cloudinaryData = new FormData();
      cloudinaryData.append("file", selectedMember.newImageFile);
      cloudinaryData.append("upload_preset", "Team_member"); // your preset

      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddqfq6irk/image/upload",
        cloudinaryData
      );

      imageUrl = cloudinaryRes.data.secure_url;
    }

    // Prepare update payload with image URL and other fields
    const updatePayload = {
      name: selectedMember.name,
      position: selectedMember.position,
      facebook: selectedMember.facebook,
      linkedin: selectedMember.linkedin,
      image: imageUrl,
    };

    // Send PUT request with JSON body
    const res = await axios.put(
      `http://72.60.199.112:5000/team/${selectedMember._id}`,
      updatePayload
    );

    if (res.data.modifiedCount > 0) {
      refetch();
      closeModal();
      Swal.fire("Success", "Member updated successfully", "success");
    } else {
      Swal.fire("No changes", "Nothing was updated", "info");
    }
  } catch (error) {
    console.error("Update Error:", error);
    Swal.fire("Error", "Failed to update member", "error");
  }
};

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="pb-4 mb-8 text-4xl font-bold text-center border-b-2 border-gray-200">
        All Team Members
      </h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/addMember")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
        >
          <FaPlus /> Add member
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-sm text-left table-auto">
          <thead className="tracking-wider text-gray-700 uppercase bg-gray-100">
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
                className="transition duration-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-10 h-10 border rounded-full"
                  />
                </td>

                <td className="px-6 py-4 font-semibold text-gray-800">
                  {member.name}
                </td>
                <td className="px-6 py-4">{member.position}</td>

                <td className="flex gap-4 px-6 py-4">
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
                <td colSpan="5" className="py-6 text-center text-gray-500">
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
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title className="mb-4 text-lg font-bold text-center">
                    Edit Team Member
                  </Dialog.Title>

                  <div className="space-y-3">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded"
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
                      className="w-full px-3 py-2 border rounded"
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
                          className="px-4 py-2 text-white transition bg-green-500 rounded cursor-pointer hover:bg-green-600"
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
                      className="w-full px-3 py-2 border rounded"
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
                      className="w-full px-3 py-2 border rounded"
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
                      className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
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
