import bgImg from "../images/services/bg.jpg";
import bgStyleImg from "../images/common/s2.png";
import slideImg1 from "../images/services/s1.png";
import slideImg2 from "../images/services/s2.png";

// Services Data
export const ServicesData = {
  title: "Products & Services",
  title2:
    "Our products in Zistilo, We offer a wide range of service and scientific applications that suit the needs of different groups.",
  bgimage: bgImg,
  bgstyleimg: bgStyleImg,
  ServicesList: [
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M64 80c-8.8 0-16 7.2-16 16l0 162c5.1-1.3 10.5-2 16-2l384 0c5.5 0 10.9 .7 16 2l0-162c0-8.8-7.2-16-16-16L64 80zM48 320l0 96c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L64 304c-8.8 0-16 7.2-16 16zM0 320L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>',
      title: "Zistilo Drive",
      brief: "Secure cloud storage solution for data and files.",
      slidimg1: slideImg1,
      slidimg2: slideImg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block "  viewBox="0 0 72 72"  xmlns=http://www.w3.org/2000/svg><path d="M67.75 15.27v-7.4c0-2.15-1.75-3.9-3.89-3.9H8.15c-2.14 0-3.89 1.75-3.89 3.9v49.39c0 2.15 1.75 3.89 3.89 3.89h26.39v1.59c0 .12.03.24.08.34l2.23 4.35c.19.37.64.52 1.01.33s.51-.64.33-1.01l-2.14-4.19V43.84c0-.75.61-1.35 1.35-1.35s1.35.61 1.35 1.35v8.52c0 .21.13.45.28.59.22.21.54.26.81.14.28-.12.45-.39.45-.69v-1.6c0-.75.61-1.35 1.35-1.35s1.35.61 1.35 1.35v.93c0 .41.34.75.75.75s.75-.34.75-.75c0-.75.61-1.35 1.35-1.35s1.35.61 1.35 1.35v.93c0 .41.34.75.75.75s.75-.34.75-.75c0-.75.61-1.35 1.35-1.35s1.35.61 1.35 1.35v10.42L49.74 67a.75.75 0 00.69 1.04c.29 0 .57-.17.69-.46l1.71-4.06c.04-.09.06-.19.06-.29v-2.06h10.95c2.15 0 3.89-1.75 3.89-3.89v-42c.02 0 .02 0 .02-.01zm-59.6-9.8h55.71c1.32 0 2.39 1.08 2.39 2.4v6.65H28.73c-1.19-2.3-3.89-3.82-6.92-3.82s-5.72 1.52-6.91 3.82H5.76V7.87c0-1.32 1.07-2.4 2.39-2.4zm55.71 54.19H52.91v-7.01a2.855 2.855 0 00-4.55-2.29 2.85 2.85 0 00-2.51-1.49c-.64 0-1.23.21-1.7.56a2.85 2.85 0 00-2.51-1.49c-.51 0-.99.13-1.4.37v-4.47c0-1.57-1.28-2.85-2.85-2.85s-2.85 1.28-2.85 2.85v15.82H8.15a2.39 2.39 0 01-2.39-2.39V16.02h9.6c.07 0 .14-.02.21-.04.22-.07.39-.21.48-.42.82-2.01 3.13-3.36 5.76-3.36s4.95 1.35 5.77 3.36c.01.01.01.02.02.03.03.07.08.13.13.19.02.02.04.03.06.05.05.04.1.08.16.11.02.01.05.02.07.03.08.03.17.05.26.05h37.97v41.25c0 1.32-1.08 2.39-2.39 2.39z"/><path d="M46.19 11.21h1.45c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.45a.749.749 0 100 1.5zm5.66 0h1.45c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.45c-.41 0-.75.34-.75.75s.34.75.75.75zm5.67 0h1.45c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.45a.749.749 0 100 1.5zM37.39 27.13c1.91 0 3.47-1.56 3.47-3.47s-1.56-3.47-3.47-3.47-3.47 1.56-3.47 3.47c0 1.92 1.55 3.47 3.47 3.47zm0-5.44c1.09 0 1.97.88 1.97 1.97s-.88 1.97-1.97 1.97-1.97-.88-1.97-1.97c0-1.08.88-1.97 1.97-1.97zm-.75 7.37v1.36c0 .41.34.75.75.75s.75-.34.75-.75v-1.36c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm18.25.22c0-.93-.36-1.8-1.02-2.45-1.31-1.31-3.59-1.31-4.91 0a3.483 3.483 0 000 4.91c.66.66 1.53 1.02 2.45 1.02.93 0 1.8-.36 2.45-1.02.67-.66 1.03-1.53 1.03-2.46zm-2.08 1.4c-.74.74-2.04.74-2.79 0-.77-.77-.77-2.02 0-2.78.37-.37.87-.58 1.39-.58.53 0 1.02.2 1.39.58a1.969 1.969 0 01.01 2.78zm-4.68 1.89a.754.754 0 00-1.06 0l-.96.96c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l.96-.96c.29-.29.29-.76 0-1.06zm7.63 6.7c-1.91 0-3.47 1.56-3.47 3.47s1.56 3.47 3.47 3.47 3.47-1.56 3.47-3.47-1.55-3.47-3.47-3.47zm0 5.44c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97 1.97.88 1.97 1.97-.88 1.97-1.97 1.97zm-5.4-2.72H49c-.41 0-.75.34-.75.75s.34.75.75.75h1.36a.749.749 0 100-1.5zm-4.18 0h-.63a8.054 8.054 0 00-1.44-4.37c.03-.02.07-.03.09-.06l.96-.96c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-.95.94a8.172 8.172 0 00-5.03-2.37v-.86c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.86a8.18 8.18 0 00-5.24 2.59l-.76-.76c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l.9.9A8.08 8.08 0 0029.2 42h-.9c-.41 0-.75.34-.75.75s.34.75.75.75h.99c.18 1.17.6 2.3 1.27 3.3a.74.74 0 001.04.21c.34-.23.44-.69.21-1.04a6.635 6.635 0 01-1.11-3.69c0-3.69 3-6.69 6.68-6.69 3.69 0 6.69 3 6.69 6.69 0 1.24-.34 2.45-.99 3.5a.747.747 0 101.27.79c.58-.94.95-1.98 1.12-3.06h.71c.41 0 .75-.34.75-.75s-.33-.77-.75-.77zM25.79 27.23c-1.31-1.31-3.6-1.31-4.91 0-.66.66-1.02 1.53-1.02 2.45s.36 1.8 1.02 2.45 1.53 1.02 2.45 1.02c.93 0 1.8-.36 2.45-1.02 1.36-1.34 1.36-3.55.01-4.9zm-1.07 3.85c-.75.74-2.04.74-2.79 0-.37-.37-.58-.87-.58-1.39s.21-1.02.58-1.39.87-.58 1.39-.58c.53 0 1.02.2 1.39.58.78.76.78 2.01.01 2.78zm3.39 4.14c.19 0 .38-.07.53-.22.29-.29.29-.77 0-1.06l-.96-.96c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l.96.96c.15.15.34.22.53.22zm-9.38 4.05c-1.91 0-3.47 1.56-3.47 3.47s1.56 3.47 3.47 3.47 3.47-1.56 3.47-3.47-1.56-3.47-3.47-3.47zm0 5.44c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97 1.97.88 1.97 1.97-.89 1.97-1.97 1.97zm6.76-2.72h-1.36c-.41 0-.75.34-.75.75s.34.75.75.75h1.36c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/></svg>',
      title: "Zistilo Analytica",
      brief: "Advanced data analysis software for researchers and academics.",
      slidimg1: slideImg1,
      slidimg2: slideImg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block "  viewBox="0 0 32 32"  xmlns=http://www.w3.org/2000/svg><path d="M20.5 4h-3a.5.5 0 010-1h3a.5.5 0 010 1z"/><path d="M24.5 31h-11a2.503 2.503 0 01-2.5-2.5v-4a.5.5 0 011 0v4c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-25c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5v5a.5.5 0 11-1 0v-5C11 2.122 12.121 1 13.5 1h11C25.879 1 27 2.122 27 3.5v25c0 1.378-1.121 2.5-2.5 2.5z"/><path d="M15.5 23h-8A2.503 2.503 0 015 20.5v-8C5 11.122 6.121 10 7.5 10h8c1.379 0 2.5 1.122 2.5 2.5v8c0 1.378-1.121 2.5-2.5 2.5zm-8-12c-.827 0-1.5.673-1.5 1.5v8c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5z"/><path d="M14.5 21h-6a.5.5 0 010-1h6a.5.5 0 010 1zm-3-2a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z"/><path d="M11.5 19a.502.502 0 01-.354-.146l-1.5-1.5a.5.5 0 01.707-.707l1.146 1.146 1.146-1.146a.5.5 0 01.707.707l-1.5 1.5A.494.494 0 0111.5 19zm5.5 7h-.101a.5.5 0 010-1H17a.5.5 0 010 1zm2 0h-.101a.5.5 0 010-1H19a.5.5 0 010 1zm2 0h-.101a.5.5 0 010-1H21a.5.5 0 010 1z"/></svg>',
      title: "Zistilo Health Monitor",
      brief: "Health and fitness monitoring app.",
      slidimg1: slideImg1,
      slidimg2: slideImg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block "height=480pt viewBox="0 0 640 512"width=480pt xmlns=http://www.w3.org/2000/svg><path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"/></svg>',
      title: "Zistilo Game Studio",
      brief: "Game development platform for programmers and designers.",
      slidimg1: slideImg1,
      slidimg2: slideImg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
  ],
};
