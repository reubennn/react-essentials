import React from "react";
import { render } from "react-dom";

// Mock database
let bookList = [
  {
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
  },
  {
    "title": "White Teeth",
    "author": "Zadie Smith",
    "pages": 480,
  },
  {
    "title": "Cat's Cradle",
    "pages": 304,
  },
  {
    "title": "Yeety McYeetface",
    "author": "Roxane Gay",
    "pages": 320,
  }
]

const Book = ({ title = "No Title Provided", author = "No Author", pages = 0, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
      <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring. Go to www.library.com.au/jobs for more.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>

class Library extends React.Component {
  static defaultProps = { // Must use this name
    books: [
      {
        "title": "Tahoe Tales",
        "author": "Cheet Whitley",
        "pages": 1000
      }
    ]
  };

  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1") //REST API
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }))
  }

  componentDidUpdate() {
    console.log("The component just updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "Loading..."
          : <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={product.name}></img>
                </div>
              )
            })}
          </div>}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark} />
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList}/>,
  document.getElementById("root")
)