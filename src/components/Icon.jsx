import "./styles/icon.css";

export default function Icon() {
  return (
    <div
      id="icon-svg-wrapper"
      className="absolute flex w-full justify-center -translate-x-6"
    >
      <svg
        id="iconSvg"
        className="absolute mt-24 z-0"
        viewBox="0 0 405 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="iconPath"
          fillOpacity="0.5"
          d="M199.622 2.76829C200.468 -0.101346 204.532 -0.101348 205.378 2.76829L235.177 103.921C235.773 105.943 238.214 106.737 239.885 105.451L323.449 41.132C325.82 39.3073 329.108 41.6965 328.105 44.515L292.757 143.865C292.051 145.851 293.559 147.928 295.667 147.869L401.077 144.952C404.068 144.87 405.324 148.735 402.856 150.426L315.862 210.025C314.123 211.217 314.123 213.783 315.862 214.975L402.856 274.574C405.324 276.265 404.068 280.13 401.077 280.048L295.667 277.131C293.559 277.072 292.051 279.149 292.757 281.135L328.105 380.485C329.108 383.304 325.82 385.693 323.449 383.868L239.885 319.549C238.214 318.263 235.773 319.057 235.177 321.079L205.378 422.232C204.532 425.101 200.468 425.101 199.622 422.232L169.823 321.079C169.227 319.057 166.786 318.263 165.115 319.549L81.5509 383.868C79.1803 385.693 75.8919 383.304 76.8947 380.485L112.243 281.135C112.949 279.149 111.441 277.072 109.333 277.131L3.92255 280.048C0.932123 280.13 -0.323929 276.265 2.14402 274.574L89.1375 214.975C90.8768 213.783 90.8768 211.217 89.1375 210.025L2.14402 150.426C-0.323927 148.735 0.932121 144.87 3.92255 144.952L109.333 147.869C111.441 147.928 112.949 145.851 112.243 143.865L76.8947 44.515C75.8919 41.6965 79.1803 39.3073 81.5509 41.132L165.115 105.451C166.786 106.737 169.227 105.943 169.823 103.921L199.622 2.76829Z"
        />
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(-10)">
            <stop offset="11%" stopColor="#FCAF58">
              <animate
                attributeName="stop-color"
                values="#FCAF58;#672EE3;#F6F2FF;#672EE3;#FCAF58"
                dur="27s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#672EE3">
              <animate
                attributeName="stop-color"
                values="#672EE3;#F6F2FF;#FCAF58;#F6F2FF;#672EE3"
                dur="32s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="84%" stopColor="#F6F2FF">
              <animate
                attributeName="stop-color"
                values="#F6F2FF;#FCAF58;#672EE3;#FCAF58;#F6F2FF"
                dur="23s"
                repeatCount="indefinite"
              />
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              values="360 .5 .5;0 .5 .5"
              dur="80s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
