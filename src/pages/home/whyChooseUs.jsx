import React from "react";
import { Code, Database, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-4xl font-medium mb-6 relative inline-block">
            Why Choose Our Tech Stack?
            <div className="absolute -bottom-1 left-0 w-32 h-2 bg-[#003f8c]"></div>
          </h2>

          <p className="text-gray-700 mb-8 text-lg">
            Every project starts with cutting-edge technology selection. We
            carefully choose the best tools and frameworks that match your
            project requirements, ensuring scalability, performance, and
            maintainable code.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-[#003f8c]">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Modern Development</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#003f8c]">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Scalable Architecture</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#003f8c]">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Optimized Performance</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 max-w-lg flex justify-center md:justify-end">
          <div className="relative w-full">
            <img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
              alt="Developers collaborating on code review"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
