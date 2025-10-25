'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-gradient-to-r from-[rgb(22,21,40)] via-[rgb(16,16,12)] to-[rgb(22,21,40)] text-[rgb(242,245,249)] min-h-screen">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-center px-6 py-5 lg:px-8 relative">
          <div className="absolute left-6 lg:left-8">
            <a href="#" className="flex items-center -m-1.5 p-1.5">
              {/* Logo Image */}
              <Image
                src="/Seer_logo.png" 
                alt="Seer Logo"
                width={50}
                height={50}
                className="h-12 w-auto rounded-lg"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition font-montserrat">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center -m-1.5 p-1.5">
                <Image
                  src="/Seer_logo.png"
                  alt="Seer Logo"
                  width={50} 
                  height={50} 
                  className="h-12 w-auto rounded-lg"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-300 hover:text-white transition font-montserrat"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center h-screen text-center">
        {/* Background Image (Necklace on the Right) */}
        <div className="">
          <Image
            src="/seer2.avif"
            alt="Seer Device"
            width={700} // Increased size for better visibility
            height={700}
            className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 opacity-40 md:opacity-60 lg:opacity-80 drop-shadow-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-24 lg:pt-48 lg:pb-32">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl text-[rgb(242,245,249)] font-poppins">
            See through sound.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[rgb(242,245,249)] font-montserrat">
            A voice-first navigation helper for visually impaired users. Seer uses real-time object detection, AI reasoning, and natural voice guidance to help users navigate to spoken checkpoints.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/seer"
              className="rounded-md bg-[rgb(227,173,125)] px-6 py-3 text-lg font-semibold text-[rgb(16,16,12)] shadow-md hover:bg-[rgb(227,173,125)]/80 transition font-montserrat"
            >
              Get Started
            </a>
            <a href="#features" className="text-lg font-semibold px-6 py-3 text-[rgb(242,245,249)] hover:text-[rgb(227,173,125)] transition font-montserrat">
              Learn More →
            </a>
            <a 
              href="https://github.com/acditya/Seer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-[rgb(227,173,125)] px-6 py-3 text-lg font-semibold text-[rgb(227,173,125)] hover:bg-[rgb(227,173,125)] hover:text-[rgb(16,16,12)] transition font-montserrat"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}