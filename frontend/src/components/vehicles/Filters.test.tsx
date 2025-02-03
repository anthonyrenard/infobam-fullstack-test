import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import Filters from './Filters';

describe('Filters Component', () => {
  const mockSetManufacturer = jest.fn();
  const mockSetType = jest.fn();
  const mockSetYear = jest.fn();
  const mockHandleSortChange = jest.fn();

  beforeEach(() => {
    render(
      <Filters
        manufacturer=""
        setManufacturer={mockSetManufacturer}
        type=""
        setType={mockSetType}
        year=""
        setYear={mockSetYear}
        handleSortChange={mockHandleSortChange}
        sortField="price"
        sortOrder="ASC"
      />
    );
  });

  it('renders all filter options', () => {
    expect(screen.getByPlaceholderText('Year')).toBeInTheDocument();
    expect(screen.getByText( /all manufacturers/i )).toBeInTheDocument();
    expect(screen.getByText( /all types/i )).toBeInTheDocument();
  });

  it('calls setYear when year input is changed and a valid value is typed', async () => {
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2021' } });

    await waitFor(() => {
      expect(mockSetYear).toHaveBeenCalledWith('2021');
    });
  });

  it('calls handleSortChange when sort by price button is clicked', () => {
    fireEvent.click(screen.getByText(/sort by price/i));

    expect(mockHandleSortChange).toHaveBeenCalledWith('price');
  });

  it('calls handleSortChange when sort by year button is clicked', () => {
    fireEvent.click(screen.getByText(/sort by year/i));

    expect(mockHandleSortChange).toHaveBeenCalledWith('year');
  });
});
