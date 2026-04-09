/*
// Sách

let booksApi = 'http://localhost:3000/books';

// lấy mảng books
function getBooks(callback) {
    fetch(booksApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// để đây cho mọi người tham khảo cách dùng
// getBooks((books) => {
//     let listItem = document.querySelector(".bs-content .list-item");
//     listItem.innerHTML = books.map((book) => {
//         return `
//         <div class="item">
//             <form action="">
//                 <div class="box-item">
//                     <div class="img"><img src="${book.image}" alt=""></div>
//                     <h4 class="title-item">${book.title}</h4>
//                     <div class="discount">-${book.discount}%</div>
//                     <div class="price">
//                         <span class="price-new">${book.price * (100 - book.discount) / 100}₫</span>
//                         <span class="price-old">${book.price}₫</span>
//                     </div>
//                 </div>
//             </form>
//         </div>`
//     }).join("");
// });

// lấy book qua id
function getBook(id, callback) {
    fetch(booksApi + '/' + id)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Thêm book
function createBook(book, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    fetch(booksApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa sách
function setBook(id, book, callback) {
    var option = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    fetch(booksApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa sách
function deleteBook(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(booksApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}


// người dùng

let usersApi = 'http://localhost:3000/users';

// lấy mảng users
function getUsers(callback) {
    fetch(usersApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// lấy user qua id
function getUser(id, callback) {
    fetch(usersApi + '/' + id)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Thêm user
function createUser(user, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetch(usersApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa user
function setUser(id, user, callback) {
    var option = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetch(usersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa user
function deleteUser(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(usersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}


// đơn hàng

let ordersApi = 'http://localhost:3000/orders';

// lấy mảng orders
function getOrders(callback) {
    fetch(ordersApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// lấy order qua id
function getOrder(id, callback) {
    fetch(ordersApi + '/' + id)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Thêm order
function createOrder(order, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }
    fetch(ordersApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa order
function setOrder(id, order, callback) {
    var option = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }
    fetch(ordersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa order
function deleteOrder(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(ordersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}
*/
let topic = {
    'kynang': 'Kỹ năng',
    'vhvn': 'Văn học Việt Nam',
    'vhnn': 'Văn học nước ngoài',
    'khoahoc': 'Khoa học',
    'lichsu': 'Lịch sử',
    'truyentranh': 'Truyện tranh'
}

