import React from "react";
import Layout from "../components/layout";
import { Box, Container } from "../components/styled";

const HomePage = () => {
  return (
    <Layout>
    <Container size='xl' m='auto' >
    <h1>Home</h1>
    <Box width='400px' height='200px' border='2px solid' borderColor='red' borderRadius='16px' background='green'>
    </Box>
    </Container>
    </Layout>
    );
  };
  
  export default HomePage;
