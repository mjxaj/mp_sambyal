import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <About />
      <Services />
      <Gallery />
      <Quotes />
      <Contact />
      <Footer />
    </main>
  );
} 