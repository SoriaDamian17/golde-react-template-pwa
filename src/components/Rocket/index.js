import * as React from "react";

function RocketComponent(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg viewBox="0 0 57.83 41.92" {...props}>
      <defs>
        <style>
          {
            ".rocket__cls-1{fill:#5bcbf5}.rocket__cls-2{fill:#ffcb39}.rocket__cls-3{fill:#ff9600}"
          }
        </style>
      </defs>
      <title>Rocket</title>
      <g id="rocket__Layer_2" data-name="Layer 2">
        <g id="rocket__Layer_1-2" data-name="Layer 1">
          <g id="rocket__rocket">
            <path
              className="rocket__cls-1"
              d="M16.31 41.57a7.89 7.89 0 001.91-1 9.68 9.68 0 00-6-17.66 10 10 0 00-4.92 1.66A10.1 10.1 0 005.67 26a13.83 13.83 0 1126.81 6.43 13.67 13.67 0 01-5.35 7 13.41 13.41 0 01-10.82 2.14z"
            />
            <path
              className="rocket__cls-2"
              d="M57.81 2.35a.92.92 0 00-.53-.78A21.75 21.75 0 0036.75 3.9c-4.12 2.8-14.37 11.3-23.86 19.75a3.69 3.69 0 00-.59 4.82l4.05 5.94a3.69 3.69 0 004.7 1.2c11.33-5.74 23-12.19 27.1-15a21.75 21.75 0 009.66-18.26zm0 0"
            />
            <path
              className="rocket__cls-3"
              d="M14.33 31.44l-2-3a3.69 3.69 0 01.59-4.82C22.38 15.2 32.63 6.7 36.75 3.9a21.75 21.75 0 0120.53-2.33.92.92 0 01.37.32zm0 0"
            />
            <path
              className="rocket__cls-1"
              d="M44.8 17.34a5.52 5.52 0 111.45-7.67 5.52 5.52 0 01-1.45 7.67zm0 0M57.28 1.57A21.48 21.48 0 0046.46.17l8.71 12.77a21.48 21.48 0 002.64-10.59.92.92 0 00-.53-.78zm0 0"
            />
            <path
              d="M57.66 1.89a.92.92 0 00-.38-.32A21.48 21.48 0 0046.46.17l4.35 6.38z"
              fill="#007bbd"
            />
            <path
              d="M44.8 17.34a5.52 5.52 0 001.45-7.67l-9.12 6.22a5.52 5.52 0 007.67 1.45zm0 0"
              fill="#c7f4f9"
            />
            <path
              d="M36.37 16.41a6.44 6.44 0 119 1.69 6.45 6.45 0 01-9-1.69zm9.12-6.22a4.6 4.6 0 10-1.21 6.39 4.61 4.61 0 001.21-6.39zm0 0"
              fill="#5c546a"
            />
            <g id="rocket__flame">
              <path
                d="M11.39 38.49C7.39 41.21 0 41.22 0 41.22s2.33-6.63 6.7-9.61a4.16 4.16 0 014.69 6.88z"
                fill="#e87e04"
              />
              <path
                className="rocket__cls-3"
                d="M11.75 36.54c-2.65 1.81-7.56 1.81-7.56 1.81S5.74 34 8.64 32a2.76 2.76 0 013.12 4.57z"
              />
              <path
                className="rocket__cls-2"
                d="M11.72 35.37c-1.61 1.1-4.61 1.1-4.61 1.1a9 9 0 012.71-3.89 1.68 1.68 0 011.9 2.78z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default RocketComponent;
