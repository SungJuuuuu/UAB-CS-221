function searchBooks() {
    const userInput = document.getElementById('searchInput').value; //Gets the user input
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=search+terms${encodeURIComponent(userInput)}`; //https://developers.google.com/books/docs/v1/using

   $.get(apiUrl, (data) => {  //Week 13 slide 23
        showResults(data.items);  //calls the showResults function
    });
}
/* Had to chat gpt this function completely forgot this was due tonight
The prompt: I gave it my html, css, and the javascript code that I had (the searchBooks function) and asked 
"Give me a function that will show the results after I get data items from api (searchResults function)"
Instead of giving me just the searchResults function, it gave me the createBookItem function to go along with it as well
Comments are mine
Had to add the details and collapse buttons on my own (shows description)*/
function showResults(items) {
    const bookListContainer = document.getElementById('bookList'); //bookListContainer variable stores the id and can append stuff to it using javascript
    bookListContainer.innerHTML = ''; 

    if (items && items.length > 0) { //if the items doesn't have any results (ex=0) then that meant no results were found hence the line 23
        items.forEach((item) => {
            const bookItem = createBookItem(item);
            bookListContainer.appendChild(bookItem);
        });
    } else {
        bookListContainer.innerHTML = 'No results found.';
    }
}

function createBookItem(item) {
    const volumeInfo = item.volumeInfo;
    const title = volumeInfo.title;
    const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Authors'; // the ? works like an if else statement, meaning if volumeInfo.authors exist, it will use the expression before :, if it doesn't exist, then it will use the expression after :
    const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'no-image.jpg';
    const description = volumeInfo.description; // https://www.googleapis.com/books/v1/volumes/wNPnl5zYA-cC  Getting the description

    const bookItem = document.createElement('div');  
    bookItem.classList.add('book-item');

    const thumbnailElement = document.createElement('img'); //All these variables are getting data from the api (thumbnail, title, and the author)
    thumbnailElement.src = thumbnail;
    thumbnailElement.alt = title;

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const authorsElement = document.createElement('p');
    authorsElement.textContent = 'Authors: ' + authors;

    const detailsButton = document.createElement('button');  //Create details variable to append later
    detailsButton.textContent= 'Details';
    detailsButton.addEventListener('click', () => showDetails(description, detailsButton, bookItem)); //Once clicked on, calls on the showDetails function
    
    bookItem.appendChild(thumbnailElement);  //These all adds to the bookListContainer which is the ID bookList in html
    bookItem.appendChild(titleElement);
    bookItem.appendChild(authorsElement);
    bookItem.appendChild(detailsButton);  //Added the details button 
    return bookItem;
}

/* Made the showDetails function similary to how 
    const authorsElement = document.createElement('p');
    authorsElement.textContent = 'Authors: ' + authors;
     was done as it is just getting the text contents*/
function showDetails(description, detailsButton, bookItem) { //https://stackoverflow.com/questions/4600508/how-do-i-pass-variables-between-functions-in-javascript the show details function needs access to detailsButton and bookItem to append 
    detailsButton.textContent = 'Details: ' + description;
    bookItem.appendChild(detailsButton);
    const collapseButton = document.createElement('button');
    collapseButton.textContent='Collapse';
    collapseButton.addEventListener('click', () => collapseDetails(description, collapseButton, bookItem)); //Once clicked on, calls on the collaseDetails function
    bookItem.appendChild(collapseButton);  //Appended the collapsebutton here as it doesn't need to show unless you click on the details button
}
function collapseDetails(description, collapseButton, bookItem){  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible 
    var content = detailsButton.textContent;   //This function doesn't work not too sure why 
    if (content.style.display === 'block') {  
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}