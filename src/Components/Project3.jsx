import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import gamezone from "../assets/gamezone.png";

export default function Project3() {
  return (
    <Card className="">
      <CardActionArea>
        <CardMedia
          component="img"
          image={gamezone}
          alt="green iguana"
          className="h-[250px]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Game Zone
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Game Zone is a game review app built with React, Firebase, and
            MongoDB, featuring user authentication, review submissions.
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
