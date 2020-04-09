import "../styles/index.scss";
// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class
class UI {
  // Sẽ lấy các trí trị trong ô input
  static displayBooks() {
    const books = [
      {
        title: "NDLey and his success",
        author: "NDLey",
        isbn: "1224",
      },
    ];
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector(".list-group");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td> ${book.title} </td>
            <td> ${book.author} </td>
            <td> ${book.isbn} </td>
            <td><a href="#" class="btn btn-danger delete">  Delete  </a></td>
        `;
    list.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  static deleteBook(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.remove();
      UI.showAlert("Xóa thành công", "success");
    }
  }
  static showAlert(text, className) {
    const container = document.querySelector(".container");
    const form = document.getElementById("form");
    const box = document.createElement("div");
    box.appendChild(document.createTextNode(text));
    box.classList.add(`alert`, `alert--${className}`);
    setTimeout(() => box.remove(), 3000);
    container.insertBefore(box, form);
    // Cho nó hiện 3s rồi ẩn
  }
}
// Event: Display book list
document.addEventListener("DOMContentLoaded", UI.displayBooks());
// Event : Add book
document.querySelector("#addBook").addEventListener("click", (e) => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  //Validate
  if (title == "" || author == "" || isbn == "") {
    UI.showAlert("Điền vào chỗ trống bạn êi", "danger");
  } else {
    const newBook = new Book(title, author, isbn);
    UI.addBookToList(newBook);
    UI.clearFields();
    UI.showAlert("Thành công", "success");
  }
});
// Event: Remove
document.querySelector(".list-group").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
