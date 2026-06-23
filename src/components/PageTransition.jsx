import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

const transition = {
  duration: 0.20,
  ease: [0.25, 0.1, 0.25, 1],
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={transition}
  >
    {children}
  </motion.div>
);

export default PageTransition;
