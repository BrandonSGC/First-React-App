export function Greeting({title, name="usuario"}) {
    console.log(title)    
    return <h1>Hola {name}, estás aprendiendo {title}!</h1>;
}


export function IsMarried() {
    const name = "Brandon";
    const married = true;
    return (
      <h2>{married ? `${name} está casado 🙄` : `${name} no está casado 😄`}</h2>
    );
  }
  