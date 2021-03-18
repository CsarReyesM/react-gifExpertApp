import React, {useState} from 'react';
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One pug', 'Samurai', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['One punch']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'X-Men']);
    //}

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategorie setCategories={setCategories}/>
        <hr/>
        
        <ol>
                {categories.map( category =>
                <GifGrid
                    key ={category}
                    category= {category}
                    />
                )}
        </ol>
    
        </>
    )
}
