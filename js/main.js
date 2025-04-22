document.addEventListener("DOMContentLoaded", function () {

    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");
    const backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");
    // change tab
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFor = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");

    var tabNesteds = document.querySelectorAll(".js__tabNesteds");

    // sub menu
    // const subMenus = document.querySelectorAll(".js__subMenuContainer");
    const showSubMenus = document.querySelectorAll(".js__showSubMenu");
    


    // sidebar
    const sidebarContainer = document.querySelector(".js__sidebarContainer");

    // fancybox
    var fancyboxes = document.querySelectorAll(".fancybox-full");

    //
    var ulDDs = document.querySelectorAll(".js__ulDD");

    // var search form handbook
    var searchFormHandbook = document.querySelector(".js__inputSearchFormDD");

    var eleStickyHandbook = document.querySelector(".js__stickyDetailHandbook");

    var stickyDetailHandbooks = document.querySelectorAll(
        ".js__stickyDetailHandbookItem"
    );
    var scrollDetailHandbooks = document.querySelectorAll(
        ".js__detailHandbookScroll"
    );

    // slide
    var threePointFiveSlides = document.querySelectorAll(
        ".js__swiperThreePointFiveContainer"
    );
    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");
    var gallerryPictures = document.querySelectorAll(
        ".js__swiperGalleryContainerPicture"
    );
    var gallerryPicturesSecondary = document.querySelectorAll(
        ".js__swiperGalleryContainerPictureSecondary"
    );
    var galleryVideos = document.querySelectorAll(
        ".js__swiperGalleryContainerVideo"
    );
    var oneSlides = document.querySelectorAll(".js__swiperOneContainer");
    var oneSlidesSecondary = document.querySelectorAll(
        ".js__swiperOneSecondaryContainer"
    );
    var oneCardSlides = document.querySelectorAll(
        ".js__swiperOneCardContainer"
    );
    var threeSlides = document.querySelectorAll(".js__swiperThreeContainer");
    var fourSlides = document.querySelectorAll(".js__swiperFourContainer");
    var fiveSlides = document.querySelectorAll(".js__swiperFiveContainer");
    var videoLibrarySlides = document.querySelectorAll(
        ".js__swiperVideoLibraryContainer"
    );
    var scaleCenters = document.querySelectorAll(
        ".js__swiperScaleCenterContainer"
    );

    var handBookFiveSlide = document.querySelector(".js__handbookFiveSlide");

    function switchTab(tabId, ...otherTabIds) {
        document
            .querySelectorAll("[id^='tab-']")
            .forEach((tab) => tab.classList.remove("active"));
        document
            .querySelectorAll("[id^='pane-']")
            .forEach((pane) => pane.classList.remove("active"));

        const currentTab = document.getElementById(tabId);
        currentTab.classList.add("active");

        const tabIndex = Array.from(
            document.querySelectorAll("[id^='tab-']")
        ).indexOf(currentTab);

        const currentPane =
            document.querySelectorAll("[id^='pane-']")[tabIndex];
        currentPane.classList.add("active");

        const otherTabIdsArray = otherTabIds.map(
            (id) => "tab-" + id.split("-")[1]
        );

        document.querySelectorAll("[id^='tab-']").forEach((tab) => {
            if (otherTabIdsArray.includes(tab.id)) {
                tab.classList.remove("active");
                document
                    .getElementById("pane-" + tab.id.split("-")[1])
                    .classList.remove("active");
            }
        });
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
    
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // Xử lý hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-1", "tab-2");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-2", "tab-1");
                };
            }
            if (tabThree) {
                tabThree.onclick = function () {
                    switchTab("tab-3", "tab-4", "tab-5");
                };
            }
            if (tabFor) {
                tabFor.onclick = function () {
                    switchTab("tab-4", "tab-5", "tab-3");
                };
            }
            if (tabFive) {
                tabFive.onclick = function () {
                    switchTab("tab-5", "tab-4", "tab-3");
                };
            }

            if (tabNesteds) {
                tabNesteds.forEach((tabNested) => {
                    var tabChildrens = tabNested.querySelectorAll(
                        ".js__tabChildrenHandbookItem"
                    );
                    var paneChildrens = tabNested.querySelectorAll(
                        ".js__paneChildrenHandbookItem"
                    );

                    tabChildrens.forEach((tabChildren, index) => {
                        var paneChildren = paneChildrens[index];

                        tabChildren.onclick = function () {
                            tabNested
                                .querySelector(
                                    ".active.js__tabChildrenHandbookItem"
                                )
                                .classList.remove("active");

                            tabNested
                                .querySelector(
                                    ".active.js__paneChildrenHandbookItem"
                                )
                                .classList.remove("active");

                            this.classList.add("active");
                            paneChildren.classList.add("active");
                        };
                    });
                });
            }

            //
            if (stickyDetailHandbooks && scrollDetailHandbooks) {
                stickyDetailHandbooks.forEach((stickyDetailHandbook, index) => {
                    var scrollDetailHandbook = scrollDetailHandbooks[index];
                    stickyDetailHandbook.onclick = function () {
                        if (header && eleStickyHandbook) {
                            var newTop =
                                scrollDetailHandbook.getBoundingClientRect()
                                    .top +
                                window.scrollY -
                                (header.clientHeight +
                                    eleStickyHandbook.clientHeight +
                                    6);
                            window.scrollTo({
                                top: newTop,
                                behavior: "smooth",
                            });
                        }
                    };
                });
            }

            // submenu
            if (showSubMenus) {
                showSubMenus.forEach((showSubMenu) => {
                    var menu = document.querySelector(".js__subMenu");
                    var closeSubMenu =
                        document.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            //
            if (ulDDs) {
                ulDDs.forEach((ulDD) => {
                    var liDDs = ulDD.querySelectorAll(".js__liDD");
                    var moreLiDD = ulDD.querySelector(".js__showDDMore");

                    moreLiDD.onclick = function () {
                        liDDs.forEach((liDD) => {
                            liDD.style.display = "flex";
                        });
                        this.style.display = "none";
                    };
                });
            }

            //
            if (searchFormHandbook) {
                var inputSearchDD =
                    searchFormHandbook.querySelector(".js__inputSearchDD");
                inputSearchDD.addEventListener("input", function (event) {
                    if (event.target.value.length > 0) {
                        searchFormHandbook.classList.add("active");
                    } else {
                        searchFormHandbook.classList.remove("active");
                    }
                });
            }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },
       
        // sticky sidebar
        stickySlidebar: function () {
            if (sidebarContainer) {
                var leftSide =
                    sidebarContainer.querySelector(".js__leftSidebar");
                var rightSide =
                    sidebarContainer.querySelector(".js__rightSidebar");
                $(leftSide, rightSide).theiaStickySidebar({
                    containerSelector: sidebarContainer,
                    additionalMarginTop: 200,
                    additionalMarginBottom: 20,
                });
            }
        },
        stickyHandbook: function () {
            $(
                ".js__leftHandbookSidebar,.js__rightHandbookSidebar"
            ).theiaStickySidebar({
                additionalMarginTop: 60,
            });
        },
        // fancybox
        fancybox: function () {
            if (fancyboxes) {
                fancyboxes.forEach(function (fancybox) {
                    $(".fancybox-full a").fancybox();
                });
            }
        },
        // slider one
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperOnes");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        // slider one secondary
        sliderOneItemsSecondary: function () {
            oneSlidesSecondary.forEach((item) => {
                var slider = item.querySelector(".js__swiperItems");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    pagination: {
                        el: pagi || null,
                    },
                });
            });
        },
        // slider one card
        sliderOneCardItems: function () {
            oneCardSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperOneCards");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    effect: "cards",
                    grabCursor: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        // slider video library
        sliderVideoLibraryItems: function () {
            videoLibrarySlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperVideoLibrary");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    centeredSlides: true,
                    loop: false,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            loop: true,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            loop: true,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                            loop: true,
                        },
                    },
                });
            });
        },
        // slider three
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThrees");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        },
        // slider three point five
        sliderThreePointFiveItems: function () {
            threePointFiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThreePointFive");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 18,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 3.5,
                        },
                    },
                });
            });
        },
        // slider four
        sliderFourItems: function () {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperFour");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        },
        // slider five
        sliderFiveItems: function () {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperFives");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 70,
                        },
                    },
                });
            });
        },
        // slider auto
        sliderAutoItems: function () {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 12,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2.4,
                            spaceBetween: 12,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                        },
                    },
                });
            });
        },
        // slider gallery picture
        sliderGalleryPictureItems: function () {
            gallerryPictures.forEach((item) => {
                var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
                var sliderSmall = item.querySelector(".js__swiperGallerySmall");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                var small = new Swiper(sliderSmall, {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    freeMode: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024: {
                            slidesPerView: 4.5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                        },
                    },
                });
                var large = new Swiper(sliderLarge, {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    thumbs: {
                        swiper: small,
                    },
                });

                // small.controller.control = large;
                // large.controller.control = small;
            });
        },
        // slider gallery picture 2
        sliderGalleryPictureItemsSecondary: function () {
            gallerryPicturesSecondary.forEach((item) => {
                var sliderLarge = item.querySelector(".js__swiperGalleryLargeSecondary");
                var sliderSmall = item.querySelector(".js__swiperGallerySmallSecondary");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                var small = new Swiper(sliderSmall, {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    watchOverflow: true,
                    freeMode: false, 
                    observer: true,
                    observeParents: true,
                    speed: 300,
                    breakpoints: {
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 3.5,
                        },
                    },
                });
                var large = new Swiper(sliderLarge, {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                    },
                    pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    },
                    thumbs: {
                        swiper: small,
                    },
                });

               
            });
        },
        // slider gallery video
        sliderGalleryVideoItems: function () {
            galleryVideos.forEach((item) => {
                var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
                var sliderSmall = item.querySelector(".js__swiperGallerySmall");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                var small = new Swiper(sliderSmall, {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    freeMode: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        640: {
                            spaceBetween: 20,
                        },
                        768: {
                            spaceBetween: 20,
                        },
                        1024: {
                            spaceBetween: 30,
                        },
                        1200: {
                            spaceBetween: 30,
                        },
                    },
                });
                var large = new Swiper(sliderLarge, {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    thumbs: {
                        swiper: small,
                    },
                });

                // small.controller.control = large;
                // large.controller.control = small;
            });
        },
        // slider handbook five
        sliderHandbookFiveItem: function () {
            if (handBookFiveSlide) {
                var slider = handBookFiveSlide.querySelector(".js__slider");
                var next = handBookFiveSlide.querySelector(
                    ".swiper-button-next"
                );
                var prev = handBookFiveSlide.querySelector(
                    ".swiper-button-prev"
                );
                new Swiper(slider, {
                    slidesPerView: 2.5,
                    spaceBetween: 8,
                    slidesPerGroup: 1,
                    loop: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    },
                });
            }
        },
        // slider scale center
        sliderScaleCenterItem: function () {

            scaleCenters.forEach((item) => {
                var slider = item.querySelector(".js__sliderScaleCenter");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    },
                });
            });
        },

        // Xử lý sự kiện show search mb
        handleShowSearchMb:function () {
            const searchMbs = document.querySelectorAll(".js__searchMb");
            if (searchMbs.length === 0) return;
            searchMbs.forEach((searchMb) => {
                var closeSearchMb =
                    document.querySelector(".js__closeSearchMb");
                var formSearchMb = document.querySelector(".js__formSearchMb");
                const focusElement =
                    formSearchMb.querySelector(".js__focusSearchMb");
                searchMb.onclick = function () {
                    formSearchMb.classList.add("active");
                    focusElement.focus();
                    
                };
                closeSearchMb.onclick = function () {
                    formSearchMb.classList.remove("active");
                    focusElement.value = "";
                };
            });
        },

         // Xử lý thay đổi ngôn ngữ
     handleLanguageSwitch: function() {
        const langContainers = document.querySelectorAll(".js__languageContainer");
        if (!langContainers) return;
        
        langContainers.forEach((langContainer) => {
            var languageDefault = langContainer.querySelector(
                ".js__languageDefault"
            );
            var languageItems =
                langContainer.querySelectorAll(".js__languageItem");

            const overlay = langContainer.querySelector(".js__overlay");

            languageDefault.onclick = function () {
                this.classList.toggle("active");
                overlay.classList.toggle('active')
            };

            overlay.onclick = function () {
                this.classList.remove("active");
                languageDefault.classList.remove('active')
                
            };

            languageItems.forEach((languageItem) => {
                var children = languageDefault.querySelector(
                    ".js__languageDefaultText"
                );
                languageItem.onclick = function () {
                    children.innerHTML = languageItem.innerHTML;
                    languageDefault.classList.remove("active");
                    overlay.classList.remove('active')
                };
            });
        });
    },
    // Xử lý sự kiện để show dropdown submenu
     handleShowDropdownSubMenu: function() {
        const subMenu = document.querySelector('.js__subMenu')
        const dropdownSubMenu = subMenu.querySelectorAll(".js__dropDown");
            if (dropdownSubMenu.length === 0) return;
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement.parentElement;
                item.onclick = function () {
                    parent.classList.toggle("active");
                };
            });
    },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (header) {
                const isSticky = scrollY > 350;
                if (isSticky !== this.isSticky) {
                    header.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
                }
            }

            if (eleStickyHandbook) {
                var elementPosition = eleStickyHandbook.getBoundingClientRect();
                const isStickyHandbook =
                    elementPosition.bottom < header.clientHeight;
                const isSticky2 = scrollY > 500;

                if (isSticky2 !== this.isSticky2) {
                    eleStickyHandbook.classList.toggle("sticky", isSticky2);
                    this.isSticky2 = isSticky2;
                }
            }

            if (stickyDetailHandbooks && scrollDetailHandbooks) {
                stickyDetailHandbooks.forEach(function (
                    stickyDetailHandbook,
                    index
                ) {
                    var scrollDetailHandbook = scrollDetailHandbooks[index];
                    var rect = scrollDetailHandbook.getBoundingClientRect();

                    var offsetTop = rect.top;
                    var offsetBottom = rect.bottom;

                    if (offsetTop <= 170 && offsetBottom >= 170) {
                        stickyDetailHandbook.classList.add("active");
                    } else {
                        stickyDetailHandbook.classList.remove("active");
                    }
                });
            }

           
        
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
                handleBackTopVisibility()
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            handleBackTop();
            this.handleEvent();
            // sticky sidebar
            this.stickySlidebar();
            this.stickyHandbook();
            // fancybox
            this.fancybox();
            // slider one
            this.sliderOneItems();
            // slider one secondary
            this.sliderOneItemsSecondary();
            // slider one card
            this.sliderOneCardItems();
            // slider video library
            this.sliderVideoLibraryItems();
            // slider three
            this.sliderThreeItems();
            // slider three point five
            this.sliderThreePointFiveItems();
            // slider four
            this.sliderFourItems();
            // slider five
            this.sliderFiveItems();
            // slider auto
            this.sliderAutoItems();
            // slider gallery picture
            this.sliderGalleryPictureItems();
            // slider gallery picture 2
            this.sliderGalleryPictureItemsSecondary();
            // slider gallery video
            this.sliderGalleryVideoItems();
            // slider handbook five
            this.sliderHandbookFiveItem();
            // slider scale center
            this.sliderScaleCenterItem();
            // search mb
            this.handleShowSearchMb();
            // language
            this.handleLanguageSwitch();
            // sub menu mb
            this.handleShowDropdownSubMenu();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});