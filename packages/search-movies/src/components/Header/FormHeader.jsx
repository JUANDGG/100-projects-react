
function FormHeader({placeHolderInpt, textBtn}) {

    //prevent default behaviors
    const handleSubmit = (e) => {
        e.preventDefault(); 
    };


    const typeInpt=(e)=>{
        console.log(e.target.value);
    }

    return (
        
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder={placeHolderInpt} onKeyUp={typeInpt}/>
            <button type="submit">{textBtn}</button>
            </form>
        
        
    );
}



export default FormHeader;
