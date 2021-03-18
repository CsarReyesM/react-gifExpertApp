import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs';
export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);

    

    //useEffect(() => {
    //    getGifs(category).then(setImages)
    //}, [category]) // esta sintaxis es para que renderice solo por primera vez 

    


    return (
        <>
         <h3>{category}</h3>
            
            <div className='card-grid contenedor'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id}
                        {...img}/>
                    ))
                }
                
            </div>
        </>
    )
}                    