import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetGameByIdQuery } from '../../store/services/gamesApi';

import AppLayout from '../Layout';
import GameHeader from '../GameHeader';
import ErrorPage from '../Error';

import styles from './Game.module.scss';

import { Carousel, Descriptions, Empty, Spin, Tabs } from 'antd';

function Game(): JSX.Element {
  const { game } = useParams();

  const { data, isError, isLoading } = useGetGameByIdQuery(game!);

  return (
    <AppLayout>
      <div className={styles.wrapper}>
        {isLoading && <Spin size="large" data-testid="loader" />}
        {isError && (
          <ErrorPage
            isButton={true}
            status={{ status: '500' }}
            text={'Oops, something went wrong! Try again or wait for a little.'}
          />
        )}
        {data && (
          <>
            <GameHeader title={data.title} />
            <div className={styles.content}>
              <div className={styles.images}>
                <img src={data.thumbnail} className={styles.img} alt={data.title} />
                {data.screenshots && (
                  <Carousel autoplay className={styles.carousel}>
                    {data.screenshots.map((image) => {
                      return <img key={image.id} alt={`${image.id}`} src={image.image} />;
                    })}
                  </Carousel>
                )}
              </div>

              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    key: '1',
                    label: 'Description',
                    children: (
                      <Descriptions column={1}>
                        <Descriptions.Item>
                          {data.description || data.short_description}
                        </Descriptions.Item>
                        <Descriptions.Item label="Developer">{data.developer}</Descriptions.Item>
                        <Descriptions.Item label="Publisher">{data.publisher}</Descriptions.Item>
                        <Descriptions.Item label="Genre">{data.genre}</Descriptions.Item>
                        <Descriptions.Item label="Release date">
                          {new Date(data.release_date).toLocaleDateString('ru')}
                        </Descriptions.Item>
                      </Descriptions>
                    ),
                  },
                  {
                    key: '2',
                    label: 'System Requirements',
                    children: (
                      <Descriptions column={1}>
                        {data.minimum_system_requirements ? (
                          <>
                            <Descriptions.Item label="Operation System">
                              {data.minimum_system_requirements.os}
                            </Descriptions.Item>
                            <Descriptions.Item label="Processor">
                              {data.minimum_system_requirements.processor}
                            </Descriptions.Item>
                            <Descriptions.Item label="Graphics">
                              {data.minimum_system_requirements.graphics}
                            </Descriptions.Item>
                            <Descriptions.Item label="Memory">
                              {data.minimum_system_requirements.memory}
                            </Descriptions.Item>
                            <Descriptions.Item label="Storage">
                              {data.minimum_system_requirements.storage}
                            </Descriptions.Item>
                          </>
                        ) : (
                          <Descriptions.Item>
                            <Empty style={{ margin: '0 auto' }} />
                          </Descriptions.Item>
                        )}
                      </Descriptions>
                    ),
                  },
                ]}
              />
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default Game;
