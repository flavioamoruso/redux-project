import React from "react";
import Layout from "../components/layout";
import { Box, Container, Stack, InputWrapper } from "../components/styled";
import Skeleton from "../components/styled/Skeleton";

const HomePage = () => {
  return (
    <Layout>
    <Container>
      <Box>
        <h1>Home</h1>
      </Box>
    
    <Stack spacing='100px'>

    <Box width='100px' 
    height='100px' 
    border='2px solid'  
    borderRadius='16px' 
    background='green'>
    </Box>
    <Box width='100px' 
    height='100px' 
    border='2px solid'  
    borderRadius='16px' 
    background='red'>
    </Box>
    <Box width='100px' 
    height='100px' 
    border='2px solid'  
    borderRadius='16px' 
    background='yellow'>
    </Box>
    <Box width='100px' 
    height='100px' 
    border='2px solid'  
    borderRadius='16px' 
    background='white'>
    </Box>
      </Stack>
      <Box mt='90px' mb='90px'>
        <InputWrapper placeholder="Inserisci"/>
      </Box>
      <Skeleton width='300px' height='50px'/>
    </Container>
    </Layout>
    );
  };
  
  export default HomePage;
