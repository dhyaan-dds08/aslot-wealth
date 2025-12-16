
import React from 'react';

interface HighlightProps {
  text: string;
  highlightText: string | string[];
  className?: string;
  color?: string;
  textColor?: string;
}

// Utility function to escape regex special characters
const escapeRegex = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Utility function to split text with multiple highlights
const splitText = (text: string, highlights: string | string[]): Array<{ text: string; isHighlight: boolean }> => {
  if (!text) return [];

  const highlightArray = Array.isArray(highlights) ? highlights : [highlights];
  const validHighlights = highlightArray.filter(h => h && h.trim());

  if (validHighlights.length === 0) return [{ text, isHighlight: false }];

  const pattern = validHighlights.map(escapeRegex).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return parts
    .filter(part => part)
    .map(part => ({
      text: part,
      isHighlight: validHighlights.some(h =>
        part.toLowerCase() === h.toLowerCase()
      )
    }));
};

// 1. Marker Underline Effect - Like a highlighter pen
export const MarkerHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#10b981',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1">
            <span className="relative z-10" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <svg
              className="absolute bottom-0 left-0 w-full h-3 sm:h-4 md:h-5 -z-0 animate-draw"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              style={{ animationDelay: '0.3s' }}
            >
              <path
                d="M0,15 Q50,5 100,12 T200,10"
                fill="none"
                stroke={color}
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes draw {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 1s ease-out forwards;
        }
      `}</style>
    </span>
  );
};

// 2. Circle Outline Effect - Dynamic ellipse around text
export const CircleHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#22c55e', // soft green like in image
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <span
      className={`headline-word text-accent ${className}`}
    >
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block px-2 mx-1 my-2">
            <span
              className="relative z-10"
              style={textColor ? { color: textColor } : undefined}
            >
              {part.text}
            </span>
            <svg
              className="absolute left-0 top-0 w-full h-full overflow-visible pointer-events-none"
              style={{ left: '-13%', top: '-52%', width: '126%', height: '225%' }}
              viewBox="0 0 200 80"
              preserveAspectRatio="none"
            >
              {/* Hand-drawn imperfect circle around the word */}
              <path
                d="M 20,40 
                   Q 15,25 35,20 
                   Q 60,16 100,18 
                   Q 140,16 165,20 
                   Q 185,25 180,40 
                   Q 185,55 165,60 
                   Q 140,64 100,62 
                   Q 60,64 35,60 
                   Q 15,55 20,40 Z"
                fill="none"
                stroke={color}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-circle-draw opacity-85"
                style={{ animationDelay: '0.3s' }}
              />
            </svg>
            <svg
              className="absolute left-[-25%] md:left-[-50%] top-0 w-full h-full overflow-visible pointer-events-none"
              style={{ top: '-52%', width: '126%', height: '225%' }}
              viewBox="0 0 200 80"
              preserveAspectRatio="none"
            >

              {/* Wavy underline that starts before and extends after */}
              <path
                d="M -20,68 
                   Q -0,72 0,68 
                   Q 0,64 20,68 
                   Q 30,72 40,68 
                   Q 50,64 60,68
                   Q 70,72 20,68
                   Q 90,64 100,68
                   Q 110,72 100,68
                   Q 130,64 140,68
                   Q 150,72 160,68
                   Q 170,64 180,68
                   Q 190,72 200,68
                   Q 210,64 220,68"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-underline-draw opacity-80"
                style={{ animationDelay: '0.1s' }}
              />
            </svg>
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes circle-draw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            opacity: 0.85;
          }
        }
        
        @keyframes underline-draw {
          0% {
            stroke-dasharray: 800;
            stroke-dashoffset: 800;
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          100% {
            stroke-dasharray: 800;
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
        }
        
        .animate-circle-draw {
          animation: circle-draw 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-underline-draw {
          animation: underline-draw 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </span>
  );
};


// 3. Highlight Box Effect - Skewed background box
export const BoxHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#f59e0b',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1 my-1">
            <span className="relative z-10 px-2" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <span
              className="absolute inset-0 animate-box-expand opacity-40 rounded-sm"
              style={{
                backgroundColor: color,
                animationDelay: '0.2s',
                transform: 'skew(-5deg)'
              }}
            />
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes box-expand {
          from {
            transform: skew(-5deg) scaleX(0);
          }
          to {
            transform: skew(-5deg) scaleX(1);
          }
        }
        .animate-box-expand {
          animation: box-expand 0.6s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

// 4. Scribble Underline Effect - Hand-drawn style
export const ScribbleHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#ec4899',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1">
            <span className="relative z-10" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <svg
              className="absolute bottom-0 left-0 w-full h-2 sm:h-3 md:h-4 animate-scribble pointer-events-none"
              viewBox="0 0 200 15"
              preserveAspectRatio="none"
              style={{ animationDelay: '0.4s' }}
            >
              <path
                d="M0,8 Q10,12 20,8 T40,8 T60,8 T80,8 T100,8 T120,8 T140,8 T160,8 T180,8 T200,8"
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes scribble {
          from {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          to {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }
        .animate-scribble {
          animation: scribble 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// 5. Fade Background Highlight - Smooth fade in
export const FadeHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#8b5cf6',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block px-2 mx-1">
            <span className="relative z-10" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <span
              className="absolute inset-0 rounded animate-fade-in opacity-30"
              style={{
                backgroundColor: color,
                animationDelay: '0.3s'
              }}
            />
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// 6. Brush Stroke Effect - Artistic paint stroke
export const BrushHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#ef4444',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1 my-2">
            <span className="relative z-10 px-2" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <svg
              className="absolute inset-0 w-full h-full overflow-visible animate-brush pointer-events-none"
              style={{ left: '-5%', top: '-20%', width: '110%', height: '140%', animationDelay: '0.2s' }}
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
            >
              <path
                d="M10,30 Q50,15 100,25 T190,30 Q180,35 140,38 T10,35 Z"
                fill={color}
                className="opacity-40"
              />
            </svg>
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes brush {
          from {
            opacity: 0;
            transform: scaleX(0) translateY(10px);
          }
          to {
            opacity: 0.4;
            transform: scaleX(1) translateY(0);
          }
        }
        .animate-brush {
          animation: brush 0.8s ease-out forwards;
          transform-origin: left center;
        }
      `}</style>
    </span>
  );
};

