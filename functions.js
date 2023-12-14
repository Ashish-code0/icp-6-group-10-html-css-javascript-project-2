let bookName;
let searchStatus = true;
function searchBook(){
    const searchedBook = document.getElementById('search-book');
    bookName = searchedBook.value;
    console.log(`Book searched : ${bookName}`);

}

function showBook(bookName){
    const searchCardDisplay = document.getElementById('hidden-search-id');

    if(searchStatus){
        searchCardDisplay.style.display = "block";
        searchStatus = false;
    }
    else{
        searchCardDisplay.style.display = "none"; 
        searchStatus = true;
    }

    const bookImgId = document.getElementById('book-img-id');
    const bookNameId = document.getElementById('book-name-id');
    const bookPriceId = document.getElementById('book-price-id');
    
    switch(bookName){
        case 'atomic':
            bookImgId.src="./images/personality/atomic-habit.jpeg";
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
        break;
        case 'ikigai':
            bookImgId.src="./images/personality/ikigai.jpeg"
            bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
            bookPriceId.innerText = '499/-';
        break;
        case 'psychology':
            bookImgId.src="./images/personality/psychology-of-money.jpg";
            bookNameId.innerText = 'The Psychology Of Money Paperback _ 1 September 2020';
            bookPriceId.innerText = '550/-';
        break;
        case 'rich':
            bookImgId.src="./images/personality/rich-dad-poor-dad.jpeg";
            bookNameId.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
            bookPriceId.innerText = '400/-';
        break;
        case 'think':
            bookImgId.src="./images/personality/think-and-grow-rich.png";
            bookNameId.innerText = 'Think and Grow Rich: The Landmark Bestseller';
            bookPriceId.innerText = '649/-';
        break;
        case 'divine':
            bookImgId.src="./images/fiction/divine-rivals.png";
            bookNameId.innerText = 'Divine Rivals: A Novel: 1 (Letters of Enchantment, 1)';
            bookPriceId.innerText = '500/-';
        break;
        case 'fire':
            bookImgId.src="./images/fiction/fire-blood.jpeg";
            bookNameId.innerText = 'Fire And Blood: A Song Of Ice And Fire: Book One:';
            bookPriceId.innerText = '300/-';
        break;
        case 'game':
            bookImgId.src="./images/fiction/game-of-thrones.jpeg";
            bookNameId.innerText = 'A Game of Thrones: A Song of Ice and Fire: Book One: 1';
            bookPriceId.innerText = '700/-';
        break;
        case 'fourth':
            bookImgId.src="./images/fiction/fourth-wing.png";
            bookNameId.innerText = 'Fourth Wing: The Empyrean Discover the Instant';
            bookPriceId.innerText = '499/-';
        break;
        case 'iron':
            bookImgId.src="./images/fiction/iron-flame.jpg";
            bookNameId.innerText = 'Iron Flame: The Sequel of Fourth Wing';
            bookPriceId.innerText = '499/-';
        break;
    }

    /*
    if ( bookName = 'psychology'){
        bookImgId.src="./images/personality/psychology-of-money.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if( bookName ='atomic'){
        bookImgId.src="./images/personality/atomic-habit.jpeg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'rich'){
        bookImgId.src="./images/personality/rich-dad-poor-dad.jpeg";
        bookNameId.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
        bookPriceId.innerText = '400/-';
    }
    else if ( bookName = 'think'){
        bookImgId.src="./images/personality/think-and-grow-rich.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'divine'){
        bookImgId.src="./images/fiction/divine-rivals.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'fire'){
        bookImgId.src="./images/fiction/fire-blood.jpeg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'fourth'){
        bookImgId.src="./images/fiction/fourth-wing.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'iron'){
        bookImgId.src="./images/fiction/iron-flame.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'song'){
        bookImgId.src="./images/fiction/song-of-ice-fire.jpeg";
        bookNameId.innerText = '';
        bookPriceId.innerText = '600/-';
    }
    else{
        bookImgId.src="./images/personality/ikigai.jpeg"
        bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
        bookPriceId.innerText = '499/-';
    }   
    */
    
    console.log(bookImgId.src);
    console.log(bookNameId.innerText);      
    console.log(bookPriceId.innerText);  
    
    
}

function addToCart(){
    
}