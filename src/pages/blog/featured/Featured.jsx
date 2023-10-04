import React from "react";
import styles from "./featured.module.css";
import my_batch from '../../../assets/batch.jpg'

const Featured = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div className={styles.container}>
      <h1 className={`md:text-[80px] font-semibold text-primary`}>
        Hey, it's Yonela Johannes!
      </h1>
      <p className='text-[14px] mt-4 md:text-[40px]'>Let's Dive into My Stories and Creative Ideas!</p>
      <div className='flex flex-col md:flex-row gap-10 mt-4 md:mt-10'>
        <div className=''>
          <img src={my_batch} alt="" className='object-cover object-center w-full md:w-[670px] h-[300px] md:h-[550px] rounded-lg' />
        </div>
        <div className='flex-1 flex flex-col gap-8'>
          <h1 className='md:text-[40px]'>From Dreams to Code: My Journey through Le Wagon's Software Developer Bootcamp</h1>
          <p className='font-thin'>As an aspiring entrepreneur and web developer based in Cape Town, my journey into the world of coding began with a burning desire to build web and SaaS apps that could make a difference. To equip myself with the necessary skills, I embarked on a life-changing adventure at Le Wagon, where I delved deep into the realms of Ruby and Ruby on Rails.
          </p>
          {show && (
            <div className={styles.textContainer}>
              <h3 className="text-[25px]">The Beginning: Why Le Wagon?</h3>
              <p className='font-thin'>
              Before enrolling at Le Wagon, I had already dipped my toes into the coding waters by studying JavaScript, Node.js, PostgreSQL at Codex. However, I felt the need to expand my horizons and explore new technologies. Ruby and Ruby on Rails had been on my radar for a while, and after thorough research, Le Wagon emerged as the ideal place to learn.
              </p>
              <h3 className="text-[25px]">The Le Wagon Experience</h3>
              <h4 className="text-[18px]">Immersive Learning Environment</h4>
              <p className='font-thin'>
              Before enrolling at Le Wagon, I had already dipped my toes into the coding waters by studying JavaScript, Node.js, PostgreSQL at Codex. However, I felt the need to expand my horizons and explore new technologies. Ruby and Ruby on Rails had been on my radar for a while, and after thorough research, Le Wagon emerged as the ideal place to learn.
              </p>
              <h4 className="text-[18px]"> Exceptional Curriculum</h4>
              <p className='font-thin'>The curriculum was designed to cater to both beginners and those with some coding experience. What I particularly loved was how they started with the fundamentals, ensuring a strong foundation, before diving into the intricacies of Ruby and Ruby on Rails. The comprehensive material, coupled with dedicated instructors, made the learning process smooth and enjoyable.
              </p>
              <h4 className="text-[18px]">Collaborative Learning</h4>
              <p className='font-thin'>Le Wagon promotes a culture of collaboration. Working on group projects was a highlight of the bootcamp. It gave me the chance to apply what I had learned and work alongside talented peers. The teamwork, the late-night coding sessions, and the shared triumphs and challenges created a supportive community that I still cherish.
              </p>
              <h4 className="text-[18px]">Post-Graduation Support</h4>
              <p className='font-thin'>The support didn't end with graduation. Le Wagon's alumni network provided invaluable connections and resources. It's a network that I'm proud to be a part of, and it continues to be a source of inspiration and assistance in my entrepreneurial journey.
              </p>
              <h4 className="text-[18px]">Conclusion</h4>
              <p className='font-thin'>Le Wagon wasn't just a coding bootcamp; it was a stepping stone toward realizing my dreams as an entrepreneur and a web developer. The skills, knowledge, and network I gained continue to shape my career and my ability to provide financial security for my family, fulfilling my ultimate goal. </p>
            </div>
          )}
          <button onClick={() => setShow(!show)} className={styles.button}>{show ? 'Read less' : 'Read more'}</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
