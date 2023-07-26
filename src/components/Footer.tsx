import React from "react";
import jobo from "../assets/jobo.png";

interface SocialList {
  source: string,
  href: string
}

interface LinkListProps {
  socialLinks: SocialList[]
}

const Footer: React.FC<LinkListProps> = ({ socialLinks }) => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={jobo} className="w-8 h-8 sm:w-9 sm:h-9 md:w-16 md:h-10 md:w-10 lg:w-18 lg:h-18 xl:w-20 xl:h-20" />
                <h1 className="font-normal text-xs sm:text-sm md-text-base lg:text-xl">© 2023 JumpButton Studio, All rights reserved.</h1>
            </div>
            <div className="flex space-x-4">
                {socialLinks.map((company, ind) => (
                <div key={ind} className="flex flex-col-reverse">
                  <a href={`${company.href}`} target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-pink-500">
                    <img src={company.source} className="w-4 h-4 xs:w-4 xs:h-4 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                  </a>
                </div>
              ))}
            </div>
        </footer>
    );
}

export default Footer
