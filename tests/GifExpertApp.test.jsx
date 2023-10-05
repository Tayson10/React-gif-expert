import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp/>', () => {
  
    test('debe añadir una categoria no existente ', () => {
        
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');


        fireEvent.input(input,{target:{value:'Saitama'}});
        fireEvent.submit(form);


        expect(screen.getByText('Saitama')).toBeTruthy();

    });

    test('no debe añadir una categoría existente', () => {
 
        render( <GifExpertApp />);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'One Punch' } } );
        fireEvent.submit( form );
        
        expect( screen.getAllByText('One Piece').length ).toBe( 1 );
 
    });
})
