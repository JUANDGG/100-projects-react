
/*
Element[] es una anotación de tipo en TypeScript que indica un array de elementos del tipo Element. Element es una interfaz en TypeScript que representa un nodo en el árbol del DOM (Document Object Model). Básicamente, Element es la clase base para la mayoría de los nodos que pueden aparecer en un documento HTML o XML
*/ 
const intersectionS = (targets:Element[]) => {
    const intersection = (entries:IntersectionObserverEntry[]) => {

        entries.forEach(e=>{
            console.log(e.target)
        })

        
    };
    
    const observer = new IntersectionObserver(intersection);

    targets.forEach(target => observer.observe(target));
    
    /*
        se encuentra dentro de la función intersectionS y tiene como propósito devolver una función que se utilizará para limpiar el IntersectionObserver cuando el componente React se desmonte. Esto es importante para prevenir posibles fugas de memoria y garantizar que el observador se desconecte correctamente.
    */


    
    return () => {
    targets.forEach(target => observer.unobserve(target));
    observer.disconnect();

    }
    
};


export default intersectionS;