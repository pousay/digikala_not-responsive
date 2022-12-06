const sidebar = document.querySelector(".sidebar");
const addIMG = document.querySelector(".addimg")
const changeAddbtn = document.querySelectorAll(".bs-btn");




CurrentScroll = 10;
window.addEventListener("scroll", () => {


    ws = window.scrollY

    if (ws > CurrentScroll) {
        sidebar.style.marginTop = "10px"
        CurrentScroll = window.scrollY
        sidebar.style.zIndex = "0"
    }
    else if (ws < CurrentScroll) {
        CurrentScroll = window.scrollY
        sidebar.style.marginTop = "120px"
        sidebar.style.zIndex = "4"
    }


})
for (const btn of changeAddbtn) {
    btn.addEventListener("mouseover", () => {
        for (const btn of changeAddbtn) {
            btn.classList.remove("hidden")
        }
    })
    btn.addEventListener("mouseout", () => {
        for (const btn of changeAddbtn) {
            btn.classList.add("hidden")
        }
    })
}
addIMG.addEventListener("mouseover", () => {
    for (const btn of changeAddbtn) {
        btn.classList.remove("hidden")
    }
})
addIMG.addEventListener("mouseout", () => {
    for (const btn of changeAddbtn) {
        btn.classList.add("hidden")
    }
})
AdPhotoList = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/1476096922ab00ca26dddd8535f64cdd13e7530b_1661434963.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/4b288f0f84a72e429e85511a5af5310ff9c27c88_1661186427.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/ffe77dcb1f7603dde4492004165ca8e2c3c8457f_1660056383.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/20d6729a06c864920e07a2b7940a696675df69ff_1661344657.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/4cc923800a97e2ec9ef905908898cf06a6ac82d5_1661323084.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/f8e7a57dd7adb84b07ec9d3259de76649003922c_1661079378.gif",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/059d931b5023ad0a094e2386940a6845adb1865c_1660970172.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/d5101442772669f3308f714516c54013fecf944c_1661196878.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/9e07d541b92f1564241b835c36174b35da6b31a5_1661089146.jpg?x-oss-process=image/quality,q_95"
]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
adchangerHelp = 0
async function changeAdsPhoto() {
    if (adchangerHelp === 0) {
        for (var img of AdPhotoList) {
            addIMG.setAttribute("src", img)
            await sleep(10000)

            if (AdPhotoList.indexOf(img) == 8) {
                adchangerHelp = 0
                changeAdsPhoto()
            }
        }
    }
}

changeAdsPhoto()


for (const btn of changeAddbtn) {
    if (btn.classList.contains("smaller-btn")) {
        btn.addEventListener("click", () => {
            var ThePhoto = btn.parentNode.querySelector("img");
            var Theimg = ThePhoto.getAttribute("src");


            console.log(Theimg);
            for (const photo in AdPhotoList) {
                if (AdPhotoList[photo] === Theimg) {
                    if (photo == 0) {
                        g = 8
                        console.log(g);
                        ThePhoto.setAttribute("src", AdPhotoList[g])
                    }
                    else {
                        g = Number(photo) - 1
                        console.log(g);
                        ThePhoto.setAttribute("src", AdPhotoList[g])
                    }

                }
            }
        })
    }
    else if (btn.classList.contains("bigger-btn")) {
        btn.addEventListener("click", () => {
            var ThePhoto = btn.parentNode.querySelector("img");
            var Theimg = ThePhoto.getAttribute("src");


            console.log(Theimg);
            for (const photo in AdPhotoList) {
                if (AdPhotoList[photo] === Theimg) {
                    if (photo == 8) {
                        g = 0
                        console.log(g);
                        ThePhoto.setAttribute("src", AdPhotoList[g])
                    }
                    else {
                        g = Number(photo) + 1
                        console.log(g);
                        ThePhoto.setAttribute("src", AdPhotoList[g])
                    }

                }
            }
        })
    }


}



const super_suggestion_div = document.querySelector(".super-sugg-items")


