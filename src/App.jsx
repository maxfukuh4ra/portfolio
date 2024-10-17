import styles from './App.module.css'
import { Navbar } from "./components/navbar/navbar"
import { Hero } from "./components/hero/hero"
import { About } from "./components/about/about"

function App() {
  return <div className = {styles.App}>
    <Navbar />
    <Hero />
    <About />
  </div>;
}

export default App