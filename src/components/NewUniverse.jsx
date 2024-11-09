import React from 'react'
import { FaStar } from 'react-icons/fa'

function NewUniverse() {
  return (
    <section className="w-full h-[100vh] overflow-hidden bg-primary flex justify-center items-center ">
        <div className=" ">
          <FaStar className="text-3xl text-white" />
          <FaStar className="text-3xl text-white" />
          <FaStar className="text-3xl text-white" />
          <FaStar className="text-3xl text-white" />
          <FaStar className="text-3xl text-white" />
        </div>
      </section>
  )
}

export default NewUniverse
