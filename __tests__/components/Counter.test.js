import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Counter } from '@/components/Counter';
import counterReducer from '@/store/slices/counterSlice';

// Create a test store
const createTestStore = (initialState = { counter: { value: 0 } }) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });
};

const renderWithProvider = (component, initialState) => {
  const store = createTestStore(initialState);
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('Counter Component', () => {
  it('renders with initial value', () => {
    renderWithProvider(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter when plus button is clicked', () => {
    renderWithProvider(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /plus/i });
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when minus button is clicked', () => {
    renderWithProvider(<Counter />, { counter: { value: 5 } });
    const decrementButton = screen.getByRole('button', { name: /minus/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('resets counter when reset button is clicked', () => {
    renderWithProvider(<Counter />, { counter: { value: 10 } });
    const resetButton = screen.getByRole('button', { name: /rotateccw/i });
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});