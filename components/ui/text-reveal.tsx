"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[120vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <div className="flex flex-col text-[#482e43]">
          <div className="text-base lg:text-2xl text-center font-bold" style={{ fontFamily: "Sour Gummy" }}>Smt. Paramjeet Kaur & Sh. Ganga Ram Sheoran</div>
          <div className="text-base lg:text-xl text-center" style={{ fontFamily: "Sour Gummy" }}>Solicit the pleasure of your participation to shower the petals of love & blessings on the auspicious occasion of the marriage of their beloved daughter</div>
        </div>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <div className="flex flex-col text-[#482e43]">
          <div className="text-base lg:text-2xl text-center font-bold" style={{ fontFamily: "Sour Gummy" }}>S/o Smt. & Sh. Balwant Singh (Retd. kanoongo)</div>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  // eslint-disable-next-line
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-7xl font-bold text-center text-[#482e43]"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
