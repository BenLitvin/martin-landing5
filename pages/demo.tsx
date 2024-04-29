import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router';

const questions = [
  {
    id: 1,
    name: <b>Personal Account</b>,
    description: "Get full access to the history of your requests, along with regular email updates and news about our platform.",
  },
  {
    id: 2,
    name: "Limited Version",
    description: "Opt for the Limited Version to access a restricted set of features with only several requests allowed.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function DemoPage() {
  const [selected, setSelected] = useState(questions[0]);
  const [step, setStep] = useState(1);
  const router = useRouter();

  useEffect(() => {
    // Any side-effects can be handled here
  }, []);

  return (
    <div>
      <h1>Select Your Account Type</h1>
      <div>
        {questions.map((question) => (
          <button
            key={question.id}
            className={classNames(
              "p-2",
              "border",
              "rounded",
              selected.id === question.id ? "bg-blue-500" : "bg-gray-200"
            )}
            onClick={() => setSelected(question)}
          >
            <div>
              <strong>{question.name}</strong>
              <p>{question.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div>
        <p>Selected Option: {selected.name}</p>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col md:flex-row w-full md:overflow-hidden"
        >
          {/* Placeholder content - modify as needed */}
          <div className="w-full min-h-[60vh] md:w-1/2 md:h-screen flex flex-col px-4 pt-2 pb-8 md:px-0 md:py-2 bg-[#FCFCFC] justify-center">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-full md:w-1/2 top-0 h-[60px] flex flex-row justify-between"
            >
              <span className="text-sm text-[#1a2b3b] font-medium">demo</span>
              <span className="text-sm text-[#1a2b3b] font-medium opacity-20">demo</span>
              {/* Repeat as necessary */}
            </motion.p>
            <div className="w-full min-h-[60vh] md:w-1/2 md:h-screen flex flex-col px-4 pt-2 pb-8 md:px-0 md:py-2 bg-[#FCFCFC] justify-center"></div>
            <div className="h-full w-full items-center justify-center flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                key="step-1"
                transition={{
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="max-w-lg mx-auto px-4 lg:px-0"
              >
                <h2 className="text-4xl font-bold text-[#1E2B3A]">
                  Choose your option
                </h2>
                <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                  Please select one of the following account options to proceed:
                </p>

                <div className="flex gap-[15px] justify-end mt-8">
                  <div>
                    <Link
                      href="/"
                      className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                      style={{
                        boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                      }}
                    >
                      Back to home
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        router.push('https://martin-chat2.vercel.app'); // Using the router to navigate to the URL
                      }}
                      className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#347aeb] text-white no-underline active:scale-95 scale-100 duration-75"
                      style={{
                        boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