function add_super_suggest(photo, newprice, oldprice, offPersent) {
    // creating elements
    const aTag = document.createElement("a");
    const off_img = document.createElement("img");
    const pricediv = document.createElement("div");
    const worth = document.createElement('p');
    const cost = document.createElement('p');
    const off = document.createElement('p');
    const oldp = document.createElement('p');

    // attributes
    off_img.setAttribute("src", photo);
    cost.innerHTML = newprice;
    off.innerHTML = offPersent;
    oldp.innerHTML = oldprice;
    aTag.setAttribute("href", "#");
    worth.innerHTML = "تومان";
    // classes
    aTag.classList.add("super-sugg-item");
    off_img.classList.add("off-img");
    pricediv.classList.add("price");
    worth.classList.add("worth");
    worth.classList.add("pt");
    cost.classList.add("cost");
    cost.classList.add("pt");
    off.classList.add("off");
    off.classList.add("pt");
    oldp.classList.add("old-price")
    // parent-child-creating
    pricediv.appendChild(worth);
    pricediv.appendChild(cost);
    pricediv.appendChild(off);

    aTag.appendChild(off_img);
    aTag.appendChild(pricediv);
    aTag.appendChild(oldp);

    super_suggestion_div.appendChild(aTag)
}

add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/1052e3d995048a1f9c18ea141f922098ed3f4cd7_1602574559.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)
add_super_suggest(
    "https://dkstatics-public.digikala.com/digikala-products/8abd171355d84f4d4cd7f2cb7a92591687d509ce_1642506121.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "359,000",
    "578,000",
    "38%"
)


const parentTag = document.querySelector(".grouping");

function grouping_func(photo, linkAddress, explaination) {

    // the tags 
    const groupingA_Tag = document.createElement("a");
    const groupingImage_Tag = document.createElement("img");
    const groupingText_Tag = document.createElement("p");

    // Atrributes:
    // classes
    groupingA_Tag.classList.add("each-item-in-group");
    groupingImage_Tag.classList.add("group-item-img");
    groupingText_Tag.classList.add("nowrap2");

    // href and src
    groupingA_Tag.setAttribute("href", linkAddress);
    groupingImage_Tag.setAttribute("src", photo);
    groupingText_Tag.innerHTML = explaination;
    // child-parent
    groupingA_Tag.appendChild(groupingImage_Tag);
    groupingA_Tag.appendChild(groupingText_Tag);

    parentTag.appendChild(groupingA_Tag)

}
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "سلام"
)

grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)
grouping_func(
    "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    "#",
    "asdaksjasdasds"
)

var Scroller1 = document.querySelector(".scroller1");
var Scroller2 = document.querySelector(".scroller2");
var ThePlace = -907;
const super_sugg_item = document.querySelectorAll(".super-sugg-item");
async function change_superSugg_translate_left() {
    ThePlace += 171
    for (const sd of super_sugg_item) {
        console.log(ThePlace);
        if (ThePlace >= 0) {
            ThePlace = 0
            for (const ds of super_sugg_item) {
                ds.style.transform = `translateX(${ThePlace}px)`
            }
        }
        else {
            for (const ds of super_sugg_item) {
                ds.style.transform = `translateX(${ThePlace}px)`
            }

        }

    }
};

async function change_superSugg_translate_right() {
    ThePlace -= 171
    console.log(ThePlace);

    for (const sd of super_sugg_item) {
        if (ThePlace <= -907) {
            ThePlace = -907
            for (const ds of super_sugg_item) {
                ds.style.transform = `translateX(${ThePlace}px)`
            }
        }
        else {
            for (const ds of super_sugg_item) {
                ds.style.transform = `translateX(${ThePlace}px)`
            }

        }

    }
};
Scroller1.addEventListener("click", change_superSugg_translate_left);
Scroller2.addEventListener("click", change_superSugg_translate_right);








const DSIS = document.querySelector(".digikala-suggest-items");

function dksi_adder(link, photo, explaination) {

    // creating elements
    aTag = document.createElement("a");
    Image_tag = document.createElement("img");
    Ptag = document.createElement("p");

    // class
    aTag.classList.add("digikala-suggest-item");
    Image_tag.classList.add("DSI-img");
    Ptag.classList.add("DSI-text")

    // atrributes and innerhtml
    aTag.setAttribute("href", link);
    Image_tag.setAttribute("src", photo);
    Ptag.innerHTML = explaination;

    // appending childs
    aTag.appendChild(Image_tag);
    aTag.appendChild(Ptag);

    DSIS.appendChild(aTag)
}

dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)
dksi_adder(
    "#",
    "https://dkstatics-public.digikala.com/digikala-products/377c8301b94b13ed937dbb940e1270f2d63416ed_1630229265.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    "my powerbank"
)








