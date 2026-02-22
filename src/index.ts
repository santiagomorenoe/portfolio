export type ProjectStatus = "Demo" | "Code" | "Working";

export interface Project {
  name: string;
  image: string;
  link: string;
  tags: string[];
  isFeatured: boolean;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: "Apple Iphone 3D Website",
    image: "/iphone.jpeg",
    link: "https://iphonewebsite-clone.netlify.app/",
    tags: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    isFeatured: true,
    status: "Demo",
  },
  {
    name: "Food Delivery App",
    image: "/foodapp.jpeg",
    link: "", // TODO: Add GitHub repo URL
    tags: [
      "/expo.svg",
      "/appwrite.svg",
      "/ts.svg",
      "/reactn.svg",
      "/figma.svg",
    ],
    isFeatured: true,
    status: "Working",
  },
  {
    name: "AI Translate Web App",
    image: "/translate.jpeg",
    link: "https://syntora-translate-ai.vercel.app/",
    tags: ["/react.svg", "/next.svg", "/js.svg", "/gemini.svg", "/tail.svg"],
    isFeatured: true,
    status: "Demo",
  },
  {
    name: "Web Maker's",
    image: "/webmakers.jpeg",
    link: "https://iwebmakers.netlify.app/",
    tags: ["/next.svg", "/tail.svg", "/ts.svg", "/frm.svg", "/figma.svg"],
    isFeatured: true,
    status: "Demo",
  },
  {
    name: "Job Portal",
    image: "/jobportal.jpeg",
    link: "",
    tags: ["/react.svg", "/next.svg", "/js.svg", "/gemini.svg", "/tail.svg"],
    isFeatured: true,
    status: "Working",
  },
  {
    name: "Social Media App with Dashboard",
    image: "/socialmedia.jpeg",
    link: "https://github.com/santiagomorenoe/social-media-app",
    tags: ["/react.svg", "/next.svg", "/js.svg", "/gemini.svg", "/tail.svg"],
    isFeatured: true,
    status: "Code",
  },
  {
    name: "System Desing with Analytics",
    image: "/systemdesing.jpeg",
    link: "https://component-library-technical-test.vercel.app/",
    tags: ["/next.svg", "/tail.svg", "/ts.svg", "/figma.svg"],
    isFeatured: true,
    status: "Demo",
  },
  {
    name: "Syntora Website",
    image: "/synnn.jpeg",
    link: "https://syntora.com.mx/",
    tags: ["/next.svg", "/tail.svg", "/ts.svg", "/figma.svg"],
    isFeatured: true,
    status: "Demo",
  },
];
