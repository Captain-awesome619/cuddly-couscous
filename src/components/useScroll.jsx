import { useInView,InView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.5, ) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh,  triggerOnce:true});

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
