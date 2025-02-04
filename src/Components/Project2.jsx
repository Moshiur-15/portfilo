import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import nextra from "../assets/nextera.png";

export default function Project2() {
  return (
    <Card className="">
      <CardActionArea>
        <CardMedia
          component="img"
          image={nextra}
          alt="green iguana"
          className="h-[250px]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NextEra Blog
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A responsive blog platform built with React, Firebase, and MongoDB,
            featuring authentication, blog creation, commenting, and a wishlist
            for an engaging user experience.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Details
        </Button>
      </CardActions>
    </Card>
  );
}
