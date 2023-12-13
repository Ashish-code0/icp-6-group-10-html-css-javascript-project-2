function searchBook(){
    const searchedBook = document.getElementById('search-book');
    const bookName = searchedBook.value;
    console.log(`Book searched : ${bookName}`);

}

function showBook(bookName){
    const bookImgId = document.getElementById('book-img-id');
    const bookNameId = document.getElementById('book-name-id');
    const bookPriceId = document.getElementById('book-price-id');

    switch(bookName){
        case 'atomic':
            bookImgId.src="./../images/personality/atomic.jpeg"
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
        break;
        default:
            bookImgId.src="./../images/personality/atomic.jpeg"
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
        break;   
    }
    
}