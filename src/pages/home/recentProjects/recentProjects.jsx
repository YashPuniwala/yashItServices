import React, { useState } from "react";

const RecentProjects = () => {
  const projects = [
    {
      id: "01",
      title: "Web Development",
      description:
        "Creating modern and responsive websites using the latest technologies like React, Next.js, and Node.js. Focus on performance and user experience.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
      link: "/web-development",
    },
    {
      id: "02",
      title: "Animation",
      description:
        "Crafting engaging and interactive animations using GSAP, Framer Motion, and CSS animations to bring websites to life.",
      image:
        "https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?b=1&s=612x612&w=0&k=20&c=zhGJ4vjUOGBD9VjpGuiPPnt6ehae9_rVgCYifyVnBFk=",
      link: "/animation",
    },
    {
      id: "03",
      title: "E-commerce Development",
      description:
        "Building scalable e-commerce solutions with features like payment integration, inventory management, and user authentication.",
      image:
        "https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?b=1&s=612x612&w=0&k=20&c=zhGJ4vjUOGBD9VjpGuiPPnt6ehae9_rVgCYifyVnBFk=",
      link: "/ecommerce",
    },
    {
      id: "04",
      title: "Mobile App",
      description:
        "Developing cross-platform mobile applications using React Native and Flutter, ensuring native-like performance and user experience.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
      link: "/mobile-app",
    },
  ];

  const TiltCard = ({ children }) => {
    const [transform, setTransform] = useState('');
    const [transition, setTransition] = useState('');

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      setTransition('transform 0.1s ease-out');
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
      setTransition('transform 0.5s ease-out');
    };

    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, transition }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="text-black py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Project</h2>
          <p className="text-xl max-w-5xl mx-auto">
            At Hexaly, we pride ourselves on delivering innovative and effective
            solutions that drive results. Here are some of our recent projects
            that showcase our expertise and commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${
                index === 1 ? "md:mt-16" : index === 2 ? "md:-mt-16" : ""
              }`}
            >
                {/* Image Container */}
                    <TiltCard>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </div>
                  </TiltCard>

                {/* Content Container */}
                <div className="py-4 md:py-8 rounded-b-lg">
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-[1.700rem] md:text-3xl font-semibold">
                        {project.id}-{project.title}
                      </h3>
                    </div>
                    <p className="text-[1rem] font-medium md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <button className="inline-block px-6 py-2 border border-black text-black rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 text-lg">
                      View Detail
                    </button>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-4 md:mt-16">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;