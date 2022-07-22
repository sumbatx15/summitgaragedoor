import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    <AnimatePresence>
      <ChakraProvider theme={theme}>
        <motion.main
          transition={spring}
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: 0, y: -100 }}
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.main>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
