"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/intro");
    }, 5000);
    return () => clearTimeout(timeout);
  });

  return (
    <AnimatePresence mode="wait">
      <div className="relative flex h-[100vh] w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.5 }}
        >
          <Image
            className="fixed left-0 top-0 h-auto w-full"
            src="/svg/leaf-tp.svg"
            alt="Greenomina"
            width={0}
            height={0}
            priority
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: "-100%" }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image
            src="/logo-gnm.png"
            alt="Greenomina"
            width={0}
            height={0}
            priority
            sizes="100vw"
            style={{ width: "45vw", height: "auto" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, bottom: "-100%" }}
          animate={{
            opacity: 1,
            scale: 1,
            bottom: 0,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-full"
        >
          <Image
            className="h-auto w-full"
            src="/svg/leaf-intro-bottom.svg"
            alt="Greenomina"
            width={0}
            height={0}
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
