import { useState } from 'react';
import { Link } from "react-scroll";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import VerticalCapsuleNew from '../assets/Verticle\ Capsuel\ NEW.png';
import jobo from '../assets/jobo.png';

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Features', href: '#', current: false },
  { name: 'Media', href: '#', current: false },
  { name: 'Stores', href: '#', current: false },
  { name: 'Press Kit', href: '#', current: false },
  { name: 'Add To Wishlist', href: 'https://store.steampowered.com/app/1949950/Focus_Find/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [selectedItem, setSelectedItem] = useState('About');

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-10 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={VerticalCapsuleNew}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={VerticalCapsuleNew}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, ind) => item.name === 'Add To Wishlist' ? <a
                      onClick={() => setSelectedItem(item.name)}
                      key={ind} href={item.href}
                      target="_blank"
                      style={{ cursor: 'pointer' }}
                      className={classNames(
                        selectedItem === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                      aria-current={selectedItem === item.name ? 'page' : undefined}
                      >{item.name}</a> : (
                      <Link
                        style={{ cursor: 'pointer' }}
                        key={ind}
                        to={item.name}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-64}
                        className={classNames(
                          selectedItem === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={selectedItem === item.name ? 'page' : undefined}
                        onClick={() => setSelectedItem(item.name)}
                        onSetActive={() => setSelectedItem(item.name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                    <a href="https://www.jumpbutton.com" target="_blank">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={jobo}
                        alt=""
                      />
                    </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, ind) => item.name === 'Add To Wishlist' ? <a
                key={ind}
                href={item.href}
                target="_blank"
                style={{ cursor: 'pointer' }}
                className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                aria-current={selectedItem === item.name ? 'page' : undefined}
                onClick={() => setSelectedItem(item.name)}
                >{item.name}</a> : (
                <Link
                  style={{ cursor: 'pointer' }}
                  key={ind}
                  to={item.name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className={classNames(
                    selectedItem === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={selectedItem === item.name ? 'page' : undefined}
                  onClick={() => setSelectedItem(item.name)}
                  onSetActive={() => setSelectedItem(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;
