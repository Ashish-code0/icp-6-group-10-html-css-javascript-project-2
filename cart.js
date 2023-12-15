let totalPrice;
        let quantity;
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

        function countTotal(){
            const priceElement = document.getElementById('priceBook');

            const tempPrice = parseInt(priceElement.innerText);
            console.log(`Book Price is : ${tempPrice}`);

            totalPrice = (quantity * tempPrice);
            console.log(`Total price is : ${totalPrice}`);

            const totalPriceElement = document.getElementById('totalPriceDisplay');
            totalPriceElement.innerText = totalPrice;
        }
        function addToCartInCart(cartBookName){

            const hiddenSection = document.getElementById('cart-hidden-section');
            hiddenSection.style.display = "block";

            const imgElement = document.getElementById('cart-book-img-id');
            const nameElement = document.getElementById('cart-books-name-id');
            const priceElement = document.getElementById('priceBook');

            switch(cartBookName){
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
        }