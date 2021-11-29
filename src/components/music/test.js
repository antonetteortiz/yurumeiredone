import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./Music.css";
import AltNav from "../TrialNav/Navbar/AltNavbar.js";
import Navbar from "../Navbar/Navbar";
import Grid from "@material-ui/core/Grid";

function Music() {
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
      <div className="col mb-4 mainBody">
        <div className="card" style={{ width: "18rem", border: "1px solid black" }} key={i}>
          <img src={album.artwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.title}</h5>
            <h6 className="card-text">{album.artistName}</h6>
            <a href={album.link} target="_blank">
              <p style={{color: "black"}}>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  let filteredMusicList = filteredList.map((album, i) => {
    return (
      <div className="col mb-4 mainBody">
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={album.artwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.title}</h5>
            <p className="card-text">{album.artistName}</p>
            <a href={album.link}>
              <p style={{ color: "black" }}>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
        <h1>Garifuna Artist</h1>
        <div style={{marginBottom: "2%"}}>
          <Grid container spacing={2} style={{marginBottom: "20px"}}>
            <Grid item className="d-flex">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Enter Artist Name"
                  style={{ border: "1px solid black" }}
                  value={artistSearch}
                  onChange={searchArtist}
                />

                <button
                  className="btn my-2 my-lg-0 "
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#FFD800",
                  }}
                  type="submit"
                  onClick={() => searchArtist()}
                >
                  Search
                </button>
              </form>

              <Link to="/createmusic">
                <button
                  className="btn my-2 my-lg-0  "
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#FFD800",
                    marginLeft: "10px",
                  }}
                  type="submit"
                >
                  Add Artist
                </button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="row row-cols-3 row-cols-md-3">
          {artistSearch.length > 1 ? filteredMusicList : musicList}
        </div>
    </div>
  );
}

export default Music;