import React from "react";
import LazyImage from "./LazyImage";

interface Link {
  name: string,
  href: string
}

interface SocialLink {
  source: string,
  href: string,
  alt: string
}

interface LinkListProps {
  links: Link[],
  socialLinks: SocialLink[]
}

const About: React.FC<LinkListProps> = ({ links, socialLinks }) => {
  return (
    <div id="About" className="relative flex flex-col items-center justify-center min-h-screen overflow-auto py-4 sm:py-6 about-page about">
      <div 
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center background-image-div"
      />
      <div className="relative flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="line-clamp-3 text-4xl font-bold tracking-tight text-white sm:text-2xl md:text-xl lg:text-2xl xl:text-4xl text-shadow">Focus Find</h2>
            <p className="mt-3 line-clamp-5 text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-8 text-gray-300 text-shadow">
              Focus Find is a 2D puzzle platformer narrative game. In this thrilling story about grief, you play as Adam; well his mind at least. With Dr. Bardell as your guide, you relive painful memories from your life in order to repair your brain and awake from your coma. As you delve deeper into your own mind not everything is as it seems. Mysterious memories lead you to discover startling truths. The game has been designed to be played with only 1 joystick yet still be a fun, immersive experience. Focus Find is therefore accessible and approachable for gamers and non-gamers of all abilities.
            </p>
          </div>
          <div className="mx-auto mt-5 xl:mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 text-shadow">
              {links.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xl lg:text-xl sm:text-2xl xl:text-4xl 2xl:text-5xl">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="mt-7 sm:mt-20 md:mt-10 lg:mt-5 xl:mt-8 text-xl font-bold tracking-tight text-white sm:text-5xl lg:text-xl xl:text-4xl text-shadow">Follow us on Social Media</h1>
              </div>
            <dl className="mt-8 lg:mt-5 xl:mt-8 grid grid-cols-4 gap-7 sm:mt-20 sm:grid-cols-4 sm:mt-11 md:grid-cols-8 md:mt-10 lg:grid-cols-8">
              {socialLinks.map((company, ind) => (
                <div key={ind} className="flex flex-col-reverse">
                  <a href={`${company.href}`} target="_blank">
                    <LazyImage src={company.source} alt={company.alt} className="w-8 h-8 sm:w-9 sm:h-9 md:w-16 md:h-16 lg:w-6 lg:h-6 xl:w-20 xl:h-20" />
                  </a>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
