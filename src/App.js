import Starter from "./sections/Starter";
import About from "./sections/About"
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials"
import Blogs from "./sections/Blogs"
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import { themeContext } from "./Context";
import {useContext} from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.div initial = "hidden" animate = "show"
style={{background : darkMode? 'black': '',
color : darkMode? 'white': ''
}}

    >
<ScrollToTop />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
