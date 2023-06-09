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

export const Podium = ({ width, height }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height}
            width={width}
        >
            <path
                d="M23.67,10.23,22.62,8.12a1.89,1.89,0,0,0-1.62-1H17.5v-.5a.84.84,0,0,0-.11-.38L16.12,3.12a1.89,1.89,0,0,0-1.62-1h-5A1.9,1.9,0,0,0,7.85,3.19L6.61,6.25a.88.88,0,0,0-.11.39v.49H3a1.89,1.89,0,0,0-1.62,1l-1,2.11A3.54,3.54,0,0,0,0,11.62v8.75a1.5,1.5,0,0,0,1.5,1.5h21a1.5,1.5,0,0,0,1.5-1.5V11.62A3.54,3.54,0,0,0,23.67,10.23Zm-2.42,7.15a2,2,0,0,1-3.93.53.74.74,0,0,1,.52-.92.76.76,0,0,1,.93.52.51.51,0,0,0,.48.37.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5.75.75,0,1,1,0-1.5.5.5,0,0,0,.5-.5.5.5,0,0,0-1-.13.76.76,0,0,1-.92.53.75.75,0,0,1-.53-.92,2,2,0,1,1,3.49,1.77A1.94,1.94,0,0,1,21.25,17.38Zm-15.5.5a.75.75,0,0,1,0,1.5H3.25a.75.75,0,0,1-.58-1.22l2.11-2.64A1.05,1.05,0,0,0,5,14.88a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5.75.75,0,1,1-1.5,0,2,2,0,0,1,4,0A2.59,2.59,0,0,1,6,16.46L4.81,17.88Zm5.73-6.71a.75.75,0,0,1-1-1.16l1.09-.9A1,1,0,0,1,12.67,9a1,1,0,0,1,.58.91v3.71h.25a.75.75,0,0,1,0,1.5H11.25a.75.75,0,0,1,0-1.5h.5V10.94Zm6.27-.54a.25.25,0,0,1-.25-.25v-1a.25.25,0,0,1,.25-.25h3a.25.25,0,0,1,.22.13l.5,1a.25.25,0,0,1,0,.25.27.27,0,0,1-.21.12ZM6.25,9.13a.24.24,0,0,1,.18.07.29.29,0,0,1,.07.18v1a.26.26,0,0,1-.07.17.25.25,0,0,1-.18.08H2.77a.26.26,0,0,1-.21-.11.25.25,0,0,1,0-.25l.5-1a.25.25,0,0,1,.22-.13ZM9.56,4.28a.25.25,0,0,1,.23-.15h4.42a.25.25,0,0,1,.23.15L15,5.53a.26.26,0,0,1,0,.23.27.27,0,0,1-.21.12H9.27a.27.27,0,0,1-.21-.12.26.26,0,0,1,0-.23Z"
                fill="currentColor"
            />
        </svg>
    );
};
