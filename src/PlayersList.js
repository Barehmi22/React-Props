// PlayersList.js

import React from 'react';
import Player from './player';
import playersData from './players';

const PlayersList = () => {
  return (
    <div className="container">
      {playersData.map((pla, index) => (
        <Player key={index} {...pla} />
      ))}
    </div>
  );
};

export  {PlayersList};
