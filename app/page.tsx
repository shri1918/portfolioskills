import Image from "next/image";

import Cards from "@/components/Cards";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col justify-center p-5 w-full items-center max-w-6xl md:flex-row min-h-screen overflow-hidden relative">
        {/* Floating Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bg-blue-500/10 h-32 rounded-full w-32 absolute animate-float-slow blur-xl left-1/4 top-1/4" />
          <div className="bg-purple-500/10 h-40 rounded-full w-40 absolute animate-float-medium blur-xl right-1/4 top-1/2" />
          <div className="bg-pink-500/10 h-36 rounded-full w-36 absolute animate-float-fast blur-xl bottom-1/4 left-1/3" />
        </div>

        <div className="flex justify-center group md:w-1/2 relative">
          <div className="bg-gradient-to-r rounded-lg absolute blur-xl duration-500 from-blue-500 group-hover:opacity-75 inset-0 opacity-50 to-purple-500 transition-opacity" />
          <Image
            alt="Profile Image"
            className="rounded-lg duration-500 group-hover:-rotate-2 group-hover:scale-105 hover:shadow-2xl relative transform transition-transform"
            height={400}
            src="https://media.wired.com/photos/648ce85eeb3f06fa8140d00a/master/w_2560%2Cc_limit/Best-Websites-To-Show-Off-Your-Portfolio-Business-1357904435.jpg"
            width={400}
          />
        </div>

        <div className="text-center md:mt-0 md:text-left md:w-1/2 mt-6 relative z-10">
          <h1 className="bg-[size:400%] bg-clip-text bg-gradient-to-r text-5xl text-transparent animate-gradient font-bold from-blue-500 to-pink-500 via-purple-500">
            Hi, I&apos;m Shridhar
          </h1>
          <p className="text-gray-300 text-lg duration-300 hover:scale-105 mt-4 transform transition-transform">
            Full-Stack Developer | React | Next.js | Node.js | UI/UX Enthusiast
          </p>
          <a
            className="flex bg-gradient-to-r rounded-lg shadow-lg w-fit duration-300 from-blue-600 gap-2 hover:from-blue-500 hover:shadow-xl hover:to-purple-500 hover:translate-y-[-2px] items-center md:mx-0 mt-6 mx-auto px-6 py-3 to-purple-600 transform transition-all"
            href="#projects"
          >
            View My Work
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section className="p-10 w-full max-w-6xl" id="projects">
        <h2 className="text-3xl text-center font-semibold mb-6">Projects</h2>
        <Cards />
        {/* <div className="flex justify-center mt-8">
          <Button
            as="a"
            href="/projects"
            color="primary"
            variant="shadow"
            size="lg"
          >
            View More Projects
          </Button>
        </div> */}
        {/* <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-400 mt-2">
              A brief description of the project.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-400 mt-2">
              A brief description of the project.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="text-gray-400 mt-2">
              A brief description of the project.
            </p>
          </div>
        </div> */}
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br p-10 rounded-xl w-full backdrop-blur-sm from-blue-600/20 max-w-6xl to-violet-600/20">
        <div className="text-center space-y-8">
          <h2 className="bg-clip-text bg-gradient-to-r text-4xl text-transparent font-bold from-blue-600 to-violet-600">
            Let&apos;s Connect
          </h2>
          <p className="text-lg opacity-80">
            Feel free to reach out for collaborations or just to say hi!
          </p>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 mt-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md duration-300 hover:bg-white/20 transition-all">
              <svg
                className="h-8 text-blue-500 w-8 mb-4 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="URL_ADDRESS.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16c1.1 0 2 0.9 2 2v12c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.1 0.9-2 2-2zm0 2h14c1.1 0 2 0
                        -2 2v10zm0 10H14c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zm0-2h14c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2H4c-1.1
                        -0.9 2-2v-2zm0-2h14c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2v-2z"
                />
              </svg>

              {/* <MailIcon className="h-8 text-blue-500 w-8 mb-4 mx-auto" /> */}
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                className="text-blue-400 hover:text-blue-300 transition-colors"
                href="mailto:shri66688@gmail.com"
              >
                shri66688@gmail.com
              </a>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md duration-300 hover:bg-white/20 transition-all">
              <svg
                className="h-8 text-blue-500 w-8 mb-4 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                className="text-blue-400 hover:text-blue-300 transition-colors"
                href="https://www.linkedin.com/in/shridhar-savant/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md duration-300 hover:bg-white/20 transition-all">
              <svg
                className="h-8 text-blue-500 w-8 mb-4 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                className="text-blue-400 hover:text-blue-300 transition-colors"
                href="https://github.com/shri1918"
                rel="noopener noreferrer"
                target="_blank"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
