// react and runtime components
import React, { Component } from 'react';
import {
  Screen,
  Wrap,
  GameDivOverlay,
  HeadingTitle,
  GradientHR,
  Div
} from './styleComponents/gamelib-styles';
import { Button } from 'react-bootstrap';
import { AddGameModal } from './common/AddGameModal';
import { NavBar } from './common/NavBar';
import { GameTile } from './GameTile';
export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [], addModalShow: false };
  }

  componentDidMount() {
    this.fetchGames();
  }

  // Fetch games from API, used on component mount/update
  fetchGames() {
    fetch('http://localhost:4000/api/games')
      .then(data => data.json())
      .then(data => {
        this.setState({ games: data });
      });
  }

  render() {
    let addModalClose = () => {
      this.setState({ addModalShow: false });
      this.fetchGames();
    };
    return (
      <Screen>
        <NavBar></NavBar>
        <Wrap>
          <Div marginTop={'80px'}>
            <HeadingTitle color={'rgba(255,255,255,.7)'} fontSize={'22px'}>
              Games in Library
            </HeadingTitle>
            <GradientHR></GradientHR>
          </Div>
          {this.state.games.map(game => (
            <GameTile gameInfo={game} />
          ))}
          <GameDivOverlay
            backgroundColor={'rgba(148,148,148,1)'}
            height={'260px'}
            visible={'visible'}
            marginLeft={'10px'}
            marginTop={'40px'}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Add Game
            </Button>
            <AddGameModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </GameDivOverlay>
        </Wrap>
      </Screen>
    );
  }
}
