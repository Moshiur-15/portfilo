import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import nextra from "../../assets/nextera.png";
import {Link} from 'react-router'

export default function Project2() {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <CardActionArea className="">
        <CardMedia
          component="img"
          image={nextra}
          alt="NextEra Blog"
          className="h-[230px] object-cover"
        />
        <CardContent className="flex-grow">
          <Typography gutterBottom variant="h6" component="div">
            NextEra Blog ( Blog Website )
          </Typography>
          <Typography variant="body2" color="textSecondary">
            A responsive blog platform built with React, Firebase, and MongoDB,
            featuring authentication, blog creation, commenting, and a wishlist
            for an engaging user experience.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="p-3 mt-auto">
        <Link to="/project/projectDetails2">
          <Button
            size="small"
            color="primary"
            variant="contained"
            target="_blank"
          >
            Details
          </Button>
        </Link>
        <Button
          size="small"
          variant="contained"
          href="https://nextera-blog-me.netlify.app/" // Replace with actual live link
          target="_blank"
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}
