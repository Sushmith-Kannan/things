import React from 'react'
import { useEffect, useRef } from 'react';

function Sunflower() {
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
    <>
    <div 
    ref={SomeRef}
    className='flex items-center justify-center mt-[30rem] xs:mt-[22rem]'
    style={{ opacity: 0,  }}
    >
      <svg  height="125" viewBox="0 0 667 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M552.247 75.2295C550.443 76.2007 533.796 82.9547 536.543 86.2336C542.32 93.1302 543.548 100.716 555.387 99.2501" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M544.638 78.688C549.129 75.5409 550.389 75.6361 555.348 74.929C561.523 74.0484 561.098 78.3915 557.574 80.8605C554.303 83.153 551.031 85.4455 547.759 87.7381C546.136 88.8756 540.562 88.3623 537.365 89.4029" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M233.247 83.0532C231.443 84.0244 214.796 90.7784 217.543 94.0573C223.32 100.954 224.548 108.54 236.387 107.074" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M225.639 86.5108C230.13 83.3637 231.39 83.4589 236.349 82.7518C242.524 81.8712 242.099 86.2143 238.575 88.6832C235.304 90.9758 232.032 93.2683 228.76 95.5608C227.137 96.6984 221.563 96.185 218.366 97.2256" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M152.783 52C141.323 66.7632 152.947 90.3854 149.441 105.846C148.857 108.423 170.044 101.711 173.551 99.2535" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M127.527 82.8099C136.487 77.5318 158.509 71.8526 166.244 80.028" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M175.562 64.8041C185.264 75.0583 177.675 89.2949 183.3 100.586C184.067 102.126 184.574 110.537 183.098 106.762C181.633 103.014 180.292 96.2003 182.135 92.4538C184.794 87.0499 197.544 81.7725 203.693 85.464C209.56 88.9867 210.466 99.3052 208.108 103.804" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M300.812 74.6954C294.659 70.7323 282.762 83.2203 287.712 88.4526C292.363 93.3685 309.329 83.8998 307.339 94.8853C306.572 99.1238 290.203 110.435 284.759 109.355C280.012 108.414 263.187 102.933 271.778 96.9129" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M313.889 77.2164C315.644 80.5266 314.506 107.869 321.476 104.329C326.621 101.716 338.778 101.161 337.993 94.2195C337.349 88.5252 340.491 81.9472 337.261 77.388" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M343.91 74.898C349.107 81.6708 350.312 92.7507 352.572 100.667C354.259 106.574 348.826 98.9764 348.885 98.0481C349.347 90.7526 354.987 85.1133 361.749 81.2305C367.466 77.9476 378.376 76.9466 381.871 82.9465C385.093 88.478 383.315 98.9859 384.64 105.042C385.475 108.861 391.532 114.276 385.952 114.735" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M402.921 45.9778C409.49 59.8495 408.722 79.966 409.619 94.4995C409.878 98.6879 408.83 103.518 410.09 107.674C410.199 108.033 409.027 105.896 409.311 104.931C412.329 94.6674 408.139 80.2665 407.201 69.4187C406.575 62.173 405.381 55.3443 404.967 48.4019C404.639 42.8959 432.279 47.8469 437.225 51.7477" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M389.004 84.8547C397.412 80.859 404.926 79.9234 414.104 79.7186" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M433.428 68C431.6 75.7753 431.854 84.9942 432.082 93.0456C432.216 97.7482 434.162 103.022 432.875 107.403" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M455.467 79.1176C451.1 82.1777 440.102 88.1801 445.334 93.7098C448.723 97.2927 458.168 103.558 463.301 104.011C473.366 104.898 475.839 92.3498 474.749 86.2081C473.639 79.9538 462.606 74.1154 456.775 78.2006" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M489.022 83.5393C484.121 86.9763 489.289 99.9682 496.096 99.7573C508.95 99.359 510.569 88.7524 505.039 81.2718C500.301 74.863 512.276 97.4843 520.632 99.7055C536.255 103.858 527.148 87.2449 522.694 81.2206" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M563.211 70.6768C569.384 77.2006 576.426 83.5103 581.845 90.4997C584.898 94.4374 585.181 99.944 585.982 104.457C586.632 108.118 579.091 107.69 578.014 104.213C574.74 93.6444 585.984 84.4218 593.385 77.5228C596.298 74.8077 598.227 62.6165 591.609 63.8884" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M34.5283 18C35.4943 44.8985 41.0651 71.3092 42.1544 98.1034C42.3037 101.775 43.452 106.139 43.081 109.487" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M39.3248 73.3496C40.0195 72.1707 40.7143 70.9919 41.4091 69.813C41.7809 69.182 42.1275 68.5135 42.5314 67.9087C43.0308 67.1606 43.4014 68.1268 43.9904 67.7956C46.776 66.2291 51.1266 66.1824 54.1323 66.8619C62.561 68.7672 71.2908 71.0451 70.4623 82.5319C70.0756 87.8936 65.6871 97.8158 61.6415 101.043C59.3875 102.841 56.5033 108.186 53.6389 108.125C52.7416 108.106 50.6646 108.416 49.8845 108.589C48.6426 108.864 47.7579 109.113 46.4679 109.399C45.7162 109.565 43.4135 111.3 44.4217 109.59" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M82.5693 78.4517C79.7169 83.2917 74.8668 93.2413 78.2573 99.3522C79.4721 101.542 82.7319 109.083 85.9294 108.571C90.7099 107.806 99.1402 104.669 102.194 99.4867" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M81.3392 82.3511C82.7236 80.0019 86.2429 72.7895 89.3236 75.1421C91.558 76.8484 96.2135 78.8462 94.1056 82.4229C92.824 84.5975 91.7363 86.5977 89.7368 88.0248C88.7518 88.7278 87.1844 91.1289 86.1062 91.3678C83.7716 91.8852 81.3933 96.8685 79.3644 96.5689" stroke="#39423E" strokeWidth="4" strokeLinecap="round"/>
<path d="M631 2C631.744 21.402 638.114 79.2423 633.08 60.2091" stroke="#39423E" strokeWidth="3" strokeLinecap="round"/>
<path d="M603 29C624.063 29 644.514 35.1452 665 38" stroke="#39423E" strokeWidth="3" strokeLinecap="round"/>
<path d="M609 15C621.498 22.6776 632.766 31.6424 644.28 40.2174C648.833 43.6081 654.111 47.1182 658 51" stroke="#39423E" strokeWidth="3" strokeLinecap="round"/>
<path d="M613 55C618.706 49.5002 624.242 43.7581 629.848 38.1508C635.543 32.4534 641.392 26.8581 646.967 21.0833C648.431 19.5675 650.758 17.719 651.152 15.7143C651.301 14.9558 656.809 11.9569 658 11" stroke="#39423E" strokeWidth="3" strokeLinecap="round"/>
</svg>
</div>

<p   className='font-custom text-center ml-36 mr-36 mt-10 xs:ml-4 xs:mr-2 xs:text-start text-2xl'>Stand there, chillin' and soaking up those good vibes.sway with the breeze. Dig deep roots in the good stuff, flex that resilience like in a hurricane.  Chill in the shadows, 'cause tomorrow's another chance . Be the sunflower ,be the sunflower ;) </p>
  </>
  )
}

export default Sunflower