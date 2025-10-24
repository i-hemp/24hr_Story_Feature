import React from "react";

const PlusCard = ({ id, content, onClick }) => {
  return (
    <div className="pt-5 pl-5">
      <div className="flex items-center rounded-3xl w-fit space-x-2">
        <img
          src={content || "/circle-dashed.svg"}
          alt="card"
          onClick={onClick}
          className="cursor-pointer transition-transform hover:scale-105 rounded-full object-cover"
          style={{
            height: "100px",
            width: "100px",
            border: !content ? "2px dashed #999" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default PlusCard;
