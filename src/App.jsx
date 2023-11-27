import Hero from "./components/2-Hero/Hero"
import Header from "./components/1-Header/Header"
import Main from "./components/3-Main/Main.jsx"
import Contact from "./components/4-Contact/Contact"
import Footer from "./components/5-Footer/Footer"

function App() {

  return (
      <div className="container">
        <Header />
        <div className="splinter"></div>
        <Hero />
        <div className="splinter"></div>
        <Main />
        <div className="splinter"></div>
        <Contact />
        <div className="splinter"></div>
        <Footer />
      </div>
  )
}

export default App
