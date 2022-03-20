import React from "react"
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

export default function Footer(){
  
    return (
      <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Fuldemy... We are there for you!
      </h1>

      <br/>

      <h6>Fulda University of Applied Sciences Software Engineering Project, Fall 2021 For
Demonstration Only</h6>

    <br/>
    <br/>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Get Paid</FooterLink>
            <FooterLink href="#">Gain Knowledge</FooterLink>
          </Column>
          <Column>
            <Heading>Developers</Heading>
            <FooterLink href="#">Kri</FooterLink>
            <FooterLink href="#">Pia</FooterLink>
            <FooterLink href="#">Dipesh</FooterLink>
            <FooterLink href="#">Soyam</FooterLink>
            <FooterLink href="#">Naqi</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    )
}
