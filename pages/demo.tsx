import { AnimatePresence, motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const questions = [
  {
    id: 1,
    name: <b>Personal Account</b>,
    description: "Access full history of your requests. Receive email updates and news about the platform.",
    difficulty: " ",
  },
  {
    id: 2,
    name: "Limited Version",
    description: "Try a limited version with several requests only. Afterward, access is restricted.",
    difficulty: " ",
  },
]
