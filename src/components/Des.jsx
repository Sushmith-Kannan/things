import React, { useEffect, useRef } from 'react';
import 'animate.css/animate.min.css';

function Des() {
  const DesRef = useRef(null);

  useEffect(() => {
    const DesElement = DesRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          DesElement.style.opacity = 1;
          DesElement.style.visibility = 'visible';
          DesElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower');
        } else {
          DesElement.style.opacity = 0;
          DesElement.style.visibility = 'hidden';
          DesElement.classList.remove('animate__animated', 'animate__fadeIn', 'animate__slower');
        }
      });
    }, options);

    observer.observe(DesElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1
        ref={DesRef}
        className="font-custom text-bubble text-7xl xs:text-4xl sm:text-7xl mt-[40rem] xs:mt-80 xs:ml-9  sm:mt-7 ml-32 "
        style={{ opacity: 0, visibility: 'hidden', }}
      >
      find my CV.
      </h1>
      <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 ml-36 mt-5 xs:ml-9 ">Resume</button>
    </div>
  );
}

export default Des;
