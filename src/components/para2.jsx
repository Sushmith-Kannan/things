import React, { useEffect, useRef } from 'react';
import 'animate.css/animate.min.css';

function Para2() {
  const Para2Ref = useRef(null);

  useEffect(() => {
    const Para2Element = Para2Ref.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Para2Element.style.opacity = 1;
          Para2Element.style.visibility = 'visible';
          Para2Element.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower');
        } else {
          Para2Element.style.opacity = 0;
          Para2Element.style.visibility = 'hidden';
          Para2Element.classList.remove('animate__animated', 'animate__fadeIn', 'animate__slower');
        }
      });
    }, options);

    observer.observe(Para2Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1
        ref={Para2Ref}
        className="font-late text-bubble text-9xl mr-20 xs:text-4xl sm:text-7xl mt-[35rem] xs:mt-80 xs:ml-9  sm:mt-80 ml-28 "
        style={{ opacity: 0, visibility: 'hidden', }}
      >
            sush.dev
      </h1>

    </div>
  );
}

export default Para2;
