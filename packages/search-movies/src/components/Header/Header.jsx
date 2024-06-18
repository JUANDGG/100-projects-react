

import FormHeader from './FormHeader.jsx'

function Header({titleHeader}){
    return (
        <header>
            <h1>{titleHeader}</h1>
            <FormHeader placeHolderInpt='Avengers,Star Wars ,The Matrix...' textBtn='Search' />
        </header>
    )
}

export default Header; 