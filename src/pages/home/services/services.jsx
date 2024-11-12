import React, { useEffect, useState } from "react";

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Digital Marketing",
      description:
        "Reach your audience where they are. From SEO to social media advertising, we create campaigns that generate leads.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="white" />
          <rect
            x="50"
            y="40"
            width="300"
            height="220"
            rx="8"
            fill="white"
            stroke="#333"
            strokeWidth="2"
          />
          <circle cx="320" cy="70" r="20" fill="#FF4444" fillOpacity="0.2" />
          <text x="315" y="75" fontSize="14" fill="#FF4444">
            2k
          </text>
          <path
            d="M100 140 C100 80, 250 80, 250 140"
            stroke="#FF4444"
            strokeWidth="3"
          />
          <rect
            x="80"
            y="160"
            width="240"
            height="80"
            rx="4"
            fill="#FF4444"
            fillOpacity="0.1"
          />
          <path
            d="M270 120 L290 140 L270 160"
            stroke="#FF4444"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices to ensure scalability and performance.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="white" />
          <rect
            x="50"
            y="40"
            width="300"
            height="220"
            rx="8"
            fill="white"
            stroke="#333"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="40"
            width="300"
            height="30"
            rx="8"
            fill="#FF4444"
            fillOpacity="0.1"
          />
          <circle cx="75" cy="55" r="6" fill="#FF4444" />
          <circle cx="95" cy="55" r="6" fill="#FF4444" />
          <circle cx="115" cy="55" r="6" fill="#FF4444" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your audience where they are. From SEO to social media advertising, we create campaigns that generate leads.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="white" />
          <rect
            x="50"
            y="40"
            width="300"
            height="220"
            rx="8"
            fill="white"
            stroke="#333"
            strokeWidth="2"
          />
          <circle cx="320" cy="70" r="20" fill="#FF4444" fillOpacity="0.2" />
          <text x="315" y="75" fontSize="14" fill="#FF4444">
            2k
          </text>
          <path
            d="M100 140 C100 80, 250 80, 250 140"
            stroke="#FF4444"
            strokeWidth="3"
          />
          <rect
            x="80"
            y="160"
            width="240"
            height="80"
            rx="4"
            fill="#FF4444"
            fillOpacity="0.1"
          />
          <path
            d="M270 120 L290 140 L270 160"
            stroke="#FF4444"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices to ensure scalability and performance.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="white" />
          <rect
            x="50"
            y="40"
            width="300"
            height="220"
            rx="8"
            fill="white"
            stroke="#333"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="40"
            width="300"
            height="30"
            rx="8"
            fill="#FF4444"
            fillOpacity="0.1"
          />
          <circle cx="75" cy="55" r="6" fill="#FF4444" />
          <circle cx="95" cy="55" r="6" fill="#FF4444" />
          <circle cx="115" cy="55" r="6" fill="#FF4444" />
        </svg>
      ),
    },
  ];

  const getCardStyle = (index) => {
    const basePosition = 176; // 11rem in pixels
    const scrollThreshold = index * 500; // Adjust this value to control when each card appears

    if (scrollY < scrollThreshold) {
      return {
        transform: `translateY(100%)`,
        opacity: 0,
        visibility: "hidden",
      };
    }

    return {
      transform: `translateY(0)`,
      opacity: 1,
      visibility: "visible",
      position: "sticky",
      top: `${basePosition}px`,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Conditionally Sticky Left Section */}
          <div className="lg:w-[82%]">
            <div className="lg:sticky top-0 lg:top-60">
              <h2 className="text-4xl font-bold mb-6">
                Our Range Of{" "}
                <span className="relative">
                  Services
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-red-500"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                We can cover a full spectrum of services that will be suited for
                small and large organizations and businesses.
              </p>
            </div>
          </div>

          {/* Scrollable Right Section with Sticky Cards */}
          <div className="relative space-y-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={getCardStyle(index)}
              >
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{card.description}</p>
                      <button className="inline-flex items-center px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                        Learn More
                      </button>
                    </div>

                    <div className="order-1 md:order-2">
                      <div className="w-full">{card.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing elements for scroll effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-8 text-black">
              spacing
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesSection;