/* jshint ignore: start */
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/AddedBook";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    addedbook: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  getAddedBooks = () => {
    API.getAddedBooks(this.state.q)
      .then(res =>
        this.setState({
          addedbooks: res.data
        })
      )
      .catch(() =>
        this.setState({
          addedbooks: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getAddedBooks();
  };

  handleBookSave = id => {
    const addedbook = this.state.addedbooks.find(addedbook => addedbook.id === id);

    API.saveAddedBook({
      googleId: addedbook.id,
      title: addedbook.volumeInfo.title,
      subtitle: addedbook.volumeInfo.subtitle,
      link: addedbook.volumeInfo.infoLink,
      authors: addedbook.volumeInfo.authors,
      description: addedbook.volumeInfo.description,
      image: addedbook.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getAddedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Books Search</strong>
              </h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.addedbook.length ? (
                <List>
                  {this.state.addedbook.map(addedbook => (
                    <Book
                      key={addedbook.id}
                      title={addedbook.volumeInfo.title}
                      subtitle={addedbook.volumeInfo.subtitle}
                      link={addedbook.volumeInfo.infoLink}
                      authors={addedbook.volumeInfo.authors.join(", ")}
                      description={addedbook.volumeInfo.description}
                      image={addedbook.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(addedbook.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2>{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
