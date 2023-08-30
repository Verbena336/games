import reducer, {
  setCategory,
  setPlatform,
  setSort,
  setIsLoading,
  FiltersSlice,
  initialState,
} from './filtersSlice';

describe('Filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should change category state', () => {
    const previousState: FiltersSlice = initialState;
    expect(reducer(previousState, setCategory('2d'))).toEqual({
      platform: 'all',
      category: '2d',
      sort: '',
      isLoading: true,
    });
  });

  it('should change platform state', () => {
    const previousState: FiltersSlice = {
      platform: 'all',
      category: '2d',
      sort: '',
      isLoading: true,
    };
    expect(reducer(previousState, setPlatform('pc'))).toEqual({
      platform: 'pc',
      category: '2d',
      sort: '',
      isLoading: true,
    });
  });

  it('should change sort state', () => {
    const previousState: FiltersSlice = {
      platform: 'pc',
      category: '2d',
      sort: '',
      isLoading: true,
    };
    expect(reducer(previousState, setSort('popularity'))).toEqual({
      platform: 'pc',
      category: '2d',
      sort: 'popularity',
      isLoading: true,
    });
  });

  it('should change loading state', () => {
    const previousState: FiltersSlice = {
      platform: 'pc',
      category: '2d',
      sort: 'popularity',
      isLoading: true,
    };
    expect(reducer(previousState, setIsLoading(false))).toEqual({
      platform: 'pc',
      category: '2d',
      sort: 'popularity',
      isLoading: false,
    });
  });
});
