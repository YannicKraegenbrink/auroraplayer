import type { NextPage } from 'next'
import React from 'react';

import Playlists from './components/playlists';
import ItemMenu from './components/itemMenu';
import SongList from './components/songList';
import Player from './components/player';

import Divider from '@mui/material/Divider';

const Home: NextPage = () => {
  return (
    <div>
      <div className="Main">
        <div className="Sideview">
          <ItemMenu></ItemMenu>
          <Divider></Divider>
          <Playlists></Playlists>
        </div>
        <div className="Songlist">
          <SongList></SongList>
        </div>
        <div className="Player">
          <Player></Player>
        </div>
      </div>
    </div>
  )
}

export default Home
