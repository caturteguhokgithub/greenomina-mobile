import { motion } from "motion/react";
import Backdrop from "./backdrop";
import Iconify from "../icon/iconify";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({
  handleClose,
  children,
  title,
}: {
  handleClose: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative m-auto flex h-auto w-auto min-w-[90%] flex-col items-center rounded-lg bg-white"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative flex w-full items-center border-b-[1px] p-4">
          <span className="leading-none">{title}</span>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={handleClose}
            whileTap={{ scale: 1.2 }}
            className="absolute right-2 top-1/2 z-50 -translate-y-1/2"
          >
            <Iconify name="line-md:close-small" />
          </motion.button>
        </div>
        <div className="w-full p-4">{children}</div>
      </motion.div>
    </Backdrop>
  );
}
