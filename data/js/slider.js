// Hàm cập nhật transform
function upDateSlider(slider, i, n) {
    slider.style.transform = `translateX(calc(-100% * ${i} / ${n}))`;
}

const sliderMain = document.querySelectorAll('#main .section .content');
// let swiperMain = [];
const cntSlider = [];
const currSlider = [];
// Lấy col-item
let colItem = getComputedStyle(document.documentElement).getPropertyValue('--col-item');
window.addEventListener('resize', () => {
    colItem = getComputedStyle(document.documentElement).getPropertyValue('--col-item');
});
let rowMain = sliderMain.length;

for(let i = 0; i < rowMain; i++) {

    let startMouseSlider;
    let currMouseSlider;
    let deltaSlider;
    cntSlider[i] = 7;
    // cntSlider[i] = sliderMain[i].children[0].children.length;
    currSlider[i] = 0;
    upDateBtnSlider();

    // Hàm cập nhật các nút chuyển slider ẩn hiện
    function upDateBtnSlider() {
        console.log(i + " " + currSlider[i] + " " + (cntSlider[i] - colItem))
        if(currSlider[i] === 0) { // ở trang đầu
            sliderMain[i].children[1].style.display = 'none';
        }else sliderMain[i].children[1].style.display = 'block';

        if (currSlider[i] >= cntSlider[i] - colItem){ // ở trang cuối
            sliderMain[i].children[2].style.display = 'none';
        }else sliderMain[i].children[2].style.display = 'block';
    }

    // Hàm cập nhật tọa độ X của chuột
    function mouseSlider(e) {
        currMouseSlider = e.clientX;
        deltaSlider = currMouseSlider - startMouseSlider;
        sliderMain[i].children[0].style.transform = `translateX(calc((-100% * ${currSlider[i]} / ${colItem}) + (${deltaSlider}px)))`;
        console.log(startMouseSlider + ' ' + currMouseSlider + ' ' + deltaSlider);
    }

    // Hàm 2 nút click
    sliderMain[i].children[1].addEventListener('click', () => {
        if(currSlider[i] === 0) return;
        currSlider[i]--;
        upDateSlider(sliderMain[i].children[0], currSlider[i], colItem);
        upDateBtnSlider();
    });

    sliderMain[i].children[2].addEventListener('click', () => {
        if(currSlider[i] === cntSlider[i] - colItem) return;
        currSlider[i]++;
        upDateSlider(sliderMain[i].children[0], currSlider[i], colItem);
        upDateBtnSlider();
    });

    // Thao các nhấn chuột
    sliderMain[i].children[0].addEventListener('mousedown', function(e) {
        if(e.button === 0) {
            startMouseSlider = e.clientX;
            sliderMain[i].children[0].style.transition = 'transform 0s';

            // Thao tác khi di chuột
            window.addEventListener('mousemove', mouseSlider);

            // Thao tác khi nhất chuột lên
            window.addEventListener('mouseup', function(e) {
                if(e.button === 0) {
                    window.removeEventListener('mousemove', mouseSlider)
                    sliderMain[i].children[0].style.transition = 'transform .5s ease';
                    const numSlider = Math.round(deltaSlider/ 240);
                    console.log(numSlider + ' ' + currSlider[i]);
                    currSlider[i] -= numSlider;
                    console.log(currSlider[i]);
                    if (currSlider[i] < 0) currSlider[i] = 0;
                    if (currSlider[i] > cntSlider[i] - colItem) {
                        if(cntSlider[i] - colItem < 0) {
                            currSlider[i] = 0;
                        }else currSlider[i] = cntSlider[i] - colItem;
                    }
                    console.log(currSlider[i]);
                    upDateSlider(sliderMain[i].children[0], currSlider[i], colItem);
                    upDateBtnSlider();
                }
            });

        }
    });

}


