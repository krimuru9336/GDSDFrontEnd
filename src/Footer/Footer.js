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
            <FooterLink href="/mission">Mission</FooterLink>
            <FooterLink href="/vision">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Developers</Heading>
            <FooterLink href="https://github.com/krimuru9336">Kri</FooterLink>
            <FooterLink href="https://github.com/stringmad">Pia</FooterLink>
            <FooterLink href="https://github.com/dipeshchau">Dipesh</FooterLink>
            <FooterLink href="https://github.com/SoyamHsFulda">Soyam</FooterLink>
            <FooterLink href="https://github.com/syednaqirazabukh">Naqi</FooterLink>
            <FooterLink href="https://github.com/mujeeb11503051">Mujeeb</FooterLink>
          </Column>
          <Column>
            <Heading>CEO</Heading>
            <FooterLink href="mailto:rainer.todtenhoefer@informatik.hs-fulda.de">Prof. Todtenhoefer</FooterLink>
          </Column>
          <Column>
            <Heading>Hochschule Fulda</Heading>
            <FooterLink href="https://www.hs-fulda.de/">Fulda University of Applied Science</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    )
}
