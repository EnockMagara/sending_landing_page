import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const competitors = [
  {
    name: "Seer",
    features: [true, true, true, true, true, true],
    highlight: true, // This will have a subtle border glow
  },
  {
    name: "BlindSquare",
    features: [false, true, false, true, false, false],
  },
  {
    name: "Humanware",
    features: [false, true, false, false, false, false],
  },
  {
    name: "Biped.ai",
    features: [true, false, true, true, false, false],
  },
  {
    name: "Google Glasses",
    features: [false, false, false, true, false, false],
  },
];

const featureNames = [
  "Real-Time YOLO Detection",
  "Voice-First Interface",
  "AI-Powered Guidance",
  "Natural Speech Output",
  "Checkpoint Navigation",
  "Accessibility-First Design",
];

export default function ComparisonTable() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-[rgb(227,173,125)] font-poppins">Why Seer?</h2>
        <p className="mt-4 text-4xl font-semibold tracking-tight text-[rgb(242,245,249)] sm:text-5xl font-poppins">
          Feature Comparison
        </p>
        <p className="mt-6 text-lg text-[rgb(242,245,249)] font-montserrat">See how Seer stands out.</p>
      </div>

      {/* Table container: retains the original width */}
      <div className="mt-16 overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto bg-[rgb(16,16,12)]/80">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[rgb(22,21,40)] to-[rgb(16,16,12)] text-[rgb(242,245,249)] text-sm font-medium font-poppins">
              <th className="px-6 py-4 text-left">Product</th>
              {featureNames.map((feature, index) => (
                <th key={index} className="px-4 py-3 text-center">
                  {feature}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-montserrat text-[rgb(242,245,249)] text-sm">
            {competitors.map((comp, idx) => {
              // For the highlighted row (AYN), use a darker background with a blue left border.
              const rowClasses = comp.highlight
                ? "bg-[rgb(16,16,12)] border-l-4 border-[rgb(227,173,125)]"
                : hovered === idx
                ? "bg-[rgb(22,21,40)]"
                : "bg-[rgb(16,16,12)]";
              return (
                <tr
                  key={idx}
                  className={`transition-colors duration-300 ${rowClasses}`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <td className="px-6 py-4 font-semibold text-lg font-poppins">
                    {comp.name}
                  </td>
                  {comp.features.map((hasFeature, index) => (
                    <td key={index} className="px-4 py-3 text-center">
                      {hasFeature ? (
                        <CheckIcon className="w-5 h-5 text-[rgb(227,173,125)] mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-[rgb(242,245,249)] mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}