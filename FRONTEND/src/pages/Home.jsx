import { Footer } from "../components/Footer/Footer"
import {Navbar} from "../components/Navbar/navbar"
import { ProductCard } from "../components/Product/ProductCard"
import HeroSlider from "../components/slider/Slider"
// import {Footer} from "../components/Footer/Footer"


export const Home = () =>{
    return (
        <>
          <Navbar />
          <HeroSlider />
          <ProductCard />
          <Footer />
        </>
    )
}