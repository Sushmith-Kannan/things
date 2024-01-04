import React, { useEffect, useRef } from 'react';
import 'animate.css/animate.min.css';

function Some() {
  const SomeRef = useRef(null);

  useEffect(() => {
    const SomeElement = SomeRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          SomeElement.style.opacity = 1;
          SomeElement.style.visibility = 'visible';
          SomeElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower');
        } else {
          SomeElement.style.opacity = 0;
          SomeElement.style.visibility = 'hidden';
          SomeElement.classList.remove('animate__animated', 'animate__fadeIn', 'animate__slower');
        }
      });
    }, options);

    observer.observe(SomeElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1
        ref={SomeRef}
        className="font-fem text-bubble text-9xl xs:text-6xl sm:text-7xl mt-36 xs:mt-10  sm:mt-7 text-center "
        style={{ opacity: 0, visibility: 'hidden', }}
      >
      life's sweet like cinnamon.
      </h1>
      
    </div>
  );
}

export default Some;
