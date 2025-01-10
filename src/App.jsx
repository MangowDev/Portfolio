import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`} id='content'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
