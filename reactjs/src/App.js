
import React from 'react';
import ShortenURL from './composant/ShortenURL';
import ShortenedURLList from './composant/ShortenedURLList';

function App() {
  return (
    <div>
      <header>
        <h1>URL Shortener</h1>
      </header>
      <main>
        <ShortenURL />
        <ShortenedURLList />
      </main>
    </div>
  );
}

export default App;
