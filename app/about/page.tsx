import { Card, Progress, Image, Chip } from "@nextui-org/react";

export default function AboutPage() {
  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 75 },
  ];

  const experiences = [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Led development of enterprise web applications using React and Node.js",
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple client projects using modern web technologies",
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "MongoDB Certified Developer",
    "React Advanced Certification",
    "Node.js Performance",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-full" />
              <Image
                alt="Profile Image"
                className="rounded-full w-64 h-64 object-cover border-4 border-white/50"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Shridhar</h1>
            <p className="text-xl text-white/90 mb-6">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-white/80">
              Passionate about creating beautiful, functional, and user-friendly
              web applications with over 5 years of experience in modern web
              technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress className="h-2" color="secondary" value={skill.level} />
            </div>
          ))}
        </div>
      </Card>

      {/* Experience Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <Chip color="secondary" variant="flat">
                  {exp.period}
                </Chip>
              </div>
              <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Education & Certifications */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-600">
            Bachelor&apos;s Degree in Computer Science
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-2">
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
      </Card>
    </div>
  );
}
