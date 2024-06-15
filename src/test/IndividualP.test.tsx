

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndividualP from '../Components/IndividualP';
import { Product } from '../models/Product';
import { vi } from 'vitest';

describe('Da li se renderuje komponenta IndividualP', () => {
        const product: Product = {
          id: 1,
          ime: 'Borovnica',
          cena: 200,
          kolicina: 5,
          jedinica: 'kg',
          opis: 'Borovnica ili crna borovnica, borovinka, borovnjača, crna jagoda, brusnica i mrča (lat. Vaccinium myrtillus)[1] je žbunasta biljka[2] iz porodice vresova (Ericaceae). Naučni naziv je izveden od latinskih reči bacca = bobica i myrtus (deminutiv myrtillus) po sličnosti listova sa biljkom mirtom.',
          family: 'bobičasto voće'
        };

  const onAdd = vi.fn();
  const onDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('da li se prikazuju detalji proizvoda', () => {
    render(<IndividualP oneP={product} onAdd={onAdd} onDelete={onDelete} />);
    
    expect(screen.getByText(product.ime)).toBeInTheDocument();
    expect(screen.getByText(product.cena.toString())).toBeInTheDocument();
    expect(screen.getByText(`${product.kolicina}${product.jedinica}`)).toBeInTheDocument();
  });

  test('provera rada OnAdd funkcije', () => {
    render(<IndividualP oneP={product} onAdd={onAdd} onDelete={onDelete} />);

    const addButton = screen.getByLabelText(/plus/i);
    fireEvent.click(addButton);

    expect(onAdd).toHaveBeenCalledWith(product.id);
  });

  test('provera rada OnDelete funkcije', () => {
    render(<IndividualP oneP={product} onAdd={onAdd} onDelete={onDelete} />);

    const deleteButton = screen.getByLabelText(/minus/i);
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(product.id);
  });
});













