import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { img1, img2, img3 } from '../../assets/images'
// import { Typography } from '../typography'

const CardSlider = () => {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const handleCardClick = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardImages = [img1,img2,img3,img1,img2,img3,img1];

    // const cardDescriptions = [
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    //   'This is a description, write whatever you need here, this is just text for a test',
    // ]
  
    const cardVariants = {
      expanded: {
        width: "90%"
      },
      collapsed: {
        width: '10%'
      }
    }

  return (
    <div className='mt-12 flex md:flex-row justify-between items-center gap-2'>
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
            key={index}
            className={`cursor-pointer h-[500px] bg-cover bg-center rounded-[10px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.7,easings:["easeIn", "easeOut"]}}
            onClick={() => handleCardClick(index)}
            style={{backgroundImage: `url(${cardImages[index]})`,}}
            >
              {/* <div className='h-full flex flex-col justify-end p-4'>
                  <div className='rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <Typography color='text-light-100' type='bold36'>Card {index + 1}</Typography>
                    {index === expandedIndex && (
                      <div className='flex justify-center items-center px-5'>
                      <Typography color='text-light-100' type='regular20'>{cardDescriptions[index]}</Typography>
                      </div>
                    )

                    }
                  </div>
              </div> */}
          </motion.div>
        ))}
      </div>
  )
}

export default CardSlider