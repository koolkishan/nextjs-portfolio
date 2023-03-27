import React from "react";
import { motion } from "framer-motion";
function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:kishansheth21@gmail.com" className="email-link">
        kishansheth21@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
