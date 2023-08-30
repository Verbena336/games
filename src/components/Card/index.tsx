import React from 'react';
import { Link } from 'react-router-dom';

import { gamesResponse } from '../../store/services/types/games';

import styles from './Card.module.scss';

import { Card } from 'antd';
const { Meta } = Card;

type gameProps = {
  game: gamesResponse;
};

function Gamecard({ game }: gameProps): JSX.Element {
  return (
    <Link to={`/game/${game.id}`} data-testid="cardlink">
      <Card hoverable cover={<img alt={game.title} src={game.thumbnail} />}>
        <Meta title={game.title} description={game.genre} style={{ marginBottom: '0.2rem' }} />

        <div className={styles.metaWrapper}>
          <Meta description={game.publisher} />
          <Meta description={new Date(game.release_date).toLocaleDateString('ru')} />
        </div>
      </Card>
    </Link>
  );
}

export default Gamecard;
