import { MicrophoneIcon, EyeIcon, MapIcon, SpeakerWaveIcon, CheckCircleIcon, DevicePhoneMobileIcon, LanguageIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Conversational Navigation',
    description:
      "Just talk to it. 'Where's the elevator?' Seer hears you, sees your surroundings, and responds instantly with personalized guidance. It's like having a seeing friend by your side.",
    icon: MicrophoneIcon,
  },
  {
    name: 'Real-Time Awareness',
    description:
      "Seer watches everything. Continuous LiDAR and YOLO-powered object detection analyze your environment in real-time, understanding context and learning the buildings you frequent.",
    icon: EyeIcon,
  },
  {
    name: 'Instant Haptic Warnings',
    description:
      "Feel danger before you hear it. Gentle vibrations for obstacles. Urgent pulses for immediate threats. Your device becomes an extension of your senses, keeping you safe through intelligent touch.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Live AI Reasoning',
    description:
      "Powered by OpenAI, Seer doesn't just detect—it thinks. Every frame is analyzed, contextualized, and transformed into clear, actionable guidance tailored to your exact situation.",
    icon: CheckCircleIcon,
  },
  {
    name: 'Contextual Memory',
    description:
      "Seer learns. Visit the same building twice, and it remembers. Navigate familiar spaces with a companion that grows smarter with every step you take together.",
    icon: MapIcon,
  },
  {
    name: 'Natural Voice Feedback',
    description:
      "Hear guidance that feels human. Natural speech synthesis delivers directions that are clear, concise, and conversational—never robotic, always reassuring.",
    icon: SpeakerWaveIcon,
  },
  {
    name: 'Universal Language',
    description:
      "Speak your language. Get guidance in your voice. Seer's multilingual intelligence ensures navigation is accessible to everyone, everywhere.",
    icon: LanguageIcon,
  },
]

export default function Features() {
  return (
    <div id="features">
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff30] to-[#ffffff10] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Intelligence You Can Feel</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            A living companion.<br/>Not just an app.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            Seer doesn't just give you directions—it walks with you. Real-time vision, conversational AI, and haptic awareness create an experience that feels less like technology and more like having someone who truly understands your journey.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-[rgb(242,245,249)] flex items-center font-poppins">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-lg bg-[rgb(227,173,125)] shadow-lg shadow-[rgb(227,173,125)]/30">
                    <feature.icon className="size-6 text-[rgb(16,16,12)]" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-[rgb(242,245,249)] font-montserrat">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Real-Time Highlight Banner */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(227,173,125)] to-[rgb(227,173,125)]/70 px-8 py-12 shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[rgb(16,16,12)] font-poppins mb-4">
                It's not navigation. It's conversation.
              </h3>
              <p className="text-lg text-[rgb(16,16,12)]/90 font-montserrat mb-6 max-w-2xl">
                Seer combines <strong>real-time LiDAR depth sensing</strong> with <strong>YOLO object detection</strong> and <strong>conversational AI</strong> to create something unprecedented: a walking companion that sees, understands, and responds—instantly. Haptic feedback pulses through your device the moment danger appears. Voice guidance adapts to your exact surroundings. Context builds as Seer learns the spaces you navigate.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[rgb(16,16,12)]/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[rgb(16,16,12)]">🎯 Real-time LiDAR + YOLO</span>
                </div>
                <div className="bg-[rgb(16,16,12)]/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[rgb(16,16,12)]">💬 Conversational AI</span>
                </div>
                <div className="bg-[rgb(16,16,12)]/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[rgb(16,16,12)]">📳 Intelligent Haptics</span>
                </div>
                <div className="bg-[rgb(16,16,12)]/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[rgb(16,16,12)]">🧠 Context Learning</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-20">
              <div className="size-64 rounded-full bg-[rgb(16,16,12)]/20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Not Just a Wrapper Section */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[rgb(242,245,249)] font-poppins mb-4">
              Not just a wrapper.<br/>
              <span className="text-[rgb(227,173,125)]">A winner.</span>
            </h3>
            <p className="text-lg text-[rgb(242,245,249)]/80 font-montserrat max-w-3xl mx-auto">
              Anyone can call an API. We built something that actually works in the real world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: What Others Do */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 rounded-2xl p-8 border border-red-800/30">
              <div className="flex items-center mb-4">
                <div className="size-10 rounded-full bg-red-800/30 flex items-center justify-center mr-3">
                  <span className="text-2xl">❌</span>
                </div>
                <h4 className="text-xl font-bold text-red-400 font-poppins">API Wrappers</h4>
              </div>
              <ul className="space-y-3 text-sm text-[rgb(242,245,249)]/70 font-montserrat">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Send image to GPT-4 Vision</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Get generic text response</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Read it out with TTS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No real-time processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No spatial awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No danger detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Generic for everyone</span>
                </li>
              </ul>
            </div>

            {/* Column 2: What We Built */}
            <div className="bg-gradient-to-br from-[rgb(227,173,125)]/20 to-[rgb(227,173,125)]/10 rounded-2xl p-8 border-2 border-[rgb(227,173,125)] relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-[rgb(227,173,125)] text-[rgb(16,16,12)] text-xs font-bold px-3 py-1 rounded-full">
                WINNER
              </div>
              <div className="flex items-center mb-4">
                <div className="size-10 rounded-full bg-[rgb(227,173,125)]/30 flex items-center justify-center mr-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="text-xl font-bold text-[rgb(227,173,125)] font-poppins">Seer</h4>
              </div>
              <ul className="space-y-3 text-sm text-[rgb(242,245,249)] font-montserrat">
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>LiDAR depth mapping</strong> + YOLO detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Real-time streaming</strong> architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Contextual AI</strong> that learns spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Haptic danger system</strong> with 3 levels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Conversational interface</strong> with STT/TTS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Audio route management</strong> for iOS/Android</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[rgb(227,173,125)]">✓</span>
                  <span><strong>Adaptive guidance</strong> per user context</span>
                </li>
              </ul>
            </div>

            {/* Column 3: The Difference */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="size-10 rounded-full bg-[rgb(227,173,125)]/20 flex items-center justify-center mr-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-[rgb(242,245,249)] font-poppins">The Difference</h4>
              </div>
              <div className="space-y-4 text-sm text-[rgb(242,245,249)]/90 font-montserrat">
                <p>
                  <strong className="text-[rgb(227,173,125)]">Built from scratch.</strong> Custom Flask backend. Native mobile integration. No shortcuts.
                </p>
                <p>
                  <strong className="text-[rgb(227,173,125)]">Actually tested.</strong> Real haptic feedback. Actual audio routing. Production-ready UX.
                </p>
                <p>
                  <strong className="text-[rgb(227,173,125)]">Truly intelligent.</strong> Multi-modal fusion of vision, depth, and AI reasoning. Not just "describe this image."
                </p>
                <p>
                  <strong className="text-[rgb(227,173,125)]">Built in 4 hours.</strong> And it works. That's the difference between engineering and wrapping.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[rgb(227,173,125)]/10 to-transparent rounded-2xl px-8 py-6 border-l-4 border-[rgb(227,173,125)]">
              <p className="text-xl text-[rgb(242,245,249)] font-montserrat italic">
                "We didn't wrap APIs. We built a <span className="text-[rgb(227,173,125)] font-bold">real-time, multi-modal AI system</span> that actually changes lives. <br className="hidden md:block"/>
                From LiDAR integration to haptic danger detection to context-aware navigation—<br className="hidden md:block"/>
                <span className="text-[rgb(227,173,125)] font-bold">this is what innovation looks like.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}