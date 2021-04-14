import { motion } from "framer-motion";
import React from 'react'
import './style.css'



const images = [
    {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile App",
    "job":"UI & UX Designer"
    },
    {
      "src": "https://64.media.tumblr.com/efa4effc0ef8184da92426d2d093986b/ed0f99dc64d6334f-23/s2048x3072/7ee96e14ec003b7f981c9d13ad34181d6e96bcbd.png",
        "name": "MusicMash Web App",
        "job":"UI & UX Designer & Developer"
    },
    {
    "src": "https://64.media.tumblr.com/2bb900efa363ab91f611021f5090af2f/f2f3d351d5073bcf-c1/s2048x3072/eb6cc93b707ec49ed9eceb10ad81bd08e1a9cf1f.png",
    "name": "LivingMemory",
    "job":"UI & UX Designer & Cofounder"
    },
    {
        "src": "https://64.media.tumblr.com/234b9077fd70e2e502575324997ead08/8a4be9efbb8939b6-16/s2048x3072/5688e0274000002854ca7540e53148f06dc3c41a.png",
        "name": ".Expert",
        "job":"Founder & UI & UX Designer & Developer"
    },
    {
        "src": "https://64.media.tumblr.com/4049ff13b38b678c263199bff49693c7/f9211cf5609b4939-dc/s2048x3072/f59cf1af68f822170e19ce7f3e91e40f70aa14fc.png",
        "name": "SOOM",
        "job":"UI & UX Designer & Cofounder"
    },
    {
        "src": "https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png",
        "name": "Redesign HelloTalk",
        "job":"UI & UX Designer"
    }

  
]
  


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



const Projects=()=>{
    return (
        <div className='project'>
            
            <h1 className='text' >Project</h1>
            <div className='grow'></div>
            <div className='grow'></div>
            <div className='grow'></div>
            <div className="gallery">
                <motion.div
                    className="thumbnails"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    {images.map(image => (
                        <motion.div className="thumbnail" variants={thumbnailVariants}>
                            <motion.div
                                className="frame"
                                whileHover="hover"
                                variants={frameVariants}
                                transition={transition}
                            >
                  
                                <motion.img
                                    src={image.src}
                                    alt={image.name}
                                    variants={imageVariants}
                                    transition={transition}
                                />
                                <h2 className="name" data-scroll data-scroll-delay="0.1" data-scroll-speed="9" >{image.name}</h2>
                                <h2 className="job" data-scroll data-scroll-delay="0.1" data-scroll-speed="6" >{image.job}</h2>
                                <div className='grow'></div>
                            </motion.div>
                          
                        </motion.div>
                        
                        
                    ))}
                </motion.div>
            </div>
          
        </div>
    );

}
  
  

export default Projects;
