import React, { use } from 'react'
import Card from './components/Card'

const App = () => {

  const userProfiles = [
    {
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Arjun Mehta",
      pay: "$35/hr",
      developer: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "UI Research", "+12"],
      about: "Creative designer focused on intuitive interfaces, accessibility, and modern user-centered digital product experiences."
    },
    {
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Sophia Williams",
      pay: "$50/hr",
      developer: "Mobile App Developer",
      skills: ["Flutter", "Dart", "Firebase", "+10"],
      about: "Passionate mobile developer building scalable cross-platform applications with smooth performance and clean architecture."
    },
    {
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      pay: "$40/hr",
      developer: "Frontend Developer",
      skills: ["JavaScript", "React", "CSS", "+15"],
      about: "Frontend specialist creating responsive, high-performance web applications with modern frameworks and best practices."
    },
    {
      profile: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Emily Johnson",
      pay: "$60/hr",
      developer: "Backend Developer",
      skills: ["Node.js", "MongoDB", "Express", "+18"],
      about: "Backend engineer designing secure APIs, database systems, and scalable cloud-based infrastructure solutions."
    },
    {
      profile: "https://randomuser.me/api/portraits/men/53.jpg",
      name: "Vikram Singh",
      pay: "$55/hr",
      developer: "Full Stack Developer",
      skills: ["Python", "Django", "React", "+20"],
      about: "Full stack developer delivering complete web solutions from database design to polished frontend interfaces."
    },
    {
      profile: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Olivia Brown",
      pay: "$45/hr",
      developer: "iOS Developer",
      skills: ["Swift", "UIKit", "CoreData", "+14"],
      about: "iOS developer building elegant, high-performance Apple ecosystem applications with strong focus on usability."
    },
    {
      profile: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Daniel Lee",
      pay: "$70/hr",
      developer: "AI/ML Engineer",
      skills: ["Python", "TensorFlow", "PyTorch", "+22"],
      about: "Machine learning engineer developing predictive models, intelligent systems, and data-driven business solutions."
    },
    {
      profile: "https://randomuser.me/api/portraits/women/87.jpg",
      name: "Ananya Verma",
      pay: "$38/hr",
      developer: "Web Designer",
      skills: ["HTML", "CSS", "Bootstrap", "+9"],
      about: "Web designer crafting visually appealing, responsive websites optimized for performance and user engagement."
    },
    {
      profile: "https://randomuser.me/api/portraits/men/90.jpg",
      name: "Michael Anderson",
      pay: "$65/hr",
      developer: "Cloud Engineer",
      skills: ["AWS", "Docker", "Kubernetes", "+17"],
      about: "Cloud engineer deploying scalable infrastructure, automating workflows, and ensuring secure distributed systems."
    },
    {
      profile: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Priya Kapoor",
      pay: "$42/hr",
      developer: "Mobile Designer",
      skills: ["Figma", "Wireframing", "Prototyping", "+11"],
      about: "Mobile designer creating intuitive user journeys, interactive prototypes, and polished app interface systems."
    }
  ];

  return (
    <div className="parent">
    {userProfiles.map((elem, index) => (
      <Card key={index} profile={elem.profile} name={elem.name} pay={elem.pay} developer={elem.developer} skills={elem.skills} about={elem.about} />
    ))}

    </div>
  )
}

export default App