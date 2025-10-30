import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo"></div>
        <nav className="menu">
          <a href="#">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="info">
        <h2>SERVICIO NACIONAL DE APRENDIZAJE</h2>
        <h3>CENTRO DE GESTIÓN DE MERCADOS</h3>
        <h4>BOGOTÁ</h4>
      </section>

      <section className="programas">
        <div className="card">ADSO</div>
        <div className="card">Redes de Datos</div>
        <div className="card">Animación 3D</div>
        <div className="card">Logística</div>
        <div className="card">Mercadeo</div>
        <div className="card">Sistemas</div>
      </section>

      <section className="contacto">
        <form>
          <label>Nombres</label>
          <input type="text" placeholder="Ingresa tu nombre" />

          <label>Correo</label>
          <input type="email" placeholder="ejemplo@correo.com" />

          <label>Mensaje</label>
          <textarea rows="4" placeholder="Escribe tu mensaje..."></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
