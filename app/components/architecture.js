import React from 'react';
import { 
  DevicePhoneMobileIcon, 
  ServerIcon, 
  CpuChipIcon,
  CloudIcon,
  SpeakerWaveIcon,
  EyeIcon,
  MicrophoneIcon,
  ArrowRightIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

const Architecture = () => {
  return (
    <div id="architecture" className="py-32">
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
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Architecture</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
            Built for Real-Time Navigation
          </p>
          <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
            Seer combines cutting-edge AI with accessibility-first design to create a seamless navigation experience.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16">
          <div className="relative">
            {/* Client Side */}
            <div className="bg-gradient-to-r from-[rgb(22,21,40)] to-[rgb(16,16,12)] rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[rgb(227,173,125)] rounded-lg">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-[rgb(16,16,12)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins">React Native Client</h3>
                  <p className="text-[rgb(227,173,125)] font-montserrat">Expo 54 + TypeScript</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <MicrophoneIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">Voice Input</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Press-to-talk interface with haptic feedback</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <EyeIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">Camera Stream</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Real-time video capture for AI analysis</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <SpeakerWaveIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">iOS TTS</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Natural voice guidance output</p>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-8">
              <div className="p-3 bg-[rgb(227,173,125)] rounded-full">
                <ArrowDownIcon className="w-6 h-6 text-[rgb(16,16,12)]" />
              </div>
            </div>

            {/* Server Side */}
            <div className="bg-gradient-to-r from-[rgb(16,16,12)] to-[rgb(22,21,40)] rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[rgb(227,173,125)] rounded-lg">
                  <ServerIcon className="w-8 h-8 text-[rgb(16,16,12)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins">Flask Backend</h3>
                  <p className="text-[rgb(227,173,125)] font-montserrat">Python API Server</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <MicrophoneIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">STT Module</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">OpenAI Whisper for speech-to-text</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <EyeIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">Vision Module</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">GPT-4o-mini for image analysis</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CpuChipIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">Planning Module</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">AI reasoning for navigation</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <SpeakerWaveIcon className="w-6 h-6 text-[rgb(227,173,125)]" />
                    <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins">TTS Module</h4>
                  </div>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Text passthrough to client</p>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-8">
              <div className="p-3 bg-[rgb(227,173,125)] rounded-full">
                <ArrowDownIcon className="w-6 h-6 text-[rgb(16,16,12)]" />
              </div>
            </div>

            {/* AI Services */}
            <div className="bg-gradient-to-r from-[rgb(22,21,40)] to-[rgb(16,16,12)] rounded-2xl p-8 border border-[rgb(227,173,125)]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[rgb(227,173,125)] rounded-lg">
                  <CloudIcon className="w-8 h-8 text-[rgb(16,16,12)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(242,245,249)] font-poppins">AI Services</h3>
                  <p className="text-[rgb(227,173,125)] font-montserrat">OpenAI Integration</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins mb-2">Whisper STT</h4>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Converts speech to text with high accuracy</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins mb-2">GPT-4o-mini Vision</h4>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Analyzes camera frames for navigation</p>
                </div>
                
                <div className="bg-[rgb(16,16,12)]/50 rounded-lg p-4 border border-[rgb(227,173,125)]/10">
                  <h4 className="font-semibold text-[rgb(242,245,249)] font-poppins mb-2">State Management</h4>
                  <p className="text-sm text-[rgb(242,245,249)]/80 font-montserrat">Tracks navigation progress and context</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-[rgb(242,245,249)] font-poppins mb-8">Data Flow</h3>
            <div className="bg-[rgb(16,16,12)]/30 rounded-xl p-6 border border-[rgb(227,173,125)]/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(227,173,125)] rounded-full"></div>
                  <span className="text-[rgb(242,245,249)] font-montserrat">1. Voice Input</span>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[rgb(227,173,125)] hidden md:block" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(227,173,125)] rounded-full"></div>
                  <span className="text-[rgb(242,245,249)] font-montserrat">2. Speech-to-Text</span>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[rgb(227,173,125)] hidden md:block" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(227,173,125)] rounded-full"></div>
                  <span className="text-[rgb(242,245,249)] font-montserrat">3. Vision Analysis</span>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[rgb(227,173,125)] hidden md:block" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(227,173,125)] rounded-full"></div>
                  <span className="text-[rgb(242,245,249)] font-montserrat">4. AI Guidance</span>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[rgb(227,173,125)] hidden md:block" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(227,173,125)] rounded-full"></div>
                  <span className="text-[rgb(242,245,249)] font-montserrat">5. Voice Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
