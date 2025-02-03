import { Container, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <div>
      <Container>
        <h2 className="text-3xl font-bold uppercase lg:scale-y-125 text-gray-700 text-center mb-5 lg:mb-15">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold lg:scale-y-100 text-gray-700 mb-3">
              Frontend
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                HTML
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                CSS
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                JavaScript
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                React
              </li>
            </ul>
            {/* <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Java (basic)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Python (basic)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                PHP (basic)
              </li>
            </ul> */}
          </div>

          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold lg:scale-y-100 text-gray-700 mb-3">
              Backend
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                MongoDB (Intermediate)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Node.js (Intermediate)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Express.js (Intermediate)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold lg:scale-y-100 text-gray-700 mb-3">
              Others
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Firebase
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>{" "}
                Git & GitHub
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
