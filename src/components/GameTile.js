// react and runtime components
import React, { Component } from 'react';
import {
  GameDiv,
  BoxArt,
  GameDivOverlay,
  HeadingTitle
} from './styleComponents/gamelib-styles';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class GameTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_title: this.props.gameInfo.title
    };
  }
  render() {
    return (
      <GameDiv>
        <GameDivOverlay>
          <Link to={`/game/${this.props.gameInfo._id}`}>
            <Button variant="secondary" size="lg">
              View Game
            </Button>
          </Link>
        </GameDivOverlay>
        <BoxArt
          background={`url(${this.props.gameInfo.url}) no-repeat center`}
        ></BoxArt>
        <HeadingTitle fontSize={'18px'} color={'rgba(255,255,255,.9)'}>
          {this.props.gameInfo.game_title}
        </HeadingTitle>
      </GameDiv>
    );
  }
}
