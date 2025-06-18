import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';

function App() {

  const [products] = useState([
    {
      id: 1,
      name: "Ilford HP5 Plus 400",
      filmSize: "35mm",
      price: 10,
      description: "A grainy black and white film with low contrast and versatility",
      image: "/assets/Ilford HP5.jpg"
    },
    {
      id: 2,
      name: "Polaroid Color i-Type",
      filmSize: "600",
      price: 25,
      description: "Color Polaroid film with a black frame",
      image: "/assets/Polaroid.jpg"
    },
    {
      id: 3,
      name: "CineStill BWXX Film ISO 250",
      filmSize: "35mm",
      price: 10,
      description: "Classic black and white film left relatively unchanged since it's release in 1959 for still and motion picture use",
      image: "/assets/CineStill BWXX.jpg"
    },
    {
      id: 4,
      name: "Kodak Porta 800 5-Pack",
      filmSize: "120",
      price: 40,
      description: "The choice for portrait photography, designed to capture natural skin tones",
      image: "/assets/Porta.jpg"
    },
    {
      id: 5,
      name: "Ilford SFX 200",
      filmSize: "120",
      price: 12,
      description: "A black and white film with extended red sensitivity",
      image: "/assets/Ilford SFX.jpg"
    },
    {
      id: 6,
      name: "Kodak Ektar 100 5-Pack",
      filmSize: "120",
      price: 40,
      description: "World's finest and smoothest grain of any color negative film today",
      image: "/assets/Ektar.jpg"
    },
    {
      id: 7,
      name: "CatLABS X Film ISO 80 MK II",
      filmSize: "4x5",
      price: 38,
      description: "A black and white film with a high silver content and deep tonal range",
      image: "/assets/CatLABS X.jpg"
    },
    {
      id: 8,
      name: "CineStill 800Tungsten",
      filmSize: "35mm",
      price: 10,
      description: "A slow speed color negative film that is excellent for indoor, lowlight shooting",
      image: "/assets/CineStill 800T.jpg"
    },
  ]);

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default App
