let bookName;
let searchStatus = true;
let totalPrice;
let quantity;
let wishlistStatus = true;
let wishlistAllStatus = true;
let cartSectionStatus = true;


/* take input form the search bar in home page and store in bookName */
function searchBook(){
    const searchedBook = document.getElementById('search-book');
    bookName = searchedBook.value;
    console.log(`Book searched : ${bookName}`);

}
/* Change display property of searched section and display on the home page*/
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
    const bookSummaryElement = document.getElementById('bookSummaryId');

    switch(bookName){
        case 'atomic':
            bookImgId.src="./images/personality/atomic-habit.jpeg";
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
            bookSummaryElement.innerText ='Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones. Read the full summary to glean 3 key lessons from Atomic Habits, learn how to build a habit in 4 simple steps, and get a handy reference guide for the strategies recommended throughout the book.';
        break;
        case 'ikigai':
            bookImgId.src="./images/personality/ikigai.jpeg"
            bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
            bookPriceId.innerText = '499/-';
            bookSummaryElement.innerText = 'Ikigai by Héctor García & Francesc Miralles is book which talks about finding your purpose and then following it with all heart to live a happy and satisfying life. The authors take us in this search along with them and make us understand how people of Japan have been living a long and a happy life.';
        break;
        case 'psychology':
            bookImgId.src="./images/personality/psychology-of-money.jpg";
            bookNameId.innerText = 'The Psychology Of Money Paperback _ 1 September 2020';
            bookPriceId.innerText = '550/-';
            bookSummaryElement.innerText = 'The Psychology of Money by Morgan Housel explores the complex relationship between money and human behavior in an accessible way. It offers insights into how we perceive and manage our finances, and the impact of emotions on our financial decisions.';
        break;
        case 'rich':
            bookImgId.src="./images/personality/rich-dad-poor-dad.jpeg";
            bookNameId.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
            bookPriceId.innerText = '400/-';
            bookSummaryElement.innerText = 'Rich Dad Poor Dad by Robert Kiyosaki and Sharon Lechter is a book that came out in 1997 and focuses on the importance of financial literacy from an early age. Throughout the book, the author explains how a person can increase their wealth by investing in assets and by being smart with money.';
        break;
        case 'think':
            bookImgId.src="./images/personality/think-and-grow-rich.png";
            bookNameId.innerText = 'Think and Grow Rich: The Landmark Bestseller';
            bookPriceId.innerText = '649/-';
            bookSummaryElement.innerText = 'Think and Grow Rich is a classic work on how to lead a successful life. It was written at the commission of Andrew Carnegie and is based on interviews with men such as Henry Ford, J.P. Morgan, and John D. Rockefeller, the business titans of the early 20th century. This all-time best-seller lays out the steps needed to unleash one\'s potential, focusing on building individual self-confidence and a clear set of goals.';
        break;
        case 'divine':
            bookImgId.src="./images/fiction/divine-rivals.png";
            bookNameId.innerText = 'Divine Rivals: A Novel: 1 (Letters of Enchantment, 1)';
            bookPriceId.innerText = '500/-';
            bookSummaryElement.innerText = 'Divine Rivals draws upon a time of world war for its setting. It feels quite historical, but added to that are the gods and mythology that makes this story unique. The war being fought is over two gods and their power to compel followers to the front lines. Winnow is a journalist. Forced to leave school and work since her brother followed Enva’s call to war and her mother found solace in a bottle. ';
        break;
        case 'fire':
            bookImgId.src="./images/fiction/fire-blood.jpeg";
            bookNameId.innerText = 'Fire And Blood: The House Of Dragons : Book One:';
            bookPriceId.innerText = '300/-';
            bookSummaryElement.innerText = 'Fire & Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart. What really happened during the Dance of the Dragons?';
        break;
        case 'game':
            bookImgId.src="./images/fiction/game-of-thrones.jpeg";
            bookNameId.innerText = 'A Game of Thrones: A Song Of Ice And Fire: Book One: 1';
            bookPriceId.innerText = '700/-';
            bookSummaryElement.innerText = 'A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King. The previous Hand, Jon Arryn, died under suspicious circumstances. Robert comes with his queen, Cersei Lannister, and his retinue, which includes a number of Lannisters';
        break;
        case 'fourth':
            bookImgId.src="./images/fiction/fourth-wing.png";
            bookNameId.innerText = 'Fourth Wing: The Empyrean Discover the Instant';
            bookPriceId.innerText = '499/-';
            bookSummaryElement.innerText = 'Set at Basgiath War College in the fictional country of Navarre, the novel follows twenty-year-old Violet Sorrengail. Having trained her whole life to become a scribe members of the college responsible for documenting history she expects to enter the school\'s Scribe Quadrant.';
        break;
        case 'iron':
            bookImgId.src="./images/fiction/iron-flame.jpg";
            bookNameId.innerText = 'Iron Flame: The Sequel of Fourth Wing';
            bookPriceId.innerText = '499/-';
            bookSummaryElement.innerText = 'Violet is an admirable heroine. Despite having a chronic illness, she tenaciously fights to help the revolution she joined in the end of book one. Again and again, she faces peril–she routinely gets beat up–but every time, she jumps back up, ready to try again, with the help of her friends and her dragons.';
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
/* Close the searched secton */
function closeSearch(){
    const searchCardDisplay = document.getElementById('hidden-search-id');
    if(searchStatus){
        searchCardDisplay.style.display = "block";
        searchStatus = false;
    }
    else{
        searchCardDisplay.style.display = "none"; 
        searchStatus = true;
    }
}

function wishlistHeart() {
    console.log(wishlistStatus);
    const wishlistElement = document.getElementById('wishlistIconId');

    if(wishlistStatus){
        wishlistElement.src= "./images/home/heart-red.png";
        wishlistStatus = false;
    }
    else{
        wishlistElement.src= "./images/home/heart.png";
        wishlistStatus = true;
    }
}

function wishlistHeartAll(imgId){
    console.log(imgId);
    const wishlistElement = document.getElementById(imgId);

    if(wishlistAllStatus){
        wishlistElement.src= "./images/home/heart-red.png";
        wishlistAllStatus = false;
    }
    else{
        wishlistElement.src= "./images/home/heart.png";
        wishlistAllStatus = true;
    }
}
/* Interpage communication error */
function addToCart(cartAddBookName){
        if(cartSectionStatus){

        const hiddenSection = document.getElementById('cart-hidden-section');
        hiddenSection.style.display = "block";

        const imgElement = document.getElementById('cart-book-img-id');
        const nameElement = document.getElementById('cart-books-name-id');
        const priceElement = document.getElementById('priceBook');

        switch(cartAddBookName){
            case 'atomic':
                imgElement.src="./images/personality/atomic-habit.jpeg";
                nameElement.innerText = 'Atomic Habits Paperback _ 1 January 2018';
                priceElement.innerText = '600/-';
            break;
            case 'ikigai':
                imgElement.src="./images/personality/ikigai.jpeg"
                nameElement.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
                priceElement.innerText = '499/-';
            break;
            case 'psychology':
                imgElement.src="./images/personality/psychology-of-money.jpg";
                nameElement.innerText = 'The Psychology Of Money Paperback _ 1 September 2020';
                priceElement.innerText = '550/-';
            break;
            case 'rich':
                imgElement.src="./images/personality/rich-dad-poor-dad.jpeg";
                nameElement.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
                priceElement.innerText = '400/-';
            break;
            case 'think':
                imgElement.src="./images/personality/think-and-grow-rich.png";
                nameElement.innerText = 'Think and Grow Rich: The Landmark Bestseller';
                priceElement.innerText = '649/-';
            break;
            case 'divine':
                imgElement.src="./images/fiction/divine-rivals.png";
                nameElement.innerText = 'Divine Rivals: A Novel: 1 (Letters of Enchantment, 1)';
                priceElement.innerText = '500/-';
            break;
            case 'fire':
                imgElement.src="./images/fiction/fire-blood.jpeg";
                nameElement.innerText = 'Fire And Blood: A Song Of Ice And Fire: Book One:';
                priceElement.innerText = '300/-';
            break;
            case 'game':
                imgElement.src="./images/fiction/game-of-thrones.jpeg";
                nameElement.innerText = 'A Game of Thrones: A Song of Ice and Fire: Book One: 1';
                priceElement.innerText = '700/-';
            break;
            case 'fourth':
                imgElement.src="./images/fiction/fourth-wing.png";
                nameElement.innerText = 'Fourth Wing: The Empyrean Discover the Instant';
                priceElement.innerText = '499/-';
            break;
            case 'iron':
                imgElement.src="./images/fiction/iron-flame.jpg";
                nameElement.innerText = 'Iron Flame: The Sequel of Fourth Wing';
                priceElement.innerText = '499/-';
            break;
        }
        console.log('Cart book name',cartAddBookName);
    }

    cartSectionStatus = false;
}
function closeCartFun(){
    if(cartSectionStatus == false){
        const hiddenSection = document.getElementById('cart-hidden-section');
        hiddenSection.style.display = "none";
        cartSectionStatus=true;
    }
}

/*
function showTotalOnReceipt(){
    const totalOnReceiptElement = document.getElementById('totalAmountReceiptId');

    totalOnReceiptElement.innerText = `${totalPrice}`;
}
*/
/* decrease quantity in cart  */
function decreaseQuantity(){
    const countElement = document.getElementById('quantity');
    quantity = parseInt(countElement.innerText);
    if(quantity > 1){
        countElement.innerText = --quantity;
    } else
    {
        alert('Can not buy less than 1');
    }
}

/* increase quantity in cart*/
function increaseQuantity(){
    const countElement = document.getElementById('quantity');
    quantity = parseInt(countElement.innerText);
    if(quantity < 5){
        countElement.innerText = ++quantity;
    } else
    {
        alert('You can not buy more than 5 products at once');
    }   
}
 
/* Counts total price */
function countTotal(){
    const priceElement = document.getElementById('priceBook');

    const tempPrice = parseInt(priceElement.innerText);
    console.log(`Book Price is : ${tempPrice}`);

    totalPrice = (quantity * tempPrice);
    console.log(`Total price is : ${totalPrice}`);

    const totalPriceElement = document.getElementById('totalPriceDisplay');

    if(totalPrice < 300){
        console.log('Discount is liable for purchase below 300/- ');
    }
    else if(totalPrice > 300 && totalPrice <= 1000){
        totalPrice -= (totalPrice*0.05);
        console.log(`Total price after 5 % discount is : ${totalPrice}`);
    }
    else if(totalPrice > 1000 && totalPrice <= 1500){
        totalPrice -= (totalPrice*0.10)
        console.log(`Total price after 10 % discount is : ${totalPrice}`);
    }
    else if( totalPrice > 1500 && totalPrice <= 2500){
        totalPrice -= (totalPrice*0.15)
        console.log(`Total price after 15 % discount is : ${totalPrice}`);
    }
    else{
        totalPrice -= (totalPrice*0.20)
        console.log(`Total price after 20 % discount is : ${totalPrice}`);
    }
    totalPriceElement.innerText = Math.floor(totalPrice);
}



/*
function showBookName(bookNameInCard){
    console.log(`The Card you clicked has ${bookNameInCard}`);
}
*/