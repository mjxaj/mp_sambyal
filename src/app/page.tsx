import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <About />
      <News />
      <Services />
      <Gallery />
      <Quotes />
      <Contact />
      <Footer />
    </main>
  );
} 