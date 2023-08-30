import React from 'react';

import { setPage } from '../../store/reducers/paginationSlice';
import {
  categoryValue,
  platformValue,
  setCategory,
  setPlatform,
  setSort,
  sortValue,
} from '../../store/reducers/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Filters.module.scss';

import { Select } from 'antd';
const { Option, OptGroup } = Select;

import { genreOptions, platformOptions, sortOptions } from './data';

function Filters(): JSX.Element {
  const platform = useAppSelector(platformValue);
  const category = useAppSelector(categoryValue);
  const sort = useAppSelector(sortValue);

  const dispatch = useAppDispatch();

  const handlePlatform = (value: string): void => {
    dispatch(setPlatform(value));
    dispatch(setPage(1));
  };

  const handleCategory = (value: string): void => {
    dispatch(setCategory(value));
    dispatch(setPage(1));
  };

  const handleSort = (value: string): void => {
    dispatch(setSort(value));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.selects} data-testid="filters">
      <Select
        defaultValue={platform}
        style={{ width: 150 }}
        onChange={handlePlatform}
        dropdownStyle={{ zIndex: '9' }}
        options={platformOptions}
        data-testid="platform"
      />

      <Select
        onChange={handleCategory}
        defaultValue={category}
        style={{ width: 150 }}
        options={genreOptions}
        dropdownStyle={{ zIndex: '9' }}
        data-testid="genre"
      />

      <Select
        defaultValue={sort}
        dropdownStyle={{ zIndex: '9' }}
        style={{ width: 150 }}
        onChange={handleSort}
      >
        <OptGroup label="Sort by">
          {sortOptions.map((opt) => (
            <Option key={opt.id} value={opt.value}>
              {opt.text}
            </Option>
          ))}
        </OptGroup>
      </Select>
    </div>
  );
}

export default Filters;
