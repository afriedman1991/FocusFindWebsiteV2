import React from "react";
import jobo from "../assets/jobo.png";
import LazyImage from "./LazyImage";

interface SocialList {
  source: string,
  href: string,
  alt: string
}

interface LinkListProps {
  socialLinks: SocialList[]
}

const Footer: React.FC<LinkListProps> = ({ socialLinks }) => {
  return (
      <footer data-testid="footer" className="bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <LazyImage src={jobo} className="w-8 h-8 sm:w-9 sm:h-9 md:w-16 md:h-8 md:w-8 lg:w-18 lg:h-18 xl:w-20 xl:h-20" alt="jumpbutton studio logo" />
              <h1 className="font-normal text-xs sm:text-sm md-text-base lg:text-xl">© 2023 JumpButton Studio, All rights reserved.</h1>
          </div>
          <div className="flex space-x-4 flex-wrap justify-center md:justify-end">
              {socialLinks.map((company, ind) => (
              <div key={ind} className="flex flex-col-reverse mb-4 md:mb-0">
                <a href={`${company.href}`} target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-pink-500">
                  <LazyImage src={company.source} alt={company.alt} className="w-6 h-6 xs:w-4 xs:h-4 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                </a>
              </div>
            ))}
          </div>
      </footer>
  );
}

export default Footer
