// gutendex.com API has been used for this project

const wraper = document.querySelector(".container");
const loadingMessage = document.querySelector(".processing-message");

const Books = async () => {
  try {
    const fetchBooks = await fetch("https://gutendex.com/books");

    if(!fetchBooks.ok) {
      throw new Error(`The Http status is ${fetchBooks.status}, the page is not found !`)
    }
  
    const data = await fetchBooks.json();
  
    if(data){
      loadingMessage.style.display = "none"
    }

    
    let items = data.results;
    
    items.forEach((element) => {

        const authors = element.authors;
        const authorName = authors && authors.length > 0 ? authors[0].name : "Unknown Author";
      
        // console.log(authorName); // This will now print "Unknown Author" if there is no author info
        // console.log(
        //   `Book Title : ${element.title}\nAuthor : ${authorName}\nLanguage : ${element.languages}\nRead : ${element.formats["text/html"]}\nImage : ${element.formats["image/jpeg"]}`
        // );

      const createDiv = document.createElement("div");
      createDiv.setAttribute("class", "Book_items");
  
      const createImgDiv = document.createElement("div");
      createImgDiv.setAttribute("class", "Book_img");
  
      const createImg = document.createElement("img");
      createImg.setAttribute("class", "item_img");
      createImg.src = `${element.formats["image/jpeg"]}`;
      createImgDiv.append(createImg);
  
      const createP_Div = document.createElement("div");
      createP_Div.setAttribute("class", "Book_det");
  
      const create_P = document.createElement("p");
      create_P.setAttribute("class", "Book_P");
      let holder = "<strong><em>Book Title :</em></strong>";
  
      create_P.innerHTML = `${holder} ${element.title}`;
  
      const create_P_2 = document.createElement("p");
      create_P_2.setAttribute("class", "Book_P");
      let holder_2 = "<strong><em>Author :</em></strong>";
      create_P_2.innerHTML = `${holder_2} ${authorName}`;
  
      const create_P_3 = document.createElement("p");
      create_P_3.setAttribute("class", "Book_P");
      let c = element.languages[0];
      let d = JSON.stringify(c);
  
      let r = d.charAt(1).toUpperCase() + "n";
      let holder_3 = "<strong><em>Language :</em></strong>";
      create_P_3.innerHTML = `${holder_3} ${r}`;
  
      const create_P_4 = document.createElement("p");
      create_P_4.setAttribute("class", "Book_P");
      create_P_4.classList.add("read");
      create_P_4.innerHTML = `Click below to read the entire book for free ↓↓↓`;
  
      const create_P_5 = document.createElement("a");
      create_P_5.setAttribute("class", "Book_P_a");
      create_P_5.href = `${element.formats["text/html"]}`;
      let bookImg = document.createElement("img");
      bookImg.setAttribute("class", "book_img");
      bookImg.src = "./read_book.png";
      bookImg.alt = "Books"
      create_P_5.append(bookImg);
  
      createDiv.append(
        createImgDiv,
        create_P,
        create_P_2,
        create_P_3,
        create_P_4,
        create_P_5
      );
      wraper.append(createDiv);
    });
  } catch (error) {
    if(error){
      const errorMessage = document.createElement("p")
      console.log(error);
      
      errorMessage.textContent = `Sorry, we got an error : ${error}`
      errorMessage.classList.add("errors")
      wraper.append(errorMessage)
      if(errorMessage){
        loadingMessage.style.display = "none"
      }
    }
  }
  
}

Books();