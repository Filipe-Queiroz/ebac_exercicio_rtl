import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';

describe('Deve renderizar post-comments corretamente', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios', () => {
        render(<Post/>)

        const inputDoComentario = screen.getByRole('textbox')
        fireEvent.change(inputDoComentario, {target: {value: 'Primeiro comentário'}})

        const adicionaBotao = screen.getByTestId('btn-adiciona-comentario')
        fireEvent.click(adicionaBotao)

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()

        fireEvent.change(inputDoComentario, {target: {value: 'Segundo comentário'}})
        fireEvent.click(adicionaBotao)

        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
});