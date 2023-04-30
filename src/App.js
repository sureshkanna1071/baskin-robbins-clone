import './App.css';
import React, { createContext, useState } from 'react'
import { Header, HeroBanner, WhatsNew, ShopByRange, AllTimeFavorites, InsideScoop, BaskinRobbinsIn, CTA, Footer } from './components';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
       setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Header />
        <HeroBanner /> 
        <WhatsNew />
        <ShopByRange />
        <AllTimeFavorites />
        <InsideScoop />
        <BaskinRobbinsIn />
        <CTA />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
