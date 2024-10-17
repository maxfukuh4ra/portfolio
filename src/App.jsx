import styles from './App.module.css'
import { Navbar } from "./components/navbar/navbar"
import { Hero } from "./components/hero/hero"

function App() {
  return <div className = {styles.App}>
    <Navbar />
    <Hero />
  </div>;
}

export default App