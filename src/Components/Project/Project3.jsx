import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import gamezone from "../../assets/gamezone.png";
import { Link } from "react-router";

export default function Project3() {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <CardActionArea>
        <CardMedia
          component="img"
          image={gamezone}
          alt="Game Zone"
          className="h-[230px] object-cover"
        />
        <CardContent className="flex-grow">
          <Typography gutterBottom variant="h6" component="div">
            Game Zone ( Game Review)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Game Zone is a game review app built with React, Firebase, and
            MongoDB, featuring user authentication and review submissions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="p-3 mt-auto">
        <Link to="/project/projectDetails3">
          <Button
            size="small"
            color="primary"
            variant="contained"
            href="https://gamezone-details.com"
            target="_blank"
          >
            Details
          </Button>
        </Link>
        <Button
          size="small"
          variant="contained"
          href="https://gamezone-me.netlify.app/"
          target="_blank"
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}
