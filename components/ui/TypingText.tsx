"use client";

import { useEffect, useState } from "react";
import { GradientText } from "./GradientText";

type TypingTextProps = {
  words: string[];
  prefix?: string;
};

export function TypingText({ words, prefix = "I am a " }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <p className="text-xl text-zinc-300 sm:text-2xl">
      {prefix}
      <GradientText>{text}</GradientText>
      <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-violet-400 align-middle" />
    </p>
  );
}
