function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;

    this.getPrice = function () {
        return this.price;
    } // getPrice

    this.getAuthor = function () {
        return this.author;
    } // getAuthor

    this.getVolume = function () {
        return this.volume;
    } // getVolume

    this.getTitle = function () {
        return this.title;
    } // getTitle

} // Book


var html = new Book('TITLE_1', 'AUTHOR_1', 'VOLUME_1', 'PRICE_1');
var youtube = new Book('TITLE_2', 'AUTHOR_2', 'VOLUME_2', 'PRICE_2');
var python = new Book('TITLE_3', 'AUTHOR_3', 'VOLUME_3', 'PRICE_3');

var bookList = [ html, youtube, python ];

document.write('<h1>책제목으로 살펴보기</h1>');


for(var book of bookList) {
    document.write(`<p>${book.title}</p>`);
} // for-of