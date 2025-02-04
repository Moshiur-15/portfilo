import { Link } from "react-router";
import projectImg from "../../assets/medicamp.png";

export default function ProjectDetails1() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Medical Camp</h1>
        <p className="text-lg text-gray-600 mt-2">
          Simplifying the management and organization of medical camps for a
          seamless experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={projectImg}
          alt="Medical Camp Screenshot"
          className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Medical camp management system
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Medical Camp is a web-based platform designed to simplify the management
        and organization of medical camps. It provides an effortless and
        user-friendly experience for both organizers and participants. This
        platform allows camp organizers to manage camp details, participants,
        and payments, while participants can easily register, provide feedback,
        and access camp information.
      </p>

      {/* Key Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "User-Friendly Navigation",
            "Dynamic Homepage Banner with success stories",
            "Popular Camps Section (Camp Name, Fees, Date, Location)",
            "Camp Details Page with Join Camp button",
            "Participant Registration Modal",
            "Advanced Search and Sorting (by Keywords, Dates, Fees, etc.)",
            "Organizer Dashboard (Manage Camps, Participants)",
            "Participant Dashboard (View Analytics, Feedback, etc.)",
            "Payment Integration with Stripe",
            "Feedback and Ratings System",
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
            "Ensuring smooth payment integration with Stripe.",
            "Handling dynamic participant registration and real-time data updates.",
            "Ensuring full responsiveness across all screen sizes.",
            "Managing multiple roles and access rights for organizers and participants.",
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
          href="https://mcms-me.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Moshiur-15/Medical-Camp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub Repo
        </a>
      </div>

      {/* Organizer Login Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Organizer Login Credentials
        </h2>
        <p className="text-lg text-gray-600">
          Username: <strong>organiger@gmail.com</strong>
          <br />
          Password: <strong>111111</strong>
        </p>
      </div>
    </section>
  );
}
