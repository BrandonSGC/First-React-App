export function Header({logo, enlace1, enlace2, enlace3}) {
    return <header className="header">
        <div className="header__contenedor">            
            <div className="header__flex">
                <h1 className="header__heading">{logo}</h1>
                <nav className="navegacion">
                    <a href="/" className="navegacion__enlace">{enlace1}</a>
                    <a href="/" className="navegacion__enlace navegacion__enlace--activo">{enlace2}</a>
                    <a href="/" className="navegacion__enlace">{enlace3}</a>
                </nav>
            </div>
        </div>
    </header>
}