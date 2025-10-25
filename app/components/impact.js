'use client'

import { UserGroupIcon, EyeIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const impactStats = [
  {
    number: '43M',
    label: 'People are blind worldwide',
    description: 'As of 2020, representing a significant portion of the global population requiring assistive technology.',
    icon: EyeIcon,
  },
  {
    number: '295M',
    label: 'Have moderate to severe visual impairment',
    description: 'A staggering number of people who struggle with daily navigation and independence.',
    icon: UserGroupIcon,
  },
  {
    number: '338M',
    label: 'Total people affected',
    description: 'Combined, this represents over 4% of the world population who could benefit from better navigation assistance.',
    icon: GlobeAltIcon,
  },
  {
    number: 'Aging',
    label: 'Risk increases with age',
    description: 'As our population ages, the number of people with vision challenges will continue to grow significantly.',
    icon: HeartIcon,
  },
]

export default function Impact() {
  return (
    <div id="impact" className="py-24 sm:py-32">
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff20] to-[#ffffff05] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">The Impact</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            Millions of lives waiting for independence.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            Vision impairment affects hundreds of millions worldwide, limiting independence and daily navigation. 
            The risk increases with age, making this a growing challenge for our aging population.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {impactStats.map((stat) => (
              <div key={stat.label} className="relative pl-16">
                <dt className="text-lg font-semibold text-[rgb(242,245,249)] flex items-center font-poppins">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-lg bg-[rgb(227,173,125)] shadow-lg shadow-[rgb(227,173,125)]/30">
                    <stat.icon className="size-6 text-[rgb(16,16,12)]" />
                  </div>
                  <span className="text-3xl font-bold text-[rgb(227,173,125)] mr-3">{stat.number}</span>
                  {stat.label}
                </dt>
                <dd className="mt-2 text-base text-[rgb(242,245,249)] font-montserrat">{stat.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins mb-4">
              Why This Matters to Everyone
            </h3>
            <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed">
              Vision impairment doesn't just affect individuals—it impacts families, communities, and society. 
              When people can't navigate independently, it limits their ability to work, socialize, and contribute. 
              By creating accessible technology, we're not just helping individuals; we're building a more inclusive world 
              where everyone can participate fully in life.
            </p>
            <p className="mt-4 text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed">
              As our population ages, the number of people with vision challenges will only grow. 
              The technology we build today will shape the independence of millions tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
