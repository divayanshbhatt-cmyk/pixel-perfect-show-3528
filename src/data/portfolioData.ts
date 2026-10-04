// Replace the [PLACEHOLDER] values below with real information.
// All components read from this file — no UI changes needed.
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const personal = {
  name: "[NAME]",
  initials: "YN",
  title: "Data Analyst",
  photo: "" as string, // put an image URL here, e.g. "/profile.jpg"
  email: "[EMAIL]",
  phone: "[PHONE]",
  location: "[LOCATION]",
  resumeUrl: "#", // [RESUME URL]
  tagline:
    "I turn raw data into clear business insights using SQL, Python, Excel, statistics and data visualization.",
};

export const socials = {
  github: "#", // [GITHUB URL]
  linkedin: "#", // [LINKEDIN URL]
  kaggle: "#", // optional
  email: `mailto:${personal.email}`,
};

export const navItems = [
  "Home", "About", "Skills", "Education", "Achievements", "Projects", "Experience", "Contact",
] as const;

export const about = {
  paragraphs: [
    "I'm a Data Analyst who enjoys solving real-world problems with data. I clean, explore and model datasets to uncover the patterns that matter, then communicate them through clear dashboards and stories.",
    "My focus is analytical thinking, data visualization and translating numbers into business decisions — from exploratory analysis in Python to interactive reports in Power BI and Tableau.",
  ],
  stats: [
    { value: 6, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 0, suffix: "", label: "Certifications" }, // [UPDATE]
    { value: 1, suffix: "+", label: "Years of Learning" },
  ],
};

export const skillGroups = [
  { title: "Data Analytics", icon: "BarChart3", skills: ["Excel", "SQL", "Python", "Pandas", "NumPy", "Statistics", "Data Cleaning", "Exploratory Data Analysis"] },
  { title: "Data Visualization", icon: "PieChart", skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Excel Charts"] },
  { title: "Databases", icon: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Programming", icon: "Code2", skills: ["Python", "JavaScript", "Java"] },
  { title: "Tools", icon: "Wrench", skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"] },
] as const;

export const education = [
  {
    degree: "[DEGREE]",
    institution: "[COLLEGE NAME]",
    duration: "[DATE] – [DATE]",
    coursework: ["Statistics", "Database Management", "Data Structures", "Business Analytics"],
    achievements: "[ACADEMIC ACHIEVEMENTS]",
  },
  {
    degree: "[HIGHER SECONDARY / PREVIOUS DEGREE]",
    institution: "[SCHOOL / COLLEGE NAME]",
    duration: "[DATE] – [DATE]",
    coursework: ["Mathematics", "Computer Science"],
    achievements: "[ACADEMIC ACHIEVEMENTS]",
  },
];

export const achievements = [
  { title: "[CERTIFICATION TITLE]", org: "[ORGANIZATION]", date: "[DATE]", description: "[Short description of what this certification covers.]", link: "" },
  { title: "[CERTIFICATION TITLE]", org: "[ORGANIZATION]", date: "[DATE]", description: "[Short description of what this certification covers.]", link: "" },
  { title: "[ACHIEVEMENT TITLE]", org: "[ORGANIZATION]", date: "[DATE]", description: "[Short description of the achievement.]", link: "" },
];

export const projectFilters = ["All", "Python", "SQL", "Power BI", "Excel", "Data Visualization"] as const;

export const projects = [
  { title: "Sales Data Analysis Dashboard", image: project1, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["Power BI", "Excel", "Data Visualization"], github: "#", demo: "" },
  { title: "Customer Churn Analysis", image: project2, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["Python", "Pandas", "Data Visualization"], github: "#", demo: "" },
  { title: "E-Commerce Data Analysis", image: project3, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["SQL", "Python"], github: "#", demo: "" },
  { title: "COVID-19 Data Analysis", image: project1, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["Python", "Data Visualization"], github: "#", demo: "" },
  { title: "Employee Analytics Dashboard", image: project3, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["Excel", "Power BI"], github: "#", demo: "" },
  { title: "Financial Performance Dashboard", image: project2, description: "[PROJECT DESCRIPTION]", problem: "[Problem this project solved]", tech: ["SQL", "Power BI"], github: "#", demo: "" },
];

// Leave empty if there is no experience yet — the section shows a friendly placeholder.
export const experience: {
  role: string; company: string; location: string; duration: string; type: string;
  responsibilities: string[]; tools: string[];
}[] = [
  {
    role: "[JOB / INTERNSHIP TITLE]",
    company: "[COMPANY]",
    location: "[LOCATION]",
    duration: "[DATE] – [DATE]",
    type: "Internship",
    responsibilities: ["[Responsibility or key contribution]", "[Responsibility or key contribution]"],
    tools: ["SQL", "Excel", "Power BI"],
  },
];
