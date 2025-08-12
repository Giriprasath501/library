const my_library = [];

function book(title,author,pages,read){
    this.id = crypto.randomUUID().slice(0,5);
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
    const libdiv = document.querySelector(".show tbody");
    libdiv.innerHTML = '';
    my_library.forEach((book,index) => {
        const bookdiv = document.createElement('tr');
        bookdiv.classList.add("book");

        bookdiv.innerHTML = `<td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button onclick="toggleReadStatus(${index})">${book.read ? "Read" : "Not Read"}</button></td>
            <td><button onclick="removebook(${index})">Remove</button></td>`;

        libdiv.appendChild(bookdiv);
    });
    document.querySelector
}
function removebook(index){
    my_library.splice(index,1);
    displaylibrary();
}
function toggleReadStatus(index){
    my_library[index].toggleRead();
    displaylibrary();
}
document.querySelector(".addbook").addEventListener("submit",function(e){
    e.preventDefault();

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").checked;
    
    addtolibrary(title,author,pages,read);
    displaylibrary();

    this.reset();
})
