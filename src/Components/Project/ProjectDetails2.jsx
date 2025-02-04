import projectImg from "../../assets/blog.png";
import {Link} from 'react-router'

export default function ProjectDetails2() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">NextEra Blog</h1>
        <p className="text-lg text-gray-600 mt-2">
          A dynamic blog platform with authentication, post management, and an
          intuitive user experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={projectImg}
          alt="NextEra Blog Screenshot"
          className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-xl text-gray-600 mb-8">
        NextEra Blog is a dynamic and user-friendly blogging platform with
        authentication, post management, and interactive features like
        wishlisting and commenting. Built with a responsive design and smooth UI
        animations, it ensures an intuitive experience across devices. Key
        features include a structured post management system, real-time updates,
        and a dynamic featured blog section. While challenges like Firebase
        authentication and responsiveness were tackled, future improvements will
        focus on performance optimization and advanced search filters.
      </p>

      {/* Key Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "User Authentication (Email, Google, etc.)",
            "Blog Management (Create, Update, Delete)",
            "Wishlist Functionality",
            "Responsive Design (Mobile, Tablet, Desktop)",
            "Interactive UI with Framer Motion",
          ].map((feature) => (
            <div
              key={feature}
              className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
            >
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges Faced Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Challenges Faced
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Handling Firebase Authentication and security issues.",
            "Ensuring full responsiveness across all screen sizes.",
            "Implementing a dynamic featured blog section efficiently.",
            "Building an intuitive search and sorting system for blog posts.",
          ].map((challenge) => (
            <div
              key={challenge}
              className="p-4 bg-white shadow-md rounded-lg border-l-4 border-red-500"
            >
              <p className="text-lg text-gray-700">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Shortcomings & Future Improvements
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">
            Shortcoming: Performance could be improved for larger datasets,
            especially in loading reviews and ratings.
          </li>
          <li className="text-lg text-gray-700">
            Improvement: Adding advanced search filters (e.g., by genre,
            platform) to make game discovery more efficient.
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-4 md:space-y-0">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Back 
        </Link>
        <a
          href="https://nextera-blog-me.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Moshiur-15/blog-client"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub Client
        </a>
        <a
          href="https://github.com/Moshiur-15/blog-server"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub Server
        </a>
      </div>
    </section>
  );
}
