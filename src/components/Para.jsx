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
        className="font-custom text-bubble text-[10rem] xs:text-6xl sm:text-7xl mt-[25rem] xs:mt-80  sm:mt-7 text-center "
        style={{ opacity: 0, visibility: 'hidden', }}
      >
      skadoosh
      </h1>
      <h2 className='text-center relative bottom-16 text-white xs:ml-3 xs:mr-3 xs:text-sm xs:mt-20 sm:mt-20 sm:ml-8 sm:mr-8 ml-48 mr-48'>"Dream big, stay real, and enjoy the ride – it's all about creating your own vibes and making memories that feel just right!"
</h2>

    </div>
  );
}

export default Some;
