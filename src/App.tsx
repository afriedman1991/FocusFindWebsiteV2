import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Media from './components/Media';
import Stores from './components/Stores';
import PressKit from './components/PressKit';
import Footer from './components/Footer';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import youtube from './assets/youtube.png';
import tiktok from './assets/tik-tok.png';
import linkedin from './assets/linkedin.png';
import linktree from './assets/linktree.svg';
import deviantart from './assets/deviantart.png';

const links = [
    { name: 'Trailer', href: 'https://www.youtube.com/watch?v=NaaZTINIz20' },
    { name: 'Add to wishlist', href: 'https://store.steampowered.com/app/1949950/Focus_Find/' },
    { name: 'Company Website', href: 'https://www.jumpbutton.com/' },
]
const socialLinks = [
  { source: facebook, href: 'https://www.facebook.com/JumpButtonStudio' },
  { source: twitter, href: 'https://twitter.com/JumpButtonS' },
  { source: instagram, href: 'https://www.instagram.com/jumpbuttonstudio/' },
  { source: youtube, href: 'https://www.youtube.com/@JumpButtonStudio' },
  { source: tiktok, href: 'https://www.tiktok.com/@jumpbuttonstudio'},
  { source: linkedin, href: 'https://www.linkedin.com/company/jumpbuttonstudio/'},
  { source: linktree, href: 'https://linktr.ee/jumpbuttonstudio'},
  { source: deviantart, href: 'https://www.deviantart.com/jumpbutton-studio/gallery/'}
]

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }), [];

  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <>
      <div className="background pt-16">
        <Header />
        <About links={links} socialLinks={socialLinks} />
        <Features />
        <Media />
        <Stores />
        <PressKit />
        <Footer socialLinks={socialLinks} />
      </div>
    </>
  );
}

export default App
