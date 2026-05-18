/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Details from "./components/Details";
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="selection:bg-wedding-teal/30 selection:text-wedding-teal">
      <Navbar />
      <Hero />
      <Countdown />
      <Story />
      <Timeline />
      <Gallery />
      <Venue />
      <Details />
      <Gifts />
      <Footer />
    </main>
  );
}

