import React from "react";

export const Home = ({ width, height, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            height={height}
            width={width}
            className={className}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.70711 1.29289C7.31658 0.902369 6.68342 0.902369 6.29289 1.29289L0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711C0.683417 9.09763 1.31658 9.09763 1.70711 8.70711L2 8.41421V13C2 13.5523 2.44772 14 3 14H6V11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11V14H11C11.5523 14 12 13.5523 12 13V8.41421L12.2929 8.70711C12.6834 9.09763 13.3166 9.09763 13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.70711 1.29289Z"
                clipRule="evenodd"
            />
        </svg>
    );
};