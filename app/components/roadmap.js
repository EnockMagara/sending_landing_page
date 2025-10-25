'use client'

import { ClockIcon, CheckCircleIcon, SparklesIcon, CpuChipIcon, MapIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'

const roadmapItems = [
  {
    phase: 'Phase 1: Enhanced AI',
    status: 'planned',
    features: [
      'Advanced object recognition with custom training',
      'Contextual understanding of indoor environments',
      'Improved accuracy for complex navigation scenarios',
      'Multi-language support for global accessibility'
    ],
    icon: CpuChipIcon,
  },
  {
    phase: 'Phase 2: Smart Environments',
    status: 'planned',
    features: [
      'Integration with smart building systems',
      'Real-time crowd density analysis',
      'Dynamic route optimization based on traffic',
      'Integration with public transportation APIs'
    ],
    icon: MapIcon,
  },
  {
    phase: 'Phase 3: Personalization',
    status: 'planned',
    features: [
      'Learning user preferences and patterns',
      'Customizable voice personalities',
      'Adaptive guidance based on user experience level',
      'Personal landmark recognition and memory'
    ],
    icon: SparklesIcon,
  },
  {
    phase: 'Phase 4: Community Features',
    status: 'planned',
    features: [
      'Community-contributed navigation data',
      'Real-time hazard reporting from users',
      'Social features for connecting with other users',
      'Crowdsourced accessibility information'
    ],
    icon: SpeakerWaveIcon,
  },
]

const currentImprovements = [
  {
    title: 'Performance Optimization',
    description: 'Reducing latency and improving battery efficiency for real-world usage.',
    status: 'in-progress',
  },
  {
    title: 'Enhanced Voice Recognition',
    description: 'Improving accuracy for users with different accents and speech patterns.',
    status: 'in-progress',
  },
  {
    title: 'Offline Capabilities',
    description: 'Adding offline mode for areas with poor connectivity.',
    status: 'planned',
  },
  {
    title: 'Accessibility Standards',
    description: 'Ensuring full compliance with WCAG guidelines and accessibility best practices.',
    status: 'in-progress',
  },
]

export default function Roadmap() {
  return (
    <div id="roadmap" className="py-24 sm:py-32">
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
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Our Roadmap</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            Building the future of navigation.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            We're constantly evolving Seer based on user feedback and technological advances. 
            Here's our vision for the future and how we're making it better every day.
          </p>
        </div>

        {/* Current Improvements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins text-center mb-8">
            What We're Working On Now
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentImprovements.map((improvement, index) => (
              <div key={index} className="bg-gradient-to-br from-[rgb(227,173,125)]/10 to-[rgb(227,173,125)]/5 rounded-xl p-6 border border-[rgb(227,173,125)]/20">
                <div className="flex items-center mb-3">
                  {improvement.status === 'in-progress' ? (
                    <ClockIcon className="h-5 w-5 text-[rgb(227,173,125)] mr-2" />
                  ) : (
                    <CheckCircleIcon className="h-5 w-5 text-[rgb(227,173,125)] mr-2" />
                  )}
                  <span className="text-sm font-medium text-[rgb(227,173,125)] uppercase tracking-wide">
                    {improvement.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-[rgb(242,245,249)] font-poppins mb-2">
                  {improvement.title}
                </h4>
                <p className="text-sm text-[rgb(242,245,249)] font-montserrat">
                  {improvement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Phases */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins text-center mb-12">
            Future Development Phases
          </h3>
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[rgb(227,173,125)] shadow-lg shadow-[rgb(227,173,125)]/30">
                      <item.icon className="size-6 text-[rgb(16,16,12)]" />
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h4 className="text-xl font-semibold text-[rgb(242,245,249)] font-poppins mb-3">
                      {item.phase}
                    </h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-[rgb(227,173,125)] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[rgb(242,245,249)] font-montserrat">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-[rgb(227,173,125)]/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins mb-6">
              Our Development Philosophy
            </h3>
            <div className="bg-gradient-to-r from-[rgb(227,173,125)]/10 to-[rgb(227,173,125)]/5 rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed mb-4">
                "We believe in iterative development driven by real user feedback. Every feature we build is tested 
                with actual users who rely on assistive technology, ensuring that our solutions solve real problems 
                in real-world scenarios."
              </p>
              <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed">
                Our development process prioritizes accessibility, usability, and reliability above all else. 
                We're building technology that people can depend on in their daily lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
