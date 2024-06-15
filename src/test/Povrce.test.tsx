
import { render, screen, fireEvent } from '@testing-library/react';
import Povrce from '../Components/Povrce';
import { Product } from '../models/Product';
import { vi } from 'vitest';

const mockPovrce: Product[] = [
  new Product(1, 'Proizvod 1', 'Opis 1', 10, 'kg', 'povrce', 100),
  new Product(2, 'Proizvod 2', 'Opis 2', 20, 'kg', 'povrce', 200),
  new Product(3, 'Proizvod 3', 'Opis 3', 30, 'kg', 'povrce', 300),
  new Product(4, 'Proizvod 4', 'Opis 4', 40, 'kg', 'povrce', 400),
];

describe('Testiramo funkciuonalnost komponente Povrce', () => {
  test('prikazi vise proizvoda klikom na dugme "Prikaži više" ', () => {
    const mockOnAdd = vi.fn();
    const mockOnDelete = vi.fn();
    const mockResetCategory = vi.fn();

    render(
      <Povrce 
        povrce={mockPovrce} 
        onAdd={mockOnAdd} 
        onDelete={mockOnDelete} 
        resetCategory={mockResetCategory} 
      />
    );
    expect(screen.getByText('Proizvod 1')).toBeInTheDocument();
    expect(screen.getByText('Proizvod 2')).toBeInTheDocument();
    expect(screen.queryByText('Proizvod 3')).not.toBeInTheDocument();
    expect(screen.queryByText('Proizvod 4')).not.toBeInTheDocument();

    
    const showMoreButton = screen.getByText('Prikaži više');
    fireEvent.click(showMoreButton);

    expect(screen.getByText('Proizvod 3')).toBeInTheDocument();
    expect(screen.getByText('Proizvod 4')).toBeInTheDocument();
  });

  test('pozivanje resetCategory prilikom svakog renderovanja', () => {
    const mockOnAdd = vi.fn();
    const mockOnDelete = vi.fn();
    const mockResetCategory = vi.fn();

    render(
      <Povrce 
        povrce={mockPovrce} 
        onAdd={mockOnAdd} 
        onDelete={mockOnDelete} 
        resetCategory={mockResetCategory} 
      />
    );

    expect(mockResetCategory).toHaveBeenCalledTimes(1);
  });
});
