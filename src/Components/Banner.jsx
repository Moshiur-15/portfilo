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
            <div className="text-4xl font-bold uppercase lg:scale-y-125 text-gray-700">
              Hi, I'm
              <span>
                <Typewriter
                  words={[" Moshiur Islam"]}
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
          {/* <div className="my-6">
            <IconButton
              href="mailto:masiurislam28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ fontSize: 30, "&:hover": { color: "red" } }}
            >
              <FaEnvelope />
            </IconButton>
            <IconButton
              href="https://github.com/Moshiur-15"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ fontSize: 30, "&:hover": { color: "black" } }}
            >
              <FaGithub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/moshiur-islam28/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ fontSize: 30, "&:hover": { color: "#0077b5" } }}
            >
              <FaLinkedin />
            </IconButton>
          </div> */}

          {/* Resume Button */}
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
          >
            Open RESUME
          </Button>
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