const dsi = document.querySelectorAll(".digikala-suggest-item");

for (const dsi_tag of dsi) {
    dsi_tag.style.transform = "translateX(-80px)";
}

var dks_btn_left = document.querySelector(".ds-left-btn");
var dks_btn_right = document.querySelector(".ds-right-btn");

function dks_turn_left() {
    dks_btn_left.classList.add("hidden");
    dks_btn_right.classList.remove("hidden");


    for (const dsi_tags of dsi) {
        if (dsi_tags.style.transform === "translateX(-80px)") {
            dsi_tags.style.transform = "translateX(30px)"
        }
    }

};

function dks_turn_right() {
    dks_btn_right.classList.add("hidden");
    dks_btn_left.classList.remove("hidden");

    for (const dsi_tags of dsi) {
        if (dsi_tags.style.transform === "translateX(30px)") {
            dsi_tags.style.transform = "translateX(-80px)"

        }
    }

};

dks_btn_left.addEventListener("click", dks_turn_left);
dks_btn_right.addEventListener("click", dks_turn_right);







function newBrand(photo) {
    const img = document.createElement("img");
    img.classList.add("pop-brands-img");
    img.setAttribute("src", photo)
    const div = document.querySelector(".pop-brands");
    div.appendChild(img)
}

newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)

newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")

newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")

newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")
newBrand(
    "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
)
newBrand("https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80")










const pop_btn_right = document.querySelector(".pop-right-btn");
const pop_btn_left = document.querySelector(".pop-left-btn");

TheBrandPlace = -1620
pop_brand_images = document.querySelectorAll(".pop-brands-img")
pop_btn_left.classList.add("hidden")
for (const useless of pop_brand_images) {
    for (const useful of pop_brand_images) {
        useful.style.transform = `translateX(${TheBrandPlace}px)`
    }

}
async function pop_turn_to_left() {
    TheBrandPlace -= 155
    for (const useless of pop_brand_images) {
        if (TheBrandPlace > -1620) {
            pop_btn_left.classList.remove("hidden");
            pop_btn_right.classList.remove("hidden")

            console.log(TheBrandPlace);
            for (const useful of pop_brand_images) {
                useful.style.transform = `translateX(${TheBrandPlace}px)`
            }
        }
        else {
            TheBrandPlace = -1620
            console.log(TheBrandPlace);
            for (const useful of pop_brand_images) {
                pop_btn_left.classList.add("hidden");
                pop_btn_right.classList.remove("hidden")
                useful.style.transform = `translateX(${TheBrandPlace}px)`
            }
        }
    }
}


async function pop_turn_to_right() {
    TheBrandPlace += 155
    for (const useless of pop_brand_images) {
        if (TheBrandPlace < 40) {
            pop_btn_left.classList.remove("hidden");
            pop_btn_right.classList.remove("hidden")

            console.log(TheBrandPlace);
            for (const useful of pop_brand_images) {
                useful.style.transform = `translateX(${TheBrandPlace}px)`
            }
        }
        else {
            TheBrandPlace = 40
            console.log(TheBrandPlace);
            for (const useful of pop_brand_images) {
                pop_btn_left.classList.remove("hidden");
                pop_btn_right.classList.add("hidden")
                useful.style.transform = `translateX(${TheBrandPlace}px)`
            }
        }
    }
}


pop_btn_left.addEventListener("click", pop_turn_to_left)
pop_btn_right.addEventListener("click", pop_turn_to_right)


document.querySelector(".dps-sign-in").addEventListener("mouseover", () => {
    document.querySelector(".dps-sign-in").style.backgroundColor = "rgb(205, 0, 196)"
})

document.querySelector(".dps-sign-in").addEventListener("mouseout", () => {
    document.querySelector(".dps-sign-in").style.backgroundColor = "transparent"
})

var dci_item = document.querySelector(".digiclub");
dci_item.childNodes[1].style.borderRadius = "10px 0px 0px 10px";
dci_item.childNodes[5].style.borderRadius = "0px 10px 10px 0px";



var msd_left_btn = document.querySelector(".msd-left-btn");
var msd_right_btn = document.querySelector(".msd-right-btn");
var msd_inside = document.querySelectorAll(".mssd-inside")
msd_changer_helper = -730

