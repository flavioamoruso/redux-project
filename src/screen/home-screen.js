import React from "react";
import Layout from "../components/layout";
import { Box, Container, Stack, InputWrapper, Button } from "../components/styled";
import Skeleton from "../components/styled/Skeleton";
import { ThemeProvider } from "styled-components";

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
      <Skeleton width='200px' height='100px' borderRadius='16px' variant="circle" ></Skeleton>
      <Stack spacing='24px' mt='80px' align='center'>
        <Button size='xl' variant='container'>bottone 1</Button>
        <Button size='md' variant='outlined'>bottone 2</Button>
        <Button size='sm' variant='text'>bottone 3</Button>
        <Button size='xl' variant='disabled'>bottone 4</Button>
      </Stack>
    </Container>
    </Layout>
    );
  };
  
  export default HomePage;
