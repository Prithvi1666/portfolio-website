export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "car-rental",
    title: "Car Rental",
    category: "Website Platform",
    shortDescription: "A modern web application designed to simplify the car rental process with a seamless booking experience.",
    description: [
      "The Car Rental App is a responsive web application built to streamline the process of browsing and booking rental cars. It provides an intuitive interface where users can view available cars, compare rental options, and make bookings quickly.",
      "The platform ensures a smooth experience by offering filtering options, responsive layouts, and easy navigation. Users can explore cars based on price, type, and availability, making the process efficient and user-friendly.",
      "For car rental providers, the application serves as a digital showcase of available vehicles, ensuring better customer engagement and smoother booking management.",
    ],
    features: [
      "Browse a wide range of cars with detailed information and pricing.",
      "Search and filter functionality based on location, car type, or budget.",
      "Responsive and mobile-friendly design for smooth access across devices.",
      "Simple booking workflow with confirmation.",
      "Clean and modern UI built with Tailwind CSS.",
      
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "Vercel (Deployment)"],
    coverImage: "/carRental Home page.png",
    thumbnailImage: "/carRental Home page.png",
    gallery: [
      { url: "/login page.png", caption: "Login Page" },
      { url: "/carRental Home page.png", caption: "Home Screen " },
      { url: "/featured Vehicles page.png", caption: "Featured Vehicles" },
      { url: "/explore all cars pages.png", caption: "Exploar Cars" },
      { url: "/footer page.png", caption: "Footer page" },
      { url: "/available cars page.png", caption: "Available cars" },
      { url: "/my bookings page.png", caption: "My Bookings" },
      { url: "/admin dashboard page.png", caption: "Admin Dashboard" },
      { url: "/add new car page.png", caption: "Add New Car" },
      { url: "/manage car page.png", caption: "Manage Cars" },
      { url: "/manage booking page.png", caption: "Manage Booking" },
    ],
    timeline: "5 weeks (Q2 2025)",
    role: "Frontend Developer & UI/UX Designer",
    liveUrl: "https://car-rental-project-ruby.vercel.app/",
    githubUrl: "https://github.com/Prithvi1666/CarRental-Project",
    relatedProjects: [
      {
        slug: "funngro-reimagine",
        title: "funngro",
        category: "Web Application-ByteBrush Reimagine",
        image: "/f-name page.png",
      },
      {
        slug: "agency-ai",
        title: "Agency AI",
        category: "AI Website",
        image: "/ai-home page.png",
      },
    ],
  },
  {
    id: 2,
    slug: "finance-dashboard",
    title: "funngro",
    category: "Web Application-ByteBrush Reimagine",
    shortDescription:
      "A creative web platform designed to showcase and reimagine innovative design and development ideas.",
    description: [
      "The ByteBrush Reimagine Project is a modern and interactive web application built during a hackathon challenge to highlight creativity, design thinking, and technical implementation.",
      "The platform demonstrates how innovative concepts can be transformed into a functional and visually appealing digital product.",
      "It combines sleek UI/UX with responsive layouts to deliver a smooth browsing experience. The goal was to create an engaging platform that not only looks great but also serves as a proof of concept for collaborative design and development.",
    ],
    features: [
      "Engaging and visually rich landing page showcasing project highlights.",
      "Interactive sections with smooth transitions and animations.",
      "Fully responsive design optimized for desktop and mobile devices.",
      "Minimal yet modern UI for a clean user experience.",
      "Deployment with seamless accessibility via Vercel.",
      
      
    ],
    technologies: ["React.js", "JavaScript", "GSAP", "Tailwind CSS", "HTML5", "Vercel (Deployment)"],
    coverImage: "/f-name page.png",
    thumbnailImage: "/f-home page.png",
    gallery: [
      { url: "/f-home page.png", caption: "Home page" },
      { url: "/f-mid page.png", caption: "mid page" },
      { url: "/f-2nd mid page.png", caption: "2nd mid page" },
      { url: "/f-3rd mid page.png", caption: "3rd mid page" },
      { url: "/f-4th mid page.png", caption: "4rd mid page" },
      { url: "/f-5th mid page.png", caption: "5rd mid page" },
      { url: "/f-6th mid page.png", caption: "6rd mid page" },
      { url: "/f-7th mid page.png", caption: "7rd mid page" },
      { url: "/f-8th last page.png", caption: "8rd mid page" },
      { url: "/f-footer page.png", caption: "footer page" },
    ],
    timeline: "4 months (Q3 2025)",
    role: "Frontend Developer & UI/UX Designer",
    liveUrl: "https://bytebrushreimagine-round2-main.vercel.app/",
    githubUrl: "https://github.com/Prithvi1666/bytebrushreimagineRound2-main",
    relatedProjects: [
      {
        slug: "car-rental",
        title: "Car Rental",
        category: "Website Platform",
        image: "/carRental Home page.png",
      },
      {
        slug: "agency-ai",
        title: "Agency AI",
        category: "AI Website",
        image: "/ai-home page.png",
      },
    ],
  },
  {
    id: 3,
    slug: "Agency-AI",
    title: "Agency AI",
    category: "Ai website",
    shortDescription:
      "A modern AI-powered platform designed with both Light & Dark themes for a seamless user experience.",
    description: [
      "The Agency AI Project is an AI-powered web application that demonstrates how agencies can enhance their workflow using intelligent digital solutions.",
      "The unique part of this project is the Dark Mode & Light Mode toggle, providing users with theme flexibility while keeping the UI consistent and engaging.",
      "The platform merges minimal design, smooth animations, and responsiveness to create a professional yet futuristic feel.",
    ],
    features: [
      "AI-powered web platform with interactive landing page.",
      "Dark Mode & Light Mode switch for theme customization.",
      "Responsive UI optimized for mobile and desktop devices.",
      "Smooth performance with React.js and Tailwind CSS.",
      "Deployment with seamless accessibility via Vercel.",
      
    ],
    technologies: ["Figma", "React.js", "HTML5", "JavaScript","Tailwind CSS (Dark Mode + Light Mode)", "Vercel (Deployment)"],
    coverImage: "/ai-home page.png",
    thumbnailImage: "/ai-home page.png",
    gallery: [
      { url: "/ai-home page.png", caption: "Home page " },
      { url: "/ai-dark mood page.png", caption: "dark mood page " },
      { url: "/ai-2nd page.png", caption: "2nd page " },
      { url: "/ai-2nd dark mood page.png", caption: "2nd dark page " },
      { url: "/ai-3rd page.png", caption: "3rd page " },
      { url: "/ai-4th page.png", caption: "4th page " },
      { url: "/ai-5th page.png", caption: "5th page " },
      { url: "/ai-footer page.png", caption: "footer page " },
 
    ],
    client: "Personal Project",
    timeline: "1 months (Q3 2025)",
    role: "Frontend Developer & UI/UX Designer",
    liveUrl: "https://agency-ai-rho-tan.vercel.app/",
    githubUrl: "https://github.com/Prithvi1666/agency-ai",
    relatedProjects: [
      {
        slug: "funngro-reimagine",
        title: "funngro",
        category: "Web Application-ByteBrush Reimagine",
        image: "/f-name page.png",
      },
      {
        slug: "car-rental",
        title: "Car Rental",
        category: "Website Platform for Car Rentals",
        image: "/carRental Home page.png",
      },
    ],
  },

  {
  "id": 4,
  "slug": "background-removal-app",
  "title": "Background Removal App",
  "category": "AI Tool",
  "shortDescription": "A smart AI-powered tool that removes image backgrounds instantly with Dark & Light theme support.",
  "description": [
    "The Background Removal App is a web-based AI tool designed to help users remove image backgrounds quickly and efficiently.",
    "With just a single upload, users can generate a transparent background image without any manual editing.",
    "The app is built with a clean and responsive UI and supports Dark Mode & Light Mode for a personalized user experience."
  ],
  "features": [
    "AI-powered automatic background removal for uploaded images.",
    "Dark Mode & Light Mode toggle for flexible viewing.",
    "Simple and intuitive interface for easy usage.",
    "Fast, accurate, and responsive performance.",
    "Accessible on desktop and mobile devices."
  ],
  "technologies": [
    "React.js",
    "HTML5",
    "JavaScript",
    "Tailwind CSS (Dark Mode + Light Mode)",
    "AI/ML API for Background Removal",
    "Vercel (Deployment)"
  ],
  "coverImage": "/bg-front-page.png",
  "thumbnailImage": "/bg-front-page.png",
  "gallery": [
    { "url": "/bg-front-page.png", "caption": "Home Page" },
    { "url": "/bg-2nd-page.png", "caption": "2nd-page" },
    { "url": "/bg-3rd-page.png", "caption": "3rd-page" },
    { "url": "/bg-4th-page.png", "caption": "4th-page" },
    { "url": "/bg-5th-page.png", "caption": "5th-page" }
  ],
  "client": "Personal Project",
  "timeline": "2 weeks (Q3 2024)",
  "role": "Frontend Developer & UI/UX Designer",
  "liveUrl": "https://bg-removal-alpha-seven.vercel.app/",
  "githubUrl": "https://github.com/Prithvi1666/bg-removal",
  "relatedProjects": [
    {
      "slug": "agency-ai",
      "title": "Agency AI",
      "category": "AI Website",
      "image": "/ai-home page.png"
    },
    {
      "slug": "car-rental",
      "title": "Car Rental",
      "category": "Website Platform for Car Rentals",
      "image": "/carRental Home page.png"
    }
  ]
},

 {
  "id": 5,
  "slug": "superfinal-master",
  "title": "SuperFinal Master",
  "category": "Web Application",
  "shortDescription": "A modern and responsive web platform built to deliver smooth user experiences with a clean interface and advanced features.",
  "description": [
    "The SuperFinal Master Project is a responsive web application designed to demonstrate modern UI/UX practices and efficient frontend development.",
    "It provides a professional layout, smooth navigation, and adaptability for multiple use cases.",
    "The platform emphasizes responsiveness, minimal design, and performance optimization to deliver a seamless experience across devices."
  ],
  "features": [
    "Responsive and mobile-friendly web design.",
    "Clean and minimal UI with smooth navigation.",
    "Fast performance powered by React.js and Tailwind CSS.",
    "Dark Mode & Light Mode theme support.",
    "Deployed on Vercel for global accessibility."
  ],
  "technologies": [
    "React.js",
    "HTML5",
    "JavaScript",
    "Tailwind CSS (Dark Mode + Light Mode)",
    "Vercel (Deployment)"
  ],
  "coverImage": "/b-front page.png",
  "thumbnailImage": "/b-front page.png",
  "gallery": [
    { "url": "/b-front page.png", "caption": "Home Page" },
    { "url": "/b-2nd-page.png", "caption": "2nd Page" },
    { "url": "/b-3rd-page.png", "caption": "3rd page" },
    { "url": "/b-4th-page.png", "caption": "4th page" },
    { "url": "/b-5th-page.png", "caption": "5th page" }
  ],
  "client": "Personal Project",
  "timeline": "3 weeks (Q3 2025)",
  "role": "Frontend Developer & UI/UX Designer",
  "liveUrl": "https://superfinal-master.vercel.app",
  "githubUrl": "https://github.com/Prithvi1666/superlevel",
  "relatedProjects": [
    {
      "slug": "agency-ai",
      "title": "Agency AI",
      "category": "AI Website",
      "image": "/ai-home page.png"
    },
    {
      "slug": "background-removal-app",
      "title": "Background Removal App",
      "category": "AI Tool",
      "image": "/bg-home.png"
    }
  ]
},

