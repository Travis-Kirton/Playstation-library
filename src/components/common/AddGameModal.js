import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { storage } from '../../firebase/auth.js';

export class AddGameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_title: '',
      platform: '',
      genre: '',
      release_date: '',
      num_players: '',
      publisher: '',
      description: '',
      image: null,
      url: null
    };
  }

  // Setting state for each form value changed
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submit
  onSubmit = e => {
    e.preventDefault();

    const { image } = this.state;
    const uploadTask = storage
      .ref(`images/${image.name}-${image.lastModified}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        // progress function
      },
      error => {
        console.log(error);
        // error function
      },
      () => {
        // complete uploadfunction
        storage
          .ref('images')
          .child(`${image.name}-${image.lastModified}`)
          .getDownloadURL()
          .then(url => {
            this.setState({ url: url });

            // POST new game to API
            fetch('http://localhost:4000/api/games', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(this.state)
            })
              .then(result => result.json())
              .then(info => {
                this.props.onHide();
              });
          });
      }
    );
  };

  // Handling image chosen by user
  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      console.log(image);
      this.setState(() => ({ image }));
    }
  };

  render() {
    const {
      game_title,
      platform,
      genre,
      release_date,
      num_players,
      publisher,
      description
    } = this.state;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Game Title</Form.Label>
                <Form.Control
                  required
                  value={game_title}
                  onChange={this.onChange}
                  name="game_title"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Platform</Form.Label>
                <Form.Control
                  required
                  value={platform}
                  onChange={this.onChange}
                  name="platform"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  required
                  value={genre}
                  onChange={this.onChange}
                  name="genre"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  required
                  value={release_date}
                  onChange={this.onChange}
                  name="release_date"
                  type="date"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>No. of Players</Form.Label>
                <Form.Control
                  required
                  value={num_players}
                  onChange={this.onChange}
                  name="num_players"
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  required
                  value={publisher}
                  onChange={this.onChange}
                  name="publisher"
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  value={description}
                  onChange={this.onChange}
                  name="description"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Box Art</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={this.handleImage}
                />
              </Form.Group>
              <Button type="submit" color="primary">
                Add Game
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
