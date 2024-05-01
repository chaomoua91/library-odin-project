// console.log('hello world')

const books = document.querySelector('.books')

const myLibrary = [
    { 
        title: "Book1",
        author: "me",
        pages: 500,
        read: true,
    },
    { 
        title: "Book2",
        author: "you",
        pages: 5000,
        read: false,
    },
];

function createBookElement(ele, content, className) {
    const element = document.createElement(ele);
    element.textContent = content;
    element/setAttribute("class", className);
    return element;

}

function createBookItem(book,index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')
    bookItem.appendChild(createBookElement('h1', "Title" + ))
}

function renderBooks() {
  myLibrary.map((book,index) => {
    createBookItem(book,index)
  })
}
