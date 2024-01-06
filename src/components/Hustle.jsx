import React from 'react'

function Hustle() {
    const text = "hustle. \n conquer. ";
  return (
    <div>

<h1 className="font-late text-bubble flex flex-col items-center justify-center h-screen text-9xl xs:text-7xl sm:text-8xl text-center   overflow relative">
        
        {text.split('\n').map((line, lineIndex) => (
          <span key={`line-${lineIndex}`}>
            {line.split('').map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${(lineIndex * 0.1) + (index * 0.05)}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
          </span>
        ))}
         
      </h1>

     

        </div>
  )
}

export default Hustle