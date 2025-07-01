"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp } from 'lucide-react';
import Image from 'next/image';

type ResourceItem = {
  title: string;
  description: string;
  iconKey: "book" | "growth";
};

type Props = {
  subTitle: string;
  title: React.ReactNode;
  description: string;
  resources: ResourceItem[];
};

const iconMap = {
  book: <BookOpen className="size-5" />,
  growth: <TrendingUp className="size-5" />,
};

const Hero = ({ subTitle, title, description, resources }: Props) => {
  return (
    <section className="bg-zinc-950 text-white h-[55vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-40"
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-3 py-1 bg-zinc-800 rounded-full mb-4"
            >
              <p className="text-sm font-medium text-zinc-200">{subTitle}</p>
            </motion.div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-base lg:text-lg mb-8 text-white font-semibold max-w-3xl mx-auto">
              {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {resources.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="bg-zinc-800/50 p-6 rounded-xl relative border border-zinc-700 hover:border-[#eb254c]/30 transition-all"
                >
                  <div className="bg-[#eb254c] p-2.5 absolute -top-4 -left-4 rounded-full w-max">
                    {iconMap[item.iconKey]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full lg:w-[50%] aspect-square max-w-[600px]"
          >
            <Image
              src="/hero.png"
              alt="1 Market Philippines Dashboard"
              fill
              className="object-contain"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-[#eb254c]/10 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
