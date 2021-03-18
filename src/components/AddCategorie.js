import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategorie = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats])
            setInputValue('')
        }
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={inputValue}
              onChange= {handleInputChange}
            />  
        </form>
        
    )
}

AddCategorie.propTypes = {
    setCategories: PropTypes.func.isRequired
}

// COMANDOS PARA SUBIR A LOCAL HOST

{/*
    Viajes privados;
    AFAC 
    Pymes
    Migracion // declaracion general...
              // 1er oficial y piloto 
              //
*/}dgaoc
    //