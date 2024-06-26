import React, { useState } from 'react';
import './App.css';
import Testimonio from './components/Info.jsx';

function App() {
  // Paso 2: Array de testimonios
  const testimonios = [
    {
        nombre: 'Carlos Gómez',
        pais: 'Argentina',
        imagen: '1',
        cargo: 'Ingeniero de Software',
        empresa: 'TechSolutions',
        testimonio: 'Carlos es un ingeniero de software altamente capacitado con más de 10 años de experiencia en la industria. Su enfoque en la eficiencia y la optimización ha llevado a la creación de soluciones innovadoras que han mejorado significativamente la productividad de su equipo. Además, Carlos es conocido por su capacidad para resolver problemas complejos con rapidez y precisión, lo que lo convierte en un recurso invaluable para cualquier proyecto tecnológico.',
    },
    {
        nombre: 'María Rodríguez',
        pais: 'España',
        imagen: '2',
        cargo: 'Directora de Marketing',
        empresa: 'Creativa S.A.',
        testimonio: 'María es una líder visionaria en el campo del marketing, con un enfoque en la innovación y la creatividad. Su capacidad para entender las tendencias del mercado y adaptarse rápidamente ha llevado a la empresa a nuevos niveles de éxito. María es también una mentora dedicada, siempre dispuesta a compartir su conocimiento y experiencia con su equipo para ayudarles a crecer y desarrollarse profesionalmente.',
    },
    {
        nombre: 'Luis Fernández',
        pais: 'México',
        imagen: '3',
        cargo: 'Gerente de Proyectos',
        empresa: 'Desarrollos Globales',
        testimonio: 'Luis es un gerente de proyectos excepcional con una habilidad innata para coordinar equipos multidisciplinarios y entregar resultados sobresalientes. Su enfoque en la planificación estratégica y la gestión eficiente de recursos ha resultado en la finalización exitosa de numerosos proyectos complejos. Luis es reconocido por su capacidad para mantener la calma bajo presión y su dedicación a la excelencia en cada tarea que emprende.',
    },
];

  const [indiceActual, setIndiceActual] = useState(0);

  // Paso 2: Crear funciones para navegar entre testimonios
  const siguienteTestimonio = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % testimonios.length);
  };

  const anteriorTestimonio = () => {
    setIndiceActual((prevIndice) => (prevIndice - 1 + testimonios.length) % testimonios.length);
  };

  // Paso 3: Renderizar el testimonio actual
  const testimonioActual = testimonios[indiceActual];

  // Paso 4 y 5: Renderizar UI y botones para cambiar de testimonio
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Iformacion de personas al azar</h1>
        <Testimonio
          nombre={testimonioActual.nombre}
          pais={testimonioActual.pais}
          imagen={testimonioActual.imagen}
          cargo={testimonioActual.cargo}
          empresa={testimonioActual.empresa}
          testimonio={testimonioActual.testimonio}
        />
        {/* Paso 5: Botones para cambiar de testimonio */}
        <div className='buttons-prev-next'>
          <button onClick={anteriorTestimonio}>Anterior</button>
          <button onClick={siguienteTestimonio}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default App;
