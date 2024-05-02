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
    element.setAttribute("class", className);
    return element;

}

function createReadElement(bookItem, book) {
    let read = document.createElement("div");
    read.setAttribute("class", "book-read");
    read.appendChild(createBookElement("h1", "Read?", "book-read-title"));
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        bookItem.setAttribute("class", "card book read-checked");
        book.read = true;
        saveAndRenderBooks();
      } else {
        bookItem.setAttribute("class", "card book read-unchecked");
        book.read = false;
        saveAndRenderBooks();
      }
    });
    if (book.read) {
      input.checked = true;
      bookItem.setAttribute("class", "card book read-checked");
    }
    read.appendChild(input);
    return read;
  }

function createEditIcons(book) {
    const editIcon = document.createElement("img");
    editIcon.src = '../pictures/stylus_note.svg';
    editIcon.setAttribute("class", "edit-icon");
    editIcon.addEventListener("click", (e) => {
        console.log(book);
    });
    return editIcon;
}



function createBookItem(book,index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')
    bookItem.appendChild(
        createBookElement('h1', `Title: ${book.title}`, "book-title" ));
    bookItem.appendChild(
        createBookElement('h1', `Author: ${book.author}`, "book-author" ));
    bookItem.appendChild(
        createBookElement('h1', `Pages: ${book.pages}`, "book-pages" ));

    bookItem.appendChild(createReadElement(bookItem,book))

    bookItem.appendChild(createBookElement("button", "X", "delete"));
    bookItem.appendChild(createEditIcons(book));

    books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks() {
  myLibrary.map((book,index) => {
    createBookItem(book,index)
  })
}

renderBooks();