{
  "id": 6,
  "slug": "real-estate",
  "title": "Real Estate ",
  "category": "Real Estate Website",
  "shortDescription": "A clean, responsive real estate platform to browse, search, and view property listings with engaging UI.",
  "description": [
    "The Real Estate PD Project is a web application that allows users to explore property listings with detailed information and images.",
    "It features robust search and filtering options so users can narrow down properties by location, price, and type.",
    "The UI is designed to be clean and responsive, with seamless navigation across devices and a polished user experience."
  ],
  "features": [
    "Property browsing with listing details and images.",
    "Search and filters for price, type, and location.",
    "Responsive UI optimized for desktop and mobile.",
    "Fast load times and smooth interactions.",
    "Polished design with attention to usability."
  ],
  "technologies": [
    "React.js",
    "Vite",
    "HTML5",
    "JavaScript",
    "Tailwind CSS",
    "Vercel (Deployment)"
  ],
  "coverImage": "/E-front-page.png",
  "thumbnailImage": "/E-front-page.png",
  "gallery": [
    { "url": "/E-front-page.png", "caption": "front Page" },
    { "url": "/E-2nd-page.png", "caption": "2nd Page" },
    { "url": "/E-3rd-page.png", "caption": "3rd Page" },
    { "url": "/E-4th-page.png", "caption": "4th page" },
    { "url": "/E-5th-page.png", "caption": "5th page" },
     { "url": "/E-last-page.png", "caption": "last page" }
  ],
  "client": "Personal Project",
  "timeline": "3 weeks (Q4 2025)",
  "role": "Frontend Developer & UI/UX Designer",
  "liveUrl": "https://real-estate-pd.vercel.app",
  "githubUrl": "https://github.com/Prithvi1666/real-estate-pd",
  "relatedProjects": [
    {
      "slug": "superfinal-master",
      "title": "SuperFinal Master",
      "category": "Web Application",
      "image": "/f-home page.png"
    },
    {
      "slug": "car-rental",
      "title": "Car Rental",
      "category": "Website Platform for Car Rentals",
      "image": "/carRental Home page.png"
    }
  ]
},

