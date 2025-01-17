import { useState, useEffect } from 'react'
import cardImage from '../assets/logoblanco.png'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-primary z-0"></div>
      
      <div className="section-container relative z-10 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`md:w-1/2 space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl xs:text-5xl lg:text-6xl font-bold leading-tight"> Herramientas Innovadoras de 
              <span className="text-accent"> Fototerapia</span> y
              <span className="text-secondary"> Exploración Emocional</span>
            </h2>
            <p className="text-lg xs:text-xl text-light/90">
            Descubre cómo las cartas Angels Essence e Inner Essence pueden transformar tus sesiones y talleres, ayudándote a explorar emociones, sanar bloqueos y proyectar un futuro lleno de propósito. Estas herramientas están diseñadas especialmente para facilitadores, coaches y terapeutas comprometidos con la transformación y el crecimiento emocional de sus clientes.


            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-primary px-6 py-3 xs:px-8 font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                ¡QUIERO MIS MAZOS AHORA!
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-square xs:aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={cardImage} 
                  alt="Angels & Inner Essence Cards" 
                  className="w-full h-full object-cover animate-float"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 