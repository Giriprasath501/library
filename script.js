const my_library = [];

function book(title,author,pages,read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
book.prototype.toggleRead = function () {
  this.read = !this.read;
};
function addtolibrary(title,author,pages,read){
    const newbook = new book(title,author,pages,read);
    my_library.push(newbook);
    displaylibrary();

}
function displaylibrary(){
    const libdiv = document.querySelector(".library");
    libdiv.innerHTML = '';
    my_library.forEach((book,index) => {
        const bookdiv = document.createElement('div');
        bookdiv.classList.add("book");

        bookdiv.innerHTML = `<h3>${book.title}</h3>
            <p>id: ${book.id}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? "Read" : "Not Read"}</p>
            <button onclick="removebook(${index})">Remove</button>`;

        libdiv.appendChild(bookdiv);
    });
}
function removebook(index){
    my_library.splice(index,1);
    displaylibrary();
}
document.querySelector(".addbook").addEventListener("submit",function(e){
    e.preventDefault();

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").value;
    
    addtolibrary(title,author,pages,read);
    displaylibrary();

    this.reset();
})
