import type { NextPage } from 'next'
import React from 'react';

import styles from '../styles/index.module.css';

import Playlists from './components/playlists';
import ItemMenu from './components/itemMenu';
import SongList from './components/songList';
import Player from './components/player';

import Divider from '@mui/material/Divider';

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Sideview}>
          <ItemMenu></ItemMenu>
          <Divider></Divider>
          <Playlists></Playlists>
        </div>
        <div className={styles.Songlist}>
          <SongList></SongList>
        </div>
        <div className={styles.Player}>
          <Player></Player>
        </div>
      </div>
    </div>
  )
}

export default Home
