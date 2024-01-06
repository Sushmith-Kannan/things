import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const Container = ({paragraph }) => {
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
    <div ref={SomeRef} className=" p-4 mb-4"  style={{ opacity: 0, visibility: 'hidden', }}>
      <p className='mt-6 text-9xl xs:text-[2rem] sm:text-[3rem] font-fem text-center text-bubble '>{paragraph}</p>
    </div>
  );
};

const GridComponent = () => {
  const paragraphs = [
    'kinda nice to be good',
    'lovely day! could have been better',
    'cant feel my face sometimes',
    'pass me the melody then'
  ];

  

  const [container1Paragraph, setContainer1Paragraph] = useState('');
  const [container2Paragraph, setContainer2Paragraph] = useState('');


  useEffect(() => {
    const remainingParagraphs = [...paragraphs];
    setContainer1Paragraph(getRandomParagraph(remainingParagraphs));
    setContainer2Paragraph(getRandomParagraph(remainingParagraphs));

  }, []);

  const getRandomParagraph = (remainingParagraphs) => {
    const randomIndex = Math.floor(Math.random() * remainingParagraphs.length);
    const selectedParagraph = remainingParagraphs.splice(randomIndex, 1)[0];
    return selectedParagraph;
  };

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2  gap-4 w-auto h-20 xs:mt-[16rem] sm:mt-[15rem] mt-[30rem] ml-10 mr-10">
      <Container paragraph={container1Paragraph} />
      <Container  paragraph={container2Paragraph} />
      
    </div>
  );
};

export default GridComponent;
