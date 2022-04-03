import Starter from "./sections/Starter";
import About from "./sections/About"
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials"
import Blogs from "./sections/Blogs"
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
function App() {
  return (
    <motion.div initial = "hidden" animate = "show">
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
