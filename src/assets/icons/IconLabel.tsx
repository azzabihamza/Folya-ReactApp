interface IconLabelProps {
    color?: string;
}

export default function IconLabel (props: IconLabelProps) {
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
          <g clipPath="url(#clip0_1_999)">
            <path
              d="M 20.457 4.555 L 12.486 0.126 C 12.338 0.043 12.17 4.578e-05 12 4.578e-05 C 11.83 4.578e-05 11.663 0.043 11.514 0.126 L 3.543 4.555 C 3.076 4.815 2.686 5.195 2.415 5.656 C 2.143 6.117 2 6.642 2 7.177 V 19 C 2.002 20.326 2.529 21.597 3.466 22.534 C 4.404 23.471 5.675 23.999 7 24 H 17 C 18.326 23.999 19.597 23.471 20.534 22.534 C 21.471 21.597 21.999 20.326 22 19 V 7.177 C 22 6.642 21.857 6.117 21.586 5.656 C 21.314 5.195 20.925 4.815 20.457 4.555 V 4.555 Z M 20 19 C 20 19.796 19.684 20.559 19.121 21.121 C 18.559 21.684 17.796 22 17 22 H 7 C 6.204 22 5.441 21.684 4.879 21.121 C 4.316 20.559 4 19.796 4 19 V 7.177 C 4 6.998 4.047 6.822 4.138 6.668 C 4.228 6.514 4.359 6.387 4.515 6.3 L 12 2.144 L 19.486 6.3 C 19.642 6.387 19.773 6.514 19.863 6.668 C 19.953 6.823 20.001 6.998 20 7.177 V 19 Z"
              fill="#4F4F4F"
             />
            <path
              d="M 12 8.5 C 12.828 8.5 13.5 7.829 13.5 7 C 13.5 6.172 12.828 5.5 12 5.5 C 11.172 5.5 10.5 6.172 10.5 7 C 10.5 7.829 11.172 8.5 12 8.5 Z"
              fill={props.color || "#4F4F4F"}
             />
          </g>
          <defs>
            <clipPath id="clip0_1_999">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
}