{
  "id": 7,
  "slug": "gocart-main",
  "title": "GoCart",
  "category": "E-Commerce Website",
  "shortDescription": "A sleek online store platform offering gadgets and accessories with a modern, responsive UI.",
  "description": [
    "The GoCart Project is an e-commerce web application built to provide users with a seamless shopping experience for gadgets and electronics.",
    "It features product catalogs, promotional banners, and special offers like “20% OFF” to engage visitors.",
    "Built with responsiveness in mind, it works smoothly across devices and offers robust navigation and user flows."
  ],
  "features": [
    "Product listing with images, pricing, and categories.",
    "Promotional banners and discounts (e.g. 20% OFF on first order).",
    "Responsive and mobile-friendly UI.",
    "User interaction elements: cart, login, navigation, newsletter subscription.",
    "Fast performance and smooth browsing experience."
  ],
  "technologies": [
    "React.js",
    "HTML5",
    "JavaScript",
    "Tailwind CSS",
    "Vercel (Deployment)"
  ],
  "coverImage": "/g-front-page.png",
  "thumbnailImage": "/g-front-page.png",
  "gallery": [
    { "url": "/g-front-page.png", "caption": " font page" },
    { "url": "/g-2nd-page.png", "caption": " 2nd page" },
    { "url": "/g-3rd-page.png", "caption": "3rd page" },
    { "url": "/g-4th-page.png", "caption": "4th page" },
    { "url": "/g-5th-page.png", "caption": "5th page" },
    { "url": "/g-6th-page.png", "caption": "6th page" },
    { "url": "/g-7th-page.png", "caption": "7th page" },
    { "url": "/g-8th-page.png", "caption": "8th page" },
    { "url": "/g-footer-page.png", "caption": "footer page" }
  ],
  "client": "Personal Project",
  "timeline": "3 weeks (Q4 2025)",
  "role": "Frontend Developer & UI/UX Designer",
  "liveUrl": "https://gocart-main-pd.vercel.app",
  "githubUrl": "https://github.com/Prithvi1666/gocart-main",
  "relatedProjects": [
    {
      "slug": "real-estate-pd",
      "title": "Real Estate PD",
      "category": "Real Estate Website",
      "image": "/E-front-page.png"
    },
    {
      "slug": "superfinal-master",
      "title": "SuperFinal Master",
      "category": "Web Application",
      "image": "/f-home page.png"
    }
  ]
},

