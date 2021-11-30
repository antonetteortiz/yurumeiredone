import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Albums() {
  const [music, setMusic] = useState([]);
  const [artistSearch, setArtistSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Music";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((music) => setMusic(music));

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);

  const searchArtist = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setArtistSearch(e.target.value.toLowerCase());

    // console.log("state", artistSearch)

    if (artistSearch.length > 1) {
      // console.log("!!!", music)
      let newArtistArr = music.filter((input) =>
        input.artistName.toLowerCase().includes(artistSearch)
      );
      console.log(newArtistArr);
      setFilteredList(newArtistArr);
    }
  };

  let musicList = music.map((album, i) => {
    return (
      <div className="musicContainer" key={i}>
        <div className="image">
          <img src={album.artwork} alt="..." />
        </div>
        <div className="musicInfo">
          <h5>{album.title}</h5>
          <h6>{album.artistName}</h6>
          <a href={album.link} target="_blank" rel="noreferrer">
            <p>Listen here</p>
          </a>
        </div>
      </div>
    );
  });

  let filteredMusicList = filteredList.map((album, i) => {
    return (
      <div className="musicContainer" key={i}>
        <div className="image">
          <img src={album.artwork} alt="..." />
        </div>
        <div className="musicInfo">
          <h3>{album.title}</h3>
          <h6>{album.artistName}</h6>
          <a href={album.link}>
            <p>Listen here</p>
          </a>
        </div>
      </div>
    );
  });

  return (
    <AlbumsStyled>
      <div className="container">
        <h1>Garifuna Artist</h1>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter Artist Name"
              value={artistSearch}
              onChange={searchArtist}
            />

            <button type="submit" onClick={() => searchArtist()}>
              Search
            </button>
          </form>

          {/* <Link to="/createmusic"> */}
          <button type="submit">Add Artist</button>
          {/* </Link> */}
        </div>
        {artistSearch.length > 1 ? filteredMusicList : musicList}
      </div>
    </AlbumsStyled>
  );
}

const AlbumsStyled = styled.div`
  background-color: #ffcc00;
  padding: 2rem 15rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;
    .musicContainer {
      background-color: #000000;
      color: #ffcc00;
      border-radius: 0.25rem;
      padding: 2rem;
      margin: 2rem;
      width: 40rem;
      display: flex;
      flex-direction: row;
      .image {
        width: 200px;
        img {
          width: 200px;
          border-radius: 25px;
        }
      }
      .musicInfo {
        letter-spacing: 1px;
        padding: 1rem;
        align-items: center;
      }
    }
  }
`;

export default Albums;
