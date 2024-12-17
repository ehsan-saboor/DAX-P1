import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}

export default App;