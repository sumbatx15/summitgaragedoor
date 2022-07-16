import {
  Button,
  Circle,
  DarkMode,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Grid, HelpCircle, Home, MessageSquare, Phone, PhoneCall } from "react-feather";

export const NavigationDrawer = ({ isOpen, onClose, ...props }) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} {...props}>
      <DrawerOverlay />
      <DrawerContent bg="gray.800" color="white">
        <DrawerCloseButton />
        <DrawerHeader>
          <Img src="/logo-white.svg" h="10" />
        </DrawerHeader>

        <DrawerBody>
          <Stack w="full" align="stretch">
            <Link onClick={onClose} href="#header">
              <HStack py="4" px="4" bg="gray.900" rounded="3xl">
                <Home color="var(--chakra-colors-white)" />
                <Text>Home</Text>
              </HStack>
            </Link>
            <Link onClick={onClose} href="#services">
              <HStack py="4" px="4" bg="gray.900" rounded="3xl">
                <Grid color="var(--chakra-colors-white)" />
                <Text>Services</Text>
              </HStack>
            </Link>
            <Link onClick={onClose} href="#whyus">
              <HStack py="4" px="4" bg="gray.900" rounded="3xl">
                <HelpCircle color="var(--chakra-colors-white)" />
                <Text>Why choose us</Text>
              </HStack>
            </Link>
            <Link onClick={onClose} href="#reviews">
              <HStack py="4" px="4" bg="gray.900" rounded="3xl">
                <MessageSquare color="var(--chakra-colors-white)" />
                <Text>Reviews</Text>
              </HStack>
            </Link>
            <Link onClick={onClose} href="#contact-us">
              <HStack py="4" px="4" bg="gray.900" rounded="3xl">
                <PhoneCall color="var(--chakra-colors-white)" />
                <Text>Contact us</Text>
              </HStack>
            </Link>
          </Stack>
          <Divider my="4" borderColor="gray.600" />
          <Stack>
            <Button
              as="a"
              href="tel:+1-647-696-6639"
              size="lg"
              colorScheme="primary"
              rounded="full"
              py="7"
              w="full"
              leftIcon={<Phone />}
            >
              CALL US: 647-696-6639
            </Button>
            <HStack justify="center">
              <HStack spacing="4px">
                <Circle bg="green.400" size="2" />
                <Text color="green.400">Open</Text>
              </HStack>
              <Text fontSize="xs">24/7 Emergency Service</Text>
            </HStack>
          </Stack>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
