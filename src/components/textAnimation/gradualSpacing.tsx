"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";

export function GradualSpacing({
  text,
  classname,
}: {
  text: string;
  classname: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={classname}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
