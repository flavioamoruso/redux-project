import React from "react";
import { ReactComponent as Logo } from "../images/logo-footer.svg";
import { Container, Stack, Box } from "./styled";

const Footer = () => {
  return (
    <Container size='fullwidth' mt={['36px','96px']}>
      <Container>
        <Stack width='100%' justify='flex-start'>
          <Stack align='start' spacing='20px'>
          <Box>
            <Logo/>
          </Box>
          <Stack direction="column" align='start' height='100%' spacing='20px'>
            <Box>pick me</Box>
            <Box color="grey.100">
              Lorem ipsum dolor.
            </Box>
          </Stack>
          </Stack>
        </Stack>
      </Container>
      
    </Container>
  )
};

export default Footer;
