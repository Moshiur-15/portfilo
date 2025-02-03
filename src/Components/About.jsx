import { Container, Typography, Box, Grid } from "@mui/material";
import My_Img from "../assets/my_img.jpg";

export default function About() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-0">
      <Box>
        <Container>
          <>
            <div className="text-3xl font-bold uppercase lg:scale-y-125 text-gray-700 text-center mb-5 lg:mb-15">
              About Me
            </div>
          </>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center md:items-start lg:items-center">
            {/* Image Section */}

            <img
              src={My_Img}
              className="h-80 w-full md:w-96 md:h-[400px] lg:h-96 rounded object-cover"
              alt="Moshiur Islam"
            />

            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <div className="mb-2  md:text-lg">
                <p>
                  Assalamu Assalam, I am Moshiur Islam, and I started my
                  programming journey alongside my diploma. Initially,
                  programming seemed like just another skill to learn, but over
                  time, it became my passion. I genuinely enjoy writing code and
                  solving complex problems, and each new challenge excites me
                  even more.
                </p>
              </div>
              <div className="mb-2  md:text-lg">
                <p>
                  Apart from programming, I love playing games. Gaming is not
                  just a source of entertainment for me but also a way to
                  explore creativity and find inspiration. Living in a village
                  keeps me connected to nature, bringing peace and balance to my
                  thoughts and daily life.
                </p>
              </div>
              <div className="mb-2 md:text-lg">
                <p>
                  Beyond programming and gaming, I am always curious to learn
                  new things and enhance my skills. I believe in continuous
                  growth and am determined to achieve bigger dreams as I move
                  forward in my journey.
                </p>
              </div>
            </Grid>
          </div>
        </Container>
      </Box>
    </div>
  );
}
