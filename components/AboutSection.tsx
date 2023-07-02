import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" }, 
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Data Structure & algorithms" },
  { skill: "GitHub" },
  { skill: "Excel" },
  { skill: "SQL" },
  { skill: "C++" },
  { skill: "Exploratory Data Analysis Techniques" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            Greetings! I&apos;m on a captivating journey, pursuing a B.Tech in Computer Science and Engineering from Central University of Haryana. Passionate about technology and     
            <span className="font-bold">{" driven by curiosity, "}</span> 
            I&apos;m determined to explore the endless possibilities that lie at the 
              <span className="font-bold">{" intersection of innovation and human experiences."}</span>              
            </p>
            <br />           
            <p>
            But my interests go beyond the binary realm. When I am not immersed in lines of code, you&apos;ll find me exploring the world or nurturing my green thumb. Through traveling, I gain fresh perspectives and insights that fuel my creativity. Gardening, on the other hand, teaches me patience, attention to detail, and the beauty of nurturing growth—qualities that I bring to every project I undertake.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I believe in constantly pushing boundaries and exploring new frontiers. As I embark on my career journey, I welcome exciting opportunities with open arms. I am excited to see where my career takes me.🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
