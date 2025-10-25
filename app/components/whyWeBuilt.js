'use client'

import { LightBulbIcon, HeartIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const motivations = [
  {
    title: 'The Problem We Saw',
    description: 'Existing navigation solutions for visually impaired users are often clunky, expensive, or require extensive training. Many rely on GPS which fails indoors, or require users to memorize complex button combinations.',
    icon: LightBulbIcon,
  },
  {
    title: 'Our Vision',
    description: 'We believe technology should adapt to people, not the other way around. Seer represents our commitment to creating intuitive, voice-first solutions that feel natural and empowering.',
    icon: HeartIcon,
  },
  {
    title: 'Why Everyone Should Care',
    description: 'Accessibility isn\'t just about helping a specific group—it\'s about building a world where everyone can participate. When we design for accessibility, we create better experiences for everyone.',
    icon: UsersIcon,
  },
  {
    title: 'The Future We\'re Building',
    description: 'We\'re not just building an app; we\'re pioneering a new approach to assistive technology that combines AI, computer vision, and natural language to create truly intelligent navigation assistance.',
    icon: RocketLaunchIcon,
  },
]

export default function WhyWeBuilt() {
  return (
    <div id="why-we-built" className="py-24 sm:py-32">
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff15] to-[#ffffff05] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Our Mission</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            Why we built Seer.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            We didn't just want to build another app. We wanted to solve a real problem that affects millions of people 
            and create technology that truly makes a difference in people's lives.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {motivations.map((motivation) => (
              <div key={motivation.title} className="relative pl-16">
                <dt className="text-lg font-semibold text-[rgb(242,245,249)] flex items-center font-poppins">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-lg bg-[rgb(227,173,125)] shadow-lg shadow-[rgb(227,173,125)]/30">
                    <motivation.icon className="size-6 text-[rgb(16,16,12)]" />
                  </div>
                  {motivation.title}
                </dt>
                <dd className="mt-2 text-base text-[rgb(242,245,249)] font-montserrat">{motivation.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Personal Story Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins mb-6">
              The Personal Connection
            </h3>
            <div className="bg-gradient-to-r from-[rgb(227,173,125)]/10 to-[rgb(227,173,125)]/5 rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed mb-4">
                "We started this project because we believe that technology should break down barriers, not create them. 
                Every person deserves the freedom to navigate their world independently, and we're committed to making that vision a reality."
              </p>
              <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed">
                This isn't just about building better software—it's about building a more inclusive future where 
                assistive technology feels natural, empowering, and accessible to everyone who needs it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
