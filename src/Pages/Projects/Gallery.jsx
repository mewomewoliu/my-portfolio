import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import  {images}  from "./images";


console.log(images);
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

const Thumbnail = ({ src, id }) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      {/* <Link to={`/image/${id}`}>
        <motion.img
          src={src}
          alt={id}
          variants={imageVariants}
          transition={transition}
        />
      </Link> */}
      <motion.img
          src={src}
          alt={id}
          variants={imageVariants}
          transition={transition}
        />
    </motion.div>
  </motion.div>
);

const Gallery = () => (


  
  <div className='project'>
    
    <h1 className='text'>Project</h1>
    <div className="gallery">
      <motion.div
        className="thumbnails"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {images.map(image => (
          <Thumbnail src={image.src} id={image.name}/>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Gallery;
