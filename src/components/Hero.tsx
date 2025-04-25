import React, { useState } from 'react';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Sample images and text content for regeneration
const sampleImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1562813733-b31f71025d54',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095',
];

const sampleContent = [
  {
    headline: 'Build Amazing Web Experiences',
    subheadline: 'Create stunning websites with our intuitive design tools and components',
  },
  {
    headline: 'Transform Your Digital Presence',
    subheadline: 'Elevate your brand with modern web solutions and responsive designs',
  },
  {
    headline: 'Innovate with Confidence',
    subheadline: 'Empower your team with cutting-edge development tools and frameworks',
  },
  {
    headline: 'Design Without Limits',
    subheadline: 'Unleash your creativity with powerful and flexible design components',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [customContent, setCustomContent] = useState(sampleContent[0]);

  const regenerateContent = () => {
    const nextIndex = (currentContentIndex + 1) % sampleContent.length;
    const nextImageIndex = (currentImageIndex + 1) % sampleImages.length;
    setCurrentContentIndex(nextIndex);
    setCurrentImageIndex(nextImageIndex);
    setCustomContent(sampleContent[nextIndex]);
  };

  const handleTextClick = (field: string) => {
    setIsEditing(field);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'headline' | 'subheadline') => {
    setCustomContent(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleBlur = () => {
    setIsEditing(null);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div className="relative h-screen flex items-center">
        <div className="mx-auto max-w-[90rem] w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8 space-y-8 py-12 lg:py-0">
            <div className="max-w-2xl">
              {isEditing === 'headline' ? (
                <input
                  type="text"
                  value={customContent.headline}
                  onChange={(e) => handleTextChange(e, 'headline')}
                  onBlur={handleBlur}
                  className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl border-b-2 border-blue-500 focus:outline-none w-full bg-transparent"
                  autoFocus
                />
              ) : (
                <h1
                  onClick={() => handleTextClick('headline')}
                  className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl cursor-pointer hover:opacity-80"
                >
                  {customContent.headline}
                </h1>
              )}

              <div className="mt-8">
                {isEditing === 'subheadline' ? (
                  <input
                    type="text"
                    value={customContent.subheadline}
                    onChange={(e) => handleTextChange(e, 'subheadline')}
                    onBlur={handleBlur}
                    className="w-full text-xl text-gray-500 border-b-2 border-blue-500 focus:outline-none bg-transparent"
                    autoFocus
                  />
                ) : (
                  <p
                    onClick={() => handleTextClick('subheadline')}
                    className="text-xl text-gray-600 cursor-pointer hover:opacity-80"
                  >
                    {customContent.subheadline}
                  </p>
                )}
              </div>

              <div className="mt-10 flex gap-4">
                <button className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                  Get Started
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
                </button>
                <button
                  onClick={regenerateContent}
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm px-6 py-3.5 text-base font-medium text-gray-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Regenerate with AI
                  <SparklesIcon className="ml-3 -mr-1 h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[75vh] relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden z-10"></div>
            <img
              className="h-full w-full object-cover rounded-2xl shadow-2xl"
              src={`${sampleImages[currentImageIndex]}?auto=format&fit=crop&w=2000&q=80`}
              alt="Hero illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 