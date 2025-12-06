import React from "react";
import { motion } from "framer-motion";
import arrowRight from "../assets/arrow-right.png";
import Loc1 from "../assets/loc1.jpg";

const packages = [
  { id: 1, title: "Sigiriya", price: "12,990 LKR / person", img: Loc1 },
  { id: 2, title: "Ella", price: "15,500 LKR / person", img: Loc1 },
  { id: 3, title: "Kandy", price: "10,200 LKR / person", img: Loc1 },
  { id: 4, title: "Galle", price: "14,750 LKR / person", img: Loc1 },
  { id: 5, title: "Nuwara Eliya", price: "16,400 LKR / person", img: Loc1 },
];


const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TopPackages() {
  return (
    <>
      
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariant}
        className="ml-15 mr-10"
      >
        <div className="flex items-center gap-2 mt-8">
          <motion.h2
            variants={containerVariant}
            className="text-lg font-semibold"
          >
            Top Packages
          </motion.h2>

          <motion.img
            src={arrowRight}
            alt="arrow-right"
            className="w-5 h-5"
            variants={containerVariant}
          />
        </div>

        <motion.p variants={containerVariant} className="text-xs mt-2">
          These are the top travel packages divulging into the exotic Sri Lanka
        </motion.p>
      </motion.section>

      
      <motion.section
        className="ml-15 mr-10 flex flex-wrap justify-start gap-6 mt-8"
        variants={listVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#f5f5f5] w-48 rounded-md overflow-hidden cursor-pointer"
          >
            <img src={pkg.img} alt={pkg.title} className="w-48 h-36 object-cover" />

            <div className="p-2">
              <p className="font-semibold">{pkg.title}</p>
              <p className="text-xs text-gray-500 mt-1">{pkg.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}
