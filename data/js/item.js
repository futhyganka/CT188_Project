const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id); 

fetch(`http://localhost:3000/books/${id}`)
    .then(res => res.json())
    .then(data => {
        renderBook(data);
         loadRelatedBooks(data);
    });
function renderBook(book) {

    document.querySelector(".main-img").src = book.image;
    document.querySelector(".title").innerText = book.title;

    // giá
    const newPrice = book.price * (100 - (book.discount || 0)) / 100;

    document.querySelector(".price .new").innerText =
        newPrice.toLocaleString() + "đ";
    document.querySelector(".price .old").innerText =
        book.price.toLocaleString() + "đ";

    document.querySelector(".author").innerText = book.author || "Đang cập nhật";
    

    document.querySelector(".size").innerText = book.size;
    document.querySelector(".type").innerText = book.format;
    document.querySelector(".date").innerText = book.date;
    document.querySelector(".weight").innerText = book.weight;
    document.querySelector(".publish").innerText = book.publish;

    document.querySelector(".desc").innerHTML = book.description;
}
function loadRelatedBooks(currentBook) {
    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(books => {

            const related = books.filter(book =>
                book.id !== currentBook.id &&
                book.topic.some(t => currentBook.topic.includes(t))
            );

            renderRelatedBooks(related);
        });
}

function renderRelatedBooks(books) {
    const container = document.querySelector(".related");

    container.innerHTML = books.slice(0, 6).map(book => {
        return `
        <div class="item" onclick="goToDetail('${book.id}')">
            <img src="${book.image}" alt="">
            <h4>${book.title}</h4>
            <p>${(book.price/10 * (100 - book.discount) / 100).toLocaleString()}đ</p>
        </div>
        `;
    }).join("");
}

function goToDetail(id) {
    window.location.href = `item.html?id=${id}`;
}
function scrollLeft(btn) {
    const container = btn.closest(".related-wrapper").querySelector(".related");

    if (!container) {
        console.log("Không tìm thấy .related");
        return;
    }

    container.scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

function scrollRight(btn) {
    const container = btn.closest(".related-wrapper").querySelector(".related");

    if (!container) {
        console.log("Không tìm thấy .related");
        return;
    }

    container.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}


