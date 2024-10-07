
import './App.css'
import Blog from './components/Blog'
import Company from './components/Company'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Review from './components/Review'
import Section from './components/Section'
import Services from './components/Services'



function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Company/>
      <Services/>
      <Section/>
      <Review/>
      <Newsletter/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
