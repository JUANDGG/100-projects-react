

import { useEffect } from 'react';
import intersectionS from '../../src/Intesecting.ts';
//components
import Box from './Box.jsx';



const colors: string[] =['red','blue','green','gray','yellow','orange'];

function AppBox(){

    useEffect(()=>{
        const targets = Array.from(document.querySelectorAll('.elementBox')) as Element[];
        const cleanup = intersectionS(targets);
        return cleanup; 
    },[])
    

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',

            width:'100vw'
            
        }}>
            {colors.map((element,index)=>{
                return  <Box key={index} className="elementBox" color={element}>caja{index}</Box> ;
            })}
            
        </div>
    )
}

export default AppBox;