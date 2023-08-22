import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Typography variant="body1" component={"p"}>
      <img src="/assets/images/card.jpg" 
            title="Business card" 
            alt="Business card" 
            style={{float:'right', marginInline:'2%', display:{xs: 'none', md: 'inline'},}}  
            width={'30%'}  />
      Welcome to BCards, the leading web-app for publishing business cards! Our mission is to make it easier for businesses to create business cards in a matter of minutes. Our easy-to-use platform is made for both beginners and advanced professionals who need custom business cards quickly.<br />

At BCards, we understand the importance of making a good first impression, and that’s why we strive to provide the highest quality business cards that reflect your unique brand. Whether you’re a small business owner, freelancer, or corporate executive, you can rest assured that we have the right tools and resources to help you create the perfect business card.<br />

Our team of experienced designers and developers are dedicated to providing you with the resources and advice you need to make the perfect business cards, so that you can make a lasting impression with potential customers. With our intuitive design tools, you can customize the look and feel of your business cards to make them truly unique. We also offer a wide selection of templates and designs to choose from, so that you can quickly create the perfect business card.<br />

We also understand the importance of time and budget constraints, which is why our platform offers a number of cost-effective options, including bulk printing and discounts. With our competitive pricing, you can get the most out of your budget and make sure that your business cards are professional and high-quality.<br />

Whether you’re designing business cards for yourself or for your business, BCards is the right choice for your custom business cards. With our simple and intuitive tools, you can create the perfect business cards for any occasion, quickly and easily. Get started today and make a lasting impression with BCards!
      </Typography>
      
    </Container>
  );
}
