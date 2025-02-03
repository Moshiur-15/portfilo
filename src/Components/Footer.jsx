import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container className="text-gray-800 pt-12 text-center">
        <div className="text-md text-gray-900">
          <p>
            &copy; {new Date().getFullYear()} Moshiur Islam. All rights
            reserved.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