// 7. Underline Sweep Effect - Line that sweeps from left to right
export const SweepHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#06b6d4',
  textColor
}) => {
  const parts = splitText(text, highlightText);

  return (
    <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1">
            <span className="relative z-10" style={textColor ? { color: textColor } : undefined}>
              {part.text}
            </span>
            <span
              className="absolute bottom-0 left-0 h-0.5 sm:h-1 w-full animate-sweep"
              style={{
                backgroundColor: color,
                animationDelay: '0.3s'
              }}
            />
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes sweep {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-sweep {
          animation: sweep 0.7s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </span>
  );
};

// 8. Gradient Wave Effect - Animated gradient background
export const WaveHighlight: React.FC<HighlightProps> = ({
  text,
  highlightText,
  className = '',
  color = '#6366f1',
  textColor = '#ffffff'
}) => {
  const parts = splitText(text, highlightText);

  return (
    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${className}`}>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className="relative inline-block mx-1 my-1">
            <span
              className="relative z-10 px-3 py-1 rounded-lg animate-wave-text"
              style={{ color: textColor }}
            >
              {part.text}
            </span>
            <span
              className="absolute inset-0 rounded-lg animate-wave-bg"
              style={{
                background: `linear-gradient(90deg, ${color}, ${color}dd, ${color})`,
                animationDelay: '0.2s'
              }}
            />
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
      <style>{`
        @keyframes wave-bg {
          0% {
            opacity: 0;
            transform: scaleX(0);
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
            background-position: 0% 50%;
          }
        }
        @keyframes wave-text {
          0% {
            opacity: 0;
          }
          70% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-wave-bg {
          animation: wave-bg 1.2s ease-out forwards;
          transform-origin: left;
          background-size: 200% 200%;
        }
        .animate-wave-text {
          animation: wave-text 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};