import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "ZedBlock",
    description:
      "The highly Responsive official website for Zedblock company using nextjs , framer motion and Tailwind.Showcasing the company's value and services.Use imagekit.io for improving speed",
    image: "/Zedblock.png",
    github: "",
    link: "https://zedblock-website.vercel.app/",
  },
  {
    name: "Pan Card Tempering Detector",
    description: "Detect if the pan card is real or tempered using Python and Googlecolab. used OpenCV and image processing techniques and Computed the (SSIM). Project got certified by Technophilia Solutions .  ",
    image: "/pancard.png",
    link: "https://github.com/SusmitaSagar/Pancard_tempering_detector/blob/main/Pancard_tempering_detector.ipynb",
    github: "https://github.com/SusmitaSagar/certificates-/blob/main/internship%20Letter%20Technophilia%20slot%2015-26.pdf",
  },
  {
    name: "BytecodeLearners Club",
    description:
      "Bytcode learner is a coding club in my collage. Contributed in making its official website.",
    image: "/bytecode.png",
    github: "https://github.com/SusmitaSagar/bytecode_website",
    link: "http://bytecodelearners.cuh.ac.in/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2 py-7">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