let database = {
  "books": [
    {
      "id": "B001",
      "title": "Những sư tử non",
      "image": "./data/img/img001.webp",
      "description": "'Biệt đội X' của Hùng, Xăm 'lì', Cưu 'còi', Nam, Bé… đã hoàn thành những nhiệm vụ rất gian khó như rải truyền đơn, đập đèn bão, thu thập thông tin và đặc biệt là xử tội tên Sồm cuộc trưởng cảnh sát.<br>Ông Hai cuộc trưởng cảnh sát mới về thay, khác hẳn tên Sồm ác ôn tiền nhiệm, gần gũi, thân tình với dân làng, tổ chức dạy học cho các em nhỏ, ngăn chặn mọi hành động bắt bớ, tra tấn dã man của Bảy Búa khiến Hùng và các bạn đặt một câu hỏi: ông Hai là người thế nào?<br>Không ai biết rằng bộ hồ sơ mật với tên 'Những sư tử non' đang dần được hoàn thành…<br>Và đó chính là ĐỘI BIỆT ĐỘNG THIẾU NIÊN hai xã Hàm Chính, Hàm Liêm (huyện Hàm Thuận Bắc, tỉnh Bình Thuận) trong cuộc chiến chống Mỹ cứu nước.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Đắc Trung"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "13 x 19 cm",
      "weight": "170 gram",
      "format": "Bìa mềm",
      "price": 20000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B002",
      "title": "Đại Nam Thực Lục Việt Trung Quan hệ Vựng biên - Đại Nam thực lục tiền biên - Đại Nam liệt truyện tiền biên",
      "image": "./data/img/img002.jpg",
      "description": "ĐẠI NAM THỰC LỤC – VIỆT TRUNG QUAN HỆ VỰNG BIÊN<br>Đại Nam thực lục là một trong những bộ chính sử lớn của nước ta, đồng thời cũng là bộ sử đặc biệt quan trọng trong việc nghiên cứu về vương triều Nguyễn (kể cả giai đoạn Chúa Nguyễn lẫn vua Nguyễn). Đương nhiên, bên cạnh Đại Nam thực lục, còn có những thiên dã sử có liên quan, nhưng chính sử vẫn giữ vai trò chủ đạo trong việc nghiên cứu lịch sử của một triều đại.<br>Đại Nam thực lục: Việt – Trung quan hệ vựng biên được biên soạn với tiêu chí sàng lọc, trích dịch những sử mục có liên quan giữa hai nước Việt Nam và Trung Quốc (cụ thể là nhà Minh và nhà Thanh, nhưng chủ yếu vẫn là nhà Thanh) được Đại Nam thực lục ghi chép, soạn lại thành một tập tuyển lục có hệ thống. Mong muốn rằng tập sách này sẽ mở ra cho chúng ta có cái nhìn tổng quan hơn về mối quan hệ giữa hai nước và hỗ trợ trực tiếp việc nghiên cứu mối quan hệ giữa Việt Nam và Trung Quốc đời nhà Minh – Thanh bằng tư liệu cụ thể, tập trung, từ góc nhìn quan phương Việt Nam (triều Nguyễn).",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "rất hay, ý nghĩa" },
        { "star": 5, "info": "nó miêu tả cảnh đẹp và những con người đang cố gắng ở đó. bài này rất hay" }
      ],
      "author": [" Nguyễn Phúc An"],
      "publish": "NXB Tổng hợp thành phố Hồ Chí Minh",
      "date": "2026",
      "size": "13 x 20 cm",
      "weight": "135 gram",
      "format": "Bìa cứng",
      "price": 100000,
      "quantity": 300,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B003",
      "title": "THỜI NIÊN THIẾU CỦA DANH NHÂN NƯỚC VIỆT - THỜI NIÊN THIẾU CỦA LÊ QUÝ ĐÔN",
      "image": "./data/img/img003.jpg",
      "description": "Cuốn sách 'Thời niên thiếu của Lê Quý Đôn' được biên soạn với mong muốn đưa bạn đọc – đặc biệt là các em học sinh – quay về hành trình tuổi thơ của một danh nhân. Dựa trên tư liệu lịch sử, gia phả dòng họ, các giai thoại dân gian và nghiên cứu hiện đại, cuốn sách kể lại một cách sinh động, dễ hiểu những bước đi đầu tiên trong hành trình tri thức của Lê Quý Đôn. Từ lúc học vỡ lòng, đến những năm tháng miệt mài học tập trong nghèo khó, từng câu chuyện gia đình, làng xóm… tất cả đều góp phần tạo nên một nhân cách lớn.<br>Để hiểu một vĩ nhân, không chỉ nên đọc những gì họ viết, mà cần biết họ đã sống như thế nào, đặc biệt là trong những năm tháng tuổi thơ đầy ắp mơ ước và khát vọng. Mong rằng cuốn sách nhỏ này sẽ là người bạn đồng hành đáng quý, truyền cảm hứng học tập, rèn luyện và nuôi dưỡng ước mơ cho các em học sinh hôm nay.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 5, "info": "Sản phẩm chất lượng, gói hàng cẩn thận, giá cũng rẻ hơn so với mấy shop khác" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Vũ Thị Thanh"],
      "publish": "NXB Trẻ",
      "date": "2025",
      "size": "14 x 20cm",
      "weight": "100 gram",
      "format": "Bìa mềm",
      "price": 55000,
      "quantity": 400,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B004",
      "title": "Thăng Long Kinh Kì - Kẻ Chợ - Thời Tây Sơn và nhà Nguyễn",
      "image": "./data/img/img004.webp",
      "description": "Các khu phố buôn bán, khu sĩ hoạn, khu vực hành chính, kể cả vương phủ cùng đan xen nhau, trong nhiều trường hợp còn hòa quyện vào nhau, như khu phủ chúa gần kề các làng nghề, phường thợ, khu sĩ hoạn gần nơi buôn bán… Điều này đã dẫn đến cách gọi Kẻ Chợ để chỉ người Thăng Long, rồi là cả đất Thăng Long truyền thống và đổi thay.<br>Sang thời Tây Sơn và triều Nguyễn nhiều cái sẽ khác đi, nhưng cái cốt cách dung nạp của người và đất Thăng Long – Hà Nội thì vẫn vậy. Và nếu như cái tên mới Hà Nội do nhà Nguyễn đặt ra, ban đầu khó được người dân chấp nhận, thì người ta vẫn quen gọi Thăng Long bằng cái tên nôm na Kẻ Chợ như tự thuở nào.<br>Thiết nghĩ, đây không chỉ do thói quen, mà còn bởi 'chất' Kẻ Chợ thực sự đã hình thành, hiện hữu ở người Thăng Long – Hà Nội mà người ta không thể gọi theo cách nào khác. Nhưng cụ thể nó ra sao, gắn với lịch sử Hà Nội như thế nào, được biểu hiện qua những khía cạnh nào của đời sống xã hội và dân sinh, hay với tư cách một quần thể được gọi là phố phường thì Kẻ Chợ hiện diện ra sao…?”<br>Men theo dòng chảy lịch sử, bộ sách THĂNG LONG KINH KÌ – KẺ CHỢ tái hiện bức tranh văn hóa, phong tục của Hà Nội xưa mà giáo sĩ Alexandre de Rhodes phải trầm trồ: 'Thành phố lộng lẫy ngang hoặc hơn so với Venise'.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 5, "info": "rất hay, đáng mua, gói hàng cẩn thận, giá cả hợp lý" },
        { "star": 5, "info": "hayyy" }
      ],
      "author": ["Nguyễn Quốc Tín","Nguyễn Huy Thắng"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "14.5 x 20.5 cm",
      "weight": "185 gram",
      "format": "Bìa mềm",
      "price": 30000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B005",
      "title": "DI SẢN HỒ CHÍ MINH - HỒ CHÍ MINH BÀN VỀ VĂN HÓA NGHỆ THUẬT",
      "image": "./data/img/img005.jpg",
      "description": "Sáng ngày 07/10/1945, khi dự Lễ khai mạc Triển lãm Văn hóa tại trụ sở cũ của Hội Khai trí Tiến Đức. Trước số sách báo ít ỏi của ta được xuất bản trong thời kỳ bị Pháp - Nhật đô hộ, Người nói: Văn hóa Việt Nam dưới sự áp bức của đế quốc vẫn cố gắng thở, vẫn cố tìm cách phát triển… Sang phòng triển lãm tranh của các họa sĩ có tên tuổi, Người nhận xét: 'Những bức tranh này tỏ ra các nghệ sĩ của ta lâu nay đều đã cố gắng tìm một con đường đi. Nhưng tiếc một điều là không muốn đi ở dưới đất mà cứ muốn vụt lên trời: Chất mơ mộng nhiều quá, mà cái chất thật của sự sinh hoạt rất ít'. Người còn nhắc nhở: 'Trong công cuộc kiến thiết nước nhà, có bốn vấn đề cùng phải chú ý đến, cùng phải coi là quan trọng ngang nhau: chính trị, kinh tế, xã hội, văn hóa. Nhưng văn hóa là một kiến trúc thượng tầng, những cơ sở hạ tầng của xã hội có kiến thiết rồi, văn hóa mới kiến thiết được và đủ điều kiện phát triển được. Ngày nay, trước khi đi đến sự kiến thiết nước nhà, chúng ta phải qua một thời kỳ đấu tranh cực kỳ khổ sở… Giới văn hóa cũng phải cùng các giới đồng bào đi qua chặng đường ấy. Mong rằng các anh em văn hóa đã cố gắng, xin cố gắng lên mãi, để cùng đồng bào đi đến chỗ hoàn toàn vẻ vang của nước nhà' . Trong thư gửi Hội nghị văn hóa toàn quốc lần thứ hai, Người đã chỉ rõ: 'Nhiệm vụ của văn hóa chẳng những để cổ động tinh thần và lực lượng kháng chiến kiến quốc của quốc dân, mà cũng phải nêu rõ những thành tích kháng chiến kiến quốc vĩ đại của ta cho thế giới. Các nhà văn hóa ta phải có những tác phẩm xứng đáng, chẳng những để biểu dương sự nghiệp kháng chiến kiến quốc bây giờ, mà còn để lưu truyền cái lịch sử oanh liệt kháng chiến, kiến quốc cho hậu thế'. Trong thư gửi các họa sĩ nhân dịp triển lãm Hội họa 1951, Chủ tịch Hồ Chí Minh khẳng định: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy'.  <br>Hồ Chí Minh bàn về văn hóa nghệ thuật tập hợp các bài viết, bài nói của Chủ tịch Hồ Chí Minh về lĩnh vực văn hóa văn thuật, giúp độc giả nắm bắt được những tư tưởng, quan điểm của Chủ tịch Hồ Chí Minh và của Đảng ta về lĩnh vực quan trọng này.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 5, "info": "Rất đáng xem" },
        { "star": 5, "info": "Một cuốn sách đáng đọc, mang lại nhiều giá trị." }
      ],
      "author": ["Hồ Chí Minh"],
      "publish": "NXB Trẻ",
      "date": "2025",
      "size": "13 x 20,5 cm",
      "weight": "210 gram",
      "format": "Bìa mềm",
      "price": 75000,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B006",
      "title": "DẤU CHÂN NHỮNG NGƯỜI YÊU NƯỚC",
      "image": "./data/img/img006.jpg",
      "description": "Chủ tịch Hồ Chí Minh khẳng định: 'Cách mạng Tháng Tám đã lật đổ nền quân chủ mấy mươi thế kỷ, đã đánh tan xiềng xích thực dân gần 100 năm, đã đưa chính quyền lại cho nhân dân, đã xây nền tảng cho nước Việt Nam Dân chủ Cộng hòa, độc lập, tự do, hạnh phúc. Đó là một cuộc thay đổi cực kỳ to lớn trong lịch sử của nước ta' . Thành công của Cách mạng Tháng Tám không phải tự nhiên mà có, mà đó là công sức của bao thế hệ cha ông đã quên mình vì nước. Quá khứ là những sự kiện, những con người đã sống, đã đi trước chúng ta trong một không gian lịch sử, đã để lại 'dấu chân' mình cho hiện tại, truyền đạt cho thế hệ mai sau những điều bổ ích. Lần theo dấu chân của những người đi trước, thế hệ hiện tại không những có thể tự hào về truyền thống anh hùng bất khuất của dân tộc, mà còn được nhắc nhở, động viên bởi những con người làm nên lịch sử. <br>Tiến sĩ Nguyễn Văn Khoan đã bỏ nhiều công sức gặp gỡ nhân chứng và sưu tầm tài liệu, để biên soạn quyển sách Dấu chân những người yêu nước, giới thiệu về các vị tiền bối như: Hoàng Trọng Mậu – Tổng Tư lệnh Quang Phục quân; Hồ Học Lãm – người đảng viên không mang thẻ Đảng; Nguyễn Thức Canh, Nguyễn Thức Đường, Nguyễn Thức Độ – ba anh em không chịu làm nô lệ; Lê Hồng Sơn – sáng lập viên Đảng Cộng sản Việt Nam; Lý Phương Đức – nữ chiến sĩ giao thông của đồng chí Vương; Nguyễn Sỹ Sách – người con ưu tú của quê hương Xô Viết Nghệ Tĩnh; Phùng Chí Kiên – người con ưu tú của dân tộc ta; Đỗ Ngọc Du – Bí thư Ban Chấp hành lâm thời Đảng bộ Hà Nội; Nguyễn Công Thu – một trong những chiến sĩ giao thông đầu tiên của Đảng; Dương Bạch Mai – trí thức yêu nước; Lê Văn Đản – hội viên Việt Nam Thanh niên Cách mạng Đồng chí Hội; Nguyễn Khang – tài năng không đợi chờ năm tháng; Hoàng Đạo Thúy – nhà cách mạng và nhà văn hóa; Hoàng Minh Giám – người cùng đất nước đi trọn chặng đường lịch sử; Trịnh Đình Thảo – luật sư yêu nước; Trần Hữu Tước – người biết chia, nhường, cho và nhận; Lương Định Của – bác sĩ nông học thứ 96 của Nhật Bản. <br>Các vị này đều là những người ham học hỏi và giàu lòng yêu nước, cùng “đồng cam cộng khổ” với nhân dân trong sự nghiệp kháng chiến, kiến quốc do Chủ tịch Hồ Chí Minh lãnh đạo.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "lên án gay gắt cái xã hội tư sản ,châm biếm xh rất hay" },
        { "star": 5, "info": "Đọc một lần là muốn đọc lại." }
      ],
      "author": ["Tiến sĩ Nguyễn Văn Khoan"],
      "publish": "NXB Trẻ",
      "date": "2025",
      "size": "14 x 20 cm",
      "weight": "190 gram",
      "format": "Bìa mềm",
      "price": 85000,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B007",
      "title": "HỎI ĐÁP LỊCH SỬ VIỆT NAM 01 - TỪ KHỞI THỦY ĐẾN THẾ KỶ X",
      "image": "./data/img/img007.jpg",
      "description": "Muốn tìm hiểu về một quốc gia, người ta thường thông qua cánh cửa mầu nhiệm mang tên LỊCH SỬ. Ở rất nhiều nước trên thế giới, lịch sử là một môn học hết sức quan trọng, là nguồn cảm hứng vô tận để các ngành nghệ thuật khai thác, xây dựng thành những tác phẩm có giá trị…Được ghi chép bởi các nhà nghiên cứu, với sự hỗ trợ to lớn của dân gian, lịch sử Việt Nam với hàng ngàn năm dựng nước và giữ nước đã trở thành một kho tàng kiến thức quý giá, vun bồi lòng yêu nước, lòng tự hào dân tộc; là những kinh nghiệm sống đã được trải nghiệm và chứng minh qua thực tiễn, để người Việt Nam thời hiện đại có thể học hỏi xây dựng bản lĩnh cho mình khi hòa nhập vào dòng chảy cuồn cuộn của thế giới. Tìm hiểu về lịch sử dân tộc, do đó, vừa là nhu cầu, vừa là đòi hỏi của thời cuộc để mỗi người dân Việt Nam có thể tự tin hội nhập cùng bạn bè quốc tế với một bản sắc dân tộc mạnh mẽ.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 3, "info": "Một tác phẩm chất lượng, đáng để trải nghiệm." },
        { "star": 5, "info": "Rất thích cách tác giả truyền tải thông điệp." }
      ],
      "author": ["Nhóm Nhân văn trẻ"],
      "publish": "NXB Trẻ",
      "date": "2024",
      "size": " 14,5 x 20,5cm",
      "weight": "322 gram",
      "format": "Bìa mềm",
      "price": 110000,
      "quantity": 400,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B008",
      "title": "Từ triều đình Huế đến chiến khu Việt Bắc",
      "image": "./data/img/img008.jpg",
      "description": "Cụ Phạm Khắc Hòe (1901–1995) từng giữ chức vụ Đổng lý Ngự tiền Văn phòng (quan thượng thư) dưới triều vua Bảo Đại. Đây là vị trí quan trọng, giúp vua trong việc xử lý các công việc hành chính, văn thư và giao tiếp với các cơ quan khác của triều đình. Ông là người chứng kiến và tham gia nhiều sự kiện quan trọng, bao gồm việc vua Bảo Đại thoái vị vào năm 1945. Sau này, ông đi theo cách mạng và có nhiều đóng góp cho sự nghiệp kháng chiến chống Pháp của dân tộc.<br>Hồi ký Từ triều đình Huế đến chiến khu Việt Bắc tái hiện quá trình giác ngộ, đi theo con đường cách mạng của cụ Phạm Khắc Hoè, các chính sách đại đoàn kết của Hồ Chủ tịch và Đảng cộng sản cũng như cho chúng ta những góc nhìn về triều đình Huế trong giai đoạn lịch sử đầy biến động, khí thế cách mạng của nhân dân Việt Nam dưới sự lãnh đạo của Bác Hồ và Đảng Cộng sản Việt Nam…",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Cuốn sách khiến mình suy nghĩ rất nhiều." },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Phạm Khắc Hòe"],
      "publish": "NXB Hội Nhà văn",
      "date": "2025",
      "size": " 16 × 24 cm",
      "weight": "",
      "format": "Bìa cứng",
      "price": 280000,
      "quantity": 300,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B009",
      "title": "Lịch sử văn học Việt Nam thời kì 1945 - 1985",
      "image": "./data/img/img009.jpg",
      "description": "Lịch sử văn học là một thực tế sống động, vận động, chép sử văn học là chọn một mô hình để diễn giải và mô tả thực tế ấy. Có người coi lịch sử văn học là sự thay thế của các thể loại (M. Bakhtin), có người coi như sự thay thế của các thế hệ nhà văn (Thanh Lãng)… từ đó mà lịch sử văn học được nhìn nhận, mô tả theo các cách khác nhau.<br>Cuốn sách Lịch sử văn học Việt Nam thời kỳ 1945 - 1985 do Trịnh Bá Đĩnh chủ biên là một cuốn sách mang nhiều giá trị. Cuốn sách mô tả lịch sử văn học Việt Nam thời kì 1945 - 1985, từ điểm nhìn của ngày hôm nay, tức là thời điểm chúng ta đang chuẩn bị kỉ niệm 80 năm Cách mạng Tháng Tám. Đây là một khoảng thời gian bốn mươi năm văn học.<br>Về sự phân kì này có thể cắt nghĩa tóm tắt như sau:<br>Năm 1945 kết thúc thế chiến hai, cũng là năm ra đời nhà nước Việt Nam Dân chủ Cộng hòa, bắt đầu một thời kì mới của lịch sử Việt Nam: thời kì đấu tranh giành độc lập, tự chủ dân tộc, xây dựng xã hội mới theo mô hình xã hội chủ nghĩa, lúc đầu là trên một nửa đất nước, sau đó là trên cả nước, một đất nước thống nhất. Việc lựa chọn một mô hình phát triển xã hội mới, theo một ý thức hệ mới dẫn đến hệ quả là sự ra đời, phát triển những thiết chế văn hóa, văn học mới về căn bản.<br>Năm 1985 (một cách khá ước lệ) có thể coi là thời điểm kết thúc một thời kì lịch sử xã hội, văn hóa và văn học. Sau đó, từ năm 1986, là thời kì đất nước “đổi mới toàn diện mọi mặt xã hội” và tham gia vào “sân chơi toàn cầu”. Tất nhiên lịch sử là một dòng chảy liên tục, việc phân ra các thời kì như thế này hoặc thế kia cũng chỉ là một cách lựa chọn chủ quan mô hình diễn giải lịch sử. Khi chọn bất kì “mốc lịch sử” nào thì người ta cũng có thể dễ dàng chỉ ra những khía cạnh gián đoạn và những khía cạnh liên tục của một quá trình. Nhưng dù sao, nói về các sự kiện thì vẫn có sự kiện có ý nghĩa lớn chi phối nhiều mặt thực tế, có sự kiện chỉ tác động hạn hẹp. Lịch sử xã hội và lịch sử văn học cũng đều như vậy. Sự phân chia thời kì văn học căn cứ vào những mốc có ý nghĩa chi phối lớn đến nhiều mặt của đời sống văn học.<br>Cuốn sách được biên soạn trên cơ sở kết quả của đề tài cấp Bộ do Viện Hàn lâm Khoa học xã hội Việt Nam giao cho Viện Văn học chủ trì, PGS.TS. Trịnh Bá Đĩnh làm chủ biên với sự tham gia của các thành viên khác trong nhóm tác giả thực hiện đề tài. Cuốn sách nằm trong cụm công trình dự kiến: Lịch sử văn học Việt Nam, gồm 6 quyển.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Phù hợp để đọc và làm quà tặng." }
      ],
      "author": [" PGS.TS. Phạm Minh Phúc"],
      "publish": "NXB Khoa học xã hội",
      "date": "",
      "size": "16 x 24 cm",
      "weight": "",
      "format": "Bìa cứng",
      "price": 168000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B010",
      "title": "Những anh hùng trẻ tuổi - Phạm Ngọc Đa",
      "image": "./data/img/img010.webp",
      "description": "Mười lăm tuổi, Phạm Ngọc Đa trở thành đội viên du kích xã, được làm giao liên, trinh sát và trực tiếp tham gia chiến đấu. Cậu được chọn vào tổ quân báo, theo dõi quân Pháp và hỗ trợ cán bộ Việt Minh.<br>Tinh thần dũng cảm, kiên trung của người anh hùng nhỏ tuổi Phạm Ngọc Đa sẽ mãi như ánh mặt trời rực rỡ trên quê hương giàu truyền thống yêu nước của vùng đất Tiên Lãng, Hải Phòng…",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Tác phẩm phản ánh chân thực đời sống và con người Việt Nam." },
        { "star": 5, "info": "Cuốn sách mang giá trị nhân văn sâu sắc" }
      ],
      "author": ["Xuân Sách"],
      "publish": "NXB Trẻ",
      "date": "",
      "size": "13 x 19 cm",
      "weight": "165 gram",
      "format": "Bìa mềm",
      "price": 36000,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B011",
      "title": "Tuổi nhỏ chí cao",
      "image": "./data/img/img011.webp",
      "description": "Không kể về những gương lớn khắp nơi đều biết, tập sách chép nhiều chuyện có thật, với những nhân vật thậm chí không rõ tên, nhằm ghi nhận đóng góp của thiếu nhi trong kháng chiến, từ Bắc tới Nam, ở bất cứ nơi đâu, tưởng như không bao giờ hết.<br>Với gần ba mươi câu chuyện nho nhỏ, ngắn gọn, giản dị, nhưng ý nghĩa, phản ánh tinh thần yêu nước, ý chí bất khuất kiên cường, quyết tâm học tập, chăm ngoan… Tuổi nhỏ chí cao của nhà văn Tô Hoài có thể xem là tập tư liệu quý, giúp bạn đọc hiểu thêm về truyền thống cách mạng của thiếu nhi Việt Nam trong khoảng những năm 1945 − 1950.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "ý nghĩa, Rất đáng xem" }
      ],
      "author": ["Tô Hoài"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "13 x 19 cm",
      "weight": "90 gram",
      "format": "Bìa mềm",
      "price": 18000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B012",
      "title": "Những vị vua trẻ trong sử Việt",
      "image": "./data/img/img012.webp",
      "description": "Đọc cuốn sách này, các bạn sẽ có dịp tìm hiểu về các vị vua trẻ trong suốt lịch sử chế độ phong kiến Việt Nam, kể từ khi Ngô Quyền đánh thắng quân Nam Hán xâm lược, giành lại quyền độc lập tự chủ cho đất nước, đến năm 1945, khi hoàng đến cuối cùng Bảo Đại đọc chiếu thoái vị, nguyện làm công dân một nước tự do hơn làm vua một nước nô lệ. Ở đây, khái niệm 'vua trẻ' được dùng để chỉ những vị vua lên ngôi khi chưa đến 15 tuổi, trong đó có người rồi sau sẽ trưởng thành, trở nên chín chắn, tự mình chấp chính, ghi dấu ấn trong lịch sử, nhưng cũng co người đoản mệnh, và như vậy hộ vĩnh viễn dời khỏi vũ đài lịch sử với tư cách là những vị 'vuanhí'.<br>Vậy họ đã làm vua như thế nào?",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "tình cảm, khiến mình nhớ đến quê hương nhớ nhà" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nguyễn Như Mai","Nguyễn Quốc Tín","Nguyễn Huy Thắng"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "14.5x20.5 cm",
      "weight": "330 gram",
      "format": "Bìa mềm",
      "price": 63000,
      "quantity": 400,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B013",
      "title": "Dương Văn Nội",
      "image": "./data/img/img013.webp",
      "description": "Chứng kiến cảnh đánh đập, khủng bố dã man của phát xít Nhật với đồng bào ở nhà dầu Shell Khâm Thiên, Dương Văn Nội quyết định tham gia cách mạng để góp phần diệt phát xít Nhật, đánh đuổi thực dân Pháp.<br>Sau Cách mạng tháng Tám, anh gia nhập Đội Thiếu niên cứu quốc Thủ đô, làm liên lạc cho đại đội tự vệ Thăng Long. Một ngày, giặc Pháp mở trận càn lớn vào nơi đóng quân của đơn vị Nội. Trong tay chỉ có một cây súng trường đơn sơ, Dương Văn Nội đã chiến đấu ngoan cường và anh dũng hi sinh khi vừa bước sang tuổi trăng tròn…",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Lê Vân"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "13 x 19 cm",
      "weight": "150 gram",
      "format": "Bìa mềm",
      "price": 32400,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B014",
      "title": "DI SẢN HỒ CHÍ MINH - HỌC BÁC MỖI NGÀY",
      "image": "./data/img/img014.jpg",
      "description": "Trong suốt 30 năm ở nước ngoài, lãnh tụ Nguyễn Ái Quốc đã đi qua 4 châu lục và gần 30 quốc gia, trong đó có các nước phát triển nhất thế giới vào thời điểm đó, cũng như đã tiếp cận với nhiều nền văn hóa khác nhau. “Với tấm lòng yêu nước nồng nàn, Hồ Chủ tịch đã sớm đến với chủ nghĩa Marx-Lenin, tìm thấy ở chủ nghĩa Marx-Lenin ánh sáng soi đường cứu dân, cứu nước. Hồ Chủ tịch là người Việt Nam đầu tiên đã vận dụng sáng tạo chủ Marx-Lenin vào hoàn cảnh nước ta, vạch đường chỉ lối cho cách mạng Việt Nam từng bước tiến lên, từ thắng lợi này đến thắng lợi khác”. Người cũng đã tiếp thu có chọn lọc các mô hình cách mạng, các hình thái tổ chức nhà nước, các cách thức quản lý kinh tế… để triển khai thực hiện ở Việt Nam trong các giai đoạn cụ thể và đạt được những kết quả quan trọng, tạo nên các bước ngoặt trong tiến trình lịch sử của đất nước.<br>Những bước chân của Nguyễn Tất Thành – Nguyễn Ái Quốc – Hồ Chí Minh có khi còn dò dẫm, có khi thận trọng, có khi mạnh mẽ và quyết đoán, linh hoạt và sáng tạo trong từng điều kiện cụ thể. Tất cả đã góp phần tạo nên những thắng lợi vĩ đại của cách mạng Việt Nam dưới sự lãnh đạo của Đảng, mà đỉnh cao là Cách mạng tháng Tám thành công vang dội, chiến thắng Điện Biên Phủ lừng lẫy năm châu, chấn động địa cầu, dẫn đến chiến dịch Hồ Chí Minh lịch sử, khi “lời Bác nay đã thành chiến thắng huy hoàng, 30 năm đấu tranh giành toàn vẹn non sông, 30 năm dân chủ cộng hòa kháng chiến đã thành công”.<br>Kế thừa tư tưởng của Người, đất nước ta đã giành những thành tựu có ý nghĩa lịch sử trong công cuộc đổi mới để đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay, tạo tiền đề vững chắc để bước vào kỷ nguyên vươn mình của dân tộc Việt Nam. Trách nhiệm của chúng ta hôm nay là tiếp tục đi theo những bước chân của Người trên tất cả các lĩnh vực.<br>Học Bác mỗi ngày thông qua những câu chuyện mang tính gợi mở, mong muốn bạn đọc có thêm những tình cảm đẹp, nhận thức đúng, ý tưởng hay về Bác Hồ, biến nó thành hành động cụ thể, thiết thực, giúp cho cuộc sống của chúng ta ngày càng tốt đẹp hơn.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 2, "info": "cũng đc" },
        { "star": 5, "info": "hay" }
      ],
      "author": [" Nguyễn Minh Hải"],
      "publish": "NXB Trẻ",
      "date": "",
      "size": "13 x 20,5 cm",
      "weight": "",
      "format": "Bìa mềm",
      "price": 90000,
      "quantity": 400,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B015",
      "title": "Hào kiệt đất phương Nam - Thiên Hộ Dương - Chiến lũy Tháp Mười ",
      "image": "./data/img/img015.webp",
      "description": "Hào kiệt đất phương Nam, họ là ai?Là những dũng tướng uy vũ ngất trời, những thủ lĩnh nông dân vì nghĩa dấy binh dẹp loạn, đánh đuổi ngoại xâm, giữ yên bờ cõi. Là những trang hảo hán, giàu lòng nghĩa hiệp, khí phách ngang tàng, “giữa đường thấy sự bất bằng chẳng tha”. Không chỉ vậy, họ còn là những sĩ phu nổi tiếng tiết tháo và cương trực với tấm lòng sáng trong như nhật nguyệt; những học giả uyên bác, mẫn tiệp với tầm nhìn xa rộng làm điểm tựa vững chắc cho nhân dân trong công cuộc khai mở và tạo lập vùng đất trù phú, hưng thịnh hơn ba trăm năm qua.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Hoài Anh","Nguyễn Đông Hải"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "20,5 x 18,5 cm",
      "weight": "80 gram",
      "format": "Bìa mềm",
      "price": 25200,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B016",
      "title": "Chị Út Tịch",
      "image": "./data/img/img016.webp",
      "description": "Chị Út Tịch, tên khai sinh là Nguyễn Thị Út, sinh năm 1931 tại quận Cầu Kè, tỉnh Cần Thơ (nay thuộc xã Tam Ngãi, huyện Cầu Kè, tỉnh Trà Vinh). Từ nhỏ, Út là cô bé cứng cỏi và gan dạ. Lớn lên, vì ngưỡng mộ những tấm gương cha anh chiến đấu anh dũng, ngoan cường Út xin tham gia công việc của Việt Minh. Rồi khi lấy chồng, sinh con, chị Út Tịch vẫn thu xếp việc nhà hợp lí để làm công tác binh vận, du kích, tham gia đánh nhiều trận… Hình ảnh chị Út Tịch - người phụ nữ vừa nuôi con, vừa đánh giặc đã gây ấn tượng mạnh với nhà văn Nguyễn Thi, ông lấy đó làm nguồn cảm hứng để viết nên tập truyện kí “Người mẹ cầm súng”. Từ tập truyện này, đạo diễn điện ảnh Nguyễn Khánh Dư đã chuyển thể thành bộ phim 'Khi mẹ vắng nhà”'",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 3, "info": "cốt truyện hay" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Vương Trọng","Lê Minh Hải"] ,
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "19 x 26 cm",
      "weight": "120 gram",
      "format": "Bìa mềm",
      "price": 31500,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B017",
      "title": "LỊCH SỬ VIỆT NAM TỪ NGUỒN GỐC ĐẾN GIỮA THẾ KỶ XX",
      "image": "./data/img/img017.webp",
      "description": "Tác phẩm Lịch sử Việt Nam, từ nguồn gốc đến giữa thế kỷ XX này là sự kết hợp của hai chuyên khảo mang tính kinh điển về lịch sử và văn hóa Việt Nam của Giáo sư Lê Thành Khôi, người thuộc về số ít các sử gia Việt đương đại quan trọng nhất. Đó là cuốn Le Viêt-Nam, Histoire et Civilisation (Việt Nam, Lịch sử và Văn minh, Nxb Minuit, Paris, 1955) và Histoire du Viêt Nam, des origines à 1858 (Lịch sử Việt Nam, từ nguồn gốc đến năm 1858, Nxb Sud-Est Asie, Paris, 1982). Công trình từ lâu đã được các nhà Việt Nam coi như sách tham khảo căn bản khi nghiên cứu về lịch sử Việt Nam. Đây là lần đầu tiên tác phẩm được coi như kiệt tác sử học này được xuất bản bằng tiếng Việt.",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "tác phẩm hay" },
        { "star": 5, "info": "Nhớ vị tết nhớ vị nhà" }
      ],
      "author": ["lê thành khôi"],
      "publish": "NXB Thế giới",
      "date": "2024",
      "size": "17 x 24 cm",
      "weight": "",
      "format": "",
      "price": 205000,
      "quantity": 200,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B018",
      "title": "Mãi mãi tuổi hai mươi - Nhật ký thời chiến Việt Nam - Chào mừng Đại hội Đoàn toàn quốc lần thứ XIII",
      "image": "./data/img/img018.webp",
      "description": "Mãi mãi tuổi hai mươi, cuốn nhật ký của liệt sĩ Nguyễn Văn Thạc, đã trở thành sự kiện văn hóa - xã hội tiêu biểu của Việt Nam năm 2005 và được trao Giải Đặc biệt - Giải thưởng Sách Việt Nam lần thứ nhất. Mãi mãi tuổi hai mươi cũng trở thành tên gọi một phong trào sinh hoạt chính trị “Tiếp lửa truyền thống” của thế hệ trẻ và cựu chiến binh cả nước.Sau 20 năm với nhiều lần tái bản, cuốn sách vẫn tiếp tục làm rung động hàng triệu trái tim độc giả. Cuốn nhật ký không chỉ ghi lại hành trình nội tâm của một người lính trẻ về cuộc sống, về con người, về đất nước trong cuộc kháng chiến chống Mỹ, mà còn phản ánh tâm thế của một thế hệ thanh niên sẵn sàng hy sinh vì lý tưởng cách mạng, vì độc lập của dân tộc. Những trang viết chân thực, giàu cảm xúc của một người yêu văn chương - khi là những lời tự sự, lúc là lời nhắn gửi cho gia đình, bè bạn - luôn chứa chan khát vọng sống đẹp và sống có ích cho xã hội.Mãi mãi tuổi hai mươi đã làm rung động hàng triệu con tim của bạn đọc bởi vẻ đẹp tâm hồn thuần khiết, tình yêu quê hương đất nước nồng nàn thể hiện qua những cảm nhận bình dị của liệt sĩ Nguyễn Văn Thạc trong suốt những chặng đường hành quân.Như một lời tiên tri về ngày thống nhất đất nước, lá thư đề ngày 18 tháng 9 năm 1971 gửi người yêu, anh Thạc viết: 'Bất kỳ một sự vinh quang nào cũng cần phải trả bằng một giá. Và khó khăn gian khổ càng nhiều và thử thách càng nhiều, sự vinh quang đó càng trở nên rực rỡ. Chúng ta đừng đi tìm những chân lý sâu xa đơn thuần qua những áng văn và những bài thơ, bài toán. 30.4.1975 Thạc sẽ trả lời cho P. câu: Hạnh phúc là gì?...'Và cuốn nhật ký dừng lại tại ngã ba Đồng Lộc ngày 3 tháng 6 năm 1972 khi anh chuẩn bị vào chiến trường……'Cùng với niềm xúc động, tôi có niềm tự hào rất lớn. Thời chiến tranh, Thùy Trâm và Thạc là hai tấm gương trong muôn triệu tấm gương của thế hệ trẻ và của dân tộc Việt Nam ta. Ngày nay, Thùy Trâm và Thạc có muôn triệu người Việt Nam, đặc biệt là trong lớp trẻ, yêu mến và kính phục, vì sự gặp nhau về hoài bão, sự gần nhau về tấm lòng, có cùng một ngọn lửa đang cháy sáng hoặc ít nhất thì cũng đang âm ỉ trong mỗi con người Việt Nam ta.' – Thủ tướng Phan Văn Khải  ---Mãi mãi tuổi hai mươi cùng với Nhật ký Đặng Thùy Trâm đã được xếp vào một trong mười sự kiện văn hóa tiêu biểu năm 2005 tại Việt Nam với số lượng phát hành kỷ lục và nhiều lần tái bản.Trong thư, Đại tướng Võ Nguyên Giáp đã viết: 'Tôi mong các học sinh, sinh viên, thanh niên và nhân dân ta hãy tìm đọc cuốn nhật ký của liệt sĩ Nguyễn Văn Thạc và cuốn nhật ký vừa xuất bản của liệt sĩ – bác sĩ Đặng Thùy Trâm, hai người con ưu tú của Thủ đô Hà Nội đó hy sinh trong hang triệu chiến sĩ và đồng bào yêu nước đã ngã xuống vì độc lập, thống nhất của Tổ quốc.'",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Nguyễn Văn Thạc","Đặng Vương Hưng"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "13,5x20,5 cm",
      "weight": "350 gram",
      "format": "Bìa mềm",
      "price": 72000,
      "quantity": 400,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B019",
      "title": "70 câu Hỏi - Đáp về Chiến thắng Điện Biên Phủ",
      "image": "./data/img/img019.webp",
      "description": "Nhân kỉ niệm 70 năm chiến thắng Điện Biên Phủ (7.5.1954 - 7.5.2024), để giúp các bậc phụ huynh, các em đội viên, thiếu nhi, các tổ chức cơ sở Đội, các thầy cô giáo và anh chị phụ trách Đội… có tư liệu học tập, tìm hiểu, tổ chức các hoạt động giáo dục truyền thống, chúng tôi xuất bản cuốn sách 70 câu hỏi - đáp về chiến thắng Điện Biên Phủ.Với cách thể hiện gần gũi, cuốn sách gồm những câu hỏi và đáp án ngắn gọn về địa danh, chiến thuật, chiến dịch, ý nghĩa lịch sử, gương anh hùng, liệt sĩ… Hi vọng cuốn sách sẽ là cẩm nang bổ ích cho các em đội viên, thiếu nhi ham thích tìm hiểu về lịch sử, cũng như phục vụ cho các hoạt động của Đội Thiếu niên Tiền phong Hồ Chí Minh và các trường học trong cả nước",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Nguyễn Thị Thanh Thủy"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "10 x 15 cm",
      "weight": "90 gram",
      "format": "Bìa mềm",
      "price": 27000,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B020",
      "title": "Những anh hùng trẻ tuổi - Trần Văn Ơn",
      "image": "./data/img/img020.webp",
      "description": "Cuốn sách kể về cuộc đời hào hùng, nhiệt huyết của người học sinh trường Pétrus Ký Trần Văn Ơn. Trong những năm 1950, khi phong trào yêu nước sôi sục khắp Nam Bộ, cùng với học sinh - sinh viên Sài Gòn, TRẦN VĂN ƠN đã hăng hái tham gia đấu tranh chính trị, xuống đường chống chính phủ bù nhìn của Bảo Đại và sự thống trị của thực dân Pháp. Ngày 9 tháng 1 năm 1950, một cuộc biểu tình lớn đã xảy ra. Bị đàn áp dã man nhưng Trần Văn Ơn và bạn bè vẫn hiên ngang tiến về phía trước… Kẻ thù đã nổ súng… Khi đó, Trần Văn Ơn chuẩn bị bước sang tuổi mười chín…",
      "topic": [
        "lichsu"
      ],
      "review": [
        { "star": 3, "info": "ý nghĩa, lôi cuốn" },
        { "star": 4, "info": "hayy" }
      ],
      "author": ["Đoàn Giỏi"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "13.5x20.5 cm",
      "weight": "135 gram",
      "format": "Bìa mềm",
      "price": 28800,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B101",
      "title": "Truyện Kiều - Kim Vân Kiều Tân Truy",
      "image": "./data/img/img101.png",
      "description": "Truyện Kiều - Kim Vân Kiều Tân Truyện - Gần 200 năm nay, truyện Kỉều đã chíếm một vị trí đặc bỉệt trong sinh hoạt tinh thần của người dân nước ta.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nguyễn Du"],
      "publish": "NXB Thanh Hóa",
      "date": "2024",
      "size": "13 x 19 cm",
      "weight": "285 gram",
      "format": "Bìa mềm",
      "price": 73000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B102",
      "title": "Lặng lẽ Sa Pa",
      "image": "./data/img/img102.png",
      "description": "Truyện Lặng lẽ Sa Pa đã khắc họa thành công hình ảnh những người lao động bình thường, mà tiêu biểu là anh thanh niên làm công tác khí tượng một mình sống trên đỉnh núi cao. Từ đó, tác phẩm còn khẳng định vẻ đẹp của con người lao động, cũng như ý nghĩa của những công việc thầm lặng",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "rất hay, ý nghĩa" },
        { "star": 5, "info": "nó miêu tả cảnh đẹp và những con người đang cố gắng ở đó. bài này rất hay" }
      ],
      "author": ["Nguyễn Thành Long"],
      "publish": "NXB Kim Đồng",
      "date": "2024",
      "size": "13 x 19 cm",
      "weight": "206 gram",
      "format": "Bìa mềm",
      "price": 54000,
      "quantity": 120,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B103",
      "title": "Vỡ Đê ",
      "image": "./data/img/img103.png",
      "description": "Vỡ đê là một trong ba 'Tam kiệt tiểu thuyết' của Vũ Trọng Phụng, tiểu thuyết được sáng tác vào năm 1936 với 3 phần và 25 chương. Bằng câu chuyện xuyên suốt về người dân đi hộ đê, Vũ Trọng Phụng đã phản ánh những vấn đề mang tính thời sự - chính trị, tái hiện cảnh lầm than của tầng lớp nông dân dưới ách thống trị của bọn thực dân nửa phong kiến giai đoạn trước 1945 và miêu tả những suy nghĩ, tâm trạng của mỗi cá nhân nhân vật trước thời cuộc. Điểm sáng của Vỡ đê có lẽ là một thái độ ngợi ca Đảng Cộng sản, ghi nhớ những cuộc khởi nghĩa, những cuộc cách mạ",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 5, "info": "Sản phẩm chất lượng, gói hàng cẩn thận, giá cũng rẻ hơn so với mấy shop khác" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Vũ Trọng Phụng"],
      "publish": "NXB Văn học",
      "date": "2024",
      "size": "13 x 20 cm",
      "weight": "298 gram",
      "format": "Bìa mềm",
      "price": 78300,
      "quantity": 50,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B104",
      "title": "Tự Truyện - Tô Hoài",
      "image": "./data/img/img104.png",
      "description": "Những hoài niệm với rất nhiều buồn vui và mơ ước của tuổi thơ, những kỉ niệm ân tình về các bạn văn, đời văn… Và rồi từ đó, người đọc dần dần sáng tỏ phong thái nghệ thuật, thân phận, nhân cách trong hành trình văn chương bền bỉ của Tô Hoài.<br>Với cách viết linh hoạt, biến hóa, các sự kiện được khai thác liền mạch liên tưởng và sự kiện đan xen lẫn nhau khiến cho những trang hồi ký từ Cỏ dại – Mùa hạ đến, mùa xuân đi – Những người thợ cửi – Đi làm – Hải Phòng – Một quãng đường – 1947 – Ông già ở Agra trong Tự truyện luôn có sức hấp dẫn đối với người đọc…",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 5, "info": "rất hay, đáng mua, gói hàng cẩn thận, giá cả hợp lý" },
        { "star": 5, "info": "hayyy" }
      ],
      "author": ["Tô Hoài"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "13 x 20,5 cm",
      "weight": "470 gram",
      "format": "Bìa mềm",
      "price": 50000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B105",
      "title": "Thăng Long Kinh Kì - Kẻ Chợ - Thời Lê - Trịnh",
      "image": "./data/img/img105.png",
      "description": "Các khu phố buôn bán, khu sĩ hoạn, khu vực hành chính, kể cả vương phủ cùng đan xen nhau, trong nhiều trường hợp còn hòa quyện vào nhau, như khu phủ chúa gần kề các làng nghề, phường thợ, khu sĩ hoạn gần nơi buôn bán… Điều này đã dẫn đến cách gọi Kẻ Chợ để chỉ người Thăng Long, rồi là cả đất Thăng Long truyền thống và đổi thay.<br>Sang thời Tây Sơn và triều Nguyễn nhiều cái sẽ khác đi, nhưng cái cốt cách dung nạp của người và đất Thăng Long – Hà Nội thì vẫn vậy. Và nếu như cái tên mới Hà Nội do nhà Nguyễn đặt ra, ban đầu khó được người dân chấp nhận, thì người ta vẫn quen gọi Thăng Long bằng cái tên nôm na Kẻ Chợ như tự thuở nào.<br>Thiết nghĩ, đây không chỉ do thói quen, mà còn bởi 'chất' Kẻ Chợ thực sự đã hình thành, hiện hữu ở người Thăng Long – Hà Nội mà người ta không thể gọi theo cách nào khác. Nhưng cụ thể nó ra sao, gắn với lịch sử Hà Nội như thế nào, được biểu hiện qua những khía cạnh nào của đời sống xã hội và dân sinh, hay với tư cách một quần thể được gọi là phố phường thì Kẻ Chợ hiện diện ra sao…?<br>Men theo dòng chảy lịch sử, bộ sách THĂNG LONG KINH KÌ – KẺ CHỢ tái hiện bức tranh văn hóa, phong tục của Hà Nội xưa mà giáo sĩ Alexandre de Rhodes phải trầm trồ: “Thành phố lộng lẫy ngang hoặc hơn so với Venise",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 5, "info": "Rất đáng xem" },
        { "star": 5, "info": "Một cuốn sách đáng đọc, mang lại nhiều giá trị." }
      ],
      "author": ["Nguyễn Quốc Tín", "Nguyễn Huy Thắng"],
      "publish": "NXB Kim Đồng",
      "date": "20",
      "size": "14.5x20.5 cm",
      "weight": "185 gram",
      "format": "Bìa mềm",
      "price": 30000,
      "quantity": 230,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B106",
      "title": "Số Đỏ",
      "image": "./data/img/img106.png",
      "description": "Số Đỏ  là một tiểu thuyết văn học của nhà văn Vũ Trọng Phụng, đăng ở Hà Nội báo từ số 40 ngày 7 tháng 10/1936 và được in thành sách lần đầu vào năm 1938.Truyện dài 20 chương và được bắt đầu khi bà Phó Đoan đến chơi ở sân quần vợt nơi Xuân tóc đỏ làm việc. Vô tình Xuân tóc đỏ vì xem trộm 1 cô đầm thay đồ nên bị cảnh sát bắt giam và được bà Phó Đoan bảo lãnh. Sau đó, bà Phó Đoan giới thiệu Xuân đến làm việc ở tiệm may Âu Hóa, từ đó Xuân bắt đầu tham gia vào việc cải cách xã hội. Nhờ thuộc lòng những bài quảng cáo thuốc lậu, hắn được vợ chồng Văn Minh gọi là \"sinh viên trường thuốc\", \"đốc tờ Xuân\". Hắn gia nhập xã hội thượng lưu, quen với những người giàu và có thế lực, quyến rũ được cô Tuyết và phát hiện cô Hoàng Hôn ngoại tình. Xuân còn được bà Phó đoan nhờ dạy dỗ cậu Phước, được nhà sư Tăng Phú mời làm cố vấn cho báo Gõ Mõ. Vì vô tình, hắn gây ra cái chết cho cụ cố tổ nên được mọi người mang ơn. Văn Minh vì nghĩ ơn của Xuân nên dẫn Xuân đi xóa bỏ lí lịch trước kia rồi đăng kí đi tranh giải quần vợt nhân dịp vua Xiêm đến Bắc Kì. Bằng thủ đoạn xảo trá, hắn làm 2 vận động viên quán quân bị bắt ngay trước hôm thi đấu nên Xuân được dịp thi tài với quán quân Xiêm. Vì để giữ tỉnh giao hảo, hắn được lệnh phải thua. Kết thúc trận đấu, khi bị đám đông phản đối, Xuân hùng hồn diễn thuyết cho đám đông dân chúng hiểu hành động \"hi sinh vì tổ quốc của mình\", được mời vào hội Khai trí tiến đức, được nhận huân chương Bắc Đẩu bội tinh và cuối cùng trở thành con rể cụ cố Hồng.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "lên án gay gắt cái xã hội tư sản ,châm biếm xh rất hay" },
        { "star": 5, "info": "Đọc một lần là muốn đọc lại." }
      ],
      "author": ["Vũ Trọng Phụng"],
      "publish": "NXB Văn học",
      "date": "2024",
      "size": "13.5 x 20.5 cm",
      "weight": "230 gra",
      "format": "Bìa mềm",
      "price": 55000,
      "quantity": 50,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B107",
      "title": "Trong rừng Nho - Dã sử Hồ Xuân Hương",
      "image": "./data/img/img107.png",
      "description": "Tần ngần, nàng chống tay vào khung cửa sổ, vơ vẩn nhìn trời, nhìn mây, nhìn những ngọn cỏ lơ thơ ở bờ hồ bên kia, để cân nhắc thêm một lần nữa, xem những ý nghĩ vừa rồi có đúng hay không đúng. Nàng thấy những thứ lễ nghi, chế độ của những ông thánh, ông hiền đặt ra cho đàn bà con gái, rặt là những cái xiềng xích.<br>[…]<br>Rồi nàng quả quyết:<br>– Không cần! Muốn gì thì gì, ta cứ sống bằng ý muốn của ta, ta không sống theo sở thích của người. Bắt đầu từ nay, ta thử phá hết những cái đạo đức giả dối, chơi với ông thánh, ông hiền một mẻ xem sao.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 3, "info": "Một tác phẩm chất lượng, đáng để trải nghiệm." },
        { "star": 5, "info": "Rất thích cách tác giả truyền tải thông điệp." }
      ],
      "author": ["Ngô Tất Tố"],
      "publish": "NXB Kim Đồng",
      "date": "2024",
      "size": "13x19 cm",
      "weight": "200 gram",
      "format": "Bìa mềm",
      "price": 45000,
      "quantity": 450,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B108",
      "title": "Truyền kỳ mạn lục",
      "image": "./data/img/img108.png",
      "description": "ông qua các nhân vật thần tiên, ma quái, tinh loài vật, cây cỏ..., tác phẩm muốn gửi gắm ý tưởng phê phán nền chính sự rối loạn, không còn kỷ cương trật tự, vua chúa hôn ám, bề tôi thoán đoạt, bọn gian hiểm nịnh hót đầy triều đình; những kẻ quan cao chức trọng thả sức vơ vét của cải, sách nhiễu dân lành, thậm chí đến chiếm đoạt vợ người, bức hại chồng người.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Cuốn sách khiến mình suy nghĩ rất nhiều." },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nguyễn Dữ"],
      "publish": "NXB Kim Đồng",
      "date": "2018",
      "size": "24x32 cm",
      "weight": "1250 gram ",
      "format": "Bìa cứng",
      "price": 360000,
      "quantity": 100,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B109",
      "title": "Dòng sông thơ ấu",
      "image": "./data/img/img109.png",
      "description": "Bức tranh quê hương trong tiểu thuyết Dòng sông thơ ấu sở dĩ sinh động vì đều là những hồi ức có thật. Tui theo Kháng chiến 30 năm, mỗi khi nghe trên thế giới có dòng sông cạn thì tui lại nghĩ không biết dòng sông bên nhà mình ra sao. Dòng sông thời nhỏ của tui trải qua hai cuộc chiến tranh vẫn tràn trề sức sống. Ban đầu, tui viết dòng sông đó trong Đất lửa, Nguyễn Tuân chê ‘hiền quá’. Sau ngày miền Nam giải phóng, tui đưa Nguyễn Tuân về ngồi nhậu trước nhà tui ngó ra dòng sông. Chỉ nghe loáng thoáng vài câu chuyện sông nước thôi, Nguyễn Tuân đã nhắc: ‘Dòng sông là nguồn cảm hứng của văn chương Nam bộ đấy, viết tiếp đi!’ Năm 1980 tui viết những chữ mở đầu Dòng sông thơ ấu...",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Phù hợp để đọc và làm quà tặng." }
      ],
      "author": ["Nguyễn Quang Sáng"],
      "publish": "NXB Kim Đồng",
      "date": "2022",
      "size": "16x24 cm",
      "weight": " 750 gram ",
      "format": "Bìa cứng",
      "price": 225000,
      "quantity": 320,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B110",
      "title": "Truyện Sử Trần",
      "image": "./data/img/img110.png",
      "description": "Truyện Sử Trần - Cuốn sách là một tuyển tập truyện ngắn lấy cảm hứng từ những giai đoạn quan trọng trong triều đại nhà Trần - một trong những thời kỳ vàng son của lịch sử Việt Nam.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Tác phẩm phản ánh chân thực đời sống và con người Việt Nam." },
        { "star": 5, "info": "Cuốn sách mang giá trị nhân văn sâu sắc" }
      ],
      "author": ["Trần Thanh Cảnh"],
      "publish": "NXB Hội Nhà văn",
      "date": "2024",
      "size": "20.5 x 14.5 cm",
      "weight": "240 gram",
      "format": "Bìa mềm",
      "price": 108560,
      "quantity": 340,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B111",
      "title": "Quê Nội",
      "image": "./data/img/img111.png",
      "description": "Khi giới thiệu quyển truyện 'Quê Nội' của Võ Quảng người ta bảo tôi: Đây là một loại Tôm Xây-dơ của Việt Nam. Đã từ lâu tôi rất thích tác phẩm Tôm Xây-dơ. Nhưng sau khi làm quen với tác phẩm của Võ Quảng tôi cảm thấy còn thích các nhân vật Cục và Cù Lao hơn.<br>Võ Quảng đã đặt câu chuyện xảy ra tại chính quê hương mình, ấy là làng Hòa Phước, tỉnh Quảng Nam - một tỉnh nằm giữa nước Việt Nam. Ở đây, các sự kiện nhỏ được đặt liền nhau, khăng khít nhau tạo nên câu chuyện. Câu chuyện bắt đầu sau Cách mạng tháng Tám...<br>Tác phẩm phản ánh tâm trạng phấn khởi có phần hơi ngây thơ của dân làng, lòng tin tưởng kỳ diệu của họ vào tương lai đất nước...",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "ý nghĩa, Rất đáng xem" }
      ],
      "author": ["Võ Quảng"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "14,5x20,5 cm",
      "weight": " 450 gram",
      "format": "Bìa mềm",
      "price": 79200,
      "quantity": 400,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B112",
      "title": "Rừng Cây Tùng",
      "image": "./data/img/img112.png",
      "description": "Mùa hạ năm nay, chị Cún đưa em Cây rời phố thị, về nghỉ hè ở thị trấn Tranh Sơn. Trong chái nhà nhỏ trên đỉnh đồi xanh, Cún và Cây tha hồ hít hà đất cỏ, ngắm trời đêm lấp lánh ánh sao, nghe dế gáy bên thềm và tiếng chim sớm mai ríu rít. Cún dẫn em qua từng góc ắp đầy kỉ niệm: cây ổi bố treo bánh xe làm đu quay, con đường đất rợp hoa đồng nội… Cây dần biết kết bạn, tự lập và khám phá thế giới xung quanh, Cún cũng dần vững vàng, thạo chăm sóc em và vỗ về trái tim đầy thương tổn của chính mình.<br>Đi qua mùa hạ giữa chênh chao mất mát, thiên nhiên như liều thuốc chữa lành, và tình thân cùng bao kí ức yêu dấu về cha mẹ trở thành điểm tựa nâng đỡ, để hai chị em học cách yêu thương nhau và mạnh mẽ bước qua nỗi đau, giống như Rừng Cây Tùng vươn nhánh biếc xanh sau ngày dông bão.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "tình cảm, khiến mình nhớ đến quê hương nhớ nhà" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Phạm Thu Hà "],
      "publish": "NXB Kim Đồng",
      "date": "2023",
      "size": "13,5x20,5 cm",
      "weight": "330 gram",
      "format": "Bìa cứng",
      "price": 108000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B113",
      "title": "Xa ngoài kia cánh đồng",
      "image": "./data/img/img113.png",
      "description": "Với một cậu nhóc, còn gì tuyệt hơn khi rời nhà phiêu lưu tới những miền xa xôi đẹp đẽ. Với cậu Chàng Hiu từ bé sống ở xóm Đầm Nước, vùng đất lấp lánh dải đèn màu bí ẩn bên kia đầm quả là chốn thần tiên. Thế rồi ngày nọ, biến cố xảy ra, cậu được bố mẹ gửi về nhà bà nơi khu vườn nhỏ. Tại đây cậu đã trải qua mùa Hè kì diệu cùng bà nội, cô bé Chằng Hương, cậu bạn Nhái Bén và rất nhiều hàng xóm ngộ nghĩnh đáng yêu.<br>Xa ngoài kia cánh đồng cất tiếng hát cho tuổi thơ chúng ta. Tuổi thơ mà đôi lúc ta tưởng như mình đã vội vã lớn lên và rời bỏ sau lưng. Nhưng dù lớn bao nhiêu, đi xa cách mấy, chỉ cần quay đầu ta sẽ thấy những kỉ niệm luôn còn đó, lấp lánh trìu mến, xoa dịu và cổ vũ ta bằng tình thương, lòng tốt cùng sự bao dung. Chẳng có gì ngọt ngào hơn tuổi thơ, và chẳng có tuổi thơ nào đẹp hơn tuổi thơ mà mỗi người gìn giữ trong tim mình.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": [" Cao Nguyệt Nguyên "],
      "publish": "NXB Kim Đồng",
      "date": "2023",
      "size": "16,5x20,5 cm",
      "weight": " 395 gram",
      "format": "Bìa cứng",
      "price": 135000,
      "quantity": 250,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B114",
      "title": "Tuổi thơ êm đềm",
      "image": "./data/img/img114.png",
      "description": "nh vẫn giọng chậm rãi:<br>- Viết cho trẻ phải từ cái nhân ái!...<br>Khi nhà văn nói điều này, tôi hiểu ở anh, nhân ái không chút vướng mắc tội nghiệp hoặc ru ngủ trẻ. Đối với anh, nhân ái cũng là để đánh thức, vực dậy một tâm hồn làm cho trẻ nhận ra, gọi trẻ thức dậy để biết tự tin, tự trọng mình. Nửa thế kỷ cầm bút, dù viết về nhiều nhân vật, nhiều thể loại, với nhiều bút danh, Võ Hồng vẫn thắp sáng một góc nhân văn không tắt…” - TRÚC CHI",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 2, "info": "cũng đc" },
        { "star": 5, "info": "hay" }
      ],
      "author": ["Võ Hồng "],
      "publish": "NXB Kim Đồng",
      "date": "2019",
      "size": "13x19 cm",
      "weight": "160 gram ",
      "format": "Bìa mềm",
      "price": 45000,
      "quantity": 230,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B115",
      "title": "Bà phù thủy đi mua ve chai",
      "image": "./data/img/img115.png",
      "description": "Phúc tình cờ kết bạn với bà cụ bán ve chai tự xưng là phù thủy. Khác với hình tượng độc ác thường được nhắc tới trong phim hay sách, bà phù thủy ve chai này hiền khô, phép thuật của bà là “úm ba la” ra những câu chuyện hấp dẫn. Hai người bạn cách biệt tuổi tác đều say mê chuyện kể và kể chuyện. Cả hai đã tìm thấy nhau, cùng nhau học các bài học quý giá về tình thân, sự chia li, và sức mạnh chữa lành của trí tưởng tượng.<br>Là câu chuyện cổ tích ấm lòng thời hiện đại, Bà phù thủy đi mua ve chai đưa chúng ta vào một hành trình tuổi thơ dịu dàng, nơi những điều tốt đẹp nhỏ bé có thể mở ra cả thế giới nhiệm mầu.",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Phát Dương "],
      "publish": "NXB Kim Đồng",
      "date": "2026",
      "size": "16,5x20,5 cm",
      "weight": " 395 gram",
      "format": "Bìa cứng",
      "price": 135000,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B116",
      "title": "Cuốn cổ thư của một mẫu thần",
      "image": "./data/img/img116.png",
      "description": "ên thác nước có một người phụ nữ đang ngồi gẩy đàn, khuôn mặt bà tỏa rạng hào quang, miệng nở nụ cười ấm áp. Bà mặc chiếc áo dài màu lam thẫm, đầu vấn khăn, trên khăn và ngực áo cài những bông hoa bạc, hoa vàng. Xung quanh bà có những con chim sặc sỡ bay lượn. Một nữ thần.<br>Nữ thần khẽ phất tay, có hai con chim một xanh một vàng, mỏ ngậm hai đầu cành trúc uốn cong ở hai bên cái ống trúc xanh to, như một cái cốc, mang tới thác nước rồi bay trở lại trước mặt cái Mai.<br>Cuối cùng, nữ thần khoan thai bước lại gần cái Mai, mỉm cười trìu mến. Bà đặt vào tay nó một bông hoa màu xanh lá cây thẫm, như một món quà, và vẫy chào tạm biệt",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 3, "info": "cốt truyện hay" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Nguyễn Hoàng Diệu Thủy "],
      "publish": "NXB Kim Đồng",
      "date": "2024",
      "size": "13,5x20,5 cm",
      "weight": " 390 gram",
      "format": "Bìa cứng",
      "price": 108000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B117",
      "title": "Tết ơi, tết đâu rồi?",
      "image": "./data/img/img117.png",
      "description": "Bao giờ Tết sẽ đến nhỉ?', Tí tự hỏi mình, rồi hỏi cả bố mẹ và ông bà nữa.<br>Mỗi năm Tết đến một lần, nhưng chẳng mấy chốc mà Tết lại qua thật mau. Vì vậy, Tí vô cùng lo lắng rằng Tết sẽ không quay trở lại và quyết tâm đi tìm Tết trong suốt một năm liền. Liệu Tí sẽ có thể tìm thấy Tết ở đâu nhỉ?",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "tác phẩm hay" },
        { "star": 5, "info": "Nhớ vị tết nhớ vị nhà" }
      ],
      "author": ["Thao Le "],
      "publish": "NXB Kim Đồng",
      "date": "2022",
      "size": "21x21 cm",
      "weight": "110 gram",
      "format": "Bìa mềm",
      "price": 36000,
      "quantity": 100,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B118",
      "title": "Khúc vĩ cầm quê",
      "image": "./data/img/img118.png",
      "description": "'Quê hương là gì?' Một câu hỏi không có đáp án chung. Bởi lẽ, quê hương không chỉ là nơi chốn mà còn là kỉ niệm. Kỉ niệm ghi dấu trong tim bằng những khung cảnh riêng, kí ức riêng, càng lúc càng xa xôi theo dòng thời gian.<br>Với Khúc vĩ cầm quê, tác giả Lê Văn Trường đã tạc nên dáng hình nbsp;tuổi thơ riêng mình. Một miền kí ức sống động với cơn mưa mùa Hạ dậy mùi cỏ non, tiếng dế kêu trong đêm như dàn đồng ca, sợi khói bảng lảng mỗi buổi chiều. Ở đó, có nỗi khổ cực thiếu thời, những lần hờn giận mẹ cha, cãi cọ cùng đám bạn… Để rồi nhìn lại, mọi niềm vui nỗi buồn đều quí giá như nhau. nbsp;<br>Cảnh và tình hòa quyện trong giọng văn nhẹ nhàng đượm tình yêu thương như lời mời gọi bạn đọc ghé thăm quê hương miền Tây. Và biết đâu, giữa những hoài nhớ, bạn sẽ thoáng nghe một thanh âm quen thuộc từ chính kí ức mình.<br>Đêm đêm, phía sau nhà vẫn vang lên khúc vĩ cầm êm đềm sâu lắng. Dẫu cho thời gian năm tháng cứ mãi trôi đưa, mặc ai ở ai đi, ai quên ai nhớ, chỉ có những chú dế cứ thản nhiên kéo khúc vĩ cầm…nbsp;",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Lê Văn Trường "],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "13x20 cm",
      "weight": "100 gram",
      "format": "Bìa mềm",
      "price": 16000,
      "quantity": 340,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B119",
      "title": "Lớn rồi hết sợ",
      "image": "./data/img/img119.png",
      "description": "rong cuốn sách này, tôi chia sẻ một ít kỉ niệm đã xa, ngoảnh lại nhìn qua màn sương ký ức để thấy lại mình thời thơ bé. Khi còn nhỏ, tôi từng sợ rất nhiều thứ, nhưng tôi lớn lên không còn sợ đám đông, không sợ bóng tối, không còn sợ độ cao",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": [" Hồ Anh Thái "],
      "publish": "NXB Kim Đồng",
      "date": "2022",
      "size": "14x22,5 cm",
      "weight": "315 gram",
      "format": "Bìa mềm",
      "price": 55000,
      "quantity": 80,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B120",
      "title": "Đôi mắt màu ngô non",
      "image": "./data/img/img120.png",
      "description": "Có các địa danh quen thuộc khi vang lên nhưng vẫn thật lạ lẫm và cuốn hút trên những trang viết. Lạng Sơn là một nơi chốn như thế, đặc biệt khi được nhìn ngắm qua đôi mắt người con xứ sở và được miêu tả qua giọng văn đậm đà phong vị miền đất nơi người Kinh người Nùng người Tày cùng sinh sống. Những trang văn của Nguyễn Luân thấm đượm hơi thở tình yêu, truyền tới bạn đọc một thứ men say thật riêng biệt. Thứ men say dịu dàng mà đằm sâu đưa bạn trở về miền kí ức, nơi có tình yêu thương ấm áp của bố mẹ, có khung cảnh quen thuộc của quê nhà, có những bạn bè cùng trải qua êm đềm thơ ấu, và có đôi mắt xanh thẳm của người bạn đã từng yêu tha thiết…<br>Đọc Đôi mắt màu ngô non, bạn chợt nhận ra: Mọi thứ luôn trôi về phía trước, chỉ có quê nhà vẫn ở lại phía sau, đợi đón ta về.<br>'Năm nay gió về sớm theo cơn bão cuối mùa. Gió và mưa cồn cào, gào thét. Tôi nhớ quê da diết, nhớ dáng ông ngồi nơi cửa sàn đợi chúng tôi về. Nhớ mùi men rượu mẹ tôi nấu sớm. Nhìn lại mình với những chộn rộn mỏi mòn đời thường mà thấy lòng chững lại. Tôi tự hỏi mình không biết ông đã kịp phơi chăn đón gió đầu mùa hay chưa?'",
      "topic": [
        "vhvn"
      ],
      "review": [
        { "star": 3, "info": "ý nghĩa, lôi cuốn" },
        { "star": 4, "info": "hayy" }
      ],
      "author": [" Nguyễn Luân "],
      "publish": "NXB Kim Đồng",
      "date": "2023",
      "size": "13.5x20.5 cm",
      "weight": "150 gram",
      "format": "Bìa cứng",
      "price": 36000,
      "quantity": 100,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B201",
      "title": "Trong gia đình",
      "image": "./data/img/img201.webp",
      "description": "TRONG GIA ĐÌNH là câu chuyện kể về cô bé Perrine.Sớm mồ côi cha mẹ, Perrine đã từng một mình giữa rừng sâu, trong đêm tối với bao nỗi kinh hãi. Mệt mỏi, đói khát đã làm Perrine kiệt sức, bất tỉnh. Điều kì diệu bất ngờ đã kéo em về với cuộc sống.<br>Siêng năng, tận tụy và ham học hỏi, Perrine được ông Vulfran và nhiều người tin tưởng. Perrine đau xót khi biết được sự bất đồng của ông nội và cha em. Một số người tìm mọi cách ngăn cản mối liên hệ giữa ông Vulfran và con trai, hòng chiếm đoạt tài sản. Liệu họ có thực hiện được ý đồ đó không?<br>TRONG GIA ĐÌNH không những là câu chuyện hay về cuộc phiêu lưu của lòng dũng cảm và nghị lực vượt khó mà còn thể hiện tình cảm gia đình sâu sắc. Chính vì vậy, TRONG GIA ĐÌNH của Hector Malot xứng đáng nhận giải thưởng của Viện Hàn lâm văn học Pháp.Nhà giáo Nhân dân - Giáo sư Huỳnh Lý",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Hector Malot"],
      "publish": "NXB Kim Đồng",
      "date": "01/09/2024",
      "size": "13x19 cm",
      "weight": "389 gram",
      "format": "Bìa cứng",
      "price": 80000,
      "quantity": 1000,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B202",
      "title": "Những tấm lòng cao cả",
      "image": "./data/img/img202.png",
      "description": "Chúng ta biết gì về con em mình trong một ngày, một tuần, thậm chí một năm khi chúng ở trường học, giữa thầy cô và bè bạn?<br>Đọc Những tấm lòng cao cả, chúng ta sẽ hiểu thêm về tâm sức của “những người chở đò”, hiểu thêm sự cần thiết và quan trọng của mối liên hệ giữa gia đình, nhà trường, xã hội để giáo dục con em mình trở thành một công dân tốt.<br>Giáo dục phải tiến hành có nghệ thuật, mà nghệ thuật văn chương là công cụ giáo dục tốt. Và, sự thành công của E. D. Amicis là ở đó...<br>Nhà văn Admondo De Amicis (1846 - 1908) là nhà văn, nhà hoạt động chính trị - xã hội nổi tiếng của nước Ý. Ông cầm bút hơn 40 năm, để lại khá nhiều tác phẩm. Những tấm lòng cao cả (Cuore) ra đời từ những năm 80 của thế kỉ 19 đã làm E. D. Amicis nổi tiếng khắp thế giới.<br>Nhà giáo nhân dân HOÀNG THIẾU SƠN (1920 - 2005), là tác giả của nhiều tác phẩm khoa học, giáo trình địa lí, nhiều tác phẩm dịch nổi tiếng. Đặc biệt, Những tấm lòng cao cả do ông dịch và viết lời giới thiệu đã trở thành cuốn sách gối đầu giường của nhiều thế hệ độc giả Việt Nam. ",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "rất hay, ý nghĩa" },
        { "star": 5, "info": "nó miêu tả cảnh đẹp và những con người đang cố gắng ở đó. bài này rất hay" }
      ],
      "author": ["Edmondo De Amicis"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x24 cm",
      "weight": "375 gram",
      "format": "Bìa mềm",
      "price": 776500,
      "quantity": 900,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B203",
      "title": "Ngày Em Đánh Mất Anh",
      "image": "./data/img/img203.webp",
      "description": "r>Bạn đang loay hoay chẳng thế bước ra khỏi những cảm xúc hỗn loạn hậu chia tay? Bạn đã từng tràn ngập nỗi thất vọng với người bạn mà mình vẫn nghĩ sẽ thân thiết cả đời? Bạn suy sụp mỗi lần nghĩ đến việc sức khỏe người thân ngày một yếu đi, và sẽ có một ngày bạn phải rời xa họ? Vậy thì “Ngày em đánh mất anh” chính là cuốn sách dành cho bạn.<br>Nhị Hy đã không còn là một cái tên xa lạ với những độc giả yêu thích dòng tản văn Trung Quốc nói riêng và cả người hâm mộ quốc tế nói chung. Cô được quý mến bởi lối hành văn nhẹ nhàng dễ chịu nhưng vẫn sâu sắc và chạm đến trái tim của mọi người. Từng câu từng chữ tựa như một lời thủ thỉ tâm tình, ở bên và an ủi bạn trong những giây phút yếu lòng nhất.<br>Đề tài chia ly chẳng phải là một điều gì quá mới mẻ, nhưng lại được Nhị Hy viết nên dưới một góc nhìn có phần chi tiết và sâu lắng hơn rất nhiều. Tác phẩm không đơn thuần là một bài văn đau buồn kể về những mất mát hậu chia ly mà người ở lại phải chịu đựng, mà sau đó là những cách thức ta có thể làm để vượt qua chuyện đó.<br>Một ai đó rời khỏi cuộc đời bạn vốn là chuyện thường tình ở đời, nhưng cách ta đối mặt với nó như thế nào sau khoảng thời gian gục ngã mới là quan trọng nhấ",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 5, "info": "Sản phẩm chất lượng, gói hàng cẩn thận, giá cũng rẻ hơn so với mấy shop khác" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nhị Hy"],
      "publish": "NXB Văn học",
      "date": "2023",
      "size": "14.5 x 20.5 cm",
      "weight": "750gram",
      "format": "Bìa mềm",
      "price": 69000,
      "quantity": 990,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B204",
      "title": "451 độ F",
      "image": "./data/img/img204.webp",
      "description": "Hãy mường tượng một thế giới nơi truyền hình thống trị và văn chương ngấp nghé trên bờ tuyệt chủng, nơi thông tin nông cạn được tung hô còn tri thức và ý tưởng thì bị ruồng rẫy, nơi tàng trữ sách là phạm pháp, ta có thể bị bắt chỉ vì tản bộ trên vỉa hè, còn nhiệm vụ của những người lính không phải cứu hỏa mà là châm mồi cho những đám cháy… Khi khắc họa cái xã hội giả tưởng ấy qua con mắt nhìn khủng hoảng niềm tin của anh lính phóng hỏa Montag, Ray  Bradbury chắc không thể ngờ vào tính tiên tri khủng khiếp của cuốn sách. Xã hội chúng ta đang sống ngày nay giống với những gì Bradbury mô tả đến rùng mình: một nền văn minh lệ thuộc quá nhiều vào truyền thông, giải trí và công nghệ. Bởi lẽ đó, hơn sáu chục năm kể từ lần đầu xuất bản, 451 độ F vẫn đủ sức khiến bất kỳ ai đọc nó phải sửng sốt và choáng váng.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 5, "info": "rất hay, đáng mua, gói hàng cẩn thận, giá cả hợp lý" },
        { "star": 5, "info": "hayyy" }
      ],
      "author": ["Ray Bradbury"],
      "publish": "NXB Văn học",
      "date": " 2021",
      "size": " 13 x 20.5 cm",
      "weight": "678gram",
      "format": "Bìa cứng",
      "price": 80000,
      "quantity": 670,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B205",
      "title": "Giải mã mê cung - The maze runner series",
      "image": "./data/img/img205.webp",
      "description": "Thomas thức dậy trong thang máy. Những gương mặt xa lạ vây quanh cậu, những người mà kí ức của họ đã bị xóa trắng. Tên cậu là thứ duy nhất trí não cậu còn lưu giữ. Một cô gái xuất hiện, mang theo thông điệp đáng sợ. Để sống sót giữa một Mê cung khổng lồ đầy các sinh vật nguy hiểm và thay đổi lời giải hằng đêm, Thomas phải làm gì? Để ra khỏi những bức tường đá vây quanh Trảng, chỉ một đường thoát duy nhất. Chưa kẻ nào toàn mạng khi đi qua con đường ấy. Ai sẽ là người sống sót cuối cùng sau những bí mật chết người? Mọi sự liên tục biến đổi. Nếu không biết sợ hãi, bạn không phải con người.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 5, "info": "Rất đáng xem" },
        { "star": 5, "info": "Một cuốn sách đáng đọc, mang lại nhiều giá trị." }
      ],
      "author": ["James Dashner"],
      "publish": "NXB Kim Đồng",
      "date": "2017",
      "size": "14x22.5 cm",
      "weight": "500 gr",
      "format": "Bìa mềm",
      "price": 89000,
      "quantity": 780,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B206",
      "title": "Max, Sally và chiếc điện thoại thần kì - Phiêu lưu ngoài giờ học",
      "image": "./data/img/img206.webp",
      "description": "Max, Sally và chiếc điện thoại thần kì - Phiêu lưu ngoài giờ học",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "lên án gay gắt cái xã hội tư sản ,châm biếm xh rất hay" },
        { "star": 5, "info": "Đọc một lần là muốn đọc lại." }
      ],
      "author": [" Milos MacourekAdolf Born"],
      "publish": "NXB Kim Đồng",
      "date": "2018",
      "size": "23,5x23,5cm",
      "weight": "395 gram",
      "format": "Bìa mềm",
      "price": 79000,
      "quantity": 560,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B207",
      "title": "Truyện cổ Andersen - Tập 1 (2021)",
      "image": "./data/img/img207.webp",
      "description": "Nhà xuất bản Kim Đồng trân trọng giới thiệu tới độc giả ấn bản “Truyện cổ Andersen”, bản dịch của Trần Minh Tâm. Theo nhà nghiên cứu văn hóa Hữu Ngọc, đây là bản dịch “đầy đủ nhất, nêu bật được tinh thần bản gốc Đan Mạch nhất”. Bộ truyện sưu tập khá đầy đủ truyện kể của Andersen, văn phong dịch gần với văn phong của Andersen.<br>Nhà văn Nguyễn Tuân từng viết: “Em nhỏ nào đã đọc qua truyện ngắn Andersen thì trọn đời không khi nào quên và dửng dưng với thơ ca, mộng ước, tình thương yêu và lòng công bằng. Còn trứng nước, người độc giả tí hon thấy ở truyện Andersen cái thế giới tưởng tượng xa xôi có yêu tinh nhưng cũng có nàng tiên, và sớm biết rằng kẻ ác dù oai tợn đến đâu rồi cuối cùng cũng cứ lăn chiêng đổ nhào.<br>Lớn dần lên, tưởng tượng dồi dào hơn, bạn đọc sẽ thấy nhân vật là những người cố gắng vượt khó để tiến gần lên công lí và nhích tới chân lí.<br>Đứng tuổi rồi, bạn đọc sẽ thấy ở truyện ngắn bừng lên những kinh nghiệm về lẽ đời và đạongười, thấy cái triết lí sinh động của sự sống, và cái lí giải chân xác về cuộc sống.<br>Ở người độc giả lớn tuổi, Andersen đã biết tỉnh gợi được lại cái phần hồn nhiên trong trắng vẫn đọng chìm, đánh thức lại những cái bồng bột chân chất của tuổi măng trứng để mà đối soi vào thực tế phiền phức",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 3, "info": "Một tác phẩm chất lượng, đáng để trải nghiệm." },
        { "star": 5, "info": "Rất thích cách tác giả truyền tải thông điệp." }
      ],
      "author": ["Hans Christian Andersen"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "13x19 cm",
      "weight": "425 gram",
      "format": "Bìa mềm",
      "price": 90000,
      "quantity": 900,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B208",
      "title": "TẬN CÙNG LÀ CÁI CHẾT",
      "image": "./data/img/img208.jpg",
      "description": "Ở Ai Cập vào năm 2000 trước công nguyên, cái chết được xem là mang lại ý nghĩa cho sự sống. Tại chân một vách đá là thi thể co quắp bấy nát của Nofret, thiếp yêu của một giáo sĩ. Trẻ, đẹp và ác dạ, hầu hết mọi người đồng ý rằng đó là định mệnh – cô ta đáng phải chết như một con rắn!<br>Tuy nhiên tại nhà của cha mình bên bờ sông Nile, cô con gái Renisenb của giáo sĩ lại nghĩ rằng cái chết của người phụ nữ thật đáng ngờ. Càng ngày cô càng tin mầm mống của cái ác nảy nở trong nhà mình – và chứng kiến một cách bất lực những mê đắm của gia đình trong cảnh chết chóc.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Cuốn sách khiến mình suy nghĩ rất nhiều." },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": [" Agatha Christie"],
      "publish": "NXB Trẻ",
      "date": "2026",
      "size": "13x20cm",
      "weight": " 320 gram",
      "format": "Bìa mềm",
      "price": 130000,
      "quantity": 0,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B209",
      "title": "BĂNG ĐIỂM (QUYỂN THƯỢNG)",
      "image": "./data/img/img209.jpg",
      "description": "Băng điểm (氷点) là tiểu thuyết bán chạy nhất của Miura Ayako, chỉ trong tuần đầu tiên phát hành đã bán hết 50.000 bản. Trong năm phát hành (1965), Băng điểm bán được 710.000 bản – trở thành cuốn sách bán chạy nhất tại Nhật thời điểm đó, và được dựng thành phim ngay năm tiếp theo (1966). <br>Lấy bối cảnh chính ở Hokkaido, quê hương của Miura Ayako, Băng điểm kể câu chuyện về bi kịch của gia đình Tsujiguchi, sau một lần rung động với bác sĩ Murai, người mẹ Natsue Tsujiguchi đã vô tình đẩy cô con gái nhỏ, Ryoko, ra khỏi nhà, khiến cô bé bị một người giết chết. Nỗi đau mất con và sự thất vọng trước sự phản bội của vợ đã đẩy người chồng Keizo vào vòng xoáy thù hận, dẫn đến một quyết định đầy mâu thuẫn: nhận nuôi Yoko, con gái của kẻ đã sát hại Ryoko.<br>Băng điểm đào sâu vào những góc khuất tăm tối nhất của tâm hồn con người, nơi tình yêu thương và lòng hận thù giằng xé, nơi khát khao tha thứ và mong muốn báo thù đan xen. Không chỉ là câu chuyện về tội ác và sự trừng phạt, Băng điểm còn là hành trình tìm kiếm sự thứ tha, tình yêu thương và cả ý nghĩa thật sự của cuộc sốn",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Phù hợp để đọc và làm quà tặng." }
      ],
      "author": ["Miura Ayako"],
      "publish": "NXB Trẻ",
      "date": "2024",
      "size": "13x20cm",
      "weight": "354 gram",
      "format": "Bìa mềm",
      "price": 175000,
      "quantity": 50,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B210",
      "title": "CHỈ MỘT GIỮA MỘT TRĂM NGÀN NGƯỜI",
      "image": "./data/img/img210.jpg",
      "description": "Cậu bé Sander mười lăm tuổi ước ao giá như mình cũng được bình thường như bạn bè. Nhưng thật không may, cậu gặp phải căn bệnh hiếm gặp mà trong một trăm ngàn người mới có một người mắc phải.<br>Căn bệnh này khiến cậu không thể cao lớn như chúng bạn và dường như sự quan tâm của mọi người chỉ dành cho những thiếu niên cao lớn nhất, khỏe mạnh nhất và náo nhiệt nhất. <br>Nhưng Sander có thể nhận thấy những tiểu tiết mà người khác bỏ qua và cậu đang chuẩn bị cho một sự thay đổi cực kỳ to lớn.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Tác phẩm phản ánh chân thực đời sống và con người Việt Nam." },
        { "star": 5, "info": "Cuốn sách mang giá trị nhân văn sâu sắc" }
      ],
      "author": ["inni Ingemundsen"],
      "publish": "NXB Trẻ",
      "date": "2024",
      "size": "13x20cm",
      "weight": "266 gram",
      "format": "Bìa cứng",
      "price": 69000,
      "quantity": 780,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B211",
      "title": "NÔNG TRẠI NGỘ NGHĨNH",
      "image": "./data/img/img211.jpg",
      "description": "Mở một nông trại giải cứu động vật chưa bao giờ là ước mơ của Laurie Zaleski, đó là nguyện vọng của mẹ cô. Trốn chạy khỏi người chồng bạo hành, với bàn tay trắng và ba đứa con thơ, bà đã gây dựng lại cuộc đời mình, đồng thời cứu lấy nhiều con vật bị bỏ rơi. Ba mươi năm sau, bước qua tuổi thơ cơ cực và trở thành một nữ doanh nhân thành đạt, Laurie đã viết tiếp giấc mơ của mẹ.<br>Nông trại Ngộ nghĩnh là câu chuyện về lòng tốt ở nơi nơi, về lời hứa được gìn giữ, về những sinh vật vô tội bị bỏ rơi rồi tìm thấy một mái nhà. Đó cũng là câu chuyện chân thật, dí dỏm về những con người với nghị lực sống, lòng trắc ẩn và niềm lạc quan mãnh liệt, về những loài vật dũng cảm, phi thường, vui tính, đáng yêu có thể khiến bạn rơi nước mắt và phải bật cười.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "ý nghĩa, Rất đáng xem" }
      ],
      "author": ["Laurie Zaleski"],
      "publish": "NXB Trẻ",
      "date": "2024",
      "size": "13x20cm",
      "weight": "457 gram",
      "format": "Bìa mềm",
      "price": 175000,
      "quantity": 450,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B212",
      "title": "CÁNH CỬA MỞ RỘNG - LŨ MỤC ĐỒNG",
      "image": "./data/img/img212.jpg",
      "description": "Đẹp đẽ và ám ảnh, những câu chuyện trong tập truyện ngắn này nói lên cái ham muốn của nhân loại hướng tới một cuộc sống vượt lên trên những kìm kẹp và cạm bẫy của sự sinh tồn hiện đại. Mỗi đứa trẻ trong từng câu chuyện có thể cảm nhận và trân quý những tạo hóa của tự nhiên với sự ngưỡng mộ và lòng ham hiểu biết. Mondo là một cậu bé có liên hệ với vẻ đẹp trong vạn vật liên kết cái thị trấn nhỏ miền biển. Cô bé Petite Croix “biết rõ một chuyện gì đó sẽ xảy ra. <br>Mỗi ngày chờ đợi nó, ở cùng chỗ, ngồi trên mặt đất cứng, chỉ dành cho nó thôi” lúc nào cũng hỏi một câu: “Xanh là gì vậy?” Daniel trốn học để đi tìm biển cả. Tất cả những đứa trẻ này, giống như chú dê trong câu chuyện cuối cùng, đều biết “rất rất nhiều thứ, không phải những thứ ta tìm thấy trong sách vở, những thứ mà con người thường hay nhắc tới, đó là những thứ dịu dàng mà mạnh mẽ, chứa đầy vẻ đẹp và sự huyền bí.” Và cuối cùng, có lẽ chúng ta cũng sẽ hiểu những thứ ấy.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "tình cảm, khiến mình nhớ đến quê hương nhớ nhà" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["J.M.G LE CLE'ZIO"],
      "publish": "NXB Trẻ",
      "date": "2023",
      "size": "13x20cm",
      "weight": "500 gram",
      "format": "Bìa cứng",
      "price": 165000,
      "quantity": 120,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B213",
      "title": "Ngôi nhà của Người Hà Lan",
      "image": "./data/img/img213.webp",
      "description": "ào cuối Chiến tranh thế giới thứ hai, Cyril Conroy bỗng trở nên giàu có nhờ vận may về bất động sản. Ông mua lại Ngôi nhà của Người Hà Lan, một điền trang xa hoa vùng ngoại ô Philadelphia làm quà cho vợ với mong muốn mở ra trang mới của cuộc sống giàu sang, hạnh phúc mà không thể ngờ chính nơi đây lại là nguồn cơn của những đau đớn và vụn vỡ...<br>Lấy bối cảnh xuyên suốt năm thập kỷ, Ngôi nhà của Người Hà Lan là câu chuyện cổ tích nhuốm màu tăm tối về chị em nhà Conroy, hai linh hồn tổn thương không thể chữa lành vết thương quá khứ. Bất chấp những thành công đạt được, Danny và Maeve chỉ cảm thấy thoải mái khi ở cạnh nhau. Trong suốt cuộc đời, họ luôn nhắc về những gì đã mất với một sự châm biếm đầy giận dữ. Mối quan hệ giữa cậu em phóng túng và người chị luôn bảo vệ cậu bỗng trở nên đầy thách thức khi cuối cùng họ buộc phải đối diện với những người đã bỏ rơi mình.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Ann Patchett"],
      "publish": "NXB Văn học",
      "date": "2026",
      "size": "14,5 x 20,5cm",
      "weight": "569 gram",
      "format": "Bìa mềm",
      "price": 200000,
      "quantity": 20,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B214",
      "title": "Người lạ trên bè cứu sinh",
      "image": "./data/img/img214.webp",
      "description": "Trên bè cứu sinh lênh đênh giữa Đại Tây Dương mênh mông, mười một người chờ đợi phép màu trong tuyệt vọng. Bỗng, một người lạ xuất hiện từ sóng nước, tự xưng là Chúa. Liệu đó là sự thật hay ảo vọng của những linh hồn khát khao được cứu rỗi? Câu chuyện mở ra như một cuốn nhật kí, mỗi trang chất chứa nỗi sợ, niềm hi vọng và những bí mật chìm khuất dưới đáy đại dương.<br>Với Người lạ trên bè cứu sinh, Mitch Albom dẫn dắt ta suy ngẫm về đức tin, sự mong manh của kiếp người và câu hỏi muôn thuở: Nếu Chúa thực sự ở đó, ta có đủ niềm tin để nhận ra Người hay không?",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 2, "info": "cũng đc" },
        { "star": 5, "info": "hay" }
      ],
      "author": ["Mitch Albom"],
      "publish": "NXB Kim Đồng",
      "date": "2025",
      "size": "14.5x20.5 cm",
      "weight": "6 gram",
      "format": "Bìa mềm",
      "price": 72000,
      "quantity": 50,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B215",
      "title": "Thần thoại Bắc ",
      "image": "./data/img/img215.webp",
      "description": "Mặt đất rung chuyển dữ dội. Trên bầu trời, mặt trời và mặt trăng biến mất. Những vì sao rơi rụng như mưa. Cả vũ trụ ầm ào, huyên náo bao âm thanh điên cuờng, dữ dội. Bóng tối trỗi dậy. Chỉ còn thanh kiếm của Surt chói sáng hơn cả mặt trời.<br><br>Đúng lúc ấy, ba con gà trống cất tiếng gáy vang ba cõi. Tiếng con gà nửa đỏ, nửa đen ở Niflheim báo hiệu cho đoàn quân người chết lên đường. Tiếng con gà trống tía ở Jotunheim vang vọng, trở thành hồi kèn xung trận để tộc khổng lồ băng giá góp mặt trong cuộc chiến. Con gà trống mào vàng trên mái điện Valhalla gáy vang, thúc giục đội quân tử sĩ sẵn sàng khí giới.<br>Giờ khắc đã điểm, Ragnarok đã đến lúc xảy ra.<br>Thuở xưa, ở vùng đất Bắc Âu xa xôi, thần thoại hùng tráng về chín thế giới trên cây tần bì Yggdrasil được các chiến binh Viking truyền tụng trong đêm trường buốt lạnh: Khởi nguyên và ngày tàn của vũ trụ, các vị thần trí xảo, những quái vật khát máu, người khổng lồ hung hăng, chiến trận oai hùng và tình yêu bỏng cháy…<br>Từ trung tâm của vũ trụ, cây tần bì thần thánh Yggdrasil vươn mình chở che cho mọi vùng đất. Theo thân cây đứng thẳng, kì vĩ và tôn nghiêm, chín thế giới chia thành ba tầng bậc. Tầng cao nhất có Asgard của các thần Aesir, Vanaheim của các thần Vanir, Alfeim của tiên ánh sáng. Tầng giữa có Midgard của loài người, Jotunheim của khổng lồ băng giá, Muspelheim của khổng lồ lửa. Tầng dưới cùng có Svartalfeim của tiên bóng tối, Nidavellir của người lùn, và Niﬂheim của người chết…",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Quỳnh Liên"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x24 cm",
      "weight": "395 gram",
      "format": "Bìa mềm",
      "price": 88000,
      "quantity": 560,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B216",
      "title": "Ngôn từ",
      "image": "./data/img/img216.webp",
      "description": "Ngôn từ là một tự truyện không có những hoài niệm, dẫu ngậm ngùi cay đắng hay cảm động ngọt ngào. Sartre không hoài niệm, ông mổ xẻ, phân tích, giải mã tuổi thơ của mình bằng con mắt sắc sảo, tỉnh táo và đầy trải nghiệm của một nhà văn đứng tuổi, đứng tách hẳn khỏi cậu bé \"ngông cuồng\" là chính mình ngày xưa - để đi tìm câu trả lời cho một câu hỏi lớn: Điều gì đã thúc đẩy ông đến với nghiệp văn chương? <br><br>Sự phân tích, đánh giá rất “lạnh lùng” ấy đã đem lại sắc thái đặc biệt cho Ngôn từ: một giọng điệu nổi bật là hài hước, mỉa mai, chế nhạo (chủ yếu là tự chế nhạo), xen lẫn với những suy tư triết học vừa chặt chẽ logic vừa phức tạp rắm rối nhưng đầy cuốn hút, câu chuyện về tuổi thơ của Sartre trở nên giống một tác phẩm châm biếm, một tiểu thuyết triết lý, hơn là một tự truyện.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 3, "info": "cốt truyện hay" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Jean - Paul Sartre"],
      "publish": "NXB Văn học",
      "date": "2021",
      "size": "3.5 x 20.5 cm",
      "weight": "654 gram",
      "format": "Bìa mềm",
      "price": 97000,
      "quantity": 450,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B217",
      "title": "PONY CHÚ NGỰA DŨNG MÃNH",
      "image": "./data/img/img217.jpg",
      "description": "Giữa đêm,  có ba gã lạ mặt đột ngột xuất hiện trước nhà cậu bé Silas. Họ ép buộc cha cậu đi theo để thực hiện một phi vụ bí ẩn. Silas ở lại nhà một mình, sợ hãi và đơn độc, chỉ có sự bầu bạn của Mittenwool – một hồn ma. Rồi một chú ngựa con xuất hiện trước cửa nhà, và Silas biết mình phải làm gì. Cậu bé 12 tuổi đã bắt đầu một chuyến đi đầy nguy hiểm để tìm cha - một cuộc hành trình cuối cùng sẽ kết nối cậu với quá khứ và tương lai, và những bí ẩn của thế giới xung quanh.<br><br>Đây là một câu chuyện đau đớn và đẹp đẽ về sức mạnh của tình yêu và những sợi dây ràng buộc chúng ta qua không gian, thời gian. Sách dành cho bạn đọc mọi lứa tuổi – những ai yêu thích phiêu lưu và muốn khám phá vẻ đẹp của tâm hồn mình.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "tác phẩm hay" },
        { "star": 5, "info": "Nhớ vị tết nhớ vị nhà" }
      ],
      "author": [" R.J.Palacio"],
      "publish": "NXB Trẻ",
      "date": "2023",
      "size": "13x20cm",
      "weight": "370 gram",
      "format": "Bìa cứng",
      "price": 78000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B218",
      "title": "TIMMY FAILURE: COI CẬU KIA KÌA",
      "image": "./data/img/img218.jpg",
      "description": "Mời bạn gặp gỡ với “thám tử” Timmy Failure, cậu nhóc giám đốc của công ty thám tử siêu hạng nổi tiếng toàn cầu, qua bộ truyện Timmy Failure, bao gồm nhiều tập: “Lỗi lầm la liệt”, “Coi cậu kia kìa”, “Đụng độ điên đầu”… Bộ truyện phù hợp với trẻ em thích phiêu lưu và khám phá, được viết và vẽ bởi họa sĩ hoạt họa nổi tiếng có sách bán chạy nhất theo bình chọn của New York Times - Stephan Pastis.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["STEPHAN PASTIS"],
      "publish": "NXB Trẻ",
      "date": "2024",
      "size": "13 x 20 cm",
      "weight": "300 gram",
      "format": "Bìa cứng",
      "price": 89000,
      "quantity": 450,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B219",
      "title": "Không phải bây giờ thì còn chờ đến bao giờ",
      "image": "./data/img/img219.webp",
      "description": "Có lẽ những người sống trọn vẹn mỗi phút mỗi giây ở hiện tại rất ít khi lo lắng về tương lai, chúng ta trao đổi với vạn vật trên đời bằng năng lượng tốt nhất và từ đó có thể tạo ra những điều tốt đẹp vượt ngoài tưởng tượng. Việc ta cần làm chỉ là xác nhận mỗi bước ta đi trong cuộc đời có phải tự nguyện không.",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Lưu Tư Gia"],
      "publish": "NXB Văn học",
      "date": "2023",
      "size": "14.5 x 20.5 cm",
      "weight": "634 gram",
      "format": "Bìa mềm",
      "price": 85000,
      "quantity": 890,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B220",
      "title": "HÃNG LUẬT",
      "image": "./data/img/img220.jpg",
      "description": "Khi luật sư trẻ Mitch McDeere ký hợp đồng với Hãng Luật Bendini, Lambert & Locke của Memphis, anh đã nghĩ mình đang chạm đến một giấc mơ tươi đẹp.<br> Công ty hoàn hảo, tiền tài và danh vọng đều trong tầm tay. Lẽ ra, anh phải nhớ nằm lòng một điều: chẳng có gì là miễn phí. Hạnh phúc không bao giờ từ trên trời rơi xuống mà luôn có một cái giá rất đắt. Và bây giờ, FBI đang đề nghị Mitch McDeere giúp đỡ điều tra. Nếu muốn sống, anh chỉ có một lựa chọn duy nhất…",
      "topic": [
        "vhnn"
      ],
      "review": [
        { "star": 3, "info": "ý nghĩa, lôi cuốn" },
        { "star": 4, "info": "hayy" }
      ],
      "author": ["John Grisham"],
      "publish": "NXB Trẻ",
      "date": "2023",
      "size": "14x20cm",
      "weight": "324 gram",
      "format": "Bìa cứng",
      "price": 87900,
      "quantity": 420,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B301",
      "title": "Con Đường Chẳng Mấy Ai Đi",
      "image": "./data/img/img301.webp",
      "description": "Có lẽ không quyển sách nào trong thế kỷ này có tác động sâu sắc đến đời sống trí tuệ và tinh thần của chúng ta hơn Con Đường Chẳng Mấy Ai Đi. Với doanh số trên 10 triệu bản in trên toàn thế giới và được dịch sang hơn 25 ngôn ngữ, đây là một hiện tượng trong ngành xuất bản, với hơn mười năm nằm trong danh sách Best-sellers của New York Times.<br><br>Với cách hành văn kinh điển và thông điệp đầy thấu hiểu, quyển sách Con Đường Chẳng Mấy Ai Đi giúp chúng ta khám phá bản chất của các mối quan hệ và của một tinh thần trưởng thành. Quyển sách giúp chúng ta học cách phân biệt sự lệ thuộc với tình yêu; làm thế nào để trở thành những bậc phụ huynh tinh tế và nhạy cảm; và cuối cùng là làm thế nào để sống chân thật với chính mình.<br><br>Với dòng mở đầu bất hủ của quyển sách, \"Cuộc đời này rất khó sống\", thể hiện quan điểm hành trình phát triển tinh thần là một chặng đường dài và gian nan, Tiến sĩ Peck thể hiện sự đồng cảm, nhẹ nhàng dẫn dắt độc giả vượt qua quá trình khó khăn đó, để thay đổi hướng tới tầm mức thấu hiểu bản thân sâu sắc hơn.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["M. Scott Peck"],
      "publish": "NXB Dân Trí",
      "date": "2024",
      "size": "14.5 x 21 cm",
      "weight": "360 gram",
      "format": "Bìa mềm",
      "price": 115500,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B302",
      "title": "Yêu Những Điều Không Hoàn Hảo (Tái Bản 2025)",
      "image": "./data/img/img302.webp",
      "description": "Ngẫm lại cuộc sống của chính mình, ta sẽ nhận thấy rất nhiều điều không hoàn hảo. Trước hết, chỉ nhìn vào bản thân mình thôi ta đã cảm nhận được nhiều thiếu sót rồi: lời nói và hành động mâu thuẫn với nhau, vụng về trong những mối quan hệ xã hội, chuyện học hành, công việc không suôn sẻ như ý muốn. Chưa kể đôi khi ta còn khiến người khác tổn thương, thậm chí còn làm những việc khiến bản thân cảm thấy tội lỗi và hối hận. Và khi nhìn vào những người thân trong gia đình, bạn bè, đồng nghiệp, ta cũng nhận thấy những điều không-hoàn-hảo tương tự như vậy.<br><br>Nhưng dù đang sống giữa thế gian đầy rẫy những điều không hoàn hảo, ta vẫn không thể ngừng yêu thương chính những điều không hoàn hảo ấy. Cuộc sống rất đáng để trân trọng, ta không thể phí hoài cuộc sống vào việc mỉa mai hay căm ghét thứ gì đó chỉ vì không thể hiểu được nó hoặc nó không vừa ý ta.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "rất hay, ý nghĩa" },
        { "star": 5, "info": "nó miêu tả cảnh đẹp và những con người đang cố gắng ở đó. bài này rất hay" }
      ],
      "author": ["Hae Min"],
      "publish": "NXB Thế giới",
      "date": "2025",
      "size": "14 x 20,5 cm",
      "weight": "400 gram",
      "format": "Bìa mềm",
      "price": 143500,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B303",
      "title": "Ảo Ảnh Trong Xã Hội - Dư Thừa Kết Nối",
      "image": "./data/img/img303.webp",
      "description": "Nhất quan hệ.<br><br>Một quan điểm đã ăn sâu vào cách người Việt nhìn nhận thành công: rằng đời muốn “lên hương” phải biết mở rộng giao du và liên tục hiện diện trong những vòng tròn xã hội. Nhưng trong thời đại kết nối dư thừa, nơi ai cũng có thể tương tác với nhau bằng một cú chạm màn hình, liệu “quan hệ” còn là thứ vốn liếng tối thượng?<br><br>Là một người gặt hái được không ít cơ hội từ việc xây dựng quan hệ, tác giả - nhà báo Đinh Đức Hoàng không phủ nhận vai trò của kết nối. Nhưng sau hơn hai thập kỷ làm nghề, qua những quan sát xã hội và đối thoại với nhiều nhân vật ở các lĩnh vực khác nhau, tác giả bắt đầu đặt lại câu hỏi về vai trò của quan hệ xã hội trong đời sống hiện đại.<br><br>Từ trăn trở đó, “Ảo ảnh trong xã hội dư thừa kết nối” ra đời. Đây không phải một cuốn sách self help - không có những gạch đầu dòng dạy bạn phải duy trì mối quan hệ như nào, phải hành xử ra sao, không buộc bạn vào một lý thuyết sống nào cả. Lựa chọn là của bạn. Cuốn sách chỉ đặt ra những lát cắt trung thực từ trải nghiệm cá nhân của tác giả: những câu chuyện về sự đổi thay của xã hội số, cách con người bị cuốn vào nền kinh tế chú ý, những mô hình nội dung vô hình chi phối hành vi, và hành trình mỗi chúng ta đi tìm một “giả thiết sống” phù hợp với bản chất của mình.<br><br>“Ảo ảnh trong xã hội dư thừa kết nối” gồm 5 chương, mỗi chương bóc tách một lớp ảo ảnh quen thuộc của thời đại: về ý nghĩa thực sự của kết nối, về sự hướng nội - hướng ngoại, về nếp văn hóa đang buộc chặt con người, và về giá trị nội lực trong thời đại bội thực chú ý.<br><br>Nếu bạn là người hướng nội bị áp lực phải “hoà nhập”, người hướng ngoại kiệt sức vì quá tải, người trẻ đang đứng trước ngưỡng cửa cuộc đời hay bất kỳ ai muốn giữ sự lành mạnh tinh thần trong thời đại mạng xã hội và AI, cuốn sách này là dành cho bạn.<br><br>“Ảo ảnh trong xã hội dư thừa kết nối” sẽ cùng bạn tìm lại điểm cân bằng cho cuộc sống của mình!",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 5, "info": "Sản phẩm chất lượng, gói hàng cẩn thận, giá cũng rẻ hơn so với mấy shop khác" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Đinh Đức Hoàng"],
      "publish": "NXB Dân Trí",
      "date": "2026",
      "size": "14,5 x 22 cm",
      "weight": "280 gram",
      "format": "Bìa mềm",
      "price": 165500,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B304",
      "title": "Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Tái Bản 2022)",
      "image": "./data/img/img304.webp",
      "description": "Trong xã hội thông tin hiện đại, sự im lặng không còn là vàng nữa, nếu không biết cách giao tiếp thì dù là vàng cũng sẽ bị chôn vùi. Trong cuộc đời một con người, từ xin việc đến thăng tiến, từ tình yêu đến hôn nhân, từ tiếp thị cho đến đàm phán, từ xã giao đến làm việc… không thể không cần đến kĩ năng và khả năng giao tiếp. Khéo ăn khéo nói thì đi đâu, làm gì cũng gặp thuận lợi. Không khéo ăn nói, bốn bề đều là trở ngại khó khăn.<br><br>Đã bao giờ đánh mất một công việc, bạn bỏ lỡ một mối quan hệ tuyệt vời, hay đơn giản là bạn cảm thấy khó nói chuyện với mọi người. Bạn có bao giờ nghĩ là do kĩ năng nói chuyện của mình chưa tốt, chưa thuyết phục được mọi người. Bạn đổ lỗi cho số phận và vận may của mình chưa đến. Hãy dừng việc than thân trách phận và hành động để thay đòi chính mình.<br><br>Vậy làm thế nào để cải thiện và tránh gặp phải những tình huống như trên? Làm thế nào để ăn nói khéo léo? Có phương pháp và quy luật nào được áp dụng khi giao tiếp không? Có nguyên tắc và bí quyết nào cho các cuộc nói chuyện không? Trong những tình huống khác nhau, với những người khác nhau thì phải nói chuyện như thế nào, và làm sao để trình bày những điều khó nói?<br><br>Cuốn sách Khéo ăn nói sẽ có được thiên hạ của Trác Nhã sẽ giải đáp cho bạn đọc những câu hỏi đó. Cuốn sách với ngôn từ rõ ràng, gần gũi với cuộc sống sẽ mang đến những kĩ năng và phương pháp giao tiếp thực dụng, chắc chắn sẽ giúp ích được cho bạn đọc.<br><br>Giá trị của cuốn sách nằm ở chỗ tác giả đã dốc hết tâm sức nghiên cứu về các kĩ năng và quy tắc giao tiếp để đúc kết, truyền tải vào trong những trang sách khiến cho người đọc cảm thấy cuốn hút, và học hỏi được nhiều kĩ năng giúp cho bạn đọc tự tin và thành công trong việc giao tiếp.<br><br>Xây dựng mối quan hệ nhờ tài ăn nói<br><br>Từ trước đến nay, trong xã hội, giao tiếp đang là một trong những điều mà ai cũng phải đối mặt, đặc biệt là các bạn trẻ, những bạn đang bước chân đang cần chứng tỏ năng lực của mình trước cuộc sống, mọi người. Chúng ta ngày càng phải giao tiếp với rất nhiều người. Sử dụng ngôn ngữ khéo léo, thân thiện chính là cách quan trọng nhất để xóa bỏ tâm lí đề phòng của đối phương và rút ngắn khoảng cách giữa hai bên, giúp cho mọi người tin tưởng bạn hơn và từ đó sẵn sàng giúp đỡ bạn trong công việc và học tập.<br><br>Hơn nữa để thành công, bạn không được bỏ qua một mối quan hệ nào trong xã hội, mỗi một người đến và đi trong cuộc đời bạn đều có thể cho bạn nhiều bài học, kinh nghiệm quý báu mà nó sẽ chắc chắn sẽ giúp ích cho bạn trong cuộc đời. Điều quan trọng là bạn phải ăn nói, giao tiếp như nào để người đó yêu quý bạn và sẵn sàng chia sẻ cho bạn những kinh nghiệm quý báu của bản thân họ. Cuốn sách “ Khéo ăn nói sẽ có được thiên hạ” chắc chắn sẽ không làm bạn thất vọng.<br><br>Kĩ năng giúp cho người ngại giao tiếp mở lời trò chuyện<br><br>Trong cuộc sống hay trong công việc, có một số người không thích nói chuyện, trong một số trường hợp bắt buộc phải nói, họ cũng không chịu nói gì cả, những người như vậy được gọi là người ngại giao tiếp. Ở công sở hoặc một số nơi khác, khi những người khác đều đang trò chuyện sôi nổi, thì những người ngại giao tiếp chỉ ngồi một góc lắng nghe hoặc suy nghĩ vấn đề riêng của họ. Trong giao tiếp nếu gặp những người như vậy chúng ta đều thấy rất tẻ nhạt, và không muốn làm việc cũng như giao tiếp. Vậy phải làm thế nào để những người ngại giao tiếp mở lời trò chuyện?<br><br>Sử dụng lời khen chân thành, đặt câu hỏi đúng thời điểm<br><br>Thực tế cho thấy, mọi người ai cũng muốn được người khác khen ngợi, nếu muốn những người ngại giao tiếp thì chúng ta hãy mở lời động viên họ bằng những lời khen khiến cho họ có niềm tin, để họ biết rằng những điều họ làm đều rất có giá trị, mọi người đều rất ngưỡng mộ và trân trọng thành quả của họ, hãy động viên họ bằng những câu hỏi liên quan đến kiến thức chuyên môn của chính họ, chắc chắn rằng họ sẽ mở lòng nói chuyện với chúng ta dần dần họ sẽ có được sự tự tin và giao tiếp nhiều hơn.<br><br>Đặt câu hỏi có/không<br><br>Chúng ta gặp những người ít nói trong cuộc sống, họ hay dùng các từ như có, không, ừ , à… khi trả lời câu hỏi. Bạn đừng mất kiên nhẫn, hãy sử dụng chính đặc điểm kiệm lời, không thích nói chuyện của họ. Sau khi xác định rõ bản thân muốn có được đáp án như thế nào , hãy nêu những câu hỏi mà câu trả lời sẽ là có hoặc không, hoặc hỏi những câu ngắn gọn thể hiện bạn muốn biết đáp án. Việc hỏi như vậy không chỉ khiến đối phương mở lời, mà còn có thể trực tiếp giúp bạn đạt được hiệu quả.<br><br>Tranh luận<br><br>Muốn cá cắn câu bạn phải dùng mồi câu tốt. Khi giao tiếp, hãy sử dụng những câu hỏi và đề tài dễ dàng cho việc bắt đầu một cuộc tranh luận đê giúp những người ngại giao tiếp cảm thấy tự tin hơn. Bạn có thể nêu những suy nghĩ trái ngược nhau về cùng môt vấn đề, hoặc yêu cầu đối phương đặt câu hỏi;",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 5, "info": "rất hay, đáng mua, gói hàng cẩn thận, giá cả hợp lý" },
        { "star": 5, "info": "hayyy" }
      ],
      "author": ["Trác Nhã"],
      "publish": "NXB Văn học",
      "date": "2022",
      "size": "14,5 x 20,5 cm",
      "weight": "410 gram",
      "format": "Bìa mềm",
      "price": 91000,
      "quantity": 0,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B305",
      "title": "Sức Mạnh Của EQ - Đánh Thức Trí Tuệ Cảm Xúc - Làm Chủ Ngôn Ngữ - Thu Phục Lòng Người",
      "image": "./data/img/img305.webp",
      "description": "Thành công trong đời bạn sẽ phụ thuộc vào cách bạn đối xử với mọi người. Xin lỗi, sự thật thì luôn phũ phàng.Nhưng có tin tốt cho bạn: Đây là kỹ năng có thể rèn luyện được – và cuốn sách này là một khởi đầu không thể tuyệt vời hơn.<br><br>Sức mạnh của EQ là một cuốn sách đề cao tính thực tiễn, với những kỹ thuật áp dụng được ngay lập tức:<br><br>- Trí tuệ đối thoại và cách đạt tới thấu cảm CHỈ TRONG 4 BƯỚC<br><br>- Cách thoát ly quan điểm cá nhân và ĐỌC VỊ CẢM XÚC của người khác<br><br>- KỸ THUẬT “ĐỌC NGUỘI” và trở thành chuyên gia tìm kiếm “manh mối” trong giao tiếp<br><br>- Sự thấu hiểu cảm xúc cùng CÁCH DÁN NHÃN bản thân và người khác<br><br>- Những câu hỏi chất lượng khiến bạn có vẻ như biết ĐỌC THẤU SUY NGHĨ<br><br>Bạn sẽ hiểu thêm thật sâu sắc về trí tuệ cảm xúc, về bản chất con người và có thể kết nối với người khác nhanh đến mức đáng kinh ngạc.<br><br>Hãy tạo ấn tượng đầu tiên mạnh mẽ và khiến mọi người khao khát sự hiện diện của bạn!<br><br>Rút gọn<br>1<br>",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 5, "info": "Rất đáng xem" },
        { "star": 5, "info": "Một cuốn sách đáng đọc, mang lại nhiều giá trị." }
      ],
      "author": ["Patrick King"],
      "publish": "NXB Thế giới",
      "date": "2024",
      "size": "14 x 20,5 cm",
      "weight": "190 gram",
      "format": "Bìa cứng",
      "price": 74000,
      "quantity": 0,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B306",
      "title": "Những Quy Luật Của Bản Chất Con Người",
      "image": "./data/img/img306.webp",
      "description": "Robert Greene, tác giả rất được ưa chuộng do New York Times bình chọn của các tác phẩm 48 nguyên tắc chủ chốt của quyền lực; 33 chiến lược của chiến tranh; Nghệ thuật quyến rũ; Nguyên tắc 50 - không sợ hãi; Làm chủ bản thân đã được nhà xuất bản Trẻ lần lượt xuất bản, và nhận được sự ủng hộ nhiệt tình của bạn đọc.<br><br>Vẫn sử dụng thủ pháp luận cổ suy kim, trong tác phẩm mới nhất của mình, Những quy luật của bản chất con người, ông chuyển sang chủ đề hệ trọng nhất – thấu hiểu những thôi thúc và động cơ của mọi người, thậm chí cả khi họ không ý thức về chính mình.<br><br>Trong cuốn sách này, Robert Greene tìm cách… biến độc giả thành một ‘quan sát viên điềm tĩnh hơn và có đầu óc chiến lược hơn’, miễn nhiễm với ‘bi kịch cảm xúc’. Đó là những hứa hẹn khá cao, nhưng ngay cả những kẻ hoài nghi cũng sẽ trở thành những người tin tưởng sau khi đọc kỹ tác phẩm chỉnh chu của ông. Việc vượt qua ‘quy luật của sự thiếu sáng suốt’, chẳng hạn, dẫn tới khả năng ‘mở rộng tâm trí bạn ra trước những gì thật sự đang diễn ra, trái hẳn với những gì bạn cảm thấy’. Điều tra thận trọng của Robert Greene về cái tôi và xã hội sẽ mang tới cho độc giả trung thành một quan điểm mới mẻ và tràn đầy sức sống.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "lên án gay gắt cái xã hội tư sản ,châm biếm xh rất hay" },
        { "star": 5, "info": "Đọc một lần là muốn đọc lại." }
      ],
      "author": ["Robert Greene"],
      "publish": "NXB Trẻ",
      "date": "2020",
      "size": "15,5 x 23 cm",
      "weight": "900 gram",
      "format": "Bìa mềm",
      "price": 255000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B307",
      "title": "30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu",
      "image": "./data/img/img307.webp",
      "description": "Ba mươi tuổi, một phần ba quãng thời gian cuộc đời đã hết, cũng là mở đầu cho quãng đường mới mở ra. Cuốn sách này tặng bạn chìa khóa đi vào thế giới trưởng thành và tiến bộ, chính là sự kiên trì làm người khác phải cảm động, làm mọi khó khăn phải lui bước!<br><br>Viết một cuốn tự truyện khi sắp ba mươi, chẳng phải vì quá nhiều thành tựu, nên muốn khoe khoang một chút, cũng không hẳn do yêu mình. Chỉ là chút giãi bày, để nhìn lại bản thân, chia sẻ tâm tư cùng người đọc, nhắn cho những ai còn lo lắng hay mơ hồ về thanh xuân sắp qua, rằng mọi thứ mới chỉ đang bắt đầu. Đó là những gì Lý Thượng Long nói với bạn ở cuốn sách này.<br><br>Hãy kiên trì với con đường mình đã chọn, ngay cả khi những người xung quanh đang đi đường tắt. Kiên trì với những gì bạn yêu thích, ngay cả khi người xung quanh cho rằng bạn rất cực khổ. Kiên trì với con đường của mình ngay cả khi chỉ có một mình suốt chặng.<br><br>Bởi những gì bạn đang trải qua đều quý giá, chính là cơ hội để không ngừng trau dồi bản thân. Mỗi ngày, hãy tự nhủ: 30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu. Và bắt đầu trở nên ngày càng vững mạnh hơn, bạn nhé!",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 3, "info": "Một tác phẩm chất lượng, đáng để trải nghiệm." },
        { "star": 5, "info": "Rất thích cách tác giả truyền tải thông điệp." }
      ],
      "author": ["Lý Thượng Long"],
      "publish": "NXB Dân Trí",
      "date": "2023",
      "size": "14 x 20,5 cm",
      "weight": "350 gram",
      "format": "Bìa cứng",
      "price": 108000,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B308",
      "title": "Sức Hút Của Sự Tử Tế - Sống Nhân Ái, Tâm Thư Thái",
      "image": "./data/img/img308.webp",
      "description": "\"Sức Hút Của Sự Tử Tế\" không chỉ là một cuốn sách về những hành động tử tế mà bạn có thể thực hiện mỗi ngày, mà còn là một cẩm nang phát triển bản thân giúp bạn nhận thức được sức mạnh tiềm ẩn của sự tử tế. Cuốn sách này khám phá và hướng dẫn bạn cách ứng dụng tử tế vào mọi khía cạnh của cuộc sống từ công việc, gia đình đến các mối quan hệ xã hội. Dù bạn là ai, sống trong môi trường nào, sự tử tế luôn có thể là chìa khóa giúp bạn xây dựng mối quan hệ vững chắc và tạo ra một cuộc sống ý nghĩa.<br><br>Cuốn Sách Này Giúp Độc Giả Điều Gì<br><br>- Khám phá sức mạnh của sự tử tế và nhận ra rằng tử tế không chỉ là hành động giúp đỡ người khác mà là sức mạnh tiềm ẩn có thể thay đổi cuộc sống cá nhân và công việc.<br><br>- Hướng dẫn bạn cách sống tử tế, từ việc nhận diện tử tế trong chính bản thân, đến cách bạn có thể ứng dụng nó trong mọi tình huống.<br><br>- Cung cấp các bài tập thực hành, giúp bạn không chỉ lý thuyết mà còn áp dụng tử tế vào các mối quan hệ, công việc và cuộc sống hàng ngày.<br><br>- Tạo dựng mối quan hệ chân thành và bền vững thông qua các hành động tử tế trong giao tiếp và hợp tác.<br><br>- Khẳng định rằng tử tế có thể giúp bạn đạt được thành công và sự tôn trọng mà không phải hy sinh bản sắc và quyền lợi cá nhân.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Cuốn sách khiến mình suy nghĩ rất nhiều." },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["The School Of Life"],
      "publish": "NXB Dân Trí",
      "date": "2025",
      "size": "13 x 20,5 cm",
      "weight": "180 gram",
      "format": "Bìa cứng",
      "price": 53500,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B309",
      "title": "Phương Pháp Học Tập Feynman - 5 Bước Giúp Bạn Học Nhanh, Nhớ Lâu, Tiến Bộ Vượt Bậc",
      "image": "./data/img/img309.webp",
      "description": "- Bạn có đang gặp khó khăn trong việc học tập?<br><br>- Học nhiều nhưng không nhớ?<br><br>- Kiến thức không áp dụng được vào thực tế?<br><br>- Cảm thấy nhàm chán và chán nản với phương pháp học tập truyền thống?<br><br>Đừng lo lắng! Cuốn sách \"Phương Pháp Học Tập Feynman\" sẽ là chìa khóa giúp bạn giải quyết mọi vấn đề trên và chinh phục mọi mục tiêu học tập.<br><br>Phương Pháp Học Tập Feynman là gì?<br><br>Đây là phương pháp học tập độc đáo được sáng tạo bởi nhà vật lý vĩ đại Richard Feynman. Phương pháp này giúp bạn học tập hiệu quả hơn bằng cách:<br><br>- Chuyển đổi kiến thức thành ngôn ngữ đơn giản: Giải thích kiến thức một cách dễ hiểu cho người khác giúp bạn hiểu sâu hơn và nhớ lâu hơn.<br><br>- Tập trung vào ứng dụng thực tế: Phương pháp này hướng đến việc học để sử dụng, giúp bạn áp dụng kiến thức vào thực tế một cách hiệu quả.<br><br>- Kích thích tư duy sáng tạo: Quá trình \"xuất khẩu\" kiến thức thúc đẩy bộ não liên tưởng và sáng tạo, giúp bạn phát triển tư duy độc lập.<br><br>Cuốn sách \"Phương Pháp Học Tập Feynman\" dành cho ai?<br><br>- Học sinh, sinh viên: Giúp các bạn học tập hiệu quả, ghi nhớ kiến thức tốt hơn và đạt kết quả cao trong học tập.<br><br>- Người đi làm: Giúp các bạn nâng cao năng lực bản thân, học hỏi kiến thức mới và phát triển trong công việc.<br><br>- Bất kỳ ai muốn cải thiện phương pháp học tập của mình: Cuốn sách cung cấp một phương pháp học tập khoa học và hiệu quả, phù hợp với mọi đối tượng.<br><br>Nội dung cuốn sách:<br><br>- Giới thiệu về phương pháp học tập Feynman: Giải thích nguyên tắc hoạt động, lợi ích và cách áp dụng phương pháp.<br><br>- Hướng dẫn chi tiết từng bước áp dụng phương pháp: Xác định mục tiêu, hiểu rõ kiến thức, xem xét và đơn giản hóa kiến thức.<br><br>- Ví dụ minh họa: Cuốn sách cung cấp nhiều ví dụ sinh động, giúp bạn dễ dàng hiểu và áp dụng phương pháp vào thực tế.<br><br>- Lời khuyên hữu ích: Chia sẻ kinh nghiệm và bí quyết học tập hiệu quả từ tác giả và những người áp dụng thành công phương pháp.<br><br>Cuốn sách \"Phương Pháp Học Tập Feynman\" là một cẩm nang thiết yếu giúp bạn:<br><br>- Học tập hiệu quả và nhớ lâu hơn<br><br>- Áp dụng kiến thức vào thực tế một cách thành công<br><br>- Kích thích tư duy sáng tạo và phát triển bản thân<br><br>Hãy sở hữu ngay cuốn sách này để bắt đầu hành trình chinh phục kiến thức và thành công!",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Phù hợp để đọc và làm quà tặng." }
      ],
      "author": ["Âm Hồng Tín", "Lý Vĩ"],
      "publish": "NXB Dân Trí",
      "date": "2024",
      "size": "15 x 20,5 cm",
      "weight": "290 gram",
      "format": "Bìa mềm",
      "price": 86500,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B310",
      "title": "Tư Duy Ngược",
      "image": "./data/img/img310.webp",
      "description": "Chúng ta thực sự có hạnh phúc không? Chúng ta có đang sống cuộc đời mình không? Chúng ta có dám dũng cảm chiến thắng mọi khuôn mẫu, định kiến, đi ngược đám đông để khẳng định bản sắc riêng của mình không?. Có bao giờ bạn tự hỏi như thế, rồi có câu trả lời cho chính mình?<br><br>Tôi biết biết, không phải ai cũng đang sống cuộc đời của mình, không phải ai cũng dám vượt qua mọi lối mòn để sáng tạo và thành công… Dựa trên việc nghiên cứu, tìm hiểu, chắt lọc, tìm kiếm, ghi chép từ các câu chuyện trong đời sống, cũng như trải nghiệm của bản thân, tôi viết cuốn sách này.<br><br>Cuốn sách sẽ giải mã bạn là ai, bạn cần Tư duy ngược để thành công và hạnh phúc như thế nào và các phương pháp giúp bạn dũng cảm sống cuộc đời mà bạn muốn.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Tác phẩm phản ánh chân thực đời sống và con người Việt Nam." },
        { "star": 5, "info": "Cuốn sách mang giá trị nhân văn sâu sắc" }
      ],
      "author": ["Nguyễn Anh Dũng"],
      "publish": "NXB Dân Trí",
      "date": "2021",
      "size": "13 x 20 cm",
      "weight": "214 gram",
      "format": "Bìa cứng",
      "price": 104000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B311",
      "title": "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
      "image": "./data/img/img311.webp",
      "description": "Cuốn sách này thực sự đã giúp đỡ cho hàng triệu độc giả, trong đó có tôi và chắc chắn cũng sẽ có bạn. Nếu không có những ý niệm mới mẻ này thì chưa chắc tôi đã có được cuộc hôn nhân hạnh phúc như hiện nay hay có thể trở thành một người cha giàu đức hy sinh đối với các con của mình như vậy. Những vướng mắc trong mối quan hệ với vợ cách đây hai mươi năm đã từng làm tôi tức điên lên, hiện giờ thi thoảng nó vẫn thường xảy ra. Nhưng điều khác biệt là tôi đã biết khoan dung hơn, chấp nhận và thấu hiểu hơn. Tôi có thể hiểu những lời lẽ và phản ứng của vợ tôi theo cách khách quan hơn, đồng thời tôi biết cách nên đáp lại như thế nào. Có thể tôi là một chuyên gia trong lĩnh vực giao tiếp và sự khác biệt về giới tính, tuy nhiên, đối với Bonnie và các cô con gái của tôi thì việc để hiều được họ vẫn còn là những bí ẩn. Dù vậy, cuốn sách này có thể giúp chúng ta trở nên khoan dung và biết tha thứ khi ai đó không đáp lại theo cách mà ta mong đợi. May mắn thay, để xây dựng những mối quan hệ bền đẹp, tính hoàn hảo không phải là điều kiện bắt buộc.<br><br>Với những áp lực công việc ngày càng gia tăng, cùng với những đòi hỏi nhiều hơn về sự lãng mạn trong gia đình, ngày nay những mối quan hệ dường như đang thách thức hầu hết mọi người. Hiểu được người bạn đời của mình tới từ đâu sẽ giúp mối quan hệ của bạn trở nên nhẹ nhàng hơn. Bao dung với những điều khác biệt giữa hai người không có nghĩa là chấp nhận một cách thụ động mối quan hệ đầy vấn đề hoặc thiếu cảm xúc đam mê. Thay vào đó, sự thích nghi lành mạnh này dựa trên nền tảng thấu hiểu thực sự, điều đó sẽ giúp chúng ta cảm thông với người bạn đời hơn, đối đáp với họ bằng nhiều tình yêu hơn và truyền cảm hứng tốt nhất đến với họ. Bạn không thể và cũng không nên cố thay đổi người bạn đời của mình. Thay đổi là việc của họ, còn việc của bạn là thay đổi cách giao tiếp, phản ứng và đối đáp với người bạn đời của mình. Bằng sự thấu hiểu mới mẻ này, bạn sẽ có thêm sức mạnh và sự thông thái để điều chỉnh cách tiếp cận của mình. Từ việc giao tiếp tốt hơn, bạn sẽ biết cách trợ giúp hiệu quả hơn, đồng thời bạn sẽ thành công hơn khi nhận được sự trợ giúp mà bạn muốn.<br><br>Có nhiều người áp dụng sai những khái niệm trong cuốn sách này. Họ dùng ví dụ và giải thích này của tôi để bào chữa cho việc không chịu thay đổi những khía cạnh quan trọng giúp mối quan hệ trở nên tốt đẹp hơn. Chẳng hạn, tôi chỉ ra rằng đàn ông cần chui vào chiếc kén của mình thường<br><br>xuyên để thư giãn mỗi ngày. Tuy nhiên điều này không thể trở thành lý do biện minh cho việc ở lì trong đó cả ngày. Mặt khác, tôi cũng chỉ ra rằng phụ nữ nói chung thường có nhu cầu chia sẻ cảm xúc nhiều hơn đàn ông, như là một cách để đương đầu với sự căng thẳng của mình. Điều này không có nghĩa là họ có thể nói không ngừng hoặc mong chờ đàn ông phải dừng việc của họ lại để lắng nghe bất kỳ điều gì cô ấy nói hay bất cứ khi nào cô ấy muốn. Thật không may là nhiều khi những ý niệm tốt cũng có thể bị áp dụng sai. Nhưng nếu bạn đang tìm cách dùng những ý niệm này để hiểu thêm về người bạn đời của mình, để tôn trọng người khác theo cách mà họ cho là quan trọng, cũng như để người khác hiểu được những nhu cầu của mình thì cuốn sách này có thể giúp ích cho bạn.<br><br>Trên những hành trình của mình, trong lúc đợi máy bay hoặc khi ký tên lên những cuốn sách trong một sự kiện nào đó, tôi luôn gặp những đôi vợ chồng tới tìm tôi với cùng một câu chuyện. Họ đã từng li dị nhưng sau khi đọc “cuốn sách này” họ lại tái hôn và sống hạnh phúc bên nhau. Khi tôi viết cuốn Đàn ông đến từ Sao Hỏa, đàn bà đến từ Sao Kim từ mười hai năm trước, tôi biết cuốn sách này sẽ thặt chặt các mối quan hệ hơn và thậm chí còn có thể cứu vãn nhiều cuộc hôn nhân đang trên bờ vực li hôn. Điều tôi không thể ngờ là lại có nhiều người tái hợp với bạn đời của mình sau một cuộc li hôn hoặc li thân để cùng bắt đầu và dựng xây lại mối quan hệ đó. Chắc chắn sẽ có nhiều người nói rằng cuốn sách này không thể cứu vãn một mối quan hệ vướng phải những vấn đề nghiêm trọng và cho rằng họ sống tốt hơn khi không có bạn đời. Nhiều người nói rằng việc đọc cuốn sách này khi mối quan hệ của họ đã thất bại cũng giúp họ hiểu được nguyên do vì sao mối quan hệ đó không thể lâu bền. Hiểu được điều đó giúp họ có thêm can đảm để tiếp tục yêu và nắm giữ bí quyết để tìm được tình yêu.<br><br>Hầu hết những ai đọc cuốn sách này đều có thể cải thiện chất lượng mối quan hệ mà họ đang có. Chắc chắn bạn sẽ khám phá ra những ý niệm mới mẻ để cải thiện việc giao tiếp và đạt được những mục đích của riêng mình. Thậm chí nếu một ý tưởng nào đó có thể giúp bạn thấu hiểu cũng như hỗ trợ cho bạn đời, bạn bè, đồng nghiệp, cha mẹ hoặc con cái, thì điều đó cũng xứng đáng với sự quan tâm và thời gian mà bạn đã đầu tư cho nó rồi. Một thay đổi dù nhỏ nhưng có tầm quan trọng có thể mang lại những ảnh hưởng sâu sắc và lâu dài. Thật bất ngờ, một ý tưởng giúp mối quan hệ trở nên bền vững hơn cũng có thể hỗ trợ các cặp đôi vượt qua những trở ngại đầy thách thức của họ. Cuốn sách này không đề cập trực tiếp tới những thách thức của “một mối quan hệ rối loạn” nhưng nó mang lại hướng tiếp cận mới với người khác giới. Khi thấu hiểu, việc giao tiếp sẽ tự động được cải thiện. Khi sự hợp tác giữa hai người tốt hơn, hy vọng sẽ nhiều hơn và tình yêu sẽ ngự trị. Chỉ cần có tình yêu và cách thức giao tiếp tốt, hầu hết mọi vấn đề, thậm chí cả “những vấn đề lớn” đều có thể giải quyết. Đầu tiên hãy đề cập đến những vấn đề nhỏ, từ đó những vấn đề lớn sẽ dần biến mất hoặc được giải quyết một cách dễ dàng.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "ý nghĩa, Rất đáng xem" }
      ],
      "author": ["John Gray"],
      "publish": "NXB Hồng Đức",
      "date": "2019",
      "size": "14,5 x 20,5 cm",
      "weight": "430 gram",
      "format": "Bìa cứng",
      "price": 154000,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B312",
      "title": "Làm Ra Làm, Chơi Ra Chơi (Tái Bản 2021)",
      "image": "./data/img/img312.webp",
      "description": "Đã bao giờ bạn ngồi xuống để làm việc và sau đó, không hề nhận ra mình lại kết thúc bằng việc dành một (vài) tiếng đồng hồ lướt Youtube, Facebook, tin tức? Tất cả chúng ta đều đã từng làm vậy. Có vẻ như có quá nhiều thứ lôi kéo sự chú ý của chúng ta trong thời đại này, nên rất khó để thậm chí đạt đến trạng thái tinh thần giúp hoàn thành công việc một cách tốt nhất. Trong Làm ra làm chơi ra chơi, tác giả Cal Newport nhấn mạnh chủ đề “làm việc sâu” (deep work) đang ngày càng được chú trọng. Học cách làm thế nào để làm việc sâu – khả năng tập trung vào một nhiệm vụ khó nhằn mà không hề bị sao lãng – là chìa khóa để tạo ra những kết quả tốt hơn trong thời gian ngắn hơn. Cuốn sách đưa ra hai mục tiêu, được chia làm hai phần. Phần 1 nhằm thuyết phục bạn rằng giả thiết về làm việc sâu là đúng. Phần 2 giới thiệu đến bạn một số cách để tận dụng làm việc sâu bằng cách rèn luyện não bộ và chuyển đổi thói quen làm việc sang hướng đặt làm việc sâu ở trung tâm sự nghiệp. <br><br>Newport không hề đưa ra những lời khuyên xáo rỗng, mang tính lý thuyết hay giáo điều. Ông đề nghị chúng ta nên học cách làm quen với sự hời hợt và từ bỏ các công cụ truyền thông xã hội như Facebook, Instagram,.. (Thậm chí, nếu bạn không muốn làm vậy thì lỹ lẽ của ông cũng rất đáng đọc). Nếu bạn đã từng dành một ngày làm việc trong tình trạng bị sao lãng bởi đám email và thông báo hiện lên liên tục rồi băn khoăn bạn đã làm gì cả ngày thì đây chính là cuốn sách dành cho bạn.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "tình cảm, khiến mình nhớ đến quê hương nhớ nhà" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Cal Newport"],
      "publish": "NXB Công Thương",
      "date": "2023",
      "size": "13 x 20,5 cm",
      "weight": "320 gram",
      "format": "Bìa mềm",
      "price": 119500,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B313",
      "title": "Dopamine Detox - Thanh Lọc Tâm Trí Để Tập Trung Vào Những Điều Quan Trọng Nhất",
      "image": "./data/img/img313.webp",
      "description": "Đối tượng mục tiêu của sách Dopamine Detox:<br><br>- Người hay trì hoãn: Những người gặp khó khăn trong việc bắt đầu hoặc hoàn thành nhiệm vụ, thường do thiếu tập trung hoặc động lực.<br><br>- Người gặp phải sự khó khăn về khả năng tập trung: Những người thấy khó khăn trong việc duy trì tập trung vào một nhiệm vụ duy nhất trong thời gian dài và dễ bị phân tâm bởi các kích thích bên ngoài.<br><br>- Người có năng suất thấp: Những người cảm thấy họ không đạt được tiềm năng đầy đủ của mình do thiếu tập trung và hiệu quả.<br><br>- Người có thói quen dựa dẫm quá nhiều vào công nghệ: Những người thường xuyên kiểm tra điện thoại hoặc mạng xã hội, dẫn đến lãng phí thời gian và giảm năng suất.<br><br>- Người có mong muốn cải thiện khả năng tự kiểm soát: Những người muốn phát triển khả năng kiểm soát tốt hơn các xung lực và thói quen của mình, đặc biệt là những thói quen liên quan đến việc mất tập trung.<br><br>Độ tuổi: Người trưởng thành trẻ (18-35) và những người chuyên nghiệp có thể đang phải loay hoay với công việc, học tập và cuộc sống cá nhân, dẫn đến cảm giác choáng ngợp và khó tập trung.<br><br>Nghề nghiệp: Sinh viên, doanh nhân, người làm việc tự do và bất kỳ ai dựa vào khả năng tập trung và hoàn thành nhiệm vụ hiệu quả.<br><br>Sở thích: Những người quan tâm đến phát triển bản thân, mẹo tăng năng suất và chiến lược tự cải thiện.<br><br>=> Nhìn chung, Dopamine Detox hướng đến bất kỳ ai muốn cải thiện khả năng tập trung, giảm trì hoãn và đạt được mục tiêu của mình bằng cách hiểu vai trò của dopamine và áp dụng các chiến lược để quản lý nó hiệu quả.<br><br>MỤC LỤC<br><br>Quyển sách này dành cho ai?<br><br>Lời giới thiệu<br><br>Sổ tay từng bước miễn phí của bạn<br><br>Phần I - dopamine và vai trò của nó<br><br>Phần II - vấn đề<br><br>Phần III: lợi ích của giải độc dopamine<br><br>Phần IV: phương pháp ba bước để giải độc thành công<br><br>Phần V: hành động (và vượt qua sự trì hoãn)<br><br>Phần VI: tránh hiện tượng “tái nghiện dopamine”<br><br>Kết luận<br><br>Về tác giả<br><br>Sổ tay hướng dẫn hành động<br><br>LẤY LẠI TẬP TRUNG CHỈ TRONG 48 GIỜ<br><br>Bạn có thường xuyên trì hoãn không? Bạn cảm thấy bồn chồn và không thể tập trung vào công việc? Bạn gặp khó khăn trong việc cảm thấy hào hứng với những mục tiêu quan trọng?<br><br>Nếu câu trả lời là có, thì bạn có thể cần một phương pháp giải độc dopamine.<br><br>Trong thế giới hiện đại, nơi đầy rẫy những thứ gây xao nhãng, khả năng tập trung ngày càng trở nên khó đạt được. Chúng ta liên tục bị kích thích, cảm thấy bồn chồn mà không biết lý do.<br><br>Khi đến giờ làm việc, đột nhiên chúng ta lại tìm thấy vô số việc khác để làm. Thay vì nỗ lực hướng tới mục tiêu, chúng ta lại đi dạo, pha cà phê hoặc kiểm tra email. Mọi thứ dường như đều là một ý tưởng tuyệt vời - mọi thứ trừ những việc thực sự cần thiết.<br><br>Bạn có thấy mình trong tình huống trên không?<br><br>Nếu có, đừng lo lắng. Bạn đơn giản là bị kích thích quá mức.<br><br>Cuốn sách này sẽ giúp bạn giảm mức độ kích thích và lấy lại tập trung chỉ trong 48 giờ hoặc ít hơn, để bạn có thể giải quyết các nhiệm vụ quan trọng.<br><br>Cụ thể, trong cuốn sách “ tên sách”, bạn sẽ khám phá:<br><br>- Dopamine là gì và nó hoạt động như thế nào.<br><br>- Những lợi ích chính của việc hoàn thành quá trình giải độc dopamine.<br><br>- 3 bước đơn giản để thực hiện quá trình giải độc thành công trong 48 giờ tới.<br><br>- Các bài tập thực tế để loại bỏ những thứ gây xao nhãng và tăng cường sự tập trung của bạn.<br><br>- Các công cụ và kỹ thuật đơn giản để tránh bị kích thích quá mức và giúp bạn duy trì sự tập trung, cùng nhiều hơn thế nữa.<br><br>Giải độc Dopamine là cuốn sách hướng dẫn thiết yếu giúp bạn loại bỏ những thứ gây xao nhãng để cuối cùng bạn có thể dễ dàng đạt được mục tiêu của mình. Nếu bạn thích các chiến lược dễ hiểu, các bài tập thực tế và cách hướng dẫn trực tiếp, bạn sẽ yêu thích cuốn sách này.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Thibaut Meurisse"],
      "publish": "NXB Dân Trí",
      "date": "2024",
      "size": "13 x 20,5 cm",
      "weight": "110 gram",
      "format": "Bìa mềm",
      "price": 37500,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B314",
      "title": "Tâm - Sức Mạnh Khiến Cuộc Đời Như Mình Mong Muốn",
      "image": "./data/img/img314.webp",
      "description": "Dù là ai, chúng ta cũng chỉ có thời gian là những khoảnh khắc được ban tặng ở hiện tại. Việc sống tại khoảnh khắc này với một cái tâm như thế nào sẽ quyết định cuộc đời của chúng ta. Vận may có thể đến, gian khổ cũng có thể tìm đến, do đó dù các bạn đang ở trong hoàn cảnh gian nan như thế nào chăng nữa, tôi cũng mong muốn các bạn không chùn bước, không chịu thua hoàn cảnh, hãy cố gắng tiến về phía trước với một cái tâm vị tha. Nếu như vậy thì chắc chắn vận mệnh sẽ xoay theo chiều hướng tốt và một cuộc đời hạnh phúc sẽ tìm đến chúng ta. Nếu có thể nghĩ như vậy thì cuộc đời vô cùng đơn giản. Trong cuộc sống hàng ngày, nếu chúng ta cứ nỗ lực hết mình với một cái tâm vị tha thì chắc chắn vận mệnh sẽ xoay theo chiều hướng tốt và một cuộc đời hạnh phúc sẽ tìm đến.<br><br>Và điều quan trọng là tại bất cứ thời điểm nào chúng ta cũng cố gắng gìn giữ một cái tâm đẹp và thuần khiết. Đó là bí quyết để chúng ta có thể phát huy khả năng của bản thân, là chìa khóa giúp chúng ta mở được cánh cửa của một cuộc đời hạnh phúc.<br><br>Inamori Kazuo (sinh năm 1932) là một doanh nhân huyền thoại của Nhật Bản. Ông đã gây dựng nên Kyocera, một tập đoàn công nghệ cao đa quốc gia với hơn 66.000 nhân viên. Trong hai năm 2010-2012, Inamori Kazuo đã góp công lớn trong việc tái sinh hãng hàng không Japan Airlines, vốn đang trên bờ vực phá sản. Ông đã được một số trường đại học ở Nhật Bản, Mỹ và Anh trao bằng tiến sĩ danh dự cho các cống hiến trong kinh doanh và hoạt động xã hội.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 2, "info": "cũng đc" },
        { "star": 5, "info": "hay" }
      ],
      "author": ["Inamori Kazuo"],
      "publish": "NXB Công Thương",
      "date": "2022",
      "size": "13 x 19 cm",
      "weight": "150 gram",
      "format": "Bìa cứng",
      "price": 66000,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B315",
      "title": "From Strength To Strength - Thế Mạnh Tuổi Trung Niên",
      "image": "./data/img/img315.webp",
      "description": "\"Liệu thành công của tuổi trẻ có trở thành gánh nặng khi ta bước vào trung niên? Và làm thế nào để biến sự sa sút thành một cơ hội bứt phá?\"<br><br>Đó là những câu hỏi mà Arthur C. Brooks – nhà xã hội học, tác giả sách bán chạy của The New York Times – đã tự đặt ra khi nhận thấy bản thân và nhiều người tài giỏi xung quanh đang đối mặt với sự chững lại trong sự nghiệp và cuộc sống. Trong Thế Mạnh Của Tuổi Trung Niên, ông không chỉ trả lời những trăn trở đó mà còn vạch ra một lộ trình cụ thể giúp mỗi người tận dụng tối đa giai đoạn trung niên để đạt được thành công và hạnh phúc bền vững.<br><br>Bạn có đang trải qua…?<br><br>- Cảm giác lo lắng khi không còn duy trì được phong độ đỉnh cao như trước?<br><br>- Áp lực khi bước vào tuổi trung niên mà vẫn chưa đạt được những điều mong muốn?<br><br>- Hoang mang trước những thay đổi trong sự nghiệp, sức khỏe, các mối quan hệ?<br><br>Nếu những điều này từng khiến bạn trăn trở, cuốn sách này chính là lời giải dành cho bạn!<br><br>Từ thành công cũ đến thành công mới – Chuyển hóa bản thân để không \"tụt dốc\"<br><br>Trong sách, Arthur C. Brooks phân tích một cách khoa học và thực tế về:<br><br>- Sự suy giảm sự nghiệp đến sớm hơn chúng ta nghĩ: Vì sao hầu hết mọi người chạm đỉnh sự nghiệp ở độ tuổi 30-50 rồi dần mất đi lợi thế?<br><br>- Đường cong thứ hai – Mô hình thành công mới: Thay vì bám víu vào những giá trị cũ, hãy học cách chuyển dịch từ \"tài năng thiên bẩm\" sang \"trí tuệ đúc kết\".<br><br>- Từ bỏ để tiến lên: Đôi khi, từ bỏ đúng thứ sẽ giúp ta tiến xa hơn. Điều gì nên giữ, điều gì cần buông?<br><br>- Tìm lại ý nghĩa và hạnh phúc thực sự: Thành công không chỉ là địa vị hay tiền bạc, mà còn là sự bình yên và cảm giác trọn vẹn trong tâm hồn.<br><br>Một cuốn sách dành cho ai?<br><br>Thế mạnh của tuổi trung niên không chỉ dành cho những người đã bước vào giai đoạn này, mà còn hữu ích cho bất kỳ ai muốn chuẩn bị sẵn sàng cho sự chuyển đổi không thể tránh khỏi của cuộc đời. Đây là một tác phẩm kết hợp giữa nghiên cứu khoa học, triết lý nhân sinh và kinh nghiệm thực tiễn, giúp độc giả có cái nhìn khách quan và chủ động hơn trong việc tái định hình cuộc sống của mình.<br><br>Bằng lập luận sắc bén và lối viết gần gũi, Arthur C. Brooks không chỉ giúp độc giả hiểu về quy luật tự nhiên của sự nghiệp và cuộc sống, mà còn đưa ra những hướng dẫn cụ thể để mỗi người có thể tận dụng tối đa thế mạnh của mình trong giai đoạn trung niên. Đây là một cuốn sách đáng đọc đối với bất kỳ ai mong muốn tìm kiếm thành công và hạnh phúc dài lâu.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Arthur C. Brooks"],
      "publish": "NXB Thế giới",
      "date": "2025",
      "size": "10,5 x 23,5cm",
      "weight": "390 gram",
      "format": "Bìa mềm",
      "price": 158000,
      "quantity": 700,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B316",
      "title": "Sống Cuộc Đời Giàu Có Nhất Của Bạn",
      "image": "./data/img/img316.webp",
      "description": "Xã hội ngày nay đã nhồi vào tâm trí chúng ta một định nghĩa thành công nông cạn: một kiểu thành công mà dù có đạt được nó bạn cũng không bao giờ thấy thỏa mãn, mà thậm chí còn rơi vào trạng thái bức bối, trống rỗng, và hối hận triền miên.<br><br>Trong Sống cuộc đời giàu có nhất của bạn, bạn sẽ khám phá một hệ thống có khả năng thay đổi cuộc đời bạn, giúp bạn có được một cuộc sống giàu đẹp nhất có thể trước khi quá trễ. Bạn sẽ học được một bộ khung hành động dựa trên 8 thói quen của những người giàu có thực sự. Họ cũng sẽ chỉ ra những thực tế không phải ai cũng biết nhưng hoàn toàn đúng đắn:<br><br>- Cách để trở thành một người kiến tạo khoảnh khắc hoàn hảo<br><br>- Tại sao người bạn đời sẽ quyết định 90% hạnh phúc của bạn<br><br>- Ích lợi không ngờ của việc biến mất trong một năm<br><br>Bằng những công cụ thực tế và chiến thuật hữu ích, cuốn sách vừa đưa ra triết lý, vừa chỉ ra phương pháp để tận hưởng một một sống giàu có thực sự: tràn đầy sức mạnh cá nhân, lòng trung thực hiếm thấy, công việc thỏa mãn, và một lối sống khiến bạn cảm thấy rằng may mắn cuối cùng cũng đã mỉm cười với bạn.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 3, "info": "cốt truyện hay" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Robin Sharma"],
      "publish": "NXB Trẻ",
      "date": "2025",
      "size": "13 x 20,5 cm",
      "weight": "510 gram",
      "format": "Bìa cứng",
      "price": 170000,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B317",
      "title": "Tư Duy Mở",
      "image": "./data/img/img317.webp",
      "description": "Con người đang sống trong thời đại công nghệ, khi mọi thứ thay đổi chóng mặt, điều đó đòi hỏi chúng ta phải linh hoạt trong cách tư duy để bắt kịp xu hướng toàn cầu. Hay nói cách khác, chúng ta cần có một tư duy mở để đón nhận và khai phá kiến thức mới, bởi nếu chúng ta cứ khăng khăng giữ định kiến của mình thì sự phát triển sẽ đi vào ngõ cụt.<br><br>Cụ thể hơn, người có tư duy mở tin rằng chỉ cần họ nỗ lực, thay đổi là có thể tiến bộ hơn. Họ sẽ vui vẻ chấp nhận thử thách, xem thử thách như cơ hội để học hỏi được những điều hay cái mới. Khi đối mặt với khó khăn hay không thành công, người có tư duy mở thường có thái độ: “Cách này không hiệu quả, vậy mình thử cách khác”. Đối với họ, thất bại chỉ là bài học giúp họ hoàn hảo hơn trên con đường khẳng định bản thân và phát triển sự nghiệp.<br><br>Vậy làm thế nào để biết được chúng ta đang có loại tư duy nào, đóng hay mở? Và làm thế nào chúng ta nhận ra chúng?<br><br>Nhưng làm thế nào để có được tư duy mở?<br><br>Và tư duy mở góp phần vào cuộc sống của chúng ta thế nào?<br><br>Khi bạn đặt ra những câu hỏi đó thì cuốn sách này sinh ra để dành cho bạn. Cuốn sách được biên soạn dựa trên sự học tập và nghiên cứu tài liệu trong và ngoài nước cũng như từ những trải nghiệm của bản thân tác giả sẽ mang lại cho bạn những giá trị hữu ích của tư duy mở, giúp bạn tự tin chinh phục ước mơ, sẵn sàng đón nhận mọi chướng ngại và luôn nở nụ cười hạnh phúc.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "tác phẩm hay" },
        { "star": 5, "info": "Nhớ vị tết nhớ vị nhà" }
      ],
      "author": ["Nguyễn Anh Dũng"],
      "publish": "NXB Dân Trí",
      "date": "2023",
      "size": "13 x 20,5 cm",
      "weight": "220 gram",
      "format": "Bìa mềm",
      "price": 103500,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B318",
      "title": "Buông Bỏ Chủ Nghĩa Hoàn Hảo - Tự Do Với Những Điều Không Hoàn Hảo",
      "image": "./data/img/img318.webp",
      "description": "Bạn có từng mong muốn mọi thứ phải thật hoàn hảo? Một công việc chỉn chu, một mối quan hệ không vết nứt, một phiên bản bản thân không bao giờ mắc sai lầm. Nhưng càng cố gắng để hoàn hảo, ta lại càng thấy mình kiệt sức, cô đơn và lạc lối.<br><br>Cuốn sách Buông bỏ chủ nghĩa hoàn hảo là lời nhắn gửi dành cho những ai đã mệt mỏi vì cố gắng trở nên hoàn hảo trong mọi việc. Dựa trên nền tảng tâm lý học và kinh nghiệm trị liệu thực tế, tác giả giúp người đọc hiểu rằng: chúng ta không thể loại bỏ chủ nghĩa hoàn hảo, nhưng có thể học cách sống cùng nó một cách lành mạnh hơn.<br><br>Buông bỏ chủ nghĩa hoàn hảo dẫn dắt bạn đi ngược về nguồn gốc của chủ nghĩa hoàn hảo, tìm hiểu vì sao nó hình thành, ảnh hưởng đến cảm xúc và hành vi như thế nào, từ đó học cách tháo gỡ áp lực và sống cân bằng hơn giữa nỗ lực và tự chấp nhận.<br><br>Tác giả<br><br>Yesel Yoon là chuyên viên trị liệu tâm lý với nhiều năm kinh nghiệm trong việc hỗ trợ những người mắc chứng chủ nghĩa hoàn hảo, kiệt sức, lo âu và căng thẳng mãn tính.<br><br>Cô viết cuốn sách Buông bỏ chủ nghĩa hoàn hảo không chỉ từ góc nhìn của một nhà trị liệu, mà còn từ trải nghiệm của chính mình – một người từng rơi vào vòng xoáy cầu toàn và đang học cách hồi phục. Vì thế, từng trang sách không đơn thuần chứa đựng kiến thức cần thiết mà còn là lời nhắn gửi, sự đồng cảm từ một người từng trải",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Yesel Yoon"],
      "publish": "NXB Dân Trí",
      "date": "2025",
      "size": "14,5 x 20,5 cm",
      "weight": "270 gram",
      "format": "Bìa cứng",
      "price": 78500,
      "quantity": 500,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B319",
      "title": "Một Đời Như Kẻ Tìm Đường",
      "image": "./data/img/img319.webp",
      "description": "Hai cuốn sách trước của Giáo sư Phan Văn Trường, Một đời thương thuyết và Một đời quản trị, là sự chắt lọc từ những trải nghiệm trong suốt nhiều năm tháng nghề nghiệp của bản thân. Tuy nhiên, đến với cuốn sách này, tác giả lại muốn dành một khoảng không gian riêng để có thể phản ảnh những cảm nhận cá nhân về cuộc sống, với góc nhìn từ những năm tháng tuổi trẻ cho đến độ tuổi xế chiều này.<br><br>Khoảnh khắc khó chịu nhất có lẽ là khi mình đã lỡ chọn một hướng đi, nhưng ngộ được rằng con đường này nhiều chông gai, lắm rào cản và lại còn không phù hợp. Trong lòng, lúc ấy chỉ muốn được quay trở lại để bắt đầu, để lựa chọn lại một hướng khôn ngoan hơn. <br><br>Việc lựa chọn tất nhiên đòi hỏi nhiều sáng suốt, nhưng trên hết người lựa chọn phải hiểu rõ thế giới mà mình đang sống và biết rõ chính mình muốn gì, và một mặt khác phải sẵn sàng cáng đáng lấy trách nhiệm trong sự lựa chọn. Nói một cách hoa mỹ hơn, mình chỉ tìm ra hướng đi đúng đắn và phù hợp cho bản thân nếu thấu hiểu rõ bản năng, bản ngã và cả tiềm thức của chính mình. Cùng một tinh thần luôn sẵn sàng đối mặt với những hệ quả tốt và xấu từ sự lựa chọn ấy.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Phan Văn Trường"],
      "publish": "NXB Trẻ",
      "date": "2019",
      "size": "15,5 x 23 cm",
      "weight": "489 gram",
      "format": "Bìa mềm",
      "price": 148500,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B320",
      "title": "Chiến Thắng Bản Thân Là Chiến Thắng Hiển Hách Nhất",
      "image": "./data/img/img320.webp",
      "description": "Bạn luôn có một tiếng nói thầm kín bên trong mình để ngăn cản bạn vượt ra khỏi vùng an toàn.<br><br>Bạn luôn sợ hãi trước mọi quyết định: bạn sợ thiếu nguồn lược, sợ không được yêu thương, sợ bị người khác từ chối,...<br><br>Nỗi sợ của bạn xuất phát từ sự thiếu tự tin.<br><br>Điều quan trọng nhất là bạn không biết phải vượt qua những nỗi sợ, sự lo lắng như thế nào.<br><br>Cuốn sách này thực sự dễ đọc, nếu muốn tìm hiểu về việc chiến thắng những suy nghĩ trong tâm lý thì đọc 1 cuốn này thôi cũng bằng đọc rất nhiều cuốn sách khác.<br><br>Tác giả giống như tổng hợp những tinh túy hay nhất của các cuốn sách khác về tâm lý, đặt mục tiêu, đi tìm mục đích sống để đưa vào cuốn sách này.<br><br>Mỗi chương đều ngắn gọn, xúc tích, nội dung tập trung không lan man. Chỉ cần dành ít thời gian là có thể nắm bắt và áp dụng được luôn.<br><br>Nội dung cuốn sách thu hút và sắp xếp logic để giải quyết vấn đề đặt ra:<br><br>Xác định kẻ thù trong nội tâm là gì: Nỗi sợ và thiếu tự tin: Kẻ thù là chính bản thân mình<br><br>Đưa ra các bước hành động để chiến thắng kẻ thù này: Chịu trách nhiệm, hành động, nói không, quản trị cảm xúc, dừng trì hoãn, quản lý thời gian,...<br><br>Đưa ra phương pháp đặt mục tiêu để đạt được những thứ mong muốn<br><br>Để đạt được mục tiêu, cần xác định rõ lẽ sống, mục đích sống của bản thân là gì<br><br>Cuối cùng là làm thế nào để tự tin<br><br>Cuốn sách rất thực dụng ở việc giới thiệu thêm những cuốn sách sâu hơn để bạn có thể đọc vào 1 khía cạnh cụ thể trong sách.<br><br>Tác giả cuốn sách<br><br>Darius Foroux (phát âm là Da-reeus Fo-roo) là tác giả của 8 cuốn sách và là người tạo ra 8 khóa học trực tuyến. Ông viết về năng suất, kinh doanh, chủ nghĩa khắc kỷ và xây dựng sự giàu có. Ý tưởng và công việc của ông đã được đăng trên TIME, NBC, Fast Company, Inc., Observer và nhiều ấn phẩm khác. Cho đến nay đã có hơn 30 triệu người đọc các bài viết của ông.",
      "topic": [
        "kynang"
      ],
      "review": [
        { "star": 3, "info": "ý nghĩa, lôi cuốn" },
        { "star": 4, "info": "hayy" }
      ],
      "author": ["Darius Foroux"],
      "publish": "NXB Dân Trí",
      "date": "2024",
      "size": "13 x 20,5 cm",
      "weight": "200 gram",
      "format": "Bìa mềm",
      "price": 59500,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B401",
      "title": "Doraemon Movie Story Màu - Nobita và đảo giấu vàng",
      "image": "./data/img/img401.webp",
      "description": "Một hòn đảo kì lạ đột nhiên xuất hiện trên Thái Bình Dương! Nhóm bạn Nobita đã lên thuyền bắt đầu hành trình đi tìm kho báu! Nhưng hải tặc cũng xuất hiện…!?",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 4,
          "info": "Truyện hay"
        },
        {
          "star": 5,
          "info": "Giao hàng nhanh"
        }
      ],
      "author": [
        "Fujiko F Fujio"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2026",
      "size": "18 x 13 cm",
      "weight": "140 gram",
      "format": "Bìa mềm",
      "price": 35000,
      "quantity": 850,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B402",
      "title": "Doraemon Movie Story Màu - Nobita và viện bảo tàng bảo bối",
      "image": "./data/img/img402.jpg",
      "description": "Để tìm lại chiếc chuông bị siêu trộm DX lấy mất của Doraemon, nhóm Nobita đã đến “Viện bảo tàng bảo bối”, nơi trưng bày rất nhiều món bảo bối bí mật.<br><br>Trong quá trình tìm kiếm ở bảo tàng, các bạn nhỏ đã khám phá ra rất nhiều sự thật..!<br><br>Rốt cuộc siêu trộm DX là ai!? Chiếc chuông của Doraemon có bí mật gì?<br><br>Mời bạn đón đọc kiệt tác truyện dài đầy kỉ niệm này để hiểu thêm về sự ra đời của các món bảo bối bí mật nhé!",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Đã coi phim nhưng vẫn mua truyện, đúng là đáng tiền"
        }
      ],
      "author": [
        "Fujiko F Fujio"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2025",
      "size": "18 x 13 cm",
      "weight": "180 gram",
      "format": "Bìa mềm",
      "price": 35000,
      "quantity": 1210,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B403",
      "title": "Nhất quỷ nhì ma, thứ ba (vẫn là) Takagi - Tập 23",
      "image": "./data/img/img403.webp",
      "description": "Ai cũng biết Takagi tinh quái rất hay trêu chọc anh chàng Nishikata, nhưng kì thực vì \"người ta để ý đến cậu nên mới thế\". Còn anh chàng này thì ngày qua ngày, lúc nào cũng tìm cách để trả đũa, cho cô nàng \"biết tay\", nhưng bao giờ cũng là người thua cuộc...! Thời còn đi học là thế. Liệu đến bao giờ chàng trai kia mới lớn và nhận ra tình cảm của cô bạn cùng lớp nhỉ...?<br><br>Nhưng đó là việc xảy ra trong chính truyện NHẤT QUỶ NHÌ MA, THỨ BA TAKAGI mà chúng ta đã và đang theo dõi, hãy cứ để tác phẩm chính này qua một bên, để đến với: NHẤT QUỶ NHÌ MA, THỨ BA (VẪN LÀ) TAKAGI - Phần hậu truyện kể về quãng thời gian sau khi Takagi & Nishikata kết hôn, họ có với nhau một bé gái và cuộc sống êm đềm nhưng cũng không kém phần vui nhộn của cả ba.<br><br>Hai phần truyện cùng phát hành song song, hẳn sẽ mang lại rất nhiều điều thú vị cũng như tò mò cho bạn đọc. Và chắc chắn bạn sẽ càng tâm đắc hơn với đoạn kết đầy ngọt ngào đã biết trước của cặp đôi trong phần 1, nhưng là để mở ra những... \"drama\" mới cùng với cô con gái của họ!<br><br>NHẤT QUỶ NHÌ MA, THỨ BA (VẪN LÀ) TAKAGI có hình thức tương đồng với phần chính truyện, mỗi cuốn của bản in đầu vẫn được tặng kèm 1 Postcard cực đẹp. Đừng bỏ lỡ nếu đã yêu mến TAKAGI & NISHIKATA nhé!!<br><br><i>Quà tặng chỉ dành cho bản in đầu.</i>",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Thích bộ này cực, đã mua trọn bộ tới tập này rồi"
        }
      ],
      "author": [
        "Mifumi INABA",
        "Soichiro YAMAMOTO"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2025",
      "size": "18 x 13 cm",
      "weight": "170 gram",
      "format": "Bìa mềm",
      "price": 30000,
      "quantity": 540,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B404",
      "title": "Khu Rừng Đom Đóm (Tái Bản)",
      "image": "./data/img/img404.webp",
      "description": "Trong khi chạy vào khu rừng của thần linh và yêu quái ở quê nội, cô bé Hotaru đã bị lạc và ngồi khóc. May mắn thay, cô được một linh hồn của cậu thiếu niên đeo mặt nạ dẫn ra khỏi rừng. Từ đó hai người nhanh chóng làm bạn cùng nhau, tuy nhiên, cô bé (cũng như loài người nói chung) tuyệt đối không được chạm vào cậu, nếu không cậu sẽ bị tan biến mãi mãi. Cậu thiếu niên là một đứa trẻ bị bỏ trong rừng từ rất lâu về trước. Thần Núi thương tình, đã hóa phép cho cậu sống lại nhưng chỉ cần bị con người đụng nhẹ, bùa chú sẽ biến mất và cậu sẽ chết. Mỗi kì nghỉ hè, cô bé đều đến khu rừng thăm cậu. Mãi khi học cấp ba, cô nhận ra mình đã yêu linh hồn ấy. Cả hai bắt đầu khao khát được chạm vào nhau và ôm lấy nhau.<br><br>Một tình yêu tuyệt đẹp nhưng quá đỗi mong manh tựa như những con đóm đóm mùa hè, chỉ sống một thời gian thật ngắn rồi mất đi.",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Từ lúc NXB Trẻ thông báo tái bản, mình đã trông mong suốt. Giờ mình đã có thể sưu tầm được Khu rừng đom đóm. Thật Tuyệt vời mà!!!"
        }
      ],
      "author": [
        "Yuki Midorikawa"
      ],
      "publish": "NXB Trẻ",
      "date": "2023",
      "size": "19 x 13 cm",
      "weight": "168 gram",
      "format": "Bìa mềm",
      "price": 65000,
      "quantity": 110,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B405",
      "title": " [Manga] Dược Sư Tự Sự - Tập 14 - Bản Đặc Biệt",
      "image": "./data/img/img405.webp",
      "description": "Sau khi giải quyết vụ ồn ào liên quan đến ma quỷ ở cung Kim Cương, làm kem để cứu Tiểu Lan, lần này, Miêu Miêu phát hiện ra khả năng em bé trong bụng Ngọc Diệp phi là ngôi thai ngược. Vì vậy, cô đã xin phép cho mời nghĩa phụ vào hậu cung. Miêu Miêu đến lớp học để chạy việc cho nghĩa phụ. Ở đó, cô để ý đến một điều gì đấy bất thường trong hậu cung...<br><br>Trong tập 14 này, Miêu Miêu có cuộc tái ngộ với một nhân vật không ngờ tới!!",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "MaoMao dễ thương quá"
        }
      ],
      "author": [
        "Natsu Hyuuga",
        "Touco Shino",
        "Itsuki Nanao",
        "Nekokurage"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2025",
      "size": "18 x 13 cm",
      "weight": "180 gram",
      "format": "Bìa mềm",
      "price": 68000,
      "quantity": 660,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B406",
      "title": "Bốn mùa yêu thương - Điều ước mùa Đông",
      "image": "./data/img/img406.jpg",
      "description": "Mùa Đông phủ tuyết trắng lên khu rừng nhỏ, mang theo cái lạnh dịu dàng và sự yên ắng của những ngày dài. Trong chiếc hang quen thuộc, bé Cáo Tuyết cuộn mình chờ mẹ trở về, ôm trong tim một điều ước bé xíu giữa đêm dài giá rét.<br><br>Cuộc gặp gỡ với Ngôi Sao bé bỏng đã mở ra một hành trình kì diệu, nơi Cáo Tuyết học cách lắng nghe, sẻ chia và trao đi hơi ấm giữa mùa Đông lạnh lẽo. Câu chuyện của Điều ước mùa Đông nhẹ nhàng nhắc ta rằng: Mỗi yêu thương được trao đi đều thắp sáng thế giới thêm một chút, và điều ước đẹp đẽ nhất sẽ luôn tìm được đường trở về với trái tim mình.<br><br>***<br>Mỗi mùa trong năm mang đến những cảm xúc và nguồn năng lượng sống khác nhau, thế nhưng cả bốn mùa đều gặp nhau ở một điểm: Tình yêu thương chính là ánh sáng tuyệt vời nhất để trẻ thơ ngắm nhìn và đón nhận thế giới.<br><br>Mời các bạn tìm đọc trọn bộ Bốn mùa yêu thương (4 cuốn):<br><br>Bốn mùa yêu thương - Ông Gấu ghét mùa Xuân<br><br>Bốn mùa yêu thương - Cuộc phiêu lưu mùa Hè<br><br>Bốn mùa yêu thương - Chiếc đèn mùa Thu<br><br>Bốn mùa yêu thương - Điều ước mùa Đông<br><br>---<br>Mai Anh Đoàn<br><br>Tên thật: Đoàn Thị Mai Anh<br><br>Sinh năm 1988.<br><br>Tốt nghiệp Đại học Ngoại thương TP.HCM.<br><br>Hiện đang sống và làm việc tại TP.HCM.<br><br>Sách đã in tại NXB Kim Đồng<br><br>Mẹ tớ là người ngoài hành tinh (2019)<br><br>Ve Sầu phiêu du Bắc Cực (2025)<br><br>Trong thế giới cô nàng 10 tuổi (2025)<br><br>Bộ 4 tập Đại dương thủ thỉ (2025)",
      "topic": [
        "truyentranh"
      ],
      "review": [],
      "author": [
        "Mai Anh Đoàn",
        "Châu Phạm"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2026",
      "size": "21 x 21 cm",
      "weight": "120 gram",
      "format": "Bìa mềm",
      "price": 45000,
      "quantity": 300,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B407",
      "title": "Danh Nhân Thế Giới - Newton (Tái Bản 2022)",
      "image": "./data/img/img407.webp",
      "description": "Chắc các bạn đã được nghe chuyện Newton nhìn thấy quả táo rơi xuống đất và phát hiện ra “Lực vạn vật hấp dẫn”. Newton còn phát hiện ra rằng Mặt Trăng không rơi vào Trái Đất như quả táo là do khoảng cách và trọng lực mà lực hấp dẫn tác động khác nhau.<br><br>Vào thời điểm loài người chưa ai ra được ngoài khoảng không vũ trụ, Newton đã phát hiện ra có một sức mạnh thần bí nào đó tác động vào giữa các vì sao. Và ông còn biết rằng ánh sáng cũng có nhiều màu sắc và tính chất khác nhau.<br><br>Mặc dù có những phát hiện vĩ đại nhưng ông vẫn chỉ khiêm tốn khi nói: “Thế giới của khoa học rộng lớn như biển cả chứa đựng bao báu vật, tôi chỉ như đứa trẻ tìm thấy một vỏ sò trên bờ biển ấy mà thôi.”<br><br>Hơn 200 năm qua, những gì Newton dâng hiến cho khoa học mãi mãi được nhân loại trân trọng và coi ông như một ngôi sao lớn tỏa sáng trên bầu trời.<br><br>Isaac Newton (1642-1727)<br><br>1642: Sinh ngày 25 tháng 12 ở vùng Woolsthornpe-by-Colsterworth nước Anh<br><br>1655: Học Trường Hoàng Gia ở đảo Grantham<br><br>1661: Học Trường Trinity, thuộc Trường Đại học Cambrigde<br><br>1665: Do dịch hạch nên tạm lánh về quê, lúc này bắt đầu nghiên cứu về thuyết lực vạn vật hấp dẫn, kính viễn vọng, phép tính vi phân<br><br>1668: Hoàn chỉnh kính viễn vọng<br><br>1669: Trở thành giáo sư giảng dạy về Quang học Trường Đại học Cambrigde<br><br>1671: Hội viên Hội Khoa học Hoàng Gia<br><br>1683: Tìm ra nguyên tắc của lực vạn vật hấp dẫn<br><br>1687: Xuất bản cuốn “Những nguyên lí”<br><br>1689: Đi Luân Đôn và trở thành Ủy viên Quốc hội, đại biểu của Trường Đại học Cambrigde<br><br>1692: Cuốn luận án bị đốt cháy trong phòng nghiên cứu. Trong 2 năm, bị khủng hoảng về tinh thần<br><br>1694: Nghiên cứu về sự hoạt động của mặt trăng<br><br>1696: Đến Luân Đôn làm Giám đốc Cục In tiền<br><br>1699: Giám đốc Sở Tiền tệ<br><br>1703: Chủ tịch Hội Khoa học Hoàng Gia<br><br>1704: Xuất bản cuốn “Quang học”<br><br>1705: Được ban tước vị “Quý tộc” - Tước vị đầu tiên trao cho một nhà khoa học<br><br>1710: Giữ chức Viện trưởng Viện Giám sát đài thiên văn<br><br>1727: Mất ngày 20 tháng 3",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Truyện hay, bổ ích, vừa được đọc truyện vừa biết thêm về danh nhân thế giới"
        }
      ],
      "author": [
        "Neung In Publishing Company"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2022",
      "size": "20.5 x 14.5 cm",
      "weight": "200 gram",
      "format": "Bìa mềm",
      "price": 30000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B408",
      "title": "Chữ cái tiếng Việt diệu kì",
      "image": "./data/img/img408.webp",
      "description": "Với cuốn sách mới lạ và hấp dẫn này, 145 từ vựng được sắp xếp theo thứ tự bảng chữ cái tiếng Việt, trong đó mỗi chữ cái được tác giả lời chọn ra 5 từ vựng để hoạ sĩ diễn giải, “định nghĩa” bằng hình ảnh minh hoạ đầy sáng tạo. Hình thức thể hiện này giúp các chữ cái và từ vựng tiếng Việt được thể hiện trực quan, dễ hiểu, dễ ứng dụng vào đời sống, đặc biệt là đối với đối tượng các em nhỏ đang cần xây dựng vốn từ vựng và cách sử dụng chúng.<br><br>Đây cũng là lần đầu tiên 29 chữ cái tiếng Việt được trình bày tượng hình, giúp độc giả thêm yêu vẻ đẹp của tiếng Việt thân thương. Vì vậy, đối tượng độc giả mà cuốn sách hướng đến còn là bạn đọc tuổi trưởng thành, những người yêu sự phong phú của tiếng Việt; các bạn có tư duy thẩm mĩ cao và hứng thú với các tranh minh hoạ độc đáo trong sách.",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Phù hợp với trẻ em, bé nhà mình thích lắm"
        }
      ],
      "author": [
        "Minh Thông",
        "Kim Dung"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2026",
      "size": "14,5 x 16 cm",
      "weight": "225 gram",
      "format": "Bìa mềm",
      "price": 90000,
      "quantity": 0,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B409",
      "title": "Kho tàng của bố - Loving eyes",
      "image": "./data/img/img409.webp",
      "description": "\"Kho tàng của bố\" giống như một cuộc đối thoại giữa nhiều thế hệ. Câu chuyện mở đầu bằng một thắc mắc: “Tôi không hiểu vì sao Bố luôn giữ tất tần tật mọi thứ.” Cuốn sách mời độc giả cùng suy ngẫm về những lựa chọn trong cuộc sống: sửa chữa hay mua mới, níu giữ hay thả trôi, nuôi dưỡng những điều đang có hay kiếm tìm một thứ gì mới?<br><br>Với cuốn sách tranh này, hoạ sĩ Hoàng Giang sử dụng các chất liệu màu nước, than chì và phấn màu, giúp “Kho tàng của bố” trở thành một tác phẩm nghệ thuật đầy tình cảm, nhiều chiều sâu và lớp lang",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Truyện hay"
        },
        {
          "star": 3,
          "info": "Vận chuyển chậm"
        }
      ],
      "author": [
        "Bùi Phương Tâm",
        "Hoàng Giang"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2025",
      "size": "27 x 22 cm",
      "weight": "240 gram",
      "format": "Bìa mềm",
      "price": 80000,
      "quantity": 30,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B410",
      "title": "Masamune Báo Thù - Tập 9",
      "image": "./data/img/img410.webp",
      "description": "Hai người đã bắt đầu hẹn hò… nhưng mà...<br><br>Mặc dù Aki đã biết về quá khứ của Masamune, nhưng hai người vẫn quyết định hẹn hò. Lần đầu hẹn hò, cơ thể Masamune lại xuất hiện triệu chứng lạ?<br><br>Trong khi đó, cảm xúc của Yoshino, người đã luôn hỗ trợ cho công cuộc báo thù của Masamune cũng bắt đầu thay đổi…<br><br>Đó là rung cảm của thiếu nữ hay là… Nội tâm của cả “Giò Heo”, “Công chúa ngang ngược” lẫn “sư phụ” đều có sự dao động, mời các bạn đón đọc diễn biến tập 9 của câu chuyện tam giác tình yêu vừa hài hước nhưng cũng đầy xúc động!!",
      "topic": [
        "truyentranh"
      ],
      "review": [],
      "author": [
        "Hazuki Takeoka",
        "Tiv"
      ],
      "publish": "NXB Kim Đồng",
      "date": "2026",
      "size": "18 x 13 cm",
      "weight": "185 gram",
      "format": "Bìa mềm",
      "price": 38000,
      "quantity": 600,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B411",
      "title": "Quan Hệ Bạn Bè? - Tập 2 (Tái Bản 2022)",
      "image": "./data/img/img411.webp",
      "description": "Bạn có từng thầm thương trộm nhớ, có từng vì một nụ cười mà trái tim bỗng rung động không thôi?<br><br>Phương Đường và Giáp Cốc Thụ trong “Quan hệ bạn bè?” cũng đã trải qua một thanh xuân như thế với những ấm áp ngọt ngào xen lẫn những u buồn thoáng qua.<br><br>Tiếp nối câu chuyện xoay quanh mối quan hệ giữa ba nhân vật Giáp Cốc Thụ (A Thụ), Phương Đường và Bạch Cáp, tập truyện lần này khai thác sâu hơn về quá khứ giấu kín của Phương Đường.<br><br>Nỗi sợ hãi muộn phiền đến từ quá khứ tạo thành chướng ngại trong lòng Phương Đường sẽ được mở ra. Những hiểu lầm và mâu thuẫn xuất hiện đẩy mọi thứ lên đến cao trào. Sẽ có những lời nói dối, sẽ có những cách xa và cả những lần cãi vã, để câu chuyện đi đến hồi kết sau cùng.<br><br>Liệu rằng lời hồi đáp của yêu thương có tới? Mối tình ngây ngô, vụng về giữa Giáp Cốc Thụ và Phương Đường liệu có đơm hoa kết quả? Phương Đường liệu có tìm được ánh dương ấm áp cho mình? Hãy cùng tìm câu trả lời trong “Quan hệ bạn bè?” 2 nhé!",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Hóng bộ này lâu lắm rồi, A Thụ dễ thương quá<3"
        }
      ],
      "author": [
        "Từ Vụ A"
      ],
      "publish": "NXB Dân Trí",
      "date": "2022",
      "size": "20.5 x 14.5 cm",
      "weight": "350 gram",
      "format": "Bìa mềm",
      "price": 125000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B412",
      "title": "Vitamin Mèo Và Những Câu Chuyện Bất Tận",
      "image": "./data/img/img412.webp",
      "description": "Vào một ngày mưa, Tường Minh tìm thấy “kho báu nhỏ” của mình ở một bãi rác, mở ra những ngày tháng đầy tiếng cười và cả “nước mắt” của con sen và các “quàng thượng”.<br><br>Bằng nét vẽ đáng yêu, màu sắc rực rỡ và những mẩu chuyện hài hước, Vitamin Mèo cung cấp đủ “chất dinh dưỡng” cần thiết dành cho bạn sau một ngày học tập và làm việc căng thẳng.<br><br>Mời bạn bước vào thế giới của 6 con méo và 1 con chò.",
      "topic": [
        "truyentranh"
      ],
      "review": [],
      "author": [
        "Tường Minh",
        "Trâm Anh"
      ],
      "publish": "NXB Thế giới",
      "date": "2026",
      "size": "20.5 x 14.5 cm",
      "weight": "180 gram",
      "format": "Bìa mềm",
      "price": 129000,
      "quantity": 0,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B413",
      "title": "Biết Ra Sao Ngày Sau - Tự Truyện Chân Thật Của Một Họa Sĩ Truyện Tranh",
      "image": "./data/img/img413.webp",
      "description": "Cậu bé Phan lớn lên ở một thị trấn nhỏ nhưng mang trong lòng giấc mơ to: trở thành họa sĩ truyện tranh. Với một chút gan lì và nhiều chút ngây thơ, cậu lao vào hành trình thực hiện giấc mơ theo cách duy nhất cậu biết: thi vào một trường đại học nghệ thuật.<br><br>Từ những buổi học đầy nước mắt đến cú sốc của thực tế phũ phàng, hành trình trở thành họa sĩ truyện tranh của Phan đầy ắp những tình huống dở khóc dở cười. Nhưng đằng sau tất cả là câu hỏi lớn: liệu theo đuổi giấc mơ có phải là điều quan trọng nhất; liệu có thể sống sót qua những ngày hết sạch mì gói chỉ bằng đam mê?<br><br>Lựa chọn con đường nghệ thuật đã là một quyết định khó, lựa chọn làm họa sĩ truyện tranh lại còn oái oăm hơn; Phan đã vượt qua những khó khăn từ bên ngoài và cả từ chính bên trong như thế nào? Sau 10 năm kể từ ngày bắt đầu vẽ cuốn truyện tranh đầu tiên, Phan (Mèo Trắng) đã nhìn lại và kể cho chúng ta nghe qua cuốn tự truyện 100% chân thật và 1000% cảm động này.<br><br>Biết ra sao ngày sau - tác phẩm mới nhất của họa sĩ Phan - là tự truyện bằng truyện tranh (graphic memoir) đầu tiên tại Việt Nam được thực hiện đúng nghĩa. Với hơn 15 năm làm nghề, Phan đã chọn thể hiện cuộc đời mình không phải bằng văn xuôi hay phỏng vấn, mà bằng truyện tranh: công cụ kể chuyện thân thuộc nhất với anh.<br><br>Đây là sự lựa chọn dũng cảm của người kể chuyện: dùng chính bản thân mình để làm chất liệu.Tác phẩm không cố \"drama hoá\" quá khứ hay kể lể nỗi đau. Phan đã chọn một cách kể tinh tế, hài hước, giản dị; như thể bạn đang mở một hộp ký ức, từng trang là một mảnh ghép chân thật.<br><br>Graphic memoir (hay còn gọi là tự truyện bằng truyện tranh) là thể loại nơi tác giả kể lại chính cuộc đời mình thông qua hình ảnh và lời thoại. Nhưng không giống một quyển nhật ký, nó không chỉ mô tả sự kiện. Graphic memoir giao thoa giữa văn học-điện ảnh-mỹ thuật để kể lại ký ức bằng một ngôn ngữ vừa riêng tư, vừa giàu tính phổ quát.",
      "topic": [
        "truyentranh",
        "kynang"
      ],
      "review": [
        {
          "star": 4,
          "info": "Trải nghiệm rất cá nhân, ai không quan tâm đời họa sĩ có thể thấy khó đồng cảm."
        },
        {
          "star": 5,
          "info": "Câu chuyện chân thật nhưng nhịp kể chậm, đọc cần kiên nhẫn."
        }
      ],
      "author": [
        "Phan"
      ],
      "publish": "NXB Phụ nữ Việt Nam",
      "date": "2025",
      "size": "19 x 13 cm",
      "weight": "190 gram",
      "format": "Bìa mềm",
      "price": 135000,
      "quantity": 200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B414",
      "title": "La Vie Est Belle - Cuộc Đời Vẫn Đẹp Sao",
      "image": "./data/img/img414.webp",
      "description": "Du Bút trân trọng giới thiệu tới bạn đọc La Vie est Belle – Cuộc đời vẫn đẹp sao, tác phẩm truyện tranh tự truyện (graphic memoir) mới nhất của họa sĩ và tác giả Lê Thư. Với chất liệu được lấy trực tiếp từ cuộc sống thật, đây là một cuốn sách không chỉ kể lại hành trình hồi phục sau khủng hoảng, mà còn mở ra một góc nhìn sâu sắc về tình cảm, tổn thương, và sức mạnh chữa lành đến từ những điều nhỏ bé trong cuộc sống.<br><br>Câu chuyện bắt đầu khi nhân vật chính – một người phụ nữ trẻ – phải đối diện với khủng hoảng tâm lý sau khi mối quan hệ tưởng chừng viên mãn bất ngờ tan vỡ. Không thể tiếp tục chịu đựng những ngày dài mỏi mệt vì thuốc điều trị, vì áp lực công việc, lẫn vì cảm giác bị bỏ rơi, cô quyết định rời thành phố, tìm đến một nơi có cái tên thật nên thơ: trại hèLa Vie est Belle. Xa khỏi phố thị, băng qua những cánh đồng quạt gió khổng lồ, qua nhà tạo mây và kho chứa đầy sao... chính La Vie est Belle này đã trở thành điểm khởi đầu cho hành trình cứu rỗi chính bản thân. Tại La Vie, người lớn được dịp tháo bỏ lớp vỏ bọc quen thuộc, học cách gỡ rối những tơ lòng và nhìn thế giới lại lần nữa bằng ánh mắt của một đứa trẻ.<br><br><b>Những đứa trẻ không hoàn hảo, và cũng không cần phải thế</b><br><br>Đáng yêu và đáng nhớ nhất trong cuốn sách chính là những đứa trẻ xuất hiện trong trại hè: mỗi đứa một tính cách, không bé nào giống bé nào. Có đứa hồn nhiên, có đứa nghịch phá, có đứa \"ông cụ non\", có đứa ưa làm nũng, thích ôm. Có đứa chưa ngoan, cần được răn dạy. Có đứa cục cằn, nhưng rất tình cảm. Tác phẩm không lý tưởng hóa tuổi thơ, mà khắc họa rất chân thật sự đa dạng và biến hóa trong cảm xúc của trẻ em - chúng cãi nhau, giận nhau, rồi vài phút sau lại rủ nhau chơi chung như chưa từng có chuyện gì. Tác giả không cố răn dạy người đọc qua những em bé hoàn hảo, mà để từng nhân vật nhỏ thể hiện chân thật nhất những gì chúng là – bởi trẻ em, và cả người lớn, không cần phải cố tỏ ra ngoan ngoãn để xứng đáng được yêu thương.<br><br><b>Khi người lớn học cách yêu lại từ lũ trẻ</b><br><br>Điều đẹp đẽ nhất là trong thế giới của La Vie est Belle, chính người lớn mới là những kẻ cần học lại cách sống. Nhìn bọn trẻ tung tăng làm mặt nạ, nấu trà từ lá cỏ, vẽ búp bê giấy, ôm nhau và cười phá lên chỉ vì một câu chuyện bông đùa... nhân vật chính và cả người đọc đều nhận ra: hạnh phúc không nằm ở điều gì to tát. Chỉ cần được là chính mình, được yêu mà không cần chứng minh, được tha thứ khi mắc lỗi – đó đã là một cuộc sống đẹp rồi. Và như một tiếng thì thầm từ trái tim trẻ thơ gửi tới người lớn: “La vie est belle – cuộc đời vẫn đẹp sao.”<br><br><b>Sức mạnh kể chuyện của truyện tranh</b><br><br>Tác phẩm thuộc thể loại graphic memoir – tự truyện bằng truyện tranh, một dòng sách đang phát triển mạnh trên thế giới nhờ khả năng truyền tải cảm xúc sâu sắc qua hình ảnh và lời thoại. La Vie est Belle là một lát cắt đời thật được kể lại bằng góc nhìn nghệ thuật, đầy cảm xúc cá nhân và sự thấu cảm với người đọc. Đây là tiếng nói chân thật, thô mộc nhưng giàu lòng trắc ẩn, dành cho những ai từng chênh vênh, từng khủng hoảng, từng cảm thấy mình “không đủ” giữa một thế giới quá nhiều kỳ vọng.<br><br><b>La Vie est Belle – Cuộc đời vẫn đẹp sao</b> sẽ đã phát hành trên toàn quốc thông qua các hệ thống nhà sách và kênh thương mại điện tử của Du Bút từ 8/12/2025. Cuốn sách được in bìa cứng, khổ vừa tay, thích hợp để đọc lại nhiều lần, mỗi lần đọc là một lần được vỗ về dịu dàng hơn.",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Giao hàng nhanh"
        }
      ],
      "author": [
        "Lê Thư"
      ],
      "publish": "NXB Phụ nữ Việt Nam",
      "date": "2025",
      "size": "20.5 x 14.5 cm",
      "weight": "340 gram",
      "format": "Bìa cứng",
      "price": 145000,
      "quantity": 40,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B415",
      "title": "Yêu Đấy Rồi Sao? - Công Chúa Tóc Cam",
      "image": "./data/img/img415.webp",
      "description": "ình yêu vốn dĩ là một câu chuyện đầy màu sắc, và nếu có một màu đại diện cho sự đỏng đảnh, đáng yêu nhưng cũng lắm phen “khó đỡ”, thì chắc chắn đó chính là màu cam – màu của “Công chúa Tóc Cam”!<br><br>Công chúa Tóc Cam là một fanpage giải trí xoay quanh nhân vật Công chúa Tóc Cam và anh người yêu “đầy cam chịu” của nàng ta. “Yêu đấy rồi sao?” là những mẩu truyện về cuộc sống yêu đương đầy hài hước, dí dỏm của nàng. Nàng công chúa Tóc Cam với mái tóc màu cam rực rỡ và tính cách “không lẫn vào đâu được” cùng anh người yêu của nàng ta sẽ mang đến cho bạn những câu chuyện dở khóc dở cười diễn ra hằng ngày của những cặp đôi.<br><br>Công chúa Tóc Cam không phải một nàng công chúa dịu dàng như trong truyện cổ tích. Nàng ta hơi ương bướng, hay dỗi, lắm lúc lại nhõng nhẽo đến mức khiến ai cũng phải bó tay và hay đòi chia tay bất thình lình. Nhưng nàng ta cũng mạnh mẽ, đáng yêu theo một cách rất riêng. Và đó chính là lý do mà anh người yêu dù có bị “hành hạ” bao nhiêu cũng không thể rời xa nàng. Cùng với anh người yêu “hèn” nhưng hết lòng vì nàng, nghe lời nàng răm rắp, Công chúa Tóc Cam đã tạo nên một cặp đôi “lầy lội”, “không giống ai” và vô cùng hài hước. Những màn “học hỏi” tình yêu và những câu chuyện “khó đỡ” của họ chắc chắn sẽ khiến bạn không thể ngừng cười.<br><br>“Yêu đấy rồi sao? – Công chúa Tóc Cam” không chỉ là những câu chuyện vụn vặt, dí dỏm giữa hai người yêu nhau, mà còn là một cuốn “nhật kí tình yêu” chân thật và đầy cảm xúc, có giận hờn vu vơ nhưng cũng có những rung động ngọt ngào. Với nét vẽ dễ thương, nội dung hài hước và những câu thoại “chất lừ”, bộ truyện hứa hẹn sẽ mang đến cho bạn những giây phút thư giãn và những tiếng cười sảng khoái",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 4,
          "info": "Tình huống gây cười là chính, chiều sâu cảm xúc chưa nhiều."
        },
        {
          "star": 5,
          "info": "Phù hợp đọc giải trí nhanh"
        }
      ],
      "author": [
        "Kolya Bùi"
      ],
      "publish": "NXB Lao Động",
      "date": "2025",
      "size": "15 x 15 cm",
      "weight": "160 gram",
      "format": "Bìa mềm",
      "price": 109000,
      "quantity": 650,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B416",
      "title": "Nhóc Pương - Tập 1 - Đại Chiến Gà Nhà",
      "image": "./data/img/img416.webp",
      "description": "NHÓC PƯƠNG là series truyện tranh hề hước xoay quanh nhân vật Pương ở độ tuổi tiểu học. Pương nhỏ bé, dũng cảm, duyên dáng, thích mặc váy hoa, sợ chó, sợ mẹ, sợ gà... Pương có một siêu năng lực là thu hút drama nên xoay quanh cô lúc nào cũng là các tình huống dờ khóc dở cười. Khi thì bị mẹ lừa, khi thì bị chó táp, gà mổ, có khi còn xém đốt nhà người ta nữa. Làng trên xóm dưới đều biết Pương vì cô bé đi tới đâu là có chuyện tới đó.",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 4,
          "info": "Truyện hay, hài hước"
        },
        {
          "star": 5,
          "info": "Giao hàng nhanh"
        }
      ],
      "author": [
        "Pương Pương",
        "Leo Dinh",
        "Sun Wolf Studio"
      ],
      "publish": "NXB Hồng Đức",
      "date": "2024",
      "size": "18.5 x 13 cm",
      "weight": "180 gram",
      "format": "Bìa mềm",
      "price": 99000,
      "quantity": 260,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B417",
      "title": "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn (Tái Bản 2023)",
      "image": "./data/img/img417.webp",
      "description": "hỏ Bảy Màu là fanpage sở hữu hơn 2,6tr lượt thích trên mạng xã hội. Với hình tượng nhân vật thú vị cùng phong cách sáng tạo độc đáo, Thỏ bảy màu vẫn luôn là thu hút được số lượng lớn người quan tâm thể hiện qua nhiều bài viết với hàng chục nghìn lượt like và share.<br><br>Thỏ Bảy Màu là một nhân vật hư cấu chẳng còn xa lạ gì với anh em dùng mạng xã hội với slogan “Nghe lời Thỏ, kiếp này coi như bỏ!”.<br><br>Thỏ Bảy Màu đơn giản chỉ là một con thỏ trắng với sự dở hơi, ngang ngược nhưng đáng yêu vô cùng tận. Nó luôn nghĩ rằng mình không có cuộc sống và không có bạn bè. Tuy nhiên, Thỏ lại chẳng bao giờ thấy cô đơn vì đến cô đơn cũng bỏ nó mà đi.<br><br>Cuốn sách là những mẩu chuyện nhỏ được ghi lại bằng tranh xoay quanh Thỏ Bảy Màu và những người nghĩ nó là bạn. Những mẩu chuyện được truyền tải rất “teen” đậm chất hài hước, châm biếm qua sự sáng tạo không kém phần “mặn mà” của tác giả càng trở nên độc đáo và thu hút.<br><br>Nếu một ngày bạn lỡ cảm thấy buồn thì hãy đọc cuốn sách này để biết thế nào là cười sảng nha",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Nội dung rất hay, từ khi theo dõi các clip của Thỏ thì mình mới phát hiện ra Thỏ còn có cuốn truyện này nữa. Tuy truyện hơi ngắn nhưng rất hài và mang đậm tính chất của con thỏ. Tuy nhiên truyện ra từ rất lâu rồi và chưa có tập mới, mong sẽ có nhiều tập nữa về con thỏ 7 màu,"
        }
      ],
      "author": [
        "Huỳnh Thái Ngọc"
      ],
      "publish": "NXB Dân Trí",
      "date": "2023",
      "size": "19 x 13 cm",
      "weight": "200 gram",
      "format": "Bìa mềm",
      "price": 99000,
      "quantity": 430,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B418",
      "title": "Ở Đây Có Một Con Én",
      "image": "./data/img/img418.webp",
      "description": "n là một nhân vật hư cấu có thật xuất hiện trên Facebook từ cuối năm 2018 và để lại tiếng vang lớn nếu hét trong hang động. Thuở ban đầu Én chỉ là những tranh truyện vừa xấu vừa vô nghĩa được vài người like, đến bây giờ Én vẫn xấu và vô nghĩa nhưng được nhiều like hơn. “Ở đây có một con Én” - cuốn sách đầu tiên đánh dấu chặng đường 6 năm làm trò hề trên mạng xã hội, là tập hợp những mẩu chuyện chứa đựng nhiều thông điệp tích cực về cuộc sống khi soi bằng kính lúp.<br><br>Dẫu vậy, Én mong góp phần giúp bạn giải đáp thắc mắc cuộc sống bình thường sẽ ra sao khi chúng ta suy nghĩ khác thường và phi logic. Khá là hỗn loạn đấy, cơ mà vui! Vui thì nên mua",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Nội dung rất hay"
        }
      ],
      "author": [
        "Tuấn Dũng"
      ],
      "publish": "NXB Hồng Đức",
      "date": "2024",
      "size": "18.5 x 13 cm",
      "weight": "170 gram",
      "format": "Bìa mềm",
      "price": 99000,
      "quantity": 240,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B419",
      "title": "Quan Trọng Là Phải Đẹp Trai",
      "image": "./data/img/img419.webp",
      "description": "Quan Trọng Là Phải Đẹp Trai cho thấy một góc nhìn vô cùng hài hước của Thăng Fly. Và theo tôi, đó là sự độc đáo mang tính tích cực. Khi gặp khó khăn trong cuộc sống, khi trục trặc trong chuyện tình cảm, khi công việc không suôn sẻ , nếu là một người chúng ta sẽ tìm lý do gì đó, một ai đó để đổ lỗi, để giải tỏa. Nhưng đối với Thăng, cách giải thích của anh chỉ: “Đơn giản… vì bạn không đẹp trai!”. Một lý do khiến người đọc không biết làm gì khác ngoài bật cười.<br><br>Cuốn sách này tập hợp những câu chuyện tưởng chừng như vô thưởng vô phạt, những kỷ niệm tếu táo thời sinh viên, những trò đùa nhắng nhít, những mối tình e ngại không dám nói… mà bạn chắc chắn sẽ cảm thấy bản thân mình trong đó",
      "topic": [
        "truyentranh"
      ],
      "review": [],
      "author": [
        "Thăng Fly"
      ],
      "publish": "NXB Dân Trí",
      "date": "2018",
      "size": "19 x 13 cm",
      "weight": "120 gram",
      "format": "Bìa mềm",
      "price": 85000,
      "quantity": 60,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B420",
      "title": "Thần Đồng Đất Việt - Tập 196 - Cuộc Chiến Thời Gian",
      "image": "./data/img/img420.webp",
      "description": " làng Phan Thị có rất nhiều \"phương tiện\" báo giờ, như chú gà trống này, chiếc đồng hồ cát \"ngoại nhập\" của cha con Cả Mẹo này,...thậm chí cái bụng béo ú của Dần Béo cũng báo được giờ nữa đó nha.<br><br>Nhưng cái nào sẽ được chọn làm \"vũ khí\" trong trận chiến \"Cơm cháy - Mắm tôm\" giữa gia đình bà Tám và ông Bá hộ Mão nào??<br><br>Thần Đồng Đất Việt (Tập 196) - Cuộc Chiến Thời Gian sẽ giới thiệu đến bạn cách tính toán thời gian dựa vào mặt trời một cách \"chuẩn không cần chỉnh\" luôn. Không phải rất tuyệt cú mèo sao",
      "topic": [
        "truyentranh"
      ],
      "review": [
        {
          "star": 5,
          "info": "Tuổi thơ mình suốt ngày đọc truyện tranh thôi doremon nè , conan nè , ..... và không thiếu được bộ Thần đồng đất Việt này . Truyện vẫn thế , nét vẽ giản dị , quen thuộc , vẫn những nội dung và hình vẽ làm mình cười bò lăn a .( Gioi thiệu cho bạn nào không biết là truyện lấy bối cảnh thời Hậu Lê dựa trên những điển tích điển cố có thật ) . Tập này cũng vậy , buồn cười chết , đừng đọc nơi đông người không bạn sẽ bị coi là tâm thần trốn trại đó . Lại mâu thuẫn giữa hai nhân vật quen thuộc bà Tám và ông Bá hộ Mão . Mình thấy mỗi tập đọc trong đó đều chứa giá trị nhân văn hay một kiến thức nào đó . Và đọc tập này bạn sẽ biết được cách tính toán thời gian dựa vào mặt trời một cách \"chuẩn không cần chỉnh\" luôn . Truyện rất hay , hài chỉ tội tập nào cũng mỏng , ngắn đọc nhanh hết lắm ."
        }
      ],
      "author": [
        "Công Ty Phan Thị"
      ],
      "publish": "NXB Đại học Sư phạm",
      "date": "2016",
      "size": "18 x 11 cm",
      "weight": "150 gram",
      "format": "Bìa mềm",
      "price": 15000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B501",
      "title": "Từ điển hình ảnh trực quan - Trong lòng đất",
      "image": "./data/img/img501.webp",
      "description": "Khi nhìn một cái cây ven đường, đã bao giờ bạn tự hỏi bộ rễ của nó có thể vươn dài đến đâu chưa? Hay khi nhìn thấy một cái hố kì lạ trên nền đất, bạn có thắc mắc rằng liệu nó là sản phẩm của con người hay là lối dẫn vào “ngôi nhà” của một loài động vật nào đó? Bên dưới con đường mà chúng ta vẫn bước đi hằng ngày là cả một thế giới đầy sắc màu. Từng trang của cuốn từ điển bằng hình ảnh này sẽ đem đến cho bạn những kiến thức vô cùng mới mẻ, thú vị về những sự vật dưới lòng đất tưởng chừng như rất quen thuộc với đời sống của mỗi người.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Câu lạc bộ Trẻ em"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "21x29.7 cm",
      "weight": "370 gram",
      "format": "Bìa mềm",
      "price": 60000,
      "quantity": 360,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B502",
      "title": "Trầm cảm - Sát thủ thầm lặng",
      "image": "./data/img/img502.webp",
      "description": "ầm cảm giống như khi ta mất đi một người thân yêu, nhưng nỗi đau không vơi đi theo thời gian.<br>Căn bệnh hút đi sức sống của tôi, nuốt chửng tôi trong những vòng xoáy đen tối sâu thẳm.<br>Tôi cảm thấy trống rỗng và tê dại, không kết nối được với xung quanh. Tôi muốn biến mất khỏi thế giới này...<br>Trầm cảm là “bệnh ung thư của tâm hồn”, ảnh hưởng nghiêm trọng đến cuộc sống hơn 300 triệu người toàn cầu và khoảng 400 ngàn người Việt Nam. Căn bệnh là nguyên nhân gây ra khuyết tật và tự tử hàng đầu thế giới.<br>Trầm cảm thật sự là gì và có từ bao giờ? Làm cách nào để nhận biết, phòng chống và điều trị trầm cảm?<br>Cá nhân, gia đình và cộng đồng có vai trò gì trong cuộc chiến chống lại căn bệnh đáng sợ này?<br>Quyển sách “Trầm cảm – Sát thủ thầm lặng” sẽ mang đến cho bạn câu trả lời",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "rất hay, ý nghĩa" },
        { "star": 5, "info": "nó miêu tả cảnh đẹp và những con người đang cố gắng ở đó. bài này rất hay" }
      ],
      "author": ["Nguyễn Thanh Hà", "Nguyễn Đỗ Khả Tú"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "14.5x20.5 cm",
      "weight": "230 gram",
      "format": "Bìa mềm",
      "price": 40000,
      "quantity": 180,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B503",
      "title": "Gõ cửa thiên nhiên - Bạn đang làm gì thế? - What are you doing?",
      "image": "./data/img/img503.webp",
      "description": "Thông qua những chủ đề quen thuộc như động thực vật trên cạn và dưới nước, cùng những bức ảnh tả thực sinh động, Gõ cửa thiên nhiên giới thiệu những kiến thức rất cơ bản về thế giới tự nhiên.<br>Với lời kể song ngữ đơn giản, dễ hiểu, phù hợp với trẻ nhỏ, mong rằng Gõ cửa thiên nhiên sẽ là một món quà thú vị dành cho bé yêu thích tiếng Anh.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 5, "info": "Sản phẩm chất lượng, gói hàng cẩn thận, giá cũng rẻ hơn so với mấy shop khác" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Chia-Fen Her", "Shu-Hua Huang", "Trương Nghĩa Văn"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "21x20 cm",
      "weight": "75 gram",
      "format": "Bìa mềm",
      "price": 7500,
      "quantity": 1200,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B504",
      "title": "Tư duy như Stephen Hawking",
      "image": "./data/img/img504.webp",
      "description": "Stephen Hawking là gương mặt đại diện cho lĩnh vực vật lí trong nhiều thập kỉ, và những nghiên cứu mang tính đột phá của ông đã thay đổi cách chúng ta nhìn nhận vị trí của mình trong vũ trụ này. Bên cạnh đó, ông cũng vô cùng nổi tiếng với cuộc chiến chống lại bệnh tật, và là ngọn cờ dẫn đường của những người khuyết tật trên toàn thế giới.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 5, "info": "rất hay, đáng mua, gói hàng cẩn thận, giá cả hợp lý" },
        { "star": 5, "info": "hayyy" }
      ],
      "author": ["Daniel Smith"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "13x20 cm",
      "weight": "245 gram",
      "format": "Bìa mềm",
      "price": 62000,
      "quantity": 520,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B505",
      "title": "Khoa học cho lứa tuổi thiếu niên - Mười vạn câu hỏi vì sao - Khoa học kĩ thuật và sáng tạo",
      "image": "./data/img/img505.webp",
      "description": "HỆ MẶT TRỜI ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?<br>Tại vị trí của hệ Mặt Trời ngày nay ban đầu là một đám tinh vân gồm bụi và khí khổng lồ xoay tròn chậm chạp. Ngoài khí hyđrô và khí heli ra, trong đám tinh vân này còn chứa các nguyên tố nặng như đá và sắt. Do lực hấp dẫn lẫn nhau giữa các thành phần cấu tạo, cho nên đám tinh vân nguyên thủy này bắt đầu dần dần thu hẹp lại. Trong quá trình đó, tốc độ tự quay của nó ngày càng nhanh hơn, cuối cùng nén lại thành một đĩa tròn lớn. Phần tâm của đĩa tròn này hình thành nên Mặt Trời. Các phần khác dồn lại thành đám, rồi dần dần vón cục lại tạo thành các hành tinh. Bốn hành tinh gần với Mặt Trời nhất được tạo thành từ đá và kim loại. Bốn hành tinh xa hơn hình thành từ các chất khí. Ngoài các hành tinh, Hệ Mặt Trời còn có các hành tinh lùn, sao chổi… Mặt Trời và các hành tinh không ngừng tự quay.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 5, "info": "Rất đáng xem" },
        { "star": 5, "info": "Một cuốn sách đáng đọc, mang lại nhiều giá trị." }
      ],
      "author": ["Liu YuchenXia Fan"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "18x21 cm",
      "weight": "470 gram",
      "format": "Bìa mềm",
      "price": 156000,
      "quantity": 210,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B506",
      "title": "Khoa học cho lứa tuổi thiếu niên - Mười vạn câu hỏi vì sao - Văn hoá và đời sống",
      "image": "./data/img/img506.webp",
      "description": " SAO LẠI CÓ NHIỀU CÁCH LÍ GIẢI KHÁC NHAU VỀ BẢY KÌ QUAN CỦA THẾ GIỚI CỔ ĐẠI?<br>Vào thế kỉ 2 trước Công nguyên, nhà thám hiểm nổi tiếng người Phoenicia là Antipater đã lập ra danh sách bảy kì quan vĩ đại nhất do con người tạo ra mà ông đã thấy suốt dọc đường thám hiểm, gồm có: vườn treo Babylon, tượng thần Mặt Trời trên đảo Rhodes, lăng mộ của Mausolus, đền thờ thần Artemis, tượng thần Zeus, ngọn hải đăng Alexandria và kim tự tháp Ai Cập. Trong bảy kì quan này, ngoài kim tự tháp, những cái còn lại đều đã bị hủy hoại; vì vậy, vào thời Trung cổ, lại có một danh sách khác về bảy kì quan gồm: đấu trường La Mã ở Ý, khu hầm mộ Kom el Shoquafa ở vùng ven Sa mạc Libya, Vạn Lý Trường Thành của Trung Quốc, vòng tròn đá Stonehenge ở Anh, tháp Lưu Ly tại chùa Báo Ân ở Nam Kinh (Trung Quốc), tháp Nghiêng Pisa của Ý, thánh đường Hagia Sophia ở Thổ Nhĩ Kỳ.<br>TRẠM BỔ SUNG KIẾN THỨC<br>Phoenicia cổ đại, nơi đầu tiên nhắc đến “bảy kì quan của thế giới cổ đại”, có ngành thương mại và hàng hải cực kì phát triển. Hơn 2.600 năm trước, các nhà hàng hải người Phoenicia đã hoàn thành chuyến hành trình vòng quanh châu Phi.<br>XÂY DỰNG HỆ THỐNG KIẾN THỨC CHO THIẾU NIÊN NÂNG CAO NĂNG LỰC TỔNG HỢP QUA HÌNH THỨC HỎI ĐÁP<br>Bạn có hứng thú với khoa học kĩ thuật và môi trường xung quanh không? Hay bạn đang muốn tìm hiểu những bí ẩn về con người và các loài sinh vật khác? Bạn cũng muốn khám phá các kì quan của nhân loại? Bộ sách Khoa học cho lứa tuổi thiếu niên – Mười vạn câu hỏi vì sao chứa đựng những vấn đề mà bạn quan tâm, nội dung kiến thức đáng tin cậy, lời giải đáp rõ ràng. Chỉ cần mở sách ra, kiến thức khoa học thường thức về hàng vạn thứ sẽ cho bạn những khám phá vô cùng lí thú",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "lên án gay gắt cái xã hội tư sản ,châm biếm xh rất hay" },
        { "star": 5, "info": "Đọc một lần là muốn đọc lại." }
      ],
      "author": ["Liu YuchenXia Fan"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "18x21 cm",
      "weight": "470 gram",
      "format": "Bìa mềm",
      "price": 156000,
      "quantity": 200,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B507",
      "title": "Hồ sơ mật - Vén màn lịch sử huyền bí",
      "image": "./data/img/img507.webp",
      "description": "Những bí ẩn về loài mãng xà dưới đáy biển hay hồ nước sâu kì dị phải chăng chỉ là những ảo ảnh phủ bụi thời gian? Trước những vấn đề bị bóng tối của sự hoài nghi bao trùm, khoa học nên có cách tiếp cận như thế nào? Mong muốn của đội ngũ biên soạn cuốn sách này là thắp lên ngọn lửa khám phá bên trong mỗi độc giả, để họ theo đuổi đến tận cùng sự thật, phân tích những hiện tượng kì bí với thái độ cẩn trọng và góc nhìn khoa học. Những bí ẩn chưa ai lí giải được luôn chứa đựng sức lôi cuốn mạnh mẽ, kích thích các giác quan và khơi gợi ham muốn tư duy, khám phá của mỗi người.",
      "topic": [
        "khoahoc",
        "lichsu"
      ],
      "review": [
        { "star": 3, "info": "Một tác phẩm chất lượng, đáng để trải nghiệm." },
        { "star": 5, "info": "Rất thích cách tác giả truyền tải thông điệp." }
      ],
      "author": ["Nhiều tác giả"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x22 cm",
      "weight": "210 gram",
      "format": "Bìa mềm",
      "price": 55000,
      "quantity": 120,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B508",
      "title": "Những câu đố của bóng đêm",
      "image": "./data/img/img508.webp",
      "description": "ững bí ẩn lạ lùng đang xảy ra ở thành phố Cơm Cháy. Có người đổ tội cho sinh vật ngoài hành tinh, có người bảo vì xây dựng trên đất thiêng nên thành phố này mới kì bí như vậy. Biết bao cuộc tranh luận nổ ra, nhưng các bí ẩn vẫn chưa được giải thích.<br>Bất chấp sự trỗi dậy của Internet, chương trình radio Thâu Đêm Cùng JoJo ra mắt và ngay lập tức trở thành hiện tượng. Dân tình ngóng trông chương trình mỗi cuối tuần để được nghe kể lại những chuyện kì dị ở Cơm Cháy. JoJo - tay phóng viên kì cựu đã ngụp lặn khắp nơi để điều tra những bí ẩn kinh khiếp lẩn khuất dưới từng mái nhà, từng con ngõ.<br>Tối nay thứ Bảy, đúng mười giờ, đừng quên Thâu đêm cùng JoJo.<br>Chương trình radio Thâu đêm cùng Jojo mang đến cho các thính giả những câu chuyện kinh dị và ma mị, thế nhưng ẩn sau những câu chuyện ấy là vấn đề của thời đại: Nỗi sợ hãi và cảm giác cô đơn thường trực trong cuộc sống của chúng ta.<br>Đau buồn vì mất người yêu thương, sợ cô đơn, sợ bị bỏ lỡ, trầm cảm, khao khát sống thật, muốn học cách yêu quí vẻ đẹp của bản thân, đối diện với kẻ rình rập, được an toàn trên thế giới mạng, hẹn hò trực tuyến là những vấn đề mà người trẻ đang đối diện hôm nay. Nếu bạn đang lạc lối trong mê cung của những cảm xúc tiêu cực hay chưa có lối thoát cho các vấn đề của bản thân, hãy cùng “Những câu đố của bóng đêm” đi tìm lời giải đáp, cũng như trang bị kĩ năng để chiến thắng trở ngại, sống rực rỡ và thật hạnh phúc",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "Cuốn sách khiến mình suy nghĩ rất nhiều." },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nhựt Nguyễn"],
      "publish": "NXB Kim Đồng",
      "date": "2019",
      "size": "15x22 cm",
      "weight": "245 gram",
      "format": "Bìa mềm",
      "price": 95000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B509",
      "title": "Chiến binh cổ đại",
      "image": "./data/img/img509.webp",
      "description": "Các nhà cầm quân vĩ đại trong lịch sử lao vào trận chiến cùng với những đội quân đáng sợ nhất! Cho dù phóng tên từ lưng ngựa như quân Hung huyền thoại hay mua kiếm như các nhà sư Thiếu Lâm tao nhã, những nhà cầm quân này có thể vừa khôn ngoan vừa vô cùng tàn bạo.<br>Những trận chiến nổi tiếng, các tướng lĩnh dũng cảm và những vũ khí tinh xảo trở nên sống động qua hình ảnh minh họa của Joe Lillington, giúp chúng ta theo dõi quá trình phát triển của các chiến binh từ Thời kì Đồ Đá cho đến trước Thập tự chinh.",
      "topic": [
        "khoahoc",
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Phù hợp để đọc và làm quà tặng." }
      ],
      "author": ["Iris Volant", "Avalon Nuovo"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "24.5x31 cm",
      "weight": "400 gram",
      "format": "Bìa mềm",
      "price": 115000,
      "quantity": 100,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B510",
      "title": "Sử ký giáo khoa thư",
      "image": "./data/img/img510.webp",
      "description": "ốn “Sử ký giáo khoa thư” thuộc bộ Việt Nam tiểu học tùng thư– bộ sách giáo khoa chữ Quốc ngữ đầu tiên được biên soạn vào đầu thế kỉ XX. Sách tóm lược những sự kiện quan trọng của lịch sử Việt Nam từ thời lập nước đến những năm 1920, với lối viết ngắn gọn, dễ hiểu dành cho học sinh. Việc tái bản cuốn sách nhằm giới thiệu đến bạn đọc ngày nay một giá trị quý trong kho tàng văn hóa và lịch sử giáo dục Việt Nam.\"",
      "topic": [
        "khoahoc",
        "lichsu",
        "vhvn"
      ],
      "review": [
        { "star": 4, "info": "Tác phẩm phản ánh chân thực đời sống và con người Việt Nam." },
        { "star": 5, "info": "Cuốn sách mang giá trị nhân văn sâu sắc" }
      ],
      "author": ["Nguyễn Văn Ngọc", "Trần Trọng Kim", "Đặng Đình Phúc", "Đỗ Thận"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x24 cm",
      "weight": "150 gram",
      "format": "Bìa mềm",
      "price": 58000,
      "quantity": 540,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B511",
      "title": "Cảo thơm lần giở - Quyển 1",
      "image": "./data/img/img511.webp",
      "description": "cuốn sách là hành trình suy ngẫm của nhà văn hóa hữu ngọc khi nhìn lại cuộc đời mình ở tuổi một trăm. thông qua việc giới thiệu hơn 180 danh nhân đông – tây thuộc nhiều lĩnh vực như tôn giáo, triết học, khoa học, văn học và chính trị, tác giả khám phá những tư tưởng lớn của nhân loại. mỗi nhân vật được trình bày qua cuộc đời và những danh ngôn tiêu biểu, tạo nên một bức tranh văn hóa rộng lớn về thế giới và con người. cuốn sách giống như một cuộc du hành tri thức, giúp người đọc suy ngẫm về ý nghĩa cuộc đời và giá trị của nhân loại qua các thời đại.",
      "topic": [
        "khoahoc",
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "ý nghĩa, Rất đáng xem" }
      ],
      "author": ["Hữu Ngọc"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "14x22.5 cm",
      "weight": "510 gram",
      "format": "Bìa mềm",
      "price": 125000,
      "quantity": 830,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B512",
      "title": "Cảo thơm lần giở - Quyển 2",
      "image": "./data/img/img512.webp",
      "description": "Cuốn sách là hành trình suy ngẫm của nhà văn hóa hữu ngọc khi nhìn lại cuộc đời và xã hội ở tuổi một trăm. Tác phẩm giới thiệu hơn 180 danh nhân đông – tây thuộc nhiều lĩnh vực như tôn giáo, triết học, khoa học, văn học, nghệ thuật và chính trị. Mỗi nhân vật được trình bày qua cuộc đời và những danh ngôn tiêu biểu, giúp người đọc tiếp cận các tư tưởng lớn của nhân loại và suy ngẫm về ý nghĩa cuộc sống, con người qua nhiều thời đại.",
      "topic": [
        "khoahoc",
        "lichsu"
      ],
      "review": [
        { "star": 4, "info": "tình cảm, khiến mình nhớ đến quê hương nhớ nhà" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Hữu Ngọc"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "14x22.5 cm",
      "weight": "475 gram",
      "format": "Bìa mềm",
      "price": 125000,
      "quantity": 830,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B513",
      "title": "Chinh phục Everest",
      "image": "./data/img/img513.webp",
      "description": "Có một ngọn núi đặc biệt vươn lên ở nơi xa, với đỉnh cao nhất trên trái đất – thử thách lớn đối với những nhà thám hiểm và người leo núi. Đó là sagamatha, hay còn gọi là núi everest.<br>Cuốn sách đưa người đọc khám phá nguồn gốc cổ đại của ngọn núi, tìm hiểu hệ động thực vật trên các triền núi hùng vĩ, đồng thời giới thiệu lịch sử và văn hóa phong phú gắn liền với ngọn núi nổi tiếng này.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Sangma FrancisLisk Feng"],
      "publish": "NXB Kim Đồng",
      "date": "2020",
      "size": "24.5x30.5 cm",
      "weight": "500 gram",
      "format": "Bìa mềm",
      "price": 136000,
      "quantity": 1000,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B514",
      "title": "Quốc văn giáo khoa thư",
      "image": "./data/img/img514.webp",
      "description": "Quốc văn giáo khoa thư được xem là bộ sách giáo khoa tiếng việt đầu tiên của việt nam, ra đời vào đầu thế kỉ 20 do các học giả trần trọng kim, nguyễn văn ngọc, đặng đình phúc và đỗ thận biên soạn. bộ sách gồm ba quyển dành cho các lớp đầu bậc tiểu học, với các bài học tập đọc kết hợp kiến thức về luân lí, lịch sử, địa lí, tự nhiên và vệ sinh. với ngôn ngữ giản dị, dễ hiểu và hình minh họa sinh động, bộ sách đã để lại nhiều giá trị giáo dục và trở thành ký ức đẹp của nhiều thế hệ học sinh.",
      "topic": [
        "khoahoc",
        "vhvn"
      ],
      "review": [
        { "star": 2, "info": "cũng đc" },
        { "star": 5, "info": "hay" }
      ],
      "author": ["Nguyễn Văn Ngọc", "Trần Trọng Kim", "Đặng Đình Phúc", "Đỗ Thận"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x24 cm",
      "weight": "480 gram",
      "format": "Bìa mềm",
      "price": 140000,
      "quantity": 540,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B515",
      "title": "Nhật kí danh nhân - Nhật kí của Marie Curie (2021)",
      "image": "./data/img/img515.webp",
      "description": "Cuốn sách kể về hành trình cuộc đời của marie curie, từ tuổi trẻ ở ba lan đến khi theo đuổi nghiên cứu khoa học tại paris. qua những trang viết, người đọc được khám phá niềm đam mê của bà với vật lí và hóa học, những nghiên cứu về phóng xạ cũng như đóng góp của bà trong chiến tranh thế giới thứ nhất. marie curie là nhà khoa học gốc ba lan, người phụ nữ đầu tiên nhận giải nobel và cũng là người duy nhất giành giải nobel ở hai lĩnh vực khác nhau là vật lí và hóa học.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Gertrude DordorDaphné Collignon"],
      "publish": "NXB Kim Đồng",
      "date": "2021",
      "size": "16x22 cm",
      "weight": "170 gram",
      "format": "Bìa mềm",
      "price": 60000,
      "quantity": 210,
      "status": "Đặt trước",
      "discount": 10
    },
    {
      "id": "B516",
      "title": "Những cuộc thám hiểm vĩ đại",
      "image": "./data/img/img516.webp",
      "description": "Cuốn sách giải đáp nhiều câu hỏi thú vị về lịch sử khám phá thế giới, như việc người viking có tìm ra châu mỹ hay không, hành trình của marco polo kéo dài bao lâu, hay ai là người đặt tên cho châu mỹ. qua nhiều hình ảnh minh họa và bản đồ, người đọc sẽ theo chân các nhà thám hiểm đến những vùng đất mới, khám phá tinh thần chinh phục, ý chí vượt qua khó khăn và những câu chuyện đáng nhớ trong lịch sử thám hiểm.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 3, "info": "cốt truyện hay" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["Nhiều tác giả"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "20x24 cm",
      "weight": "565 gram",
      "format": "Bìa mềm",
      "price": 145000,
      "quantity": 340,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B517",
      "title": "Khám phá rừng",
      "image": "./data/img/img517.webp",
      "description": "Cuốn sách là một dạng bách khoa thư về các khu rừng trên thế giới, giải đáp nhiều câu hỏi thú vị như cách xác định tuổi của cây, hiệu ứng nhà kính là gì, vì sao nấm mọc cùng chỗ hay các loài động thực vật sống trong rừng. với hình minh họa phong phú, sách đưa người đọc khám phá thế giới rừng cùng hệ động thực vật đa dạng và những điều kỳ thú của thiên nhiên.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "tác phẩm hay" },
        { "star": 5, "info": "Nhớ vị tết nhớ vị nhà" }
      ],
      "author": ["Henry Eynard"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "20x24 cm",
      "weight": "490 gram",
      "format": "Bìa cứng",
      "price": 145000,
      "quantity": 1230,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B518",
      "title": "Vượt qua trở ngại tâm lí - Biến cô đơn thành sức mạnh - Con chó đen",
      "image": "./data/img/img518.webp",
      "description": "Cô đơn là trạng thái tâm lí mà hầu hết mỗi người đều phải đối mặt trong cuộc sống. Cuốn sách giúp người đọc hiểu rõ hơn về nỗi buồn và sự cô đơn, đồng thời hướng dẫn cách vượt qua những trở ngại tâm lí, học cách sống tích cực khi ở một mình. Thông qua những câu chuyện và bài học ý nghĩa, sách giúp biến cô đơn thành sức mạnh để mỗi người tự tin bước tiếp và cảm thấy hạnh phúc hơn trong cuộc sống.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "Hấp dẫn" },
        { "star": 5, "info": "Rất đáng xem" }
      ],
      "author": ["June Tien"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "22x22 cm",
      "weight": "80 gram",
      "format": "Bìa mềm",
      "price": 45000,
      "quantity": 1110,
      "status": "Có hàng",
      "discount": 10
    },
    {
      "id": "B519",
      "title": "Khám phá thế giới - Số phận của vũ trụ - Big Bang và sau đó",
      "image": "./data/img/img519.webp",
      "description": "Cuốn sách kể về sự hình thành và phát triển của vũ trụ từ vụ nổ lớn cách đây gần 14 tỉ năm đến sự xuất hiện của các thiên hà, ngôi sao và con người. Bằng ngôn ngữ giản dị, nhà thiên văn học trịnh xuân thuận dẫn dắt người đọc khám phá nhiều hiện tượng và thiên thể trong vũ trụ như tinh vân, sao lùn trắng, pulsar, lỗ đen hay các dạng thiên hà khác nhau, mở ra cái nhìn kỳ thú về vẻ đẹp và sự rộng lớn của vũ trụ.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 4, "info": "nội dung lôi cuốn, ngôn ngữ gần gũi" },
        { "star": 5, "info": "mang tính nhân văn, giáo dục cao" }
      ],
      "author": ["Trịnh Xuân Thuận"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "14.5x20.5 cm",
      "weight": "200 gram",
      "format": "Bìa mềm",
      "price": 80000,
      "quantity": 0,
      "status": "Hết hàng",
      "discount": 10
    },
    {
      "id": "B520",
      "title": "Kì quan thế giới",
      "image": "./data/img/img520.webp",
      "description": "Cuốn sách giải đáp nhiều câu hỏi thú vị về các công trình và thắng cảnh nổi tiếng trên thế giới như bảy kì quan thế giới, tháp pisa nghiêng, tượng nữ thần tự do, tháp eiffel hay lăng taj mahal. với nhiều hình minh họa phong phú, sách giúp người đọc khám phá lịch sử, kiến trúc và vẻ đẹp của những công trình nổi tiếng trên khắp thế giới.",
      "topic": [
        "khoahoc"
      ],
      "review": [
        { "star": 3, "info": "ý nghĩa, lôi cuốn" },
        { "star": 4, "info": "hayy" }
      ],
      "author": ["Philippe Simon", "Marie-Laure Bouet"],
      "publish": "NXB Kim Đồng",
      "date": "",
      "size": "20x24 cm",
      "weight": "550 gram",
      "format": "Bìa cứng",
      "price": 145000,
      "quantity": 1200,
      "status": "Có hàng",
      "discount": 10
    }
  ],
  "users": [
    {
      "id": "Admin",
      "role": "admin",
      "name": "Nguyễn Bánh Bèo",
      "phone": "0123456789",
      "email": "ab@gmail.com",
      "password": "13c7545a1e1eae6bf1621b6dcd53368bcd1ac94da8180102410ec3057f1caaf1",
      "address": "Cần Thơ",
      "order": [
        "id1",
        "id2"
      ]
    },
    {
      "name": "Nguyễn Bánh Bao Ú",
      "phone": "0987654321",
      "email": "abcd@gmail.com",
      "address": "An Giang",
      "id": "ABC",
      "password": "Tuilama@12",
      "role": "user",
      "coupons": [] //bổ sung
      
    }
  ],
  "orders": [
    {
      "id": "123456",
      "user": "ABC",
      "date": "10-10-10",
      "product": [
        {
          "id": "B318",
          "quantity": 3
        },
        {
          "id": "B420",
          "quantity": 1
        }
      ],
      "discount": 2,
      "status": "Chờ xử lý"
    },
    {
      "id": "1234567",
      "user": "ABC",
      "date": "10-10-10",
      "product": [
        {
          "id": "B318",
          "quantity": 3
        },
        {
          "id": "B420",
          "quantity": 1
        }
      ],
      "discount": 2,
      "status": "Chờ xử lý"
    },
    {
      "id": "1234576",
      "user": "ABC",
      "date": "10-10-10",
      "product": [
        {
          "id": "B318",
          "quantity": 3
        },
        {
          "id": "B420",
          "quantity": 1
        }
      ],
      "discount": 2,
      "status": "Chờ xử lý"
    },
    {
      "id": "1237456",
      "user": "ABC",
      "date": "10-10-10",
      "product": [
        {
          "id": "B318",
          "quantity": 3
        },
        {
          "id": "B420",
          "quantity": 1
        }
      ],
      "discount": 2,
      "status": "Chờ xử lý"
    },
    {
      "id": "1273456",
      "user": "ABC",
      "date": "10-10-10",
      "product": [
        {
          "id": "B318",
          "quantity": 3
        },
        {
          "id": "B420",
          "quantity": 1
        }
      ],
      "discount": 2,
      "status": "Chờ xử lý"
    }
  ]
}

if (!localStorage.getItem("jsondatabase")) {
    localStorage.setItem("jsondatabase", JSON.stringify(database));
}

// Lấy dữ liệu
function getDB() {
    return JSON.parse(localStorage.getItem("jsondatabase")) || {
        books: [],
        users: [],
        orders: []
    };
}

// Lưu dữ liệu
function saveDB(db) {
    localStorage.setItem("jsondatabase", JSON.stringify(db));
}

// Lấy mảng books
function getBooks(callback) {
    let db = getDB();
    callback(db.books);
}

// Lấy book theo id
function getBook(id, callback) {
    let db = getDB();
    let book = db.books.find(b => b.id === id);
    callback(book);
}

// Thêm book
function createBook(book, callback) {
    let db = getDB();
    db.books.push(book);
    saveDB(db);
    callback(book);
}

// Sửa book
function setBook(id, newBook, callback) {
    let db = getDB();
    let index = db.books.findIndex(b => b.id === id);

    if (index !== -1) {
        db.books[index] = {
            ...db.books[index],
            ...newBook
        };

        saveDB(db);
        callback(db.books[index]);
    }
}

// Xóa book
function deleteBook(id, callback) {
    let db = getDB();
    let deleted = db.books.find(b => b.id === id);
    db.books = db.books.filter(b => b.id !== id);
    saveDB(db);
    callback(deleted);
}

// Lấy mảng users
function getUsers(callback) {
    let db = getDB();
    callback(db.users);
}

// Lấy user theo id
function getUser(id, callback) {
    let db = getDB();
    let user = db.users.find(b => b.id === id);
    callback(user);
}

// Thêm user
function createUser(user, callback) {
    let db = getDB();
    db.users.push(user);
    saveDB(db);
    callback(user);
}

// Sửa user
function setUser(id, newUser, callback) {
    let db = getDB();
    let index = db.users.findIndex(b => b.id === id);

    if(index === -1) {
        console.log(id, newUser);
    }

    if (index !== -1) {
        db.users[index] = {
            ...db.users[index],
            ...newUser
        };

        saveDB(db);
        callback(db.users[index]);
    }
}

// Xóa user
function deleteUser(id, callback) {
    let db = getDB();
    let deleted = db.users.find(b => b.id === id);
    db.users = db.users.filter(b => b.id !== id);
    saveDB(db);
    callback(deleted);
}

// Lấy mảng orders
function getOrders(callback) {
    let db = getDB();
    callback(db.orders);
}

// Lấy order theo id
function getOrder(id, callback) {
    let db = getDB();
    let order = db.orders.find(b => b.id === id);
    callback(order);
}

// Thêm order
function createOrder(order, callback) {
    let db = getDB();
    db.orders.push(order);
    saveDB(db);
    callback(order);
}

// Sửa order
function setOrder(id, newOrder, callback) {
    let db = getDB();
    let index = db.orders.findIndex(b => b.id === id);

    if (index !== -1) {
        db.orders[index] = {
            ...db.orders[index],
            ...newOrder
        };

        saveDB(db);
        callback(db.orders[index]);
    }
}

// Xóa order
function deleteOrder(id, callback) {
    let db = getDB();
    let deleted = db.orders.find(b => b.id === id);
    db.orders = db.orders.filter(b => b.id !== id);
    saveDB(db);
    callback(deleted);
}
