import React from 'react';

interface BrandLogoProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Official Brand Logo for FIRST GOLDEN LINE TRANSPORT (شركة خط الذهبي الأول للنقل)
 * Exact geometry, color shade (#CCA75D), and 1024:336 aspect ratio strictly preserved as provided.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-11 sm:h-13 lg:h-15 w-auto',
  id = 'brand-logo',
  style,
}) => {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 336"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        aspectRatio: '1024 / 336',
        ...style,
      }}
      role="img"
      aria-label="First Golden Line Transport - شركة خط الذهبي الأول للنقل"
    >
      <defs>
        <style>
          {`
            .brand-ar-text {
              font-family: 'Cairo', 'Almarai', 'Tajawal', -apple-system, BlinkMacSystemFont, sans-serif;
              font-weight: 900;
              font-size: 39px;
              fill: #CCA75D;
              letter-spacing: 0.5px;
            }
            .brand-en-text {
              font-family: 'Montserrat', 'Inter', 'Arial Black', -apple-system, BlinkMacSystemFont, sans-serif;
              font-weight: 900;
              font-size: 26.5px;
              fill: #CCA75D;
              letter-spacing: 4px;
            }
          `}
        </style>
      </defs>

      {/* Left Highway Arch (Exact Color Shade #CCA75D) */}
      <g id="bl-left-arch">
        {/* Road Surface Body */}
        <path
          d="M 8 262 C 22 170, 60 108, 130 68 C 210 50, 310 46, 416 56 C 336 68, 256 86, 204 122 C 168 152, 150 196, 146 262 Z"
          fill="#CCA75D"
        />
        {/* Dashed White Highway Lane Markings */}
        <path
          d="M 76 262 C 86 182, 114 128, 168 94 C 230 68, 310 54, 400 56"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeDasharray="16 12"
          strokeLinecap="round"
        />
      </g>

      {/* Right Highway Arch (Symmetrical Mirror, Exact Color Shade #CCA75D) */}
      <g id="bl-right-arch">
        {/* Road Surface Body */}
        <path
          d="M 1016 262 C 1002 170, 964 108, 894 68 C 814 50, 714 46, 608 56 C 688 68, 768 86, 820 122 C 856 152, 874 196, 878 262 Z"
          fill="#CCA75D"
        />
        {/* Dashed White Highway Lane Markings */}
        <path
          d="M 948 262 C 938 182, 910 128, 856 94 C 794 68, 714 54, 624 56"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeDasharray="16 12"
          strokeLinecap="round"
        />
      </g>

      {/* Center Transport Emblem Medallion in Exact Color Shade #CCA75D */}
      <g id="bl-center-medallion">
        {/* Main Outer Orbit Ring */}
        <ellipse
          cx="512"
          cy="88"
          rx="48"
          ry="46"
          fill="none"
          stroke="#CCA75D"
          strokeWidth="4.5"
        />

        {/* Sweeping Outer Orbit Curve */}
        <path
          d="M 466 108 C 458 84, 474 48, 514 42 C 550 36, 574 62, 566 94 C 558 116, 526 132, 492 126 C 476 122, 464 114, 458 102 C 452 88, 466 72, 476 68"
          fill="none"
          stroke="#CCA75D"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Modern Luxury Passenger Coach Bus Silhouette (Front 3/4 View) */}
        <g id="bl-bus-graphic" transform="translate(510, 68)">
          {/* Bus Body */}
          <path
            d="M 14 3 C 27 3, 37 6, 39 13 L 40 32 C 40 37, 36 41, 31 41 L 18 41 C 14 41, 12 38, 12 34 L 12 13 C 12 6, 12 3, 14 3 Z"
            fill="#CCA75D"
          />
          {/* Panoramic Windshield Window Cutout */}
          <path
            d="M 16 7 C 24 7, 33 9, 35 14 L 36 24 L 16 24 Z"
            fill="#FFFFFF"
          />
          {/* Headlights and Chrome Grille Accents */}
          <circle cx="17" cy="30" r="2.2" fill="#FFFFFF" />
          <circle cx="34" cy="30" r="2.2" fill="#FFFFFF" />
          <rect x="21" y="29" width="9" height="2" rx="1" fill="#CCA75D" />
          <rect x="21" y="33" width="9" height="1.8" rx="0.9" fill="#CCA75D" />
          {/* Side Mirror */}
          <path d="M 40 16 L 43 17.5 L 42 20.5 L 39 19.5 Z" fill="#CCA75D" />
        </g>

        {/* Commercial Passenger Jet Airplane (Climbing Upward & Banking Right) */}
        <g id="bl-airplane-graphic" transform="translate(506, 54) rotate(-16)">
          <path
            d="M 0 9 C 4 4, 16 2, 25 3 L 30 4 C 32 5, 32 8, 30 9 L 25 10 C 16 11, 4 9, 0 9 Z"
            fill="#CCA75D"
          />
          <path d="M 14 6 L 9 -6 L 14 -6 L 20 5 Z" fill="#CCA75D" />
          <path d="M 16 8 L 13 18 L 16 18 L 21 9 Z" fill="#CCA75D" />
          <path d="M 3 7 L 0 0 L 3 0 L 7 7 Z" fill="#CCA75D" />
        </g>

        {/* Saudi Date Palm Tree Silhouette */}
        <g id="bl-palm-tree-graphic" transform="translate(480, 80)">
          <path
            d="M 9 28 C 8 20, 9 14, 13 8 C 11 14, 11 20, 11 28 Z"
            fill="#CCA75D"
          />
          <path d="M 13 8 C 8 5, 1 7, -1 12 C 3 8, 8 7, 13 8 Z" fill="#CCA75D" />
          <path d="M 13 8 C 9 2, 3 -1, 0 1 C 5 0, 10 3, 13 8 Z" fill="#CCA75D" />
          <path d="M 13 8 C 13 0, 14 -4, 15 -4 C 15 0, 14 4, 13 8 Z" fill="#CCA75D" />
          <path d="M 13 8 C 17 2, 22 0, 25 2 C 20 1, 15 3, 13 8 Z" fill="#CCA75D" />
          <path d="M 13 8 C 18 5, 24 7, 26 12 C 21 8, 16 7, 13 8 Z" fill="#CCA75D" />
        </g>
      </g>

      {/* Arabic Corporate Legal Name in Exact Color Shade #CCA75D */}
      <text
        x="512"
        y="198"
        textAnchor="middle"
        className="brand-ar-text"
      >
        شركة خط الذهبي الأول للنقل
      </text>

      {/* English Corporate Name in Exact Color Shade #CCA75D */}
      <text
        x="512"
        y="254"
        textAnchor="middle"
        className="brand-en-text"
      >
        FIRST GOLDEN LINE TRANSPORT
      </text>
    </svg>
  );
};
