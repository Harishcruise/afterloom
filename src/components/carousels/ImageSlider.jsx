import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { img1, img2, img3 } from '../../assets/images'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 7
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % 7
      );

      return updatedIndexes;
    });
  };

  useEffect(()=>{
    setTimeout(()=>{
        handleNext();
    },[10000])
  })

  const images = [img1,img2,img3,img1,img2,img3,img1];

  const positions = ["center","left2", "left1", "left", "right", "right1","right2"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left2: { x: "-30%", scale: 0.9, zIndex: 4 },
    left1: { x: "-60%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "60%", scale: 0.7, zIndex: 3 },
    right2: { x: "30%", scale: 0.9, zIndex: 4 },
  };
  return (
    <div className="flex items-center flex-col justify-center h-[700px] mobile:h-[200px]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 w-full absolute justify-between z-50 px-3">
        {/* <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button> */}
        <FiArrowLeftCircle onClick={handleBack} className="hover:scale-110 hover:cursor-pointer transition-transform" size={28} color="#D9D9D9"/>
        {/* <button
          className="text-white  bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button> */}
        <FiArrowRightCircle onClick={handleNext} className="hover:scale-110 hover:cursor-pointer transition-transform" size={28} color="#D9D9D9"/>
      </div>
    </div>
  );
};

export default ImageSlider;