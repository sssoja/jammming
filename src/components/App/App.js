import React from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "some track name",
          artist: "some artist",
          album: "some album",
          id: 1,
        },
        {
          name: "some track name",
          artist: "some artist",
          album: "some album",
          id: 2,
        },
        {
          name: "some track name",
          artist: "some artist",
          album: "some album",
          id: 3,
        },
      ],
      playlistName: "some playlist",
      playlistTracks: [
        {
          name: "some other track name",
          artist: "some artist",
          album: "some album",
          id: 4,
        },
        {
          name: "some other track name",
          artist: "some artist",
          album: "some album",
          id: 5,
        },
        {
          name: "some other track name",
          artist: "some artist",
          album: "some album",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(trackToAdd) {
    let playlistTracks = this.state.playlistTracks;
    if (
      playlistTracks.find(
        alreadySavedTrack => alreadySavedTrack.id === trackToAdd.id
      )
    ) {
      return;
    }

    playlistTracks.push(trackToAdd);
    this.setState({ playlistTracks: playlistTracks });
  }

  removeTrack(trackToRemove) {
    let playlistTracks = this.state.playlistTracks;
    playlistTracks = playlistTracks.filter(
      track => track.id !== trackToRemove.id
    );

    this.setState({ playlistTracks: playlistTracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
