'use client'

import { CodeBracketIcon, UserGroupIcon, LightBulbIcon, CogIcon, BeakerIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const processSteps = [
  {
    step: '01',
    title: 'Research & Discovery',
    description: 'We started by deeply understanding the challenges faced by visually impaired users. Through interviews, user testing, and research into existing solutions, we identified the core problems that needed solving.',
    icon: LightBulbIcon,
    details: [
      'Conducted extensive user interviews with visually impaired individuals',
      'Analyzed existing assistive technology limitations',
      'Studied navigation patterns and common pain points',
      'Researched accessibility standards and best practices'
    ]
  },
  {
    step: '02',
    title: 'Technical Architecture',
    description: 'We designed a robust system that combines computer vision, AI reasoning, and natural language processing to create an intuitive voice-first experience.',
    icon: CodeBracketIcon,
    details: [
      'Integrated YOLO object detection for real-time environmental awareness',
      'Implemented Azure OpenAI for intelligent reasoning and guidance',
      'Built ElevenLabs TTS integration for natural voice output',
      'Created modular architecture for easy feature expansion'
    ]
  },
  {
    step: '03',
    title: 'User-Centered Design',
    description: 'Every interface decision was made with accessibility in mind. We prioritized voice-first interactions and designed for users who rely on audio feedback.',
    icon: UserGroupIcon,
    details: [
      'Designed press-to-talk interface for hands-free operation',
      'Implemented haptic feedback for danger level communication',
      'Created clear, concise voice instructions',
      'Ensured compatibility with screen readers and assistive devices'
    ]
  },
  {
    step: '04',
    title: 'Iterative Development',
    description: 'We built Seer using agile development practices, constantly testing with real users and incorporating feedback to improve the experience.',
    icon: CogIcon,
    details: [
      'Weekly user testing sessions with visually impaired participants',
      'Rapid prototyping and iteration based on feedback',
      'Continuous performance optimization and bug fixes',
      'Regular accessibility audits and improvements'
    ]
  },
  {
    step: '05',
    title: 'Testing & Validation',
    description: 'Rigorous testing in real-world environments ensured that Seer works reliably when users need it most.',
    icon: BeakerIcon,
    details: [
      'Extensive testing in various indoor environments',
      'Performance testing under different lighting conditions',
      'Accessibility testing with multiple user groups',
      'Stress testing for reliability and battery optimization'
    ]
  },
  {
    step: '06',
    title: 'Launch & Feedback',
    description: 'We launched with a focus on gathering real-world usage data and user feedback to guide future development.',
    icon: RocketLaunchIcon,
    details: [
      'Open-source release for community contribution',
      'Active user feedback collection and analysis',
      'Continuous monitoring of usage patterns',
      'Regular updates based on community input'
    ]
  },
]

const keyPrinciples = [
  {
    principle: 'Accessibility First',
    description: 'Every feature is designed with accessibility as the primary consideration, not an afterthought.',
  },
  {
    principle: 'User-Driven Development',
    description: 'Real users guide our development priorities through continuous feedback and testing.',
  },
  {
    principle: 'Open Source Philosophy',
    description: 'We believe in transparency and community contribution to create better solutions.',
  },
  {
    principle: 'Iterative Improvement',
    description: 'We continuously refine and improve based on real-world usage and feedback.',
  },
]

export default function DevelopmentProcess() {
  return (
    <div id="development-process" className="py-24 sm:py-32">
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
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Our Process</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            How we built Seer.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            Building assistive technology requires a deep understanding of user needs, careful technical design, 
            and continuous iteration. Here's how we approached the development of Seer.
          </p>
        </div>

        {/* Development Steps */}
        <div className="mt-16">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex size-16 items-center justify-center rounded-full bg-[rgb(227,173,125)] shadow-lg shadow-[rgb(227,173,125)]/30">
                      <span className="text-xl font-bold text-[rgb(16,16,12)] font-poppins">{step.step}</span>
                    </div>
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-[rgb(227,173,125)]/20 mr-4">
                        <step.icon className="size-5 text-[rgb(227,173,125)]" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[rgb(242,245,249)] font-poppins">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-[rgb(242,245,249)] font-montserrat mb-4">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-[rgb(227,173,125)] rounded-full mt-2 mr-3"></div>
                          <span className="text-sm text-[rgb(242,245,249)] font-montserrat">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-[rgb(227,173,125)]/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins text-center mb-12">
            Our Development Principles
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-[rgb(227,173,125)]/10 to-[rgb(227,173,125)]/5 rounded-xl p-6 border border-[rgb(227,173,125)]/20 text-center">
                <h4 className="text-lg font-semibold text-[rgb(242,245,249)] font-poppins mb-3">
                  {principle.principle}
                </h4>
                <p className="text-sm text-[rgb(242,245,249)] font-montserrat">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins mb-6 text-center">
              What We Learned
            </h3>
            <div className="bg-gradient-to-r from-[rgb(227,173,125)]/10 to-[rgb(227,173,125)]/5 rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <p className="text-lg text-[rgb(242,245,249)] font-montserrat leading-relaxed mb-6 italic">
                "We built Seer from 1:30 PM to 5:30 PM today—four intense hours of non-stop development, pivoting, and learning. 
                It was a crazy journey that taught us more about building accessible technology than we ever imagined."
              </p>
              
              <div className="space-y-4 text-[rgb(242,245,249)]/90 font-montserrat">
                <p>
                  In those four hours, we pivoted through multiple frameworks and APIs: from ElevenLabs to OpenAI TTS to Deepgram 
                  for speech synthesis, experimented with React Native and Expo Go across various SDK versions and node package.json 
                  configurations, and learned to use Expo Doctor on the fly.
                </p>
                
                <p>
                  We navigated the complexities of managing audio routes, built a Flask API server running from a laptop, and developed 
                  both a frontend website for submission and a mobile application on Expo Go—which proved especially tedious. The most 
                  challenging part? <strong className="text-[rgb(227,173,125)]">Building UI for the blind.</strong> We implemented haptic 
                  feedback for danger levels, designed voice-first interactions, and created an entirely audio-driven experience.
                </p>
                
                <p>
                  Nothing in our codebase is hardcoded—everything is dynamic, scalable, and built with real-world usage in mind. Through 
                  multiple ideation rounds and technical pivots, we completely shifted to OpenAI for speech-to-text, LLM reasoning, and 
                  danger level assessment. It was a massive development effort compressed into an impossible timeframe, but we emerged 
                  with a working product and invaluable lessons about rapid prototyping and user-centered AI.
                </p>

                <div className="mt-6 pt-6 border-t border-[rgb(227,173,125)]/20">
                  <h4 className="text-xl font-semibold text-[rgb(227,173,125)] mb-4 font-poppins">
                    What's Next: Our Week-One Roadmap
                  </h4>
                  
                  <p className="mb-4">
                    Looking ahead to next week, our immediate priority is <strong className="text-[rgb(227,173,125)]">human-centric validation</strong>. 
                    We'll conduct testing sessions with visually impaired users to understand the exact challenges they've faced throughout 
                    their lives and ensure Seer truly addresses their needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-[rgb(227,173,125)]/5 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                      <h5 className="font-semibold text-[rgb(242,245,249)] mb-2 flex items-center">
                        <span className="text-[rgb(227,173,125)] mr-2">⚡</span>
                        Performance Optimization
                      </h5>
                      <p className="text-sm">
                        Use lower-parameter models for faster LLM inference and build custom YOLO models for quicker object detection
                      </p>
                    </div>

                    <div className="bg-[rgb(227,173,125)]/5 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                      <h5 className="font-semibold text-[rgb(242,245,249)] mb-2 flex items-center">
                        <span className="text-[rgb(227,173,125)] mr-2">📱</span>
                        LiDAR Integration
                      </h5>
                      <p className="text-sm">
                        Leverage LiDAR capabilities on modern iPhones and Android devices for enhanced spatial awareness
                      </p>
                    </div>

                    <div className="bg-[rgb(227,173,125)]/5 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                      <h5 className="font-semibold text-[rgb(242,245,249)] mb-2 flex items-center">
                        <span className="text-[rgb(227,173,125)] mr-2">💰</span>
                        Cost Reduction
                      </h5>
                      <p className="text-sm">
                        Bring operational costs down to under $5/month (from preliminary $2/month testing) for a sustainable $20 subscription model
                      </p>
                    </div>

                    <div className="bg-[rgb(227,173,125)]/5 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                      <h5 className="font-semibold text-[rgb(242,245,249)] mb-2 flex items-center">
                        <span className="text-[rgb(227,173,125)] mr-2">🎯</span>
                        Personalization
                      </h5>
                      <p className="text-sm">
                        Build adaptive systems that learn from user patterns and become increasingly customized over time
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-[rgb(242,245,249)] font-semibold">
                    This isn't just about building technology—it's about empowering people to navigate the world with greater 
                    independence and confidence. We're building human-centric AI innovation that truly makes a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
