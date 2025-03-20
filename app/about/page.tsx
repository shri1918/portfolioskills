import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Progress } from "@heroui/progress";
import { Chip } from "@heroui/chip";

export default function AboutPage() {
  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React-Native", level: 85 },
    { name: "Python", level: 85 },
    { name: "Electron.js", level: 70 },
    { name: "HTML/CSS", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 75 },
  ];

  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Nocture Solutions.",
      period: "2023/Sep - Present",
      description:
        "Designed and implemented responsive web applications using React.js, Next.js, and Angular",
    },
    {
      role: "Project Manager (Intern)",
      company: "HostBooks Limited",
      period: "2023/Jan - 2023/Jul",
      description:
        "Coordinated cross-functional teams to align project goals and deliverables",
    },
  ];

  const certifications = [
    "Front End Development Libraries",
    "MongoDB Certified Developer",
    "React Advanced Certification",
    "JavaScript (Basic) Certificate",
  ];

  return (
    <div className="w-full px-6 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r p-8 rounded-xl text-white from-purple-500 overflow-hidden relative to-pink-500">
        <div className="flex flex-col w-full gap-8 items-center md:flex-row">
          <div className="flex justify-center w-full md:w-1/3">
            <div className="relative">
              <div className="bg-black/20 rounded-full absolute inset-0" />
              <Image
                alt="Profile Image"
                className="border-4 border-white/50 h-64 rounded-full w-64 object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEtQFJHnPuafw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722665035983?e=1747872000&v=beta&t=wWmnfiWduvEj24vXgMF1AO0KbxBl8uQ5It5So-Pm_zA"
              />
            </div>
          </div>
          <div className="text-center w-full md:text-left md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Shridhar</h1>
            <p className="text-white/90 text-xl mb-6">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-white/80">
              Passionate about creating beautiful, functional, and user-friendly
              web applications with over 2 years of experience in modern web
              technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Card className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="w-full space-y-2">
              <div className="flex justify-between w-full items-center">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress
                className="h-2 w-full"
                color="secondary"
                value={skill.level}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Experience Section */}
      <Card className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg w-full hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col w-full mb-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <Chip color="secondary" variant="flat">
                {exp.period}
              </Chip>
            </div>
            <p className="text-gray-600 text-start font-medium mb-2">
              {exp.company}
            </p>
            <p className="text-gray-500 text-start">{exp.description}</p>
          </div>
        ))}
      </Card>

      {/* Education & Certifications */}
      <Card className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
        <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-2">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
              Bachelor&apos;s Degree in Computer Science
            </p>
          </div>

          {/* Certifications Section */}
          <div className="flex flex-col text-center items-center">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <Chip
                  key={index}
                  className="text-sm"
                  color="primary"
                  variant="flat"
                >
                  {cert}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
