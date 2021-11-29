import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

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
      <div>
        <div className="musicContainer" key={i}>
          <div className="image">
            <img src={album.artwork} alt="..." />
          </div>
          <div className="musicInfo">
            <h5>{album.title}</h5>
            <h6>{album.artistName}</h6>
            <a href={album.link} target="_blank">
              <p>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  let filteredMusicList = filteredList.map((album, i) => {
    return (
      <div>
        <div key={i}>
          <img src={album.artwork} alt="..." />
          <div>
            <h5>{album.title}</h5>
            <p>{album.artistName}</p>
            <a href={album.link}>
              <p>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <AlbumsStyled>
      <div>
        <h1>Garifuna Artist</h1>
        <div>
          <div>
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
          </div>
        </div>
        <div>{artistSearch.length > 1 ? filteredMusicList : musicList}</div>
      </div>
    </AlbumsStyled>
  );
}

const AlbumsStyled = styled.div`
  background-color: #ffcc00;
  padding: 2rem 15rem;
  display: flex;
  flex-direction: row;
  .musicContainer {
    background-color: #000000;
    color: white;
    border-radius: 0.25rem;
    padding: 3rem;
    border: 3px solid white;
    margin: 2rem;
    /* width: 50%; */
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
      padding-left: 1rem;
      align-items: center;
    }
  }
`;

export default Albums;
