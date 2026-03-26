document.addEventListener('DOMContentLoaded', () => {
            // Dùng Google News RSS để tìm TẤT CẢ các bài báo ở VN có từ khóa "Sách" trong vòng 30 ngày qua
            const rssUrl = 'https://news.google.com/rss/search?q=sách+xuất+bản+when:30d&hl=vi&gl=VN&ceid=VN:vi'; 
            
            // Dùng rss2json để lấy dữ liệu
            const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const newsGrid = document.getElementById('news-grid');
                    newsGrid.innerHTML = ''; // Xóa chữ "Đang tải..."

                    if (data.status === 'ok') {
                        // Lấy 9 bài viết mới nhất
                        const articles = data.items.slice(0, 9); 

                        articles.forEach(article => {
                            // Xử lý ngày xuất bản
                            const pubDate = new Date(article.pubDate);
                            const dateString = `${pubDate.getDate()}/${pubDate.getMonth() + 1}/${pubDate.getFullYear()}`;

                            // --- XỬ LÝ ẢNH THUMBNAIL (NÂNG CẤP) ---
                            let imageUrl = article.thumbnail;

                            // Nếu RSS không có sẵn thumbnail, thử bóc tách ảnh từ trong nội dung bài viết
                            if (!imageUrl) {
                                const imgMatch = article.description.match(/<img[^>]+src="([^">]+)"/);
                                if (imgMatch && imgMatch[1]) {
                                    imageUrl = imgMatch[1];
                                }
                            }

                            // Nếu bài báo thực sự không có ảnh, lấy random 1 trong 3 ảnh bìa sách tuyệt đẹp này làm nền
                            if (!imageUrl) {
                                const defaultBookImages = [
                                    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80',
                                    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80',
                                    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80'
                                ];
                                imageUrl = defaultBookImages[Math.floor(Math.random() * defaultBookImages.length)];
                            }

                            // Dọn dẹp đoạn mô tả (loại bỏ các thẻ HTML rác của Google News)
                            let cleanDesc = article.description.replace(/<[^>]*>?/gm, '');
                            // Cắt ngắn nếu mô tả quá dài
                            if(cleanDesc.length > 120) cleanDesc = cleanDesc.substring(0, 120) + '...';

                            // Tạo khối HTML
                            const html = `
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <a href="${article.link}" target="_blank">
                                            <img src="${imageUrl}" alt="News Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px;">
                                        </a>
                                    </div>
                                    <div class="blog-info" style="padding-top: 15px;">
                                        <h4 class="blog-title" style="font-size: 16px; min-height: 45px; margin-bottom: 8px;">
                                            <a href="${article.link}" target="_blank" style="color: #333; text-decoration: none; font-weight: bold;">
                                                ${article.title}
                                            </a>
                                        </h4>
                                        <div class="blog-date" style="color: var(--main-color); font-size: 13px; margin-bottom: 10px;">
                                            <i class="fa-regular fa-clock"></i> ${dateString}
                                        </div>
                                        
                                        <div class="blog-desc" style="-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; color: #666; font-size: 14px; margin-bottom: 15px; line-height: 1.5;">
                                            ${cleanDesc}
                                        </div>
                                        
                                        <a href="${article.link}" target="_blank" class="read-more" style="color: var(--main-color); font-weight: bold; text-decoration: none;">Xem thêm <i class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            `;
                            newsGrid.innerHTML += html;
                        });
                    } else {
                        newsGrid.innerHTML = '<p style="text-align:center; width:100%;">Lỗi không thể tải được tin tức sách.</p>';
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi fetch tin tức:', error);
                    document.getElementById('news-grid').innerHTML = '<p style="text-align:center; width:100%;">Đang bị gián đoạn kết nối, vui lòng thử lại sau.</p>';
                });
        });