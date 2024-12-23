"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Button, Label } from "flowbite-react";
import { motion } from "motion/react";
import React from "react";
import Iconify from "@/components/icon/iconify";

export default function LoginPage() {
  return (
    <Fragment>
      <div className="relative flex h-[100vh] flex-col justify-end bg-gnm-green">
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
          }}
          transition={{ delay: 1 }}
          className="flex h-full flex-grow"
        >
          <section className="relative z-0 flex h-full w-full flex-col justify-end bg-gnm-green p-4 pb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1.5 }}
            >
              <Image
                className="absolute left-0 top-0 z-0 h-[50vh] w-auto"
                src="/svg/leaf-login-left.svg"
                alt="Greenomina"
                width={0}
                height={0}
                sizes="100vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1.7 }}
            >
              <Image
                className="absolute right-0 top-0 z-0 h-[30vh] w-auto"
                src="/svg/leaf-login-right.svg"
                alt="Greenomina"
                width={0}
                height={0}
                sizes="100vw"
              />
            </motion.div>
            <div className="relative z-[1] flex flex-col gap-4">
              <Image
                className="mx-auto h-auto w-[40vw]"
                src="/logo-full.png"
                alt="Greenomina"
                width={0}
                height={0}
                sizes="100vw"
              />
              <h4 className="text-center text-lg leading-none text-white">
                Welcome back
              </h4>
              <p className="text-center text-sm leading-none text-white">
                Please sign in to save your footprints
              </p>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
          }}
        >
          <div className="relative z-[1] rounded-se-2xl rounded-ss-2xl bg-white">
            <section className="flex w-full flex-col gap-8 px-4 py-8 pb-2">
              <form className="flex flex-col gap-6">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Email" />
                  </div>
                  <input
                    id="email1"
                    type="email"
                    className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 px-4 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
                    placeholder="Type your email"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <input
                    id="password1"
                    type="password"
                    className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 px-4 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
                    placeholder="Type your email"
                    required
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    color="blue"
                    pill
                    className="w-full bg-gnm-green"
                  >
                    Sign in
                  </Button>
                </motion.div>
              </form>
              <div className="flex flex-col gap-3">
                <p className="text-center leading-none text-gnm-green">
                  Don’t have an account?{" "}
                  <a href="/register" className="font-bold">
                    Register here
                  </a>
                </p>
                <span className="text-center leading-none">or</span>
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
                      Sign in with Google
                    </span>
                  </Button>
                </motion.div>
              </div>
            </section>
            <Image
              className="h-auto w-full"
              src="/svg/leaf-intro-bottom.svg"
              alt="Greenomina"
              width={0}
              height={0}
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}
