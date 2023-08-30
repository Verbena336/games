import { IeOutlined, WindowsFilled } from '@ant-design/icons';

type GenreProps = { value: string; label: string };
type sortProps = { id: string; value: string; text: string };
type PlatformProps = { value: string; label: JSX.Element | string };

export const sortOptions: sortProps[] = [
  { id: '1', value: '', text: 'Without sort' },
  { id: '2', value: 'relevance', text: 'Relevance' },
  { id: '3', value: 'popularity', text: 'Popularity' },
  { id: '4', value: 'alphabetical', text: 'Alphabetical' },
  { id: '5', value: 'release-date', text: 'Release date' },
];

export const platformOptions: PlatformProps[] = [
  { value: 'all', label: 'All Platforms' },
  {
    value: 'pc',
    label: (
      <>
        <WindowsFilled /> Windows (PC)
      </>
    ),
  },
  {
    value: 'browser',
    label: (
      <>
        <IeOutlined /> Browser (Web)
      </>
    ),
  },
];

export const genreOptions: GenreProps[] = [
  {
    value: '',
    label: 'All genres',
  },
  {
    value: '2d',
    label: '2D',
  },
  {
    value: '3d',
    label: '3D',
  },
  {
    value: 'action',
    label: 'Action',
  },
  {
    value: 'action-rpg',
    label: 'Action rpg',
  },
  {
    value: 'anime',
    label: 'Anime',
  },
  {
    value: 'battle-royale',
    label: 'Battle royale',
  },
  {
    value: 'card',
    label: 'Card',
  },
  {
    value: 'fantasy',
    label: 'Fantasy',
  },
  {
    value: 'fighting',
    label: 'Fighting',
  },
  {
    value: 'first-person',
    label: 'First person',
  },
  {
    value: 'flight',
    label: 'Flight',
  },
  {
    value: 'horror',
    label: 'Horror',
  },
  {
    value: 'low-spec',
    label: 'Low spec',
  },
  {
    value: 'martial-arts',
    label: 'Martial arts',
  },
  {
    value: 'military',
    label: 'Military',
  },
  {
    value: 'mmo',
    label: 'MMO',
  },
  {
    value: 'mmofps',
    label: 'MMOFPS',
  },
  {
    value: 'mmorpg',
    label: 'MMORPG',
  },
  {
    value: 'mmorts',
    label: 'MMORTS',
  },
  {
    value: 'mmotps',
    label: 'MMOTPS',
  },
  {
    value: 'moba',
    label: 'Moba',
  },
  {
    value: 'open-world',
    label: 'Open World',
  },
  {
    value: 'permadeath',
    label: 'Permadeath',
  },
  {
    value: 'pixel',
    label: 'Pixel',
  },
  {
    value: 'pve',
    label: 'PVE',
  },
  {
    value: 'pvp',
    label: 'PVP',
  },
  {
    value: 'racing',
    label: 'Racing',
  },
  {
    value: 'sailing',
    label: 'Sailing',
  },
  {
    value: 'sandbox',
    label: 'Sandbox',
  },
  {
    value: 'sci-fi',
    label: 'Sci-fi',
  },
  {
    value: 'shooter',
    label: 'Shooter',
  },
  {
    value: 'side-scroller',
    label: 'Side scroller',
  },
  {
    value: 'social',
    label: 'Social',
  },
  {
    value: 'space',
    label: 'Space',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
  {
    value: 'strategy',
    label: 'Strategy',
  },
  {
    value: 'superhero',
    label: 'Superhero',
  },
  {
    value: 'survival',
    label: 'Survival',
  },
  {
    value: 'tank',
    label: 'Tank',
  },
  {
    value: 'third-person',
    label: 'Third person',
  },
  {
    value: 'top-down',
    label: 'Top-down',
  },
  {
    value: 'tower-defense',
    label: 'Tower defense',
  },
  {
    value: 'turn-based',
    label: 'Turn based',
  },
  {
    value: 'voxel',
    label: 'Voxel',
  },
  {
    value: 'zombie',
    label: 'Zombie',
  },
];
