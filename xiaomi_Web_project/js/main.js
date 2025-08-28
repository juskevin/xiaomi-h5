
document.addEventListener("DOMContentLoaded", function () {
    const swiper = document.querySelector(".C_swiper");
    const images = document.querySelectorAll(".C_swiper a");
    const totalImages = images.length;
    let currentIndex = 0;
    const dotContainer = document.querySelector(".swiper-dot");
    let interval;

    // 创建圆点
    function createDots() {
        dotContainer.innerHTML = ""; // 清空现有的圆点
        for (let i = 0; i < totalImages; i++) {
            const dot = document.createElement("span");
            dot.className = "dot";
            dotContainer.appendChild(dot);
        }
    }

    // 更新圆点状态
    function updateDots() {
        const dots = document.querySelectorAll(".dot"); // 重新获取圆点
        dots.forEach((dot, index) => {
            dot.classList.remove("on");
            if (index === currentIndex) {
                dot.classList.add("on");
            }
        });
    }

    // 显示当前图片
    function showCurrentImage(index) {
        const transformX = -window.innerWidth * index; // 根据屏幕宽度计算偏移量
        swiper.style.transform = `translateX(${transformX}px)`;
        updateDots(); // 更新圆点状态
    }

    // 初始显示第一张图片
    showCurrentImage(currentIndex);
    createDots();   //圆点创建
    updateDots(); // 初始时也需要更新圆点状态
    autoplay();

    //定时切换
    function autoplay() {
        interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % totalImages; // 计算新的索引
            showCurrentImage(currentIndex); // 显示当前图片
        }, 3000)
    }
    swiper.onmouseenter = function () {
        // 清除定时器
        clearInterval(interval);
    }
    swiper.onmouseleave = function () {
        autoplay();
    }

    // 左右切换按钮事件
    document.querySelector('.left').addEventListener('click', () => {

        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 计算新的索引
        showCurrentImage(currentIndex); // 显示当前图片
    });

    document.querySelector('.right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages; // 计算新的索引
        showCurrentImage(currentIndex); // 显示当前图片
    });

    // 圆点点击事件
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showCurrentImage(index); // 显示当前图片
        });
    });


    //监听窗口的resize事件，并根据窗口的宽度和高度调整图像尺寸
    function adjustImageSize() {
        const images = document.querySelectorAll('.C_swiper a');
        const windowWidth = window.innerWidth;
        images.forEach(image => {
            image.style.width = `${windowWidth}px`;
        });
    }
    window.addEventListener('resize', adjustImageSize);
    adjustImageSize();


    // 导航栏和回到顶部功能
    const headerNav = document.querySelector('.header-nav'); // 获取导航栏
    const scrollTop = document.getElementById('backTop'); // 获取回顶ID

    // 滚动事件
    window.onscroll = function () {
        // 下滑颜色改变
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerNav.style.backgroundColor = 'rgba(0, 0, 0, .85)';
        } else {
            headerNav.style.backgroundColor = 'transparent';
        }
        // 下滑显示上滑隐藏
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    };

    // top点击事件，点击回到顶部
    scrollTop.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    
    //内容轮播图1

    // 获取轮播图容器、图片、按钮和圆点
    const CantralSwiper1 = document.querySelector('.Cantral-swiper1');
    const CanSwiper1 = document.querySelector('.Can_swiper1');
    const images1 = document.querySelectorAll('.Can_swiper1 img');
    const totalImages1 = images1.length;
    let currentIndex1 = 0;
    const prevBtn1 = document.querySelector('.prev1');
    const nextBtn1 = document.querySelector('.next1');
    const dotsContainer1 = document.querySelector('.Can_swiper-dot1');
    let interval1;

    // 初始化轮播图，显示第一张图片和圆点
    function initSwiper1() {
        showImage1(currentIndex1);
        createDots1();
        updateDots1(currentIndex1);
        interval1 = autoplay1(); // 启动自动播放并保存定时器ID
    }

    // 显示图片
    function showImage1(index) {
        const transformX = -index * 100; // 假设每张图片的宽度是容器宽度的100%
        CanSwiper1.style.transform = `translateX(${transformX}%)`;
    }

    // 创建圆点
    function createDots1() {
        dotsContainer1.innerHTML = ''; // 清空现有的圆点
        for (let i = 0; i < totalImages1; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot1';
            dotsContainer1.appendChild(dot);
        }
        bindDotEvents(); // 绑定圆点点击事件
    }

    // 更新圆点状态
    function updateDots1(index) {
        const dots1 = document.querySelectorAll(".dot1");
        dots1.forEach(dot => {
            dot.classList.remove('active');
        });
        dots1[index].classList.add('active');
    }

    // 自动播放
    function autoplay1() {
        return setInterval(() => {
            currentIndex1 = (currentIndex1 + 1) % totalImages1;
            showImage1(currentIndex1);
            updateDots1(currentIndex1);
        }, 3000);
    }

    // 鼠标悬停暂停自动播放，鼠标离开继续自动播放
    CantralSwiper1.addEventListener('mouseenter', () => clearInterval(interval1));
    CantralSwiper1.addEventListener('mouseleave', () => {
        interval1 = autoplay1(); // 重新启动自动播放并更新 interval1
    });

    // 左右切换按钮事件
    prevBtn1.addEventListener('click', () => {
        clearInterval(interval1); // 暂停自动播放
        currentIndex1 = (currentIndex1 - 1 + totalImages1) % totalImages1;
        showImage1(currentIndex1);
        updateDots1(currentIndex1);
        interval1 = autoplay1(); // 重新启动自动播放
    });

    nextBtn1.addEventListener('click', () => {
        clearInterval(interval1); // 暂停自动播放
        currentIndex1 = (currentIndex1 + 1) % totalImages1;
        showImage1(currentIndex1);
        updateDots1(currentIndex1);
        interval1 = autoplay1(); // 重新启动自动播放
    });

    // 圆点点击事件
    function bindDotEvents() {
        const dots1 = document.querySelectorAll(".dot1");
        dots1.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(interval1); // 暂停自动播放
                currentIndex1 = index;
                showImage1(currentIndex1);
                updateDots1(currentIndex1);
                interval1 = autoplay1(); // 重新启动自动播放
            });
        });
    }

    // 初始化轮播图
    initSwiper1();





    //内容轮播图2

    // 获取轮播图2的容器、图片、按钮和圆点
    const CantralSwiper2 = document.querySelector('.Cantral-swiper2');
    const CanSwiper2 = document.querySelector('.Can_swiper2');
    const images2 = document.querySelectorAll('.Can_swiper2 img');
    const totalImages2 = images2.length;
    let currentIndex2 = 0;
    const prevBtn2 = document.querySelector('.prev2');
    const nextBtn2 = document.querySelector('.next2');
    const dotsContainer2 = document.querySelector('.Can_swiper-dot2');
    let interval2;

    // 初始化轮播图2，显示第一张图片和圆点
    function initSwiper2() {
        showImage2(currentIndex2);
        createDots2();
        updateDots2(currentIndex2);
        interval2 = autoplay2(); // 启动自动播放并保存定时器ID
    }

    // 显示图片2
    function showImage2(index) {
        const transformX = -index * 100; // 假设每张图片的宽度是容器宽度的100%
        CanSwiper2.style.transform = `translateX(${transformX}%)`;
    }

    // 创建圆点2
    function createDots2() {
        dotsContainer2.innerHTML = ''; // 清空现有的圆点
        for (let i = 0; i < totalImages2; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot2';
            dotsContainer2.appendChild(dot);
        }
        bindDotEvents2(); // 绑定圆点点击事件
    }

    // 更新圆点状态2
    function updateDots2(index) {
        const dots2 = document.querySelectorAll(".dot2");
        dots2.forEach(dot => {
            dot.classList.remove('active');
        });
        dots2[index].classList.add('active');
    }

    // 自动播放2
    function autoplay2() {
        return setInterval(() => {
            currentIndex2 = (currentIndex2 + 1) % totalImages2;
            showImage2(currentIndex2);
            updateDots2(currentIndex2);
        }, 3000);
    }

    // 鼠标悬停暂停自动播放，鼠标离开继续自动播放
    CantralSwiper2.addEventListener('mouseenter', () => clearInterval(interval2));
    CantralSwiper2.addEventListener('mouseleave', () => {
        interval2 = autoplay2(); // 重新启动自动播放并更新 interval2
    });

    // 左右切换按钮事件2
    prevBtn2.addEventListener('click', () => {
        clearInterval(interval2); // 暂停自动播放
        currentIndex2 = (currentIndex2 - 1 + totalImages2) % totalImages2;
        showImage2(currentIndex2);
        updateDots2(currentIndex2);
        interval2 = autoplay2(); // 重新启动自动播放
    });

    nextBtn2.addEventListener('click', () => {
        clearInterval(interval2); // 暂停自动播放
        currentIndex2 = (currentIndex2 + 1) % totalImages2;
        showImage2(currentIndex2);
        updateDots2(currentIndex2);
        interval2 = autoplay2(); // 重新启动自动播放
    });

    // 圆点点击事件2
    function bindDotEvents2() {
        const dots2 = document.querySelectorAll(".dot2");
        dots2.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(interval2); // 暂停自动播放
                currentIndex2 = index;
                showImage2(currentIndex2);
                updateDots2(currentIndex2);
                interval2 = autoplay2(); // 重新启动自动播放
            });
        });
    }

    // 初始化轮播图2
    initSwiper2();
});