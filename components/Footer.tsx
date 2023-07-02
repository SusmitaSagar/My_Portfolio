import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai"

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full  h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
       <div className="pl-3 " style={{ color: 'red', fontSize: '24px' }}>
       Lets connect &#x2764;
  </div>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/SusmitaSagar" rel="noreferrer" target="_blank">
            <AiOutlineGithub 
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/susmita_sagar03"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/susmita-sagar-706179209/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.facebook.com/susmita.sagar.77?mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        
        </div>
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          Designed and developed by 
          © Susmita Sagar {today.getFullYear()} <a href="/" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
