import axios from "axios";

export default {

  getAddedBooks: function(question) {
    return axios.get("https://googlebooks-server.herokuapp.com/api/google", { params: { question: "title:" + question } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("https://googlebooks-server.herokuapp.com/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("https://googlebooks-server.herokuapp.com/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("https://googlebooks-server.herokuapp.com/api/books", bookData);
  }
};
