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

export const Person = ({ width, height, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            height={height}
            width={width}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.5 3.5C10.5 5.433 8.93301 7 7.00001 7C5.06702 7 3.50001 5.433 3.50001 3.5C3.50001 1.567 5.06702 0 7.00001 0C8.93301 0 10.5 1.567 10.5 3.5ZM0.320496 13.4C1.2125 10.56 3.86569 8.50003 7.00002 8.50003C10.1343 8.50003 12.7875 10.56 13.6795 13.4C13.7752 13.7044 13.5371 14 13.218 14H0.782057C0.462944 14 0.224872 13.7044 0.320496 13.4Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
