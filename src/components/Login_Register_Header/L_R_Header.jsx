import React from 'react'
import { motion } from 'framer-motion'

function L_R_Header() {
  return (
     <motion.div 
      initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
     className="bg-[#1B3A6B] p-2 w-full">
        <div className="w-full max-w-6xl flex items-center mx-auto relative px-4 py-2">

          <div>
           <h1 className="font-bold text-3xl text-[#F7F7F5]">careerTrack.</h1>
          </div>
          </div>
          </motion.div>
  )
}

export default L_R_Header