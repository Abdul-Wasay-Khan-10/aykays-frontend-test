import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import Installation from "./components/sections/Installation";
import CTA from "./components/sections/CTA";
import Testimonials from "./components/sections/Testimonials";
import Download from "./components/sections/Download";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      
      <Hero />
      <Features />
      <Showcase />
       <Installation />
           <CTA />
            <Testimonials />
      <Download />
    </Layout>
  );
}

export default App;
