import { useInView, motion } from "framer-motion";
import React from "react";

const TypingEffect = ({
  text = "Every day is a new beginning. Take a deep breath, smile, and start again.",
}: {
  text?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h1 ref={ref}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default TypingEffect;
