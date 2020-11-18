let myLibrary = new Array();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  const myTitle = document.getElementById("btitle").value;
  const myAuthor = document.getElementById("bauthor").value;
  const myPages = document.getElementById("bpages").value;
  const myRead = document.getElementById("boolRead").checked;

  const book = new Book(myTitle, myAuthor, myPages, myRead);

  myLibrary.push(book);
}

function clearFields() {
  document.getElementById("btitle").value = "";
  document.getElementById("bauthor").value = "";
  document.getElementById("bpages").value = "";
  document.getElementById("boolRead").checked = false;
}

const container = document.querySelector(".container");
function makeCard(book) {
  const card = document.createElement("div");
  container.appendChild(card).className = "card";

  const titleCreation = document.createElement("label");
  titleCreation.innerText = `Title: ${book.title}\n`;

  const authorCreation = document.createElement("label");
  authorCreation.innerText = `Author: ${book.author}\n`;

  const pageCreation = document.createElement("label");
  pageCreation.innerText = `Pages: ${book.pages}\n`;

  const readCreation = document.createElement("label");
  readCreation.innerText = `Read: ${book.read}`;

  card.appendChild(titleCreation);
  card.appendChild(authorCreation);
  card.appendChild(pageCreation);
  card.appendChild(readCreation);

  return card;
}

function submit() {
  addBook();
  clearFields();

  if (myLibrary.length == 1) {
    makeCard(myLibrary[0]);
  } else {
    makeCard(myLibrary[myLibrary.length - 1]);
  }
}
