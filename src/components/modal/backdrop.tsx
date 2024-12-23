import { motion } from "motion/react";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
