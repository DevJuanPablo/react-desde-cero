import MainMenu from "./MainMenu"

function Header() {
  return (
    <header>
        <div>
          <img src="logo.png" alt="Logo de la empres" />
        </div>
        <div>
          <MainMenu />
        </div>
    </header>
  )
}

export default Header
// Este es un componente de encabezado que contiene un logo y un menú de navegación.