for (var item of msd_inside) {
    item.style.transform = `translateX(${msd_changer_helper}px)`
}

msd_left_btn.addEventListener("click", () => {
    msd_changer_helper += 340
    msd_left_btn.classList.add("hidden")
    if (msd_changer_helper > -50) {
        msd_changer_helper = -50
        msd_left_btn.classList.add("hidden");
        msd_right_btn.classList.remove("hidden");
        for (const item of msd_inside) {
            item.style.transform = `translateX(${msd_changer_helper}px)`
        }
    }
    else {
        msd_left_btn.classList.remove("hidden");
        msd_right_btn.classList.remove("hidden");
        for (const item of msd_inside) {
            item.style.transform = `translateX(${msd_changer_helper}px)`
        }
    }
})

msd_right_btn.addEventListener("click", () => {
    msd_changer_helper -= 340

    if (msd_changer_helper < -730) {
        msd_right_btn.classList.add("hidden")
        msd_left_btn.classList.remove("hidden")
        msd_changer_helper = -730
        for (const item of msd_inside) {
            item.style.transform = `translateX(${msd_changer_helper}px)`
        }

    }
    else {
        msd_right_btn.classList.remove("hidden")
        msd_left_btn.classList.remove("hidden")
        for (const item of msd_inside) {
            item.style.transform = `translateX(${msd_changer_helper}px)`
        }
    }
})









function bests_items_creater(photo, off, newprice, oldprice) {
    const bests_parent_div = document.querySelector(".bests");

    let bests_item = document.createElement("div");
    let bests_image = document.createElement("img");
    let div_price = document.createElement("div");
    let worth = document.createElement("p");
    let cost = document.createElement("p");
    let Theoff = document.createElement("p");
    let oldp = document.createElement("p");




    bests_item.classList.add("bests-item");
    bests_image.classList.add("bests-item-img");
    bests_image.setAttribute("src", photo);
    div_price.classList.add("price");

    worth.classList.add("worth");
    worth.classList.add("pt");

    cost.classList.add("cost");
    cost.classList.add("pt");

    Theoff.classList.add("off");
    Theoff.classList.add("pt");

    oldp.classList.add("old-price");



    oldp.innerHTML = oldprice;
    cost.innerHTML = newprice;
    Theoff.innerHTML = off;


    div_price.appendChild(worth);
    div_price.appendChild(cost);
    div_price.appendChild(Theoff);

    bests_item.appendChild(bests_image);
    bests_item.appendChild(div_price);
    bests_item.appendChild(oldp);

    var bests_see_all_div = document.querySelector(".bests-see-all-div");
    bests_parent_div.insertBefore(bests_item, bests_see_all_div);

}
tkh = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7, 8, 1]
for (const aydad of tkh) {
    bests_items_creater(
        "https://dkstatics-public-2.digikala.com/digikala-products/110568455.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "25%",
        "1,000,000",
        "2,000,000"
    )

}



function reading_item_maker(photo, link, text) {
    const rmd = document.querySelector(".reading-main-div");

    var aTag = document.createElement("a");
    var img = document.createElement("img");
    var p = document.createElement("p");

    aTag.setAttribute("href", link);
    img.setAttribute("src", photo);
    p.innerHTML = text;

    aTag.classList.add("reading-items");
    img.classList.add("reading-img");
    p.classList.add("reading-text")

    aTag.appendChild(img);
    aTag.appendChild(p);

    rmd.appendChild(aTag)
}

sdkasda = [1, 2, 3, 4]
for (const ri of sdkasda) {
    reading_item_maker(
        "https://www.digikala.com/mag/wp-content/uploads/2022/09/Xiaomi-12S-Ultra-1-610x380.jpg",
        "#",
        "sadhashdkjhasjdkasdl;kaskjaksdjlkasjdlasjdlajssadasdasdasdsadasdasdlkdlkas"
    )
}

function footer_image_maker(photo) {
    const footer = document.querySelector("footer");

    img = document.createElement("img");
    img.classList.add("footer-img");
    img.setAttribute("src", photo);
    footer.appendChild(img)
}


footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/fidibo.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digimag.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digipay.svg"
)

footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digistyle.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/jet.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/magnet.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digiaffiliate.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/diginext.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/pindo.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/komodaa.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digiplus.svg"
)
footer_image_maker(
    "https://www.digikala.com/statics/img/svg/footer/digiclub.svg"
)
















