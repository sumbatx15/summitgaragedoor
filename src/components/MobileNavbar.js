import {
  Box,
  Button,
  Circle,
  Container,
  DarkMode,
  HStack,
  Img,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { Menu, Phone } from "react-feather";
import { useWindowScroll } from "react-use";
import { NavigationDrawer } from "./NavigationDrawer";
 
export const MobileNavbar = () => {
  const { x, y } = useWindowScroll();
  const drawerController = useDisclosure();
  console.log('drawerController:', drawerController)

  const shadow = y > 0 ? "xl" : "";
  return (
    <Box
      as="nav"
      bg="gray.800"
      color="white"
      py="2"
      pos="sticky"
      zIndex={10}
      top="0"
      transition="box-shadow 200ms ease-in-out"
      shadow={shadow}
    >
      <Container maxW="container.lg">
        <HStack align="center" justify="space-between">
          <Img src="/logo-white.svg" h="10" />
          <DarkMode>
            <Button
              as="a"
              href="tel:+1-647-696-6639"
              leftIcon={<Phone />}
              rounded="full"
              ml="auto"
              colorScheme="gray"
              variant="outline"
            >
              <Stack fontSize="sm" fontWeight="medium" spacing="0">
                <HStack spacing="4px">
                  <Circle bg="green.400" size="2" />
                  <Text color="green.400">Open</Text>
                </HStack>
                <Text fontSize="xs">24/7 Emergency Service</Text>
              </Stack>
            </Button>
          </DarkMode>
          <Menu onClick={() => {
            console.log('click')
            drawerController.onOpen()
          }} />
          <NavigationDrawer {...drawerController} />
        </HStack>
      </Container>
    </Box>
  );
};
