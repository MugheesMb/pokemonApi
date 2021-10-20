import React from 'react';
import Card from './Card';

const Cardp = ({arr}) =>{

    return(
        
        <div style={{display:'flex' , flexWrap: 'wrap'}}>
            
            {
            arr.map((pokemon , i) => {
                return(

           <Card key={i}  name={pokemon.name}  />
                );
            })
      
}
  </div>      
    
    );

}
export default Cardp;