let bookName;

function searchBook(){
    const searchedBook = document.getElementById('search-book');
    bookName = searchedBook.value;
    console.log(`Book searched : ${bookName}`);

}

function showBook(bookName){
    const bookImgId = document.getElementById('book-img-id');
    const bookNameId = document.getElementById('book-name-id');
    const bookPriceId = document.getElementById('book-price-id');

    switch(bookName){
        case 'atomic':
            bookImgId.src="./../images/personality/atomic-habit.jpeg"
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
        break;
        default:
            bookImgId.src="./../images/personality/ikigai.jpeg"
            bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
            bookPriceId.innerText = '499/-';
        break;   
    }
    
}