// gutendex.com API has been used for this project

const wraper = document.querySelector(".container");
const books = () => {
  fetch("https://gutendex.com/books")
    .then((res) => {
      if(!res.ok){
          throw new Error(` The Http status is ${res.status}, the page is not found !`)
      }
      return res.json()
    })
    .then((data) => {
      let items = data.results;

      items.forEach((element) => {
      
  // console.log(
  // `Book Title : ${element.title}\nAuthor : ${element.authors[0].name}\nLanguage : ${element.languages}\nRead : ${element.formats["text/html"]}\nImage : ${element.formats["image/jpeg"]}`
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
        create_P_2.innerHTML = `${holder_2} ${element.authors[0].name}`;

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

        bookImg.addEventListener("mouseover", ()=>{
          bookImg.style.display = "none"
          create_P_5.innerHTML = "Enjoy reading !!! ⇗"
          create_P_5.classList.add("enjoy")
        })
        create_P_5.addEventListener("mouseout", ()=>{
          bookImg.style.display = ""
          create_P_5.innerHTML = ""
          create_P_5.classList.remove("enjoy")
          create_P_5.append(bookImg);
        })

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
    })
    .catch(error => {
      const errorMessage = document.createElement("p")
      errorMessage.textContent = `Sorry, we got an error : ${error.message}`
      errorMessage.classList.add("errors")
      wraper.append(errorMessage)
    })
};
books();