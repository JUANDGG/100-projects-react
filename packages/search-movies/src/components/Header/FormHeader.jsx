
//import { useRef } from "react";

import { useEffect, useState } from "react";

function FormHeader({placeHolderInpt, textBtn}) {

    const [inpt1 ,setInpt1] =useState('');
    const [error,setError] =useState(null);
    //prevent default behaviors
    const handleSubmit = (e) => {

        //usando use ref o acceediendo  con el dom esto seria acceder de una forma no controlada
        e.preventDefault(); 

        //const fields = new FormData(e.target);
        //console.log(fields.get("inputDta"))
        //el from entries de vuelve todas las entradas del usuario osea captura todas las entradas que tuvo el dom recientemente 
        //el formData me sirve para trabajar con los formularios
        //const {inputDta} = Object.fromEntries(new FormData(e.target))
        //console.log(inputDta)
        //console.log(e.target.firstElementChild.value)

        //forma controlada se haria usando un estado es mucha mas lenta por que renderiza todo el componenete cada vez
    };


    //---> usando use refconst inputRef = useRef();
    /*
        const handleClick =()=>{
        //current es algo nativo de react y lo que esta haciendo aca es basicamente buscar la referencia del componente crear un object y devolver el valor es como el value despues de usar el selector con vanilla
        const value = inputRef.current.value;

        console.log(value)
    }
    */ 
    

    {/*
                
                
    <form onSubmit={handleSubmit} >
    <input ref={inputRef} type="text" placeholder={placeHolderInpt}  id="input"/>
    <button onClick={handleClick} type="submit">{textBtn}</button>
    </form>
        */}


    

    const handleChange=(e)=>{
        setInpt1(e.target.value)
    }

    useEffect(()=>{
        if(inpt1 ==''){
            setError("* el campo no puede estar vacio")
            return
        }

        else if(inpt1.match(/^\d+$/)){
            setError("* el campo no puede tener numeros")
            return
        }
        
        else if(inpt1.length<3){
            setError("* la busqueda tiene que tener almenos 3 caracteres")
            return
        }

        else {
            setError(null)
        }

    },[inpt1])

    return(
        <div>
            <form onSubmit={handleSubmit} id="formulario1">
        <input onChange={handleChange} value={inpt1} type="text" name="inputDta"  placeholder={placeHolderInpt} />

        {/*<input  type="pas" name="inputPassword"  placeholder={placeHolderInpt} /> */}
        <button  type="submit">{textBtn}</button>
        </form>
    
        {error && <p style={{color:'red'}}>{error}</p>}
        
        </div>
        
    );

}



export default FormHeader;
