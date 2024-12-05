import React, { useState } from "react";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     email: user?.email || "",
//     firstName: "",
//     lastName: "",
//     appliedDate: new Date().toISOString().split("T")[0], // Current date
//     fee: "",
//   });

  // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   // API call to save the form data
    //   console.log("Form submitted:", formData);
    //   alert("Visa application submitted successfully!");
    //   setShowModal(false);
    // } catch (error) {
    //   console.error("Error submitting visa application:", error);
    //   alert("Failed to submit. Try again.");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">Visa Details</h1>
        <p className="text-gray-700 mb-2">
          <strong>Visa Type:</strong> Tourist Visa
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Country:</strong> USA
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Fee:</strong> $150
        </p>
        <button
          className="btn btn-primary w-full"
          onClick={() => setShowModal(true)}
        >
          Apply for Visa
        </button>
      </div>

      {/* DaisyUI Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4">Visa Application Form</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Applied Date
                </label>
                <input
                  type="text"
                  name="appliedDate"
                  
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Fee</label>
                <input
                  type="number"
                  name="fee"
                  
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <button className="btn btn-primary w-full mt-4" type="submit">
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
