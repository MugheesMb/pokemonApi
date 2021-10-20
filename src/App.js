import React, {  useEffect, useState  } from 'react';

import Searchbox from '../src/components/SearchBox';
import Cardp from '../src/components/Cardp';
import Scroll from '../src/components/Scroll';



const App = () => {

    const [arr, setarr] = useState([]);
    const [searchfield, setsearchfield] = useState(''); 


    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(users => { setarr( users.results ) });

        });
        

   const onSearchChange = (event) => {
        setsearchfield( event.target.value )
    };
    
    const  filteredarr = arr.filter( (arry) => {
       return   arry.name.toLowerCase().includes(searchfield.toLowerCase())
  
     })
    
    return(
        <>
        
        {
         (arr.length === 0)  ?
              <div style={{height: '100vh' , textAlign: 'center' }} >
                 <h1>Pokemons</h1>
                <Searchbox searchChange={onSearchChange} />
                <h1 style={{ textAlign: 'center',  }} >Loading</h1> </div> 
       
            :
                <div className='tc'>
                    <h1>Pokemons</h1>
                    <Searchbox searchChange={onSearchChange} />

                    <Scroll>
                        < Cardp arr={filteredarr} />
                    </Scroll>
                </div>
}        
</>
    )
}
export default App;