import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-30px" }}>
        Food Websites
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Growth Business</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Insurance </FooterLink>
            <FooterLink href="#">Quantity</FooterLink>
            <FooterLink href="#">HomeDelivery</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <span style={{ marginBottom: "15px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <hr />
      <p style={{ color: "black", textAlign: "center", margin: "auto" }}>
        &copy; {new Date().getFullYear()} Food Websites || All Rights Reserved
        || Terms and Conditions Apply
      </p>
      <hr />
    </Box>
  );
};
export default Footer;
