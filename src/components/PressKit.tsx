import ImageCard from './ImageCard';
import MainCapsuelNew from '../assets/Main\ Capsuel\ New.png';
import HeaderCapsuelNew from '../assets/Header\ Capsuel\ New.png';
import VerticleCapsuelNew from '../assets/Verticle\ Capsuel\ New.png';
import PageBackgroundNew from '../assets/Page\ Background\ New.png';
import jobo from '../assets/jobo.png';

const products = [
    {
      id: 1,
      href: '#',
      imageSrc: MainCapsuelNew,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      href: '#',
      imageSrc: HeaderCapsuelNew,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      href: '#',
      imageSrc: VerticleCapsuelNew,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 4,
      href: '#',
      imageSrc: PageBackgroundNew,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 5,
      href: '#',
      imageSrc: jobo,
      imageAlt: "Front of men's Basic Tee in black.",
    },
]

const PressKit = () => {
    return (
        <div id="Press Kit" className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-300 text-shadow">General Information</h1>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Platforms: Steam
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Players: 1
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Genres: Puzzle, Adventure
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Developer: Acrylic Pixel or JumpButton Studio?
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Publisher: JumpButton Studio
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Languages: English
                            </li>
                            <li className="mt-6 text-xl leading-8 text-gray-300 text-shadow">
                                Release Date: TBA
                            </li>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:w-[42.25rem] lg:w-[30rem]"
                        src={MainCapsuelNew}
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-300 text-shadow">About</h1>
                            <p className="mt-6 leading-8 text-gray-300 text-shadow">
                                Focus Find is a 2D puzzle platformer narrative game. In this thrilling story about grief, you play as Adam; well his mind at least. With Dr. Bardell as your guide, you relive painful memories from your life in order to repair your brain and awake from your coma. As you delve deeper into your own mind not everything is as it seems. Mysterious memories lead you to discover startling truths. The game has been designed to be played with only 1 joystick yet still be a fun, immersive experience. Focus Find is therefore accessible and approachable for gamers and non-gamers of all abilities.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 text-shadow sm:text-4xl">Key Features</h1>
                                <li className="flex gap-x-3">
                                <span className="text-gray-300 text-shadow">
                                    <strong className="font-semibold">Unwravel a Mystery:</strong> Immerse yourself in this narrative-driven puzzle platformer game that takes you on a journey through the depths of your own damaged mind. Forgotten memories hold the key to unlocking hidden truths.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <span className="text-gray-300 text-shadow">
                                    <strong className="font-semibold">Process Grief</strong> Travel through 98 levels within 5 unique stages uncovering startling truths along the way.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <span className="text-gray-300 text-shadow">
                                    <strong className="font-semibold">Explore Your Mind:</strong> Use your surroundings to solve environmental puzzles, connect, poke, shoot, ride and break your mind to progress.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <span className="text-gray-300 text-shadow">
                                    <strong className="font-semibold">Your Own Worst Enemy:</strong> The enemies in your mind come in many forms. Are you ready to face them?
                                </span>
                                </li>
                            </ul>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 text-shadow sm:text-4xl">Important Links</h1>
                                <li className="flex gap-x-3">
                                    <span className="text-gray-300 text-shadow">
                                        <strong className="font-semibold">Resources:</strong> <a href="https://jumpbutton.com" target="_blank">Website</a>, <a href="https://store.steampowered.com/app/1949950/Focus_Find/" target="_blank">Steam</a>
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="text-gray-300 text-shadow">
                                        <strong className="font-semibold text-3xl">Social Channels:</strong> <a href="https://www.facebook.com/JumpButtonStudio" target="_blank" className="ml-2">Facebook,</a>
                                                <a href="https://twitter.com/JumpButtonS" target="_blank" className="ml-2">Twitter,</a>
                                                <a href="https://www.instagram.com/jumpbuttonstudio/" target="_blank" className="ml-2">Instagram,</a>
                                                <a href="https://www.youtube.com/@JumpButtonStudio" target="_blank" className="ml-2">YouTube,</a>
                                                <a href="https://www.tiktok.com/@jumpbuttonstudio" target="_blank" className="ml-2">TikTok,</a>
                                                <a href="https://www.linkedin.com/company/jumpbuttonstudio" target="_blank" className="ml-2">LinkedIn,</a>
                                                <a href="https://linktr.ee/jumpbuttonstudio" target="_blank" className="ml-2">Linktree,</a>
                                                <a href="https://www.deviantart.com/jumpbutton-studio/gallery/" target="_blank" className="ml-2">DeviantArt,</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-none">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 text-shadow">Art and Logos</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <ImageCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-none">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 text-shadow">Screenshots</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <ImageCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-none">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 text-shadow">Trailer</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="relative flex items-center justify-center isolate overflow-x-hidden overflow-y-auto">
                            <div className="aspect-w-16 aspect-h-9 max-w-xs mx-auto flex items-center justify-center">
                                <iframe src="https://www.youtube.com/embed/NaaZTINIz20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PressKit;
