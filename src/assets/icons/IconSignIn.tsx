interface IconSignInProps {
    color?: string;
}

export default function IconSignIn (props: IconSignInProps) {
    return (
        <div className="w-6 h-6">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1021)">
            <path
              d="M 7 22 H 5 C 4.204 22 3.441 21.684 2.879 21.121 C 2.316 20.559 2 19.796 2 19 V 5 C 2 4.204 2.316 3.441 2.879 2.879 C 3.441 2.316 4.204 2 5 2 H 7 C 7.265 2 7.52 1.895 7.707 1.707 C 7.895 1.52 8 1.265 8 1 C 8 0.735 7.895 0.48 7.707 0.293 C 7.52 0.105 7.265 0 7 0 L 5 0 C 3.674 0.002 2.404 0.529 1.466 1.466 C 0.529 2.404 0.002 3.674 0 5 L 0 19 C 0.002 20.326 0.529 21.596 1.466 22.534 C 2.404 23.471 3.674 23.998 5 24 H 7 C 7.265 24 7.52 23.895 7.707 23.707 C 7.895 23.52 8 23.265 8 23 C 8 22.735 7.895 22.48 7.707 22.293 C 7.52 22.105 7.265 22 7 22 Z"
              fill={props.color || "#4F4F4F"}
             />
            <path
              d="M 23 11 L 7.223 11.032 C 7.311 10.869 7.42 10.719 7.549 10.586 L 11.428 6.707 C 11.523 6.615 11.6 6.505 11.652 6.383 C 11.704 6.261 11.732 6.129 11.733 5.997 C 11.734 5.864 11.709 5.732 11.659 5.609 C 11.608 5.486 11.534 5.375 11.44 5.281 C 11.346 5.187 11.235 5.113 11.112 5.062 C 10.989 5.012 10.857 4.987 10.724 4.988 C 10.592 4.989 10.46 5.017 10.338 5.069 C 10.216 5.122 10.106 5.198 10.014 5.293 L 6.133 9.172 C 5.383 9.922 4.962 10.94 4.962 12 C 4.962 13.061 5.383 14.078 6.133 14.828 L 10.012 18.707 C 10.104 18.803 10.214 18.879 10.336 18.931 C 10.458 18.984 10.59 19.011 10.722 19.013 C 10.855 19.014 10.987 18.988 11.11 18.938 C 11.233 18.888 11.344 18.814 11.438 18.72 C 11.532 18.626 11.606 18.514 11.657 18.391 C 11.707 18.268 11.732 18.137 11.731 18.004 C 11.73 17.871 11.702 17.74 11.65 17.618 C 11.598 17.496 11.521 17.386 11.426 17.293 L 7.547 13.414 C 7.435 13.299 7.337 13.171 7.256 13.032 L 23 13 C 23.265 13 23.519 12.895 23.707 12.707 C 23.895 12.52 24 12.265 24 12 C 24 11.735 23.895 11.481 23.707 11.293 C 23.519 11.106 23.265 11 23 11 Z"
              fill={props.color || "#4F4F4F"}
             />
          </g>
          <defs>
            <clipPath id="clip0_1_1021">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
}