{
  "id": 8,
  "slug": "job-portal-pd",
  "title": "Job Portal PD",
  "category": "Job Portal Website",
  "shortDescription": "A modern job portal platform enabling job seekers and recruiters to connect through an intuitive interface.",
  "description": [
    "The Job Portal PD Project is a web application designed to facilitate connection between employers and job seekers with features like posting, searching, and applying for jobs.",
    "It provides a searchable listings dashboard with filters for role, experience, and location.",
    "The UI is responsive, clean, and focused on usability to ensure both recruiters and candidates have a smooth experience."
  ],
  "features": [
    "Job listings with detailed roles, requirements, and application links.",
    "Search and filter functionality (e.g. by job type, location, experience).",
    "Responsive design across devices.",
    "User-friendly interface with clean navigation.",
    "Fast performance and intuitive user flow."
  ],
  "technologies": [
    "React.js",
    "HTML5",
    "JavaScript",
    "Tailwind CSS",
    "Vercel (Deployment)"
  ],
  "coverImage": "/j-front-page.png",
  "thumbnailImage": "/j-front-page.png",
  "gallery": [
    { "url": "/j-front-page.png", "caption": "front" },
    { "url": "/j-2nd-page.png", "caption": "2nd page" },
    { "url": "/j-3rd-page.png", "caption": "3rd page" },
    { "url": "/j-4th-page.png", "caption": "4th page" },
    { "url": "/j-5th-page.png", "caption": "5th page" },
    { "url": "/j-6th-page.png", "caption": "6th page" },
    { "url": "/j-7th-page.png", "caption": "7th page" },
    { "url": "/j-8th-page.png", "caption": "8th page" },
    { "url": "/j-9th-page.png", "caption": "9th page" },
    { "url": "/j-10th-page.png", "caption": "10th page" },
    { "url": "/j-11th-page.png", "caption": "11th page" }
    
  ],
  "client": "Personal Project",
  "timeline": "3 weeks (Q4 2025)",
  "role": "Frontend Developer & UI/UX Designer",
  "liveUrl": "https://job-portal-pd.vercel.app",
  "githubUrl": "https://github.com/Prithvi1666/job-portal-pd",
  "relatedProjects": [
    {
      "slug": "gocart-main",
      "title": "GoCart",
      "category": "E-Commerce Website",
      "image": "/g-front-page.png"
    },
    {
      "slug": "real-estate-pd",
      "title": "Real Estate PD",
      "category": "Real Estate Website",
      "image": "/E-front-page.png"
    }
  ]
}


  

  
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 3): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
