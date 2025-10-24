import React, { useState } from "react";
import PlusCard from "./PlusCard";

const App = () => {
  const [pluses, setPluses] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // handle image file input directly
  const handleAddButton = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPluses((prev) => [
        ...prev,
        { id: prev.length + 1, content: reader.result },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleCardClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="flex flex-wrap gap-4 p-10">
      {/* default static card */}
      <PlusCard id={0} content={"/file.svg"} />

      {/* dynamic uploaded cards */}
      {pluses.map((plus) => (
        <PlusCard
          key={plus.id}
          id={plus.id}
          content={plus.content}
          onClick={() => handleCardClick(plus.content)}
        />
      ))}

      {/* visible file input as "+" */}
      <label className="cursor-pointer mt-11 ml-5">
        <img
          src="/plus.svg"
          alt="Add"
          className="hover:scale-110 transition-transform"
          style={{ height: "50px", width: "50px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAddButton}
          style={{ display: "none" }}
        />
      </label>

      {/* image popup modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-2xl shadow-lg max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg max-h-[80vh] max-w-[80vw] object-contain"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
