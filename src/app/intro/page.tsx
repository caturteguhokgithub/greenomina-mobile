"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Modal from "@/components/modal/modal";
import Iconify from "@/components/icon/iconify";

export default function LoginPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const text =
    " Understand that planting trees will reduce carbon emissions".split(" ");

  return (
    <Fragment>
      <figure
        className="fixed left-0 top-0 h-[100vh] w-full"
        style={{
          backgroundImage: "url(/forest.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="relative flex h-[100vh] flex-col justify-end">
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
          }}
          // transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
          transition={{ delay: 1 }}
        >
          <div
            className="relative -bottom-5 z-0 h-[20vh] w-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(25,113,65,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <section className="relative -bottom-4 z-0 flex w-full flex-col gap-4 bg-gnm-green p-4 pb-8">
            <Image
              className="mx-auto h-auto w-[36vw]"
              src="/logo-full.png"
              alt="Greenomina"
              width={0}
              height={0}
              priority
              sizes="100vw"
            />
            <h2 className="text-center text-3xl font-bold leading-8 text-white">
              Contribute to our environment
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              className="text-center leading-6 text-white"
            >
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 2,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </motion.p>
          </section>
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
          }}
        >
          <section className="relative z-[1] flex w-full flex-col gap-4 rounded-se-2xl rounded-ss-2xl bg-white px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.25 }}
            >
              <Button
                color="green"
                pill
                className="w-full bg-gnm-green text-white"
                onClick={() => setModalOpen(true)}
              >
                Create new account
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.5 }}
            >
              <Button
                color="light"
                pill
                className="w-full !border-gnm-green text-gnm-green"
                as={Link}
                href="/login"
              >
                Sign in
              </Button>
            </motion.div>
          </section>
        </motion.div>
      </div>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            title="Create New Account"
          >
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  color="light"
                  pill
                  className="w-full !border-gnm-green text-gnm-green"
                >
                  <span className="inline-flex items-center gap-2">
                    <Iconify name="logos:google-icon" />
                    Sign up with Google
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  color="light"
                  pill
                  className="w-full !border-gnm-green text-gnm-green"
                >
                  <span className="inline-flex items-center gap-2">
                    <Iconify name="line-md:email" />
                    Sign up with Email
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.25 }}
              >
                <Button color="light" pill className="w-full !border-gray-600">
                  Back
                </Button>
              </motion.div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
