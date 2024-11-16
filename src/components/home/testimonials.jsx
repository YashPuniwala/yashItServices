import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The templates from this site have completely transformed my business website. They're sleek, modern, and easy to customize. I couldn't be happier with the results!",
      name: "Anna Willow",
      title: "Marketing Director",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      text: "Exceptional templates with a professional touch! My corporate website now looks fantastic, and I’ve received numerous compliments from clients and colleagues.",
      name: "Jacob Gray",
      title: "Creative Developer",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      text: "These templates are a game-changer! They helped me launch my blog in no time, and the mobile-friendly designs mean my site looks great on any device.",
      name: "Maria Phillips",
      title: "Lead Designer",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      text: "The range of templates available is impressive. I found the perfect match for my e-commerce site, and the built-in e-commerce features have made managing my store a breeze.",
      name: "Tim Roberts",
      title: "Agency Owner",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      text: "I was able to create a professional-looking website without any coding knowledge, thanks to the user-friendly templates. Highly recommended; my business is growing!",
      name: "Emily Patel",
      title: "Small Business Owner",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      text: "Absolutely amazing! The templates are not only visually stunning but also SEO-friendly, which has significantly improved my site’s traffic and engagement.",
      name: "Robert McKay",
      title: "Digital Marketer",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      text: "These templates are amazing! My online store now looks incredibly polished, and my customers have commented on how professional it feels. 100% worth my money! Where do I sign up?!",
      name: "Taylor Green",
      title: "Photographer",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      text: "Really good product. Have been recommending MarketHub templates to all my peers and they loved it too. Looking forward to upcoming updates! Can’t wait to see what’s new.",
      name: "Rebecca Jones",
      title: "Blogger & Entrepreneur",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our <span className="text-red-600">Customers</span> Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
        {/* First 6 Testimonials */}
        {testimonials.slice(0, 6).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-gray-700 font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}

        {/* 7th Testimonial */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <p className="text-gray-800 mb-4">"{testimonials[6].text}"</p>
          <div className="flex items-center">
            <img
              src={testimonials[7].avatar}
              alt={testimonials[7].name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 font-bold">{testimonials[7].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[7].title}</p>
            </div>
          </div>
        </div>

        {/* Smiley Icon */}
        <div className="flex justify-center items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c5.376 0 9.75 4.374 9.75 9.75S17.376 21.75 12 21.75 2.25 17.376 2.25 12 6.624 2.25 12 2.25zm0 13.5c1.5 0 3-.75 3.75-1.5m-7.5 0c.75.75 2.25 1.5 3.75 1.5M9.75 10.5h.008v.008H9.75V10.5zm4.5 0h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>
        </div>

        {/* 8th Testimonial */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <p className="text-gray-800 mb-4">"{testimonials[7].text}"</p>
          <div className="flex items-center">
            <img
              src={testimonials[7].avatar}
              alt={testimonials[7].name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 font-bold">{testimonials[7].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[7].title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
