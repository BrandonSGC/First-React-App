function Product() {
    return <div>
        <h1>Product</h1>
    </div>
}

export function Navbar() {
    return <nav>
        navigation
    </nav>

}

// A la hora de exportar de esta manera basicamente
// lo que hacemos es exportar todo el archivo. Ahora, 
// en el archivo que vayamos a importarlo no vamos a 
// poder importarlo con destructuracion, ya que importamos
// todo el codigo.
export default Product