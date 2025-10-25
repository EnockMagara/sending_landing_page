import { MicrophoneIcon, EyeIcon, MapIcon, SpeakerWaveIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Voice-First UX',
    description:
      "Press-to-talk interface for hands-free navigation. Simply speak your destination and get guided step-by-step.",
    icon: MicrophoneIcon,
  },
  {
    name: 'Real-Time Detection',
    description:
      "Camera captures frames every ~1.2s for YOLO object detection, providing continuous environmental awareness.",
    icon: EyeIcon,
  },
  {
    name: 'AI Guidance',
    description:
      "Azure OpenAI reasons about detections to provide safe, terse instructions tailored to your navigation needs.",
    icon: CheckCircleIcon,
  },
  {
    name: 'Natural Speech',
    description:
      "ElevenLabs TTS delivers clear spoken directions with natural voice patterns for comfortable listening.",
    icon: SpeakerWaveIcon,
  },
  {
    name: 'Checkpoint Navigation',
    description:
      "Say a destination ('elevator'), get guided step-by-step with haptic feedback and accessibility-first design.",
    icon: MapIcon,
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
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Our Features</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            Voice-first navigation for independence.
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            Seer combines real-time object detection, AI reasoning, and natural voice guidance to help visually impaired users navigate confidently to their destinations.
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
      </div>
    </div>
  )
}