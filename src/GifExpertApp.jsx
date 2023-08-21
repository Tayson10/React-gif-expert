import{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;

        // console.log(newCategory);
        setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [...cat, 'Valorant']);

    }

    // console.log(categories);
    //Limpiar busqueda
    const cleanUp = () => {
        setCategories([]);
    }
    
    

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
            onNewCategory={onAddCategory}
        />

        <br/>

        <button className='button' onClick={cleanUp}>Limpiar Busqueda</button>

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
            categories.map((category) =>(
                <GifGrid
                key={category} category={category}/>                    
            ))
        }
    </>     
  )
}

