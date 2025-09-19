import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllContacts = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch all contact requests
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contactRequests");
      return res.data;
    },
  });

  // Delete a contact
  const handleDeleteContact = (contact) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This contact will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/contactRequests/${contact._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Contact has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="pb-4 mb-8 text-4xl font-bold text-center border-b-2 border-gray-200">
        All Demo Requests
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-sm text-left table-auto">
          <thead className="tracking-wider text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contacts.map((contact, index) => (
              <tr key={contact._id} className="transition duration-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                <td className="px-6 py-4">{contact.name}</td>
                <td className="px-6 py-4">{contact.company || "-"}</td>
                <td className="px-6 py-4">{contact.phone}</td>
                <td className="px-6 py-4">{contact.message || "-"}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteContact(contact)}
                    className="text-red-600 transition duration-200 hover:text-red-800"
                    title="Delete Contact"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContacts;
