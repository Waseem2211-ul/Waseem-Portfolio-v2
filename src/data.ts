import { Project, Service, Testimonial } from "./types";

export const projectsData: Project[] = [
  {
    id: "alanji-computers",
    name: "Alanji Computers",
    category: "Developer Portfolio",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    client: "Alanji (Senior Software Engineer)",
    problem: "The client needed a highly professional, technical online portfolio that mirrors their high coding standards, displays their technical expertise, and helps them stand out to top global recruiters and clients.",
    solution: "Designed and developed a minimalist, ultra-fast developer showcase. The interface displays skill-bars, project highlights, and detailed technical logs, combining modern tech aesthetics with high performance.",
    process: [
      "User experience & wireframing in Figma with strict geometric layouts.",
      "Component-driven React layout optimized for rapid response times.",
      "Implementation of responsive interactive charts using Tailwind utility rules.",
      "Speed optimization and automatic SEO metadata tuning."
    ],
    results: "Successfully launched! The client reported standing out in senior engineering screens, resulting in 3 major remote project inquiries within 30 days of release.",
    liveUrl: "https://alanji-computers.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "skyflies-cosmetics",
    name: "Skyflies Cosmetics",
    category: "Product & Skincare Catalog",
    tags: ["Web Design", "HTML5", "CSS3", "JavaScript"],
    client: "Skyflies Cosmetics & Skincare Shop",
    problem: "The client ran a physical cosmetics store but had zero online exposure. They wanted an elegant, visually gorgeous digital catalog to present their premium products and drive direct online customer inquiries without Shopify monthly overhead.",
    solution: "Built a lush, visually attractive product catalog with beautiful visual grids, advanced category filtering, and a custom direct-to-WhatsApp order flow that makes purchasing easy for clients.",
    process: [
      "Created luxury-focused visual mockups in Figma with warm, neutral colors.",
      "Developed a custom-tailored search and filter interface in pure, semantic code.",
      "Optimized dozens of high-quality cosmetic product photos for fast loading times.",
      "Wired up an interactive cart that compiles items and sends a clean message straight to their sales WhatsApp."
    ],
    results: "Created a highly cost-efficient catalog. The store reported over 45 custom WhatsApp inquiries in the first month, expanding their audience well beyond in-person local customers.",
    liveUrl: "https://skyflies-cosmetics-and-skincar.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "envie-salon",
    name: "Envie Salon",
    category: "Salon & Wellness Platform",
    tags: ["UI/UX Design", "Tailwind CSS", "Responsive Web"],
    client: "Envie Salon & Spa",
    problem: "Envie Salon relied entirely on Instagram posts to showcase their salon aesthetic and prices, which was unorganized and didn't rank on local search engines like Google.",
    solution: "Designed an elegant, high-converting service brochure and booking site. It showcases the boutique's aesthetic interior, categorizes complex pricing cleanly, and makes contact info immediately accessible.",
    process: [
      "Designed a soft, minimalist, luxurious interface focusing on negative space.",
      "Built a clear, responsive pricing menu with smooth accordions for easy viewing.",
      "Structured localized SEO optimization targeting hair, nails, and spa keywords.",
      "Embedded direct call/appointment integrations for mobile users."
    ],
    results: "Significantly boosted customer convenience. Over 60% of new clients now check the menu and price sheet on their phone before stepping into the salon.",
    liveUrl: "https://enviesalon.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "waseem-gym",
    name: "Waseem Gym",
    category: "Fitness & Membership Landing Page",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Interactions"],
    client: "Waseem Gym & Fitness Club",
    problem: "A high-intensity local gym struggled to attract new members because prospective clients couldn't find their membership pricing, facilities, or daily class schedule online.",
    solution: "Designed and coded an energetic, high-impact single-page website with powerful typography, interactive BMI calculator, clear pricing comparison tiers, and strong call-to-actions.",
    process: [
      "Created high-contrast dark wireframes in Figma reflecting gym energy.",
      "Engineered an interactive BMI Calculator using client-side JavaScript.",
      "Implemented a fully responsive class schedule grid with day-by-day tabs.",
      "Tested and verified smooth parallax and entrance motions to drive engagement."
    ],
    results: "Generated instant sign-ups. The client reported 30+ new membership inquiries directly from the landing page within the first week of publication.",
    liveUrl: "https://waseem-gym.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
  }
];

export const servicesData: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Full-scale professional websites custom-tailored for small businesses, local shops, and service providers. Designed to build credibility and turn passive searchers into paying clients.",
    iconName: "Globe",
    deliverables: ["Custom UI/UX Design", "Fully Responsive Code", "SEO Foundation", "Contact/WhatsApp Integration"]
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description: "Highly focused single-page websites engineered for a single action: conversions. Ideal for product launches, fitness clubs, campaigns, or lead generation.",
    iconName: "Zap",
    deliverables: ["Clear Action Hierarchies", "Blazing-Fast Loading Speeds", "Engaging Interactive Elements", "Analytics Setup Support"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Prototyping",
    description: "Interactive high-fidelity Figma mockups that define the visual style, user journey, and wireframe blueprint before writing a single line of code.",
    iconName: "Figma",
    deliverables: ["Interactive Prototypes", "Custom Component Design", "Tailored Color Palettes", "Developer-Ready Handoff"]
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "Customized WordPress platforms built for clients who want full control over editing their own content, blogging, and scaling their site easily.",
    iconName: "FileCode",
    deliverables: ["Custom Theme Configuration", "Plugin Setup & Optimization", "Visual Page Builder Setup", "Easy Client Handover Guide"]
  },
  {
    id: "redesigns",
    title: "Website Redesigns",
    description: "Giving outdated, slow, or non-responsive websites a complete visual and structural overhaul to match current design standards and mobile requirements.",
    iconName: "Sparkles",
    deliverables: ["Performance Improvements", "Modern Clean Typography", "Enhanced Conversion Loops", "SEO Migration & Redirect Checks"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    author: "Alanji",
    role: "Senior Software Engineer",
    company: "Alanji Computers",
    text: "Mohammed delivered a technical, clean, and blazingly fast portfolio that matches my engineering standards. He has an incredible eye for typography and layout. Strongly recommended!",
    rating: 5
  },
  {
    id: "t2",
    author: "Priya Rajesh",
    role: "Co-founder",
    company: "Skyflies Cosmetics",
    text: "We wanted a clean look without paying expensive monthly subscription fees. Mohammed built a beautiful catalog and a direct WhatsApp cart that is so simple and converts perfectly.",
    rating: 5
  },
  {
    id: "t3",
    author: "Sarah M.",
    role: "Manager",
    company: "Envie Salon",
    text: "Mohammed took our vision and made it real. The pricing menus are incredibly clean on mobile, and customers are constantly telling us how easy it is to find prices and book.",
    rating: 5
  },
  {
    id: "t4",
    author: "Coach Rajesh",
    role: "Founder",
    company: "Waseem Gym & Fitness",
    text: "Working directly with a student developer was the best decision. Mohammed is prompt, incredibly creative, and the BMI calculator he coded for us has become a massive hit with new signups.",
    rating: 5
  }
];
