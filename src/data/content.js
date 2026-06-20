import { asset } from "../utils/asset";

// ============================================================
// CONTENT — single source of truth.
// All copy here is carried over from the original portfolio at
// https://vscamarushi2008-web.github.io/Portfolio/ — nothing invented.
// Edit this file to update text across the whole site.
// ============================================================

export const profile = {
  name: "Vijayasri Camarushi",
  role: "Computer Vision · ISL Research · HCI Lab Intern",
  affiliation: "IIIT Sri City",
  tagline: "Building India's largest Indian Sign Language dataset",
  photo: asset("/images/mine1.png"),
  email: "vijayasri.c25@iiits.in",
  linkedin: "https://www.linkedin.com/in/vijaya-sri-camarushi-58b9a537b/",
  instagram: "https://www.instagram.com/vs_captureee__/",
  skillBadges: "https://www.skills.google/public_profiles/b438f71a-5fa0-4b17-8e06-a107423ecdda",
};

export const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const journey = [
  { icon: "graduation-cap", text: "IIIT Sri City — B.Tech CSE" },
  { icon: "flask-conical", text: "Research Intern — HCI Lab" },
  { icon: "file-text", text: "Research Paper Contribution (Acknowledged)" },
  { icon: "hand", text: "Working on ISL Dataset (Computer Vision)" },
];

export const aboutParagraphs = [
  "I am Vijayasri Camarushi, a CSE undergraduate at IIIT Sri City.",
  "Research Intern at HCI Lab working on Computer Vision & ISL. Building a large-scale Indian Sign Language dataset.",
  "My journey into technology started with curiosity about how systems work. I began learning programming with C and gradually explored deeper concepts.",
  "I completed my SSC (10th) in 2021 and my Intermediate (12th) in 2023 with the MPC stream from Aditya Talent School, Kakinada, where I developed strong analytical and problem-solving skills.",
  "Over time, I developed an interest in AI/ML and Computer Vision, working on projects that improved my problem-solving and development skills.",
  "Currently, I am focused on building impactful projects and continuously improving my technical skills.",
];

export const skills = [
  { name: "C Programming", level: 80, status: "proficient" },
  { name: "Java", level: 45, status: "learning" },
  { name: "Python", level: 55, status: "learning" },
  { name: "Computer Vision", level: 40, status: "learning" },
];

export const projects = [
  {
    id: "isl-dataset",
    tag: "FLAGSHIP RESEARCH",
    title: "Indian Sign Language Dataset",
    emoji: "🤟",
    description:
      "Developing a large-scale ISL dataset using computer vision, aiming to enable real-time sign-language recognition systems and become one of the largest datasets of its kind globally.",
    points: [
      "Large-scale data collection pipeline for Indian Sign Language",
      "Targets real-time sign recognition use cases",
      "Goal: one of the largest ISL datasets worldwide",
    ],
    status: "ACTIVE",
  },
  {
    id: "research-contribution",
    tag: "PUBLISHED CONTRIBUTION",
    title: "Upper-Limb Rehabilitation Research",
    emoji: "🔬",
    description:
      'Contributed to "A Study in Transparent Adaptation and Joint-Level Feedback for Unsupervised Upper-Limb Rehabilitation," acknowledged at HCI Lab, IIIT Sri City.',
    points: [
      "Acknowledged contributor at HCI Lab, IIIT Sri City",
      "Focus: transparent adaptation & joint-level feedback",
      "Domain: unsupervised upper-limb rehabilitation",
    ],
    status: "ACKNOWLEDGED",
    paperUrl: asset("/docs/Rehab_CHI_Posters.pdf"),
  },
];

export const certifications = [
  {
    title: "Deloitte Job Simulation",
    image: asset("/images/cert3.png"),
  },
  {
    title: "Google Gen AI 2.0 — Certificate I",
    image: asset("/images/cert1.png"),
  },
  {
    title: "Google Gen AI 2.0 — Certificate II",
    image: asset("/images/cert2.png"),
  },
];

export const studyJam = {
  title: "Google Study Jam Experience",
  paragraphs: [
    "Participated in the Google Study Jam conducted by Google in the GDG (Google Developer Group) club at IIIT Sri City in September 2025.",
    "Gained hands-on experience in Google Cloud, AI/ML, and real-world applications.",
    "This experience strengthened my practical understanding used in my projects.",
  ],
};

export const photography = {
  title: "Photography",
  description:
    "Beyond research and development, I am passionate about photography. I love capturing the beauty of nature, sunsets, moonlight, and quiet moments through my lens.",
};
