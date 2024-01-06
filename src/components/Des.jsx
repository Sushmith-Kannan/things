import React, { useEffect, useRef } from 'react';
import 'animate.css/animate.min.css';

function Des() {
  const redirectToGitHub = () => {
    // Replace 'your-username' and 'your-repo' with the actual GitHub username and repository name
    const githubUrl = 'https://github.com/Sushmith-Kannan';

    // Redirect to GitHub page
    window.location.href = githubUrl;
  };
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
        className="font-custom text-bubble text-7xl xs:text-4xl sm:ml-24 sm:text-5xl mt-[40rem] xs:mt-80 xs:ml-9  sm:mt-[20rem] ml-32 "
        style={{ opacity: 0, visibility: 'hidden', }}
      >
      find my works.
      </h1>
      <button type="button" className="text-green hover:text-white border hover:bg-green  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-36 mt-5 xs:ml-9 sm:ml-28 " onClick={redirectToGitHub}>github</button>
    </div>
  );
}

export default Des;
