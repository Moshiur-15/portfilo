import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import My_Img from "../assets/my_img.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Button, IconButton, Typography, Grid, Container } from "@mui/material";

export default function Banner() {
  return (
    <Container className="py-14 px-6 md:px-16">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <>
            <div className="text-4xl tracking-wider font-bold uppercase lg:scale-y-125 text-gray-700">
              Hi,
              <span>
                <Typewriter
                  words={["I'm Moshiur"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={300}
                  deleteSpeed={200}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </>
          <h2 className=" text-xl md:text-2xl py-2">
            Junior MERN stack developer
          </h2>
          <p className="mb-2  md:text-lg">
            Passionate about building responsive and dynamic web applications.
            Skilled in React, Firebase, and MongoDB, with a strong focus on user
            experience. Always eager to learn and explore modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-3">
            <a
              href="mailto:masiurislam28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-400 text-white p-2 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-700 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://github.com/Moshiur-15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-gray-900 transition duration-700 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/moshiur-islam28/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-700 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Resume Button */}
          <div className="">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href="https://drive.google.com/file/d/11AQ6lcRpU9M5D46XoRKyBMvid343MBUV/view?usp=sharing"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: "10px 20px",
                borderRadius: "4px",
              }}
              className=""
            >
              Open RESUME
            </Button>
          </div>
        </Grid>

        {/* Right Section (Image) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "flex", xs: "block" } }}
          justifyContent={{ xs: "right" }}
        >
          <img
            src={My_Img}
            className="h-80 w-full md:w-96 md:h-[400px] lg:h-96 rounded object-cover"
            alt="Moshiur Islam"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
