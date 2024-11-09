import { FaStar } from "react-icons/fa";
import { GiArrowWings } from "react-icons/gi";

function Universe() {
  return (
    <div className="relative  h-full  overflow-hidden">
      {/* Star Field */}
      <div className="absolute inset-0 flex items-center ">
        {[...Array(1000)].map((_, i) => (
          <FaStar
            style={{
              width: `${Math.random() * 9 + 1}px`,
              height: `${Math.random() * 9 + 1}px`,
              position: "absolute",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 15}s`,
            }}
            key={i}
            className={`text-yellow-100 rounded-full opacity-75 animate-twinkle absolute `}
          />
        ))}
      </div>

      {/* Glowing Circles */}
      <div className="absolute bottom-0 inset-0 flex justify-center items-center">
        {[...Array(4)].map((_, i) => (
          <GiArrowWings
            key={i}
            className="text-white  rounded-full opacity-75 animate-move-diagonal"
            style={{
              width: "10px",
              height: "10px",
              position: "absolute",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${i * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Universe;
