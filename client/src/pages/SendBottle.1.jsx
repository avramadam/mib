import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import { Input } from "../components/Form/Input";
import { TextArea } from "../components/Form/TextArea";
import { FormBtn } from "../components/Form/FormBtn";
import { List } from "../components/List/List";
import { ListItem } from "../components/List/ListItem";



class SendBottle extends React.Component {
  /*state = {
    messages: [],
    title: "",
    message: ""

  };
  componentDidMount() {
    this.loadMessages();
  }
  loadMessages = () => {
    API.getMessages()
      .then(res =>
        this.setState({ messages: res.data, title: "", message: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMessage = id => {
    API.deleteMessage(id)
      .then(res => this.loadMessages())
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.message) {
      API.saveMessage({
        title: this.state.title,
        message: this.state.message
      })
        .then(res => this.loadMessages())
        .catch(err => console.log(err));
    }
  };*/



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col md-6 sm-12">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="message (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Message
              </FormBtn>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col md-4 sm-8">
            {this.state.messages.length ? (
              <List>
                {this.state.messages.map(message => (
                  <ListItem key={message._id}>
                    {/* <Link to={"/books/" + book._id}> */}
                    <strong>
                      {message.title} by {message.message}
                    </strong>
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}




          </div>

        </div>

      </div>
    );
  }
}

export default SendBottle;
