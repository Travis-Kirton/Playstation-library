import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {
  Screen,
  Wrap,
  HeadingTitle,
  GradientHR,
  GameInfo,
  GamePara,
  BoxArt,
  Div
} from './styleComponents/gamelib-styles';
import './common/common.css';
import { NavBar } from './common/NavBar';
import { LoadingSpinner } from './common/LoadingSpinner';

Moment.globalFormat = 'dd mm YYYY';

export class GameDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDetail: undefined,
      timeOutOver: false
    };
  }

  // Retrieve Single Game when component mounted
  componentDidMount() {
    fetch(`http://localhost:4000/api/games/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ gameDetail: data });
      });

    // Timeout for API fetch & user UX
    setTimeout(() => {
      this.setState({ timeoutOver: true });
    }, 650);
  }

  // Removes game from library
  removeGame = () => {
    console.log('removing game');
    fetch(`http://localhost:4000/api/games/${this.state.gameDetail._id}`, {
      method: 'DELETE'
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  };

  render() {
    // Waits until gameDetail object is available
    // & timeout finished
    return this.state.gameDetail && this.state.timeoutOver ? (
      <Screen>
        <NavBar></NavBar>
        <Wrap>
          <Div
            padding={'10px'}
            height={'auto'}
            width={'850px'}
            marginTop={'30px'}
            backgroundImage={
              'linear-gradient(to top, rgba(35,75,110, 0) ,rgba(35,75,110, 0.15))'
            }
          >
            <Div height={'400px'} width={'360px'} float={'right'}>
              <Div width={'200px'} height={'30px'} float={'right'}>
                <GamePara fontSize={'18px'}>
                  <a href="#">
                    <Link to="/" onClick={this.removeGame}>
                      Remove from library
                    </Link>
                  </a>
                </GamePara>
              </Div>

              <Div width={'350px'} float={'right'}>
                <Div height={'80px'}>
                  <HeadingTitle
                    color={'rgba(255,255,255,.9)'}
                    fontSize={'34px'}
                    marginTop={'20px'}
                    float={'left'}
                  >
                    {this.state.gameDetail.game_title}
                  </HeadingTitle>
                </Div>
                <GameInfo color={'#677a85'}>
                  platform
                  <GameInfo color={'#67c1f5'}>
                    {this.state.gameDetail.platform}
                  </GameInfo>
                </GameInfo>
                <GameInfo color={'#677a85'}>
                  genre
                  <GameInfo color={'#67c1f5'}>
                    {this.state.gameDetail.genre}
                  </GameInfo>
                </GameInfo>
                <GameInfo color={'#677a85'}>
                  release date
                  <GameInfo color={'#67c1f5'}>
                    <Moment format="DD-MM-YYYY">
                      {this.state.gameDetail.release_date}
                    </Moment>
                  </GameInfo>
                </GameInfo>
                <GameInfo color={'#677a85'}>
                  #No of Players
                  <GameInfo color={'#67c1f5'}>
                    {this.state.gameDetail.num_players}
                  </GameInfo>
                </GameInfo>
                <GameInfo color={'#677a85'}>
                  Publisher
                  <GameInfo color={'#67c1f5'}>
                    {this.state.gameDetail.publisher}
                  </GameInfo>
                </GameInfo>
              </Div>
            </Div>

            <Div marginLeft={'40px'} marginTop={'30px'}>
              <BoxArt
                width={'290px'}
                height={'350px'}
                background={`url(${this.state.gameDetail.url}) no-repeat center`}
              ></BoxArt>
            </Div>
            <Div width={'500px'} height={'auto'}>
              <HeadingTitle
                color={'#fff'}
                fontSize={'16px'}
                marginTop={'20px'}
                marginLeft={'50px'}
                textTransform={'uppercase'}
              >
                About the Game
              </HeadingTitle>
              <GradientHR width={'85%'}></GradientHR>
              <GamePara color={'#acb2b8'} fontSize={'16px'} marginLeft={'40px'}>
                {this.state.gameDetail.description}
              </GamePara>
            </Div>
          </Div>
        </Wrap>
      </Screen>
    ) : (
      <LoadingSpinner></LoadingSpinner>
    );
  }
}
