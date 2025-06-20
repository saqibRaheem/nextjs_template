import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '@/store/slices/counterSlice';

describe('counter slice', () => {
  const initialState = { value: 0 };

  it('should return the initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = counterReducer({ value: 1 }, decrement());
    expect(actual.value).toEqual(0);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(5));
    expect(actual.value).toEqual(5);
  });

  it('should handle reset', () => {
    const actual = counterReducer({ value: 10 }, reset());
    expect(actual.value).toEqual(0);
  });
});