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

function Book (
    id,
    title,
    describe,
    img,
    topic,
    review,
    author,
    publish,
    date,
    size,
    weight,
    format,
    price,
    quantity = 0,
    status = "Hết hàng"
) {
    return {
        id,
        title,
        describe,
        img,
        topic,
        review,
        author,
        publish,
        date,
        size,
        weight,
        format,
        price,
        quantity,
        status
    };
};

function Review (star, content) {
    return {star, content};
};

var database = [];

database.push(Book(
    10, 
    "tiêu đề", 
    "mô tả", 
    "hình ảnh", 
    ["chủ đề 1", "chủ đề 2"], 
    [Review(5, "đánh giá 1"), Review(4, "đánh giá 2")],
    ["tác giả 1", "tác giả 2", "tác giả 3"], 
    "NXB Trẻ", 
    "01/01/2003", 
    "21 x 28cm",
    "300g", 
    "Bìa cứng", 
    30000, 
    30, 
    "Còn hàng"
));

console.log(database);