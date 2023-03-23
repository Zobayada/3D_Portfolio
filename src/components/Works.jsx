import Tilt from 'react-tilt';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVarient } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='w-full h-[230px] relative'>
          <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl" />
          <div className='inset-0 absolute flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 justify-center items-center rounded-full flex cursor-pointer"
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVarient()}>
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each projects is briefly described with liks to code reposotiroies and live demos in it. It reflects my ability to solve complex problems, work with different technologies and manage project effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")