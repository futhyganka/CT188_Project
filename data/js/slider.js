function upDateSlider(slider, i, n) {
    slider.style.transform = `translateX(calc(-100% * ${i} / ${n}))`;
}

const sliderMain = document.querySelectorAll('#main .section .content');
const cntSlider = [];
const currSlider = [];
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
    currSlider[i] = 0;
    
    upDateBtnSlider();

    function upDateBtnSlider() {
        console.log(i + " " + currSlider[i] + " " + (cntSlider[i] - colItem));
        if(currSlider[i] === 0) {
            sliderMain[i].children[1].style.display = 'none';
        } else {
            sliderMain[i].children[1].style.display = 'block';
        }

        if (currSlider[i] >= cntSlider[i] - colItem){
            sliderMain[i].children[2].style.display = 'none';
        } else {
            sliderMain[i].children[2].style.display = 'block';
        }
    }

    function mouseSlider(e) {
        currMouseSlider = e.clientX;
        deltaSlider = currMouseSlider - startMouseSlider;
        sliderMain[i].children[0].style.transform = `translateX(calc((-100% * ${currSlider[i]} / ${colItem}) + (${deltaSlider}px)))`;
        console.log(startMouseSlider + ' ' + currMouseSlider + ' ' + deltaSlider);
    }

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

    sliderMain[i].children[0].addEventListener('mousedown', function(e) {
        if(e.button === 0) {
            startMouseSlider = e.clientX;
            sliderMain[i].children[0].style.transition = 'transform 0s';

            window.addEventListener('mousemove', mouseSlider);

            window.addEventListener('mouseup', function(e) {
                if(e.button === 0) {
                    window.removeEventListener('mousemove', mouseSlider);
                    sliderMain[i].children[0].style.transition = 'transform .5s ease';
                    const numSlider = Math.round(deltaSlider/ 240);
                    console.log(numSlider + ' ' + currSlider[i]);
                    currSlider[i] -= numSlider;
                    console.log(currSlider[i]);
                    
                    if (currSlider[i] < 0) currSlider[i] = 0;
                    if (currSlider[i] > cntSlider[i] - colItem) {
                        if(cntSlider[i] - colItem < 0) {
                            currSlider[i] = 0;
                        } else {
                            currSlider[i] = cntSlider[i] - colItem;
                        }
                    }
                    console.log(currSlider[i]);
                    upDateSlider(sliderMain[i].children[0], currSlider[i], colItem);
                    upDateBtnSlider();
                }
            });
        }
    });
}