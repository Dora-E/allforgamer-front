import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHandler } from '../../handler/handler';

import Annee from '../pages/2022';

export default function SearchBar() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handler = apiHandler();
    const game = handler.get('/games');
    axios.get(game).then((res) => {
      const games = res.data;
      setGames(games);
    });
  }, []);
  const filteredgames =
    search.length === 0
      ? games
      : games.filter((games) =>
          games.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Rechercher"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredgames.length != 0 && (
        <div>
          {games.slice(0, 15).map((value, key) => {
            return (
              <a href={games.link} target="_blank">
                <p>{games.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
