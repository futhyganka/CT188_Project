/**
 * object Book {
 *     id,
 *     title,
 *     describe,
 *     img,
 *     topic[],
 *     review[],
 *     author[],
 *     publish,
 *     date,
 *     size,
 *     weight,
 *     format,
 *     price,
 *     quantity,
 *     status
 * }
 *     
 * object Review {
 *     star,
 *     content
 * }
 * 
 */

// function Book (
//     id,
//     title,
//     describe,
//     img,
//     topic,
//     review,
//     author,
//     publish,
//     date,
//     size,
//     weight,
//     format,
//     price,
//     quantity = 0,
//     status = "Hết hàng"
// ) {
//     return {
//         id,
//         title,
//         describe,
//         img,
//         topic,
//         review,
//         author,
//         publish,
//         date,
//         size,
//         weight,
//         format,
//         price,
//         quantity,
//         status
//     };
// };

// function Review (star, content) {
//     return {star, content};
// };

var database = [];

database.push({
    "id": 10, 
    "title": "tiêu đề", 
    "describe": "mô tả", 
    "img": "hình ảnh", 
    "topic": ["chủ đề 1", "chủ đề 2"], 
    "review": [
        {"star": 5, "content": "đánh giá 1"},
        {"star": 4, "content": "đánh giá 2"}
    ],
    "author": ["tác giả 1", "tác giả 2", "tác giả 3"], 
    "publish": "NXB Trẻ", 
    "date": "01/01/2003", 
    "size": "21 x 28cm",
    "weight": "300g", 
    "format": "Bìa cứng", 
    "price": 30000, 
    "quantity": 30, 
    "status": "Còn hàng"
});

// function addBook (
//     id,
//     title,
//     describe,
//     img,
//     topic,
//     review,
//     author,
//     publish,
//     date,
//     size,
//     weight,
//     format,
//     price,
//     quantity = 0,
//     status = "Hết hàng"
// ) {
//     database.push(Book(
//     id,
//     title,
//     describe,
//     img,
//     topic,
//     review,
//     author,
//     publish,
//     date,
//     size,
//     weight,
//     format,
//     price,
//     quantity,
//     status
// ));
// }

console.log(database);