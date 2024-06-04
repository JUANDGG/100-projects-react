

//en typscript no se pueden definir las props directamente sin definir antes un valor
//otra cosa , si tu deseas no definirle un valor como tal ala prop te puedes crear una interfaz o un type
//para definir las props aparte y asi ts dejaria de quejarse



/*
interface BoxProps  {
    color:string
}

function Box({ color }:BoxProps){
    return(
        <div style={{
            backgroundColor:`${color}`
        }}>

        </div>
    )
}


//usando type
*/


/*

En TypeScript, type se utiliza para definir un alias de tipo. Es una forma de dar un nombre a un tipo que puede ser usado en el código para hacer que las definiciones de tipos sean más claras y reutilizables. En tu ejemplo, type BoxProps está definiendo un tipo llamado BoxProps que es un objeto con una propiedad color de tipo string.
*/
type BoxProps = {
    color:string,
    /*
    El error en tu código se debe a la forma en que has tipado la prop children en BoxProps. En TypeScript, children generalmente se tipa como React.ReactNode para permitir que se puedan pasar diferentes tipos de elementos hijos (texto, elementos JSX, arrays de elementos, etc.).*/
    children:React.ReactNode,
    className:string
}

/*
El error en tu código se debe a que estás intentando imprimir BoxProps directamente en la consola. BoxProps es un alias de tipo y no una variable que se pueda imprimir. En TypeScript, los tipos y las interfaces no existen en tiempo de ejecución, solo sirven para el chequeo de tipos en tiempo de compilación.

Si intentas ejecutar console.log(BoxProps), obtendrás un error porque BoxProps no es una entidad en tiempo de ejecución.

Solución
Si quieres inspeccionar las propiedades de un objeto que cumple con el tipo BoxProps, necesitas crear una instancia de un objeto que siga esa estructura y luego imprimir ese objeto.
console.log(BoxProps)
*/



function Box({color,children,className}:BoxProps){
    return(
        <div style={{
            backgroundColor:`${color}`,
            height:'500px',
            width:'500px',
            padding:"10px",
            margin:"10px",
            border:"1px solid black",
            borderRadius:"5px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            cursor:"pointer",
            boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.5)",
            
        }} className={className}>
            {children}
        </div>
    )
}

export default Box;