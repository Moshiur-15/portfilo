import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import mediCamp from "../../assets/medicamp.png";
import { Link } from "react-router";
export default function Project1() {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <CardActionArea className="border border-red-600">
        <CardMedia
          component="img"
          image={mediCamp}
          alt="Project Thumbnail"
          className="h-[230px] object-cover"
        />
        <CardContent className="flex-grow">
          <Typography gutterBottom variant="h6" component="div">
            Medi Camp ( MCMS )
          </Typography>
          <Typography variant="body2" color="textSecondary">
            MediCare is a web platform offering virtual medical consultations
            and health resources. It connects users with healthcare
            professionals for remote check-ups and appointment bookings.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="p-3 mt-auto">
        <Link to='/project/projectDetails1'>
        <Button
          size="small"
          color="primary"
          variant="contained"
          href="https://gamezone-details.com" // Replace with actual details link
          target="_blank"
        >
          Details
        </Button>
        </Link>
        <Button
          size="small"
          variant="contained"
          href="https://gamezone-live-demo.com" // Replace with actual live link
          target="_blank"
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}
