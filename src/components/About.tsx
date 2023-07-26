import React from "react";

interface Link {
  name: string,
  href: string
}

interface SocialLink {
  source: string,
  href: string
}

interface LinkListProps {
  links: Link[],
  socialLinks: SocialLink[]
}

const About: React.FC<LinkListProps> = ({ links, socialLinks }) => {
  return (
    <div id="About" className="relative sm:flex sm:justify-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center isolate overflow-x-hidden overflow-y-auto py-24 sm:py-16 h-screen-minus-navbar about-page about">
      <div 
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center background-image-div"
      />
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-2xl md:text-4xl lg:text-4xl text-shadow">Focus Find</h2>
            <p className="mt-6 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl leading-8 text-gray-300 text-shadow">
              Focus Find is a 2D puzzle platformer narrative game. In this thrilling story about grief, you play as Adam; well his mind at least. With Dr. Bardell as your guide, you relive painful memories from your life in order to repair your brain and awake from your coma. As you delve deeper into your own mind not everything is as it seems. Mysterious memories lead you to discover startling truths. The game has been designed to be played with only 1 joystick yet still be a fun, immersive experience. Focus Find is therefore accessible and approachable for gamers and non-gamers of all abilities.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 text-shadow">
              {links.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer text-lg lg:text-2x1" className="text-xl sm:text-2xl xl:text-4xl 2xl:text-5xl">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="mt-7 sm:mt-20 md:mt-10 text-xl font-bold tracking-tight text-white sm:text-5xl lg:text-4xl text-shadow">Follow us on Social Media</h1>
              </div>
            <dl className="mt-8 grid grid-cols-4 gap-7 sm:mt-20 sm:grid-cols-4 sm:mt-11 md:grid-cols-8 md:mt-10 lg:grid-cols-8 text-shadow">
              {socialLinks.map((company, ind) => (
                <div key={ind} className="flex flex-col-reverse">
                  <a href={`${company.href}`} target="_blank">
                    <img src={company.source} className="w-8 h-8 sm:w-9 sm:h-9 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
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
