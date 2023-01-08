import { useState } from "react";

import { About, Contact, Hero, Nav, Work } from "./components";
import { motion, useScroll, useTransform } from "framer-motion";
function App() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
