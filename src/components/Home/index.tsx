import React, { useEffect, useState } from 'react';

import { useGetGamesQuery } from '../../store/services/gamesApi';
import { gamesResponse } from '../../store/services/types/games';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  categoryValue,
  isLoadingValue,
  platformValue,
  setIsLoading,
  sortValue,
} from '../../store/reducers/filtersSlice';
import {
  pageSizeValue,
  pageValue,
  setPage,
  setPageSize,
} from '../../store/reducers/paginationSlice';

import Gamecard from '../Card';
import AppLayout from '../Layout';
import Filters from '../Filters';
import ErrorPage from '../Error';

import styles from './Home.module.scss';

import { Divider, Spin, Pagination } from 'antd';

function Home(): JSX.Element {
  const platform = useAppSelector(platformValue);
  const category = useAppSelector(categoryValue);
  const loading = useAppSelector(isLoadingValue);
  const sort = useAppSelector(sortValue);
  const pageNum = useAppSelector(pageValue);
  const pageSize = useAppSelector(pageSizeValue);

  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetGamesQuery({ platform, category, sort });

  const [gamesOnPage, setGamesOnPage] = useState<gamesResponse[]>([]);

  const sliceResultsForPagination = (page: number, pageSize: number): void => {
    dispatch(setPage(page));
    dispatch(setPageSize(pageSize));

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    data && setGamesOnPage(data.slice(start, end));
    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    data && sliceResultsForPagination(pageNum, pageSize);
  }, [data]);

  if (isError) {
    dispatch(setIsLoading(false));
  }

  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <Filters />

        <Divider />

        {isLoading || loading ? (
          <Spin size="large" data-testid="loader" />
        ) : (
          <div className={styles.content}>
            {isError ? (
              <ErrorPage
                isButton={false}
                status={{ status: '500' }}
                text={'Oops, something went wrong! Try again or wait for a little.'}
              />
            ) : (
              <>
                <div className={styles.games}>
                  {gamesOnPage.map((game) => {
                    return <Gamecard key={game.id} game={game} />;
                  })}
                </div>
                <Pagination
                  pageSize={pageSize}
                  current={pageNum}
                  total={data && data.length}
                  onChange={sliceResultsForPagination}
                  data-testid="page"
                />
              </>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default Home;
