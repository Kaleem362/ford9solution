import { useState } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? "#e06339" : "#1c426f", // Change color on hover
    color: isHovered ? "#1c426f" : "#e06339",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "18px",
    border: "none",
    fontWeight: "bolder",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    margin: "50px auto",
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-6">
      <h1 className="text-9xl font-bold text-[#e06339]">404</h1>
      <h2 className="text-3xl font-semibold text-[#1c426f] mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 text-lg mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
