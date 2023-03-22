import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Afnan</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 bottom-[120px]`}>
            I work in web design, front-end <br className="sm:block hidden" /> development, and content creation.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-[-32px] bottom-[-32px] w-full flex justify-center items-center">
        <a href="about">
          <div className="xs:w-[35px] xs:h-[64px] w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="xs:w-3 xs:h-3 w-2 h-2 rounded-full mb-1 bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero