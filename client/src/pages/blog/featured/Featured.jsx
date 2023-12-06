import React from "react";
import styles from "./featured.module.css";
import my_batch from '../../../assets/batch.jpg'
import thinkcode from '../../../assets/thincode.jpg'

const Featured = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div className={styles.container}>
      <h1 className={`md:text-[80px] font-semibold text-primary`}>
        Hey, it's Yonela Johannes!
      </h1>
      <p className='text-[14px] mt-4 md:text-[40px]'>Let's Dive into My Stories and Creative Ideas!</p>
      <div className='flex flex-col md:flex-row gap-10 mt-4 md:mt-10'>
        <div className='md:w-[670px]'>
          <img src={my_batch} alt="" className='object-cover object-center w-full md:w-[670px] h-[300px] md:h-[550px] rounded-lg' />
          <p className='mt-4'>Join me as I share the profound stories of those who've left an indelible mark on my life, alongside the experiences and lessons gained from my educational and professional journey. Together, we'll code the future while enriching our minds with the wisdom of great thinkers.
          This blog is a haven for the curious and the inspired, a place where coding is not just a skill but a tool for shaping a brighter tomorrow. Stay curious, stay inspired, and always keep coding. 🌟
          </p>
        </div>
        <div className='flex-1 flex flex-col gap-8 md:w-[670px]'>
          <p className=''>Welcome to a world of inspiration and achievement. This blog is your gateway to the stories of remarkable individuals, the pursuit of wisdom, and the art of crafting a successful life journey. As a web developer and aspiring entrepreneur, I'm on a mission to illuminate the path to success, one line of code at a time.
          </p>
          <div className=''>
          <img src={thinkcode} alt="" className='object-cover object-left w-full md:w-[670px] h-[300px] md:h-[550px] rounded-lg' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
