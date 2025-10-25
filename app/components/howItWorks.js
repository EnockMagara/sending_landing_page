import React from "react";

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="mt-32 py-32">
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff30] to-[#ffffff10] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Section Title */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Experience It Live</h2>
        <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
          Talk. Listen. Feel.
        </p>
        <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">
          Watch how Seer responds to real conversation, delivers instant guidance, and uses haptic feedback to keep you safe. This isn't pre-recorded navigation—it's a live AI companion adapting to your world in real-time.
        </p>
      </div>

      {/* Video Container - iPhone 16 Pro Max Shaped */}
      <div className="mt-16 flex justify-center">
        <div className="relative">
          {/* iPhone 16 Pro Max Frame (aspect ratio ~19.5:9) */}
          <div className="relative w-[360px] h-[780px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
            {/* Phone Screen */}
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10"></div>
              
              {/* Video Content */}
              <video
                controls
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/Demo_Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}