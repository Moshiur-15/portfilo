import { Link } from "react-router";
import projectImg from "../../assets/gamezone.png";

export default function ProjectDetails3() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          GameZone - Game Review Application
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore game reviews, ratings, and recommendations with a seamless and
          engaging experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={projectImg}
          alt="GameZone Screenshot"
          className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-xl text-gray-600 mb-8">
        GameZone is a game review application designed to help gamers explore
        reviews, ratings, and details of popular games. Built with React,
        Firebase, and MongoDB, it includes features such as user authentication,
        game review submission, ratings, wishlisting, and personalized
        recommendations. The platform provides a visually appealing and
        responsive interface, making it easy for users to navigate and interact.
        This project highlights the integration of dynamic content, user
        interaction, and seamless transitions.
      </p>

      {/* Key Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "User Authentication (Email, Google, etc.)",
            "Game Reviews (Add, Edit, Delete Reviews)",
            "Ratings and Wishlisting",
            "Personalized Game Recommendations",
            "Fully Responsive Design",
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
            "Implementing a dynamic featured game section efficiently.",
            "Building an intuitive search and sorting system for game reviews.",
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

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-4 md:space-y-0">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Back
        </Link>
        <a
          href="https://gamezone-me.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Moshiur-15/Game-Review"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  );
}
