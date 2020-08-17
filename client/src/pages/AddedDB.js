/* eslint-disable no-undef */
/* jshint ignore: start */
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import AddedBook from "../components/AddedBook";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class AddedDB extends Component {
  state = {
    AddedBooks: []
  };

  componentDidMount() {
    this.getAddedBooks();
  }

  getAddedBooks = () => {
    API.getAddedBooks()
      .then(res =>
        this.setState({
          AddedBooks: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getAddedBooks());
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
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.addedbook.length ? (
                <List>
                  {this.state.addedbook.map(addedbook => (
                    <AddedBook
                      key={addedbook._id}
                      title={addedbook.title}
                      subtitle={addedbook.subtitle}
                      link={addedbook.link}
                      authors={addedbook.authors.join(", ")}
                      description={addedbook.description}
                      image={addedbook.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(addedbook._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2>Sorry Nothing To See Here</h2>
              )};
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default AddedDB;
