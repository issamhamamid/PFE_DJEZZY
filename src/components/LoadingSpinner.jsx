import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64 h-64 border-4 border-white rounded-full animate-spin">
        <svg
          className="w-full h-full text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.53 3.04999C18.84 2.35999 17.91 1.99999 16.98 1.99999C16.05 1.99999 15.12 2.35999 14.43 3.04999L12 5.47999L9.57001 3.04999C8.88001 2.35999 7.95001 1.99999 7.02001 1.99999C6.09001 1.99999 5.16001 2.35999 4.47001 3.04999C3.77999 3.73999 3.41999 4.66999 3.41999 5.60999C3.41999 6.54999 3.77999 7.47999 4.47001 8.16999L6.90001 10.6L4.47001 13.03C3.77999 13.72 3.41999 14.65 3.41999 15.58C3.41999 16.51 3.77999 17.44 4.47001 18.13C5.16001 18.82 6.09001 19.18 7.02001 19.18C7.95001 19.18 8.88001 18.82 9.57001 18.13L12 15.7L14.43 18.13C15.12 18.82 16.05 19.18 16.98 19.18C17.91 19.18 18.84 18.82 19.53 18.13C20.22 17.44 20.58 16.51 20.58 15.58C20.58 14.65 20.22 13.72 19.53 13.03L17.1 10.6L19.53 8.16999C20.22 7.47999 20.58 6.54999 20.58 5.60999C20.58 4.66999 20.22 3.73999 19.53 3.04999Z" />
        </svg>
      </div>
    </div>
  );
}

export default LoadingSpinner;
