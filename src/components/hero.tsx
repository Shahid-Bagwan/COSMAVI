import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/Cosmavi-logo.png'
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Nanoplasty', href: '#nanoplasty' },
  { name: 'About Us', href: '#about' },
]

const Hero = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <section>
        <div id='home' className="hero text-white  m-0 ">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 pr-9">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-800">
                  {item.name}
                </a>
              ))}
            </div>
            
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-black">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Cosmavi</span>
                  <img
                    className="h-8 w-auto"
                    src=""
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
  
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
          
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-700               sm:text-6xl">
              Elevate Your Hair's Natural Beauty with Cosmavi.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Cosmavi, where we believe every strand of hair tells a unique story, and your hair deserves the best, naturally.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-gradient-to-t from-green-500 to-green-200 hover:bg-gradient-to-b px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Our Products
                </a>
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>
      
    )

}

export default Hero