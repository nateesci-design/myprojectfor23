// ============================================
// JavaScript ของเว็บไซต์ธรรมวัฒนา มหาดี
// ส่วนนี้ควบคุมเมนู ภาษา สินค้า ข่าว และฟอร์ม
// ============================================

// ข้อมูลข้อความ 2 ภาษา: เพิ่มหรือแก้คำแปลได้ใน object นี้
const translations = {
  th: {
    brand:"ธรรมวัฒนา มหาดี", navHome:"หน้าแรก", navAbout:"เกี่ยวกับเรา", navProducts:"สินค้าและบริการ ▾", navNews:"ข่าวสาร", navVideos:"วิดีโอ", navContact:"ติดต่อเรา", navCredits:"เครดิต",
    catOffering:"ชุดสังฆทาน", catRobe:"จีวรและเครื่องนุ่งห่มพระ", catBowl:"บาตรพระ", catIncense:"ธูปและเทียน", catCeremony:"อุปกรณ์พิธีกรรม",
    heroEyebrow:"ศรัทธา • ความตั้งใจ • ความใส่ใจ", heroTitle:"ธรรมวัฒนา มหาดี", heroText:"คัดสรรเครื่องสังฆภัณฑ์และของใช้สำหรับงานบุญ ด้วยความใส่ใจในทุกรายละเอียด", shopNow:"เลือกชมสินค้า", contactShop:"ติดต่อร้าน", quest:"ติดต่อสอบถาม",
    welcomeEyebrow:"WELCOME", welcomeTitle:"ยินดีต้อนรับสู่ร้านธรรมวัฒนา มหาดี", welcomeText:"ร้านจำหน่ายเครื่องสังฆภัณฑ์และอุปกรณ์สำหรับประกอบกิจกรรมทางพระพุทธศาสนา เรามุ่งเน้นการบริการที่สุภาพและข้อมูลสินค้าที่ชัดเจน",
    categoryEyebrow:"SHOP BY CATEGORY", categoryTitle:"หมวดหมู่สินค้า", viewAll:"ดูสินค้าทั้งหมด →", catDesc1:"ชุดถวายพระและของใช้จำเป็น", catDesc2:"เครื่องนุ่งห่มและของใช้สำหรับพระสงฆ์", catDesc3:"อุปกรณ์สำหรับกิจของสงฆ์", catDesc4:"เครื่องสักการะและเครื่องหอม",
    featuredEyebrow:"OUR SELECTION", featuredTitle:"สินค้าแนะนำ", benefit1Title:"คัดสรรด้วยความใส่ใจ", benefit1Text:"ให้ความสำคัญกับรายละเอียดและประโยชน์ใช้สอยของสินค้า", benefit2Title:"ข้อมูลชัดเจน", benefit2Text:"สอบถามรายละเอียดสินค้าและราคาได้ก่อนตัดสินใจ", benefit3Title:"พร้อมให้บริการ", benefit3Text:"ยินดีให้คำแนะนำเกี่ยวกับสินค้าและการจัดชุดถวาย",
    latestEyebrow:"LATEST UPDATE", latestTitle:"ข่าวสารจากทางร้าน", readNews:"อ่านข่าวทั้งหมด →",
    aboutEyebrow:"OUR STORY", aboutTitle:"เกี่ยวกับร้านธรรมวัฒนา มหาดี", aboutLead:"มุ่งมั่นให้การเลือกซื้อเครื่องสังฆภัณฑ์เป็นเรื่องสะดวก เข้าใจง่าย และเหมาะสมกับความต้องการ", historyTitle:"ประวัติและแนวคิด", historyText:"ร้านธรรมวัฒนา มหาดี จัดทำเว็บไซต์นี้เพื่อเป็นช่องทางแนะนำสินค้าเครื่องสังฆภัณฑ์ ข่าวสาร และข้อมูลการติดต่อ ลูกค้าสามารถเลือกชมหมวดหมู่สินค้าและสอบถามรายละเอียดเพิ่มเติมกับทางร้านได้", visionTitle:"วิสัยทัศน์", visionText:"ให้บริการด้วยความซื่อสัตย์ ใส่ใจคุณภาพ และอำนวยความสะดวกแก่ผู้ที่ต้องการเลือกซื้อสิ่งของสำหรับการทำบุญ",
    productsEyebrow:"PRODUCTS & SERVICES", productsTitle:"สินค้าและบริการ", productsLead:"เลือกชมหมวดหมู่สินค้า หรือค้นหาสิ่งที่ต้องการได้จากด้านล่าง", searchPlaceholder:"ค้นหาสินค้า...", allCategories:"ทุกหมวดหมู่", productNotice:"หมายเหตุ: รายการและราคาเป็นข้อมูลตัวอย่าง สามารถแก้ไขให้ตรงกับสินค้าจริงของร้านได้",
    newsEyebrow:"NEWS & UPDATES", newsTitle:"ข่าวสารและประชาสัมพันธ์", newsLead:"สาระน่ารู้และข่าวประชาสัมพันธ์จากร้านธรรมวัฒนา มหาดี",
    videoEyebrow:"VIDEO PRESENTATION", videoTitle:"วิดีโอแนะนำร้าน", videoLead:"พื้นที่สำหรับแนะนำร้าน สินค้า และบรรยากาศภายในร้าน", videoNotice:"วิดีโอนี้เป็นตัวอย่าง กรุณาเปลี่ยนรหัสวิดีโอ YouTube เป็นวิดีโอของร้านก่อนเผยแพร่",
    contactEyebrow:"GET IN TOUCH", contactTitle:"ติดต่อร้านธรรมวัฒนา มหาดี", contactLead:"สอบถามสินค้า รายละเอียด หรือข้อมูลเพิ่มเติมได้ผ่านช่องทางด้านล่าง", shopInformation:"ข้อมูลร้านค้า", addressLabel:"ที่อยู่:", sampleAddress:"237 ถ. จอมพล ตำบลในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000", phoneLabel:"โทรศัพท์:", hoursLabel:"เวลาเปิด-ปิด:", sampleHours:"09:00-17:00", socialTitle:"ติดตามร้าน", sendMessage:"ส่งข้อความถึงร้าน", yourName:"ชื่อของคุณ", yourEmail:"อีเมล", yourMessage:"ข้อความ", sendButton:"ส่งข้อความ", formNotice:"แบบฟอร์มตัวอย่างนี้จะแสดงข้อความยืนยันบนหน้าเว็บ ยังไม่ได้ส่งข้อมูลไปยังร้านจริง", mapTitle:"แผนที่ร้าน", directions:"เปิด Google Maps →", mapNotice:"แผนที่แสดงตำแหน่งตัวอย่างในจังหวัดนครราชสีมา กรุณาแก้ไขเป็นที่ตั้งจริงของร้าน",
    creditsEyebrow:"WEBSITE CREDITS", creditsTitle:"เครดิตผู้พัฒนาเว็บไซต์", developerName:"ผู้พัฒนาเว็บไซต์: ระบุชื่อผู้พัฒนา", developerRole:"บทบาท: นักพัฒนาเว็บไซต์", developedYear:"ปีที่พัฒนา: 2026",
    footerText:"เครื่องสังฆภัณฑ์และอุปกรณ์สำหรับงานบุญ พร้อมให้บริการด้วยความใส่ใจ", quickLinks:"เมนูลัด", contactUs:"ติดต่อ", rights:"สงวนลิขสิทธิ์", detail:"ดูรายละเอียด", ask:"สอบถามสินค้า", readMore:"อ่านเพิ่มเติม", back:"กลับไปหน้าข่าว", 
  },
  en: {
    brand:"Thammawattana Mahadee", navHome:"Home", navAbout:"About Us", navProducts:"Products & Services ▾", navNews:"News", navVideos:"Videos", navContact:"Contact", navCredits:"Credits",
    catOffering:"Monk Offering Sets", catRobe:"Monk Robes", catBowl:"Alms Bowls", catIncense:"Incense & Candles", catCeremony:"Ceremony Supplies",
    heroEyebrow:"FAITH • CARE • DEDICATION", heroTitle:"Thammawattana Mahadee", heroText:"Thoughtfully selected Buddhist supplies and essentials for merit-making ceremonies.", shopNow:"Explore Products", contactShop:"Contact Us", quest:"Ask About this item",
    welcomeEyebrow:"WELCOME", welcomeTitle:"Welcome to Thammawattana Mahadee", welcomeText:"A Buddhist supplies shop offering items for religious activities. We focus on courteous service and clear product information.",
    categoryEyebrow:"SHOP BY CATEGORY", categoryTitle:"Product Categories", viewAll:"View All Products →", catDesc1:"Offering sets and essential items", catDesc2:"Robes and monastic clothing", catDesc3:"Essential items for monastic life", catDesc4:"Worship items and fragrance",
    featuredEyebrow:"OUR SELECTION", featuredTitle:"Featured Products", benefit1Title:"Thoughtful Selection", benefit1Text:"We pay attention to product details and practical use.", benefit2Title:"Clear Information", benefit2Text:"Ask us about product details and prices before ordering.", benefit3Title:"Here to Help", benefit3Text:"We are happy to advise on products and offering sets.",
    latestEyebrow:"LATEST UPDATE", latestTitle:"Shop News", readNews:"Read All News →",
    aboutEyebrow:"OUR STORY", aboutTitle:"About Thammawattana Mahadee", aboutLead:"We aim to make choosing Buddhist supplies convenient, clear, and suitable for your needs.", historyTitle:"Our Story & Concept", historyText:"Thammawattana Mahadee created this website as a place to introduce Buddhist supplies, share news, and provide contact information. Browse product categories and contact the shop for more details.", visionTitle:"Our Vision", visionText:"To serve with honesty, care about quality, and make it easier to select items for Buddhist merit-making.",
    productsEyebrow:"PRODUCTS & SERVICES", productsTitle:"Products & Services", productsLead:"Browse a category or search for the items you need.", searchPlaceholder:"Search products...", allCategories:"All Categories", productNotice:"Note: Product names and prices are sample information. Update them to match the shop's actual inventory.",
    newsEyebrow:"NEWS & UPDATES", newsTitle:"News & Updates", newsLead:"Useful information and announcements from Thammawattana Mahadee.",
    videoEyebrow:"VIDEO PRESENTATION", videoTitle:"Shop Introduction Video", videoLead:"A space to introduce the shop, products, and store atmosphere.", videoNotice:"This is a sample video. Replace the YouTube video ID with the shop's video before publishing.",
    contactEyebrow:"GET IN TOUCH", contactTitle:"Contact Thammawattana Mahadee", contactLead:"Contact us through the details and channels below.", shopInformation:"Shop Information", addressLabel:"Address:", sampleAddress:"237 Chomphon Road, Nai Mueang Subdistrict, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000, Thailand", phoneLabel:"Phone:", hoursLabel:"Opening Hours:", sampleHours:"09:00 AM - 05:00 PM ", socialTitle:"Follow Us", sendMessage:"Send Us a Message", yourName:"Your Name", yourEmail:"Email", yourMessage:"Message", sendButton:"Send Message", formNotice:"This demo form displays a confirmation on the page. It does not send information to the shop.", mapTitle:"Shop Location", directions:"Open Google Maps →", mapNotice:"The map shows a sample location in Nakhon Ratchasima. Replace it with the shop's actual location.",
    creditsEyebrow:"WEBSITE CREDITS", creditsTitle:"Website Credits", developerName:"Developer: Add developer name", developerRole:"Role: Website Developer", developedYear:"Year Developed: 2026",
    footerText:"Buddhist supplies and essentials for merit-making, provided with care.", quickLinks:"Quick Links", contactUs:"Contact", rights:"All rights reserved.", detail:"Details", ask:"Ask About This Item", readMore:"Read More", back:"Back to News", 
  }
};

// Data :: Edit Data here!!!!
const products = [
  {id:1, category:"offering", name:{th:"ชุดสังฆทาน",en:"Monk Offering Set"}, desc:{th:"ชุดสิ่งของสำหรับถวายพระสงฆ์",en:"A collection of items for offering to monks."}, price:"9", featured:true},
  {id:2, category:"robe", name:{th:"จีวรพระ",en:"Monk Robe"}, desc:{th:"เครื่องนุ่งห่มสำหรับพระสงฆ์",en:"Traditional clothing for Buddhist monks."}, price:"9 ", featured:true},
  {id:3, category:"bowl", name:{th:"บาตรพระ",en:"Alms Bowl"}, desc:{th:"อุปกรณ์สำหรับกิจของสงฆ์",en:"An essential item for monastic daily life."}, price:"9 ", featured:true},
  {id:4, category:"incense", name:{th:"ธูปและเทียน",en:"Incense & Candles"}, desc:{th:"เครื่องสักการะสำหรับประกอบพิธี",en:"Worship items for religious ceremonies."}, price:"9 ", featured:true},
  {id:5, category:"ceremony", name:{th:"ชุดอุปกรณ์พิธีกรรม",en:"Ceremony Supplies"}, desc:{th:"อุปกรณ์สำหรับงานบุญและพิธีทางศาสนา",en:"Supplies for merit-making and religious ceremonies."}, price:"9", featured:false},
  {id:6, category:"offering", name:{th:"ของใช้ถวายพระ",en:"Monk Essentials"}, desc:{th:"ของใช้จำเป็นสำหรับจัดชุดถวาย",en:"Daily essentials for offering sets."}, price:"9 ", featured:false},
  {id:7, category:"incense", name:{th:"ชุดเครื่องหอม",en:"Incense Set"}, desc:{th:"เครื่องหอมสำหรับสักการะ",en:"Fragrant items for worship."}, price:"9 ", featured:false},
  {id:8, category:"ceremony", name:{th:"อุปกรณ์ทำบุญ",en:"Merit-Making Supplies"}, desc:{th:"อุปกรณ์สำหรับกิจกรรมทำบุญ",en:"Items for merit-making activities."}, price:"9 ", featured:false}
];

// NEws Add or edit here
const news = [
  {id:1, date:"2026-11-01", title:{th:"แนวทางเลือกชุดสังฆทาน",en:"How to Choose an Offering Set"}, text:{th:"เลือกสิ่งของที่จำเป็น มีคุณภาพ และเหมาะสมกับการใช้งานของพระสงฆ์",en:"Choose useful, good-quality items that suit the needs of monks."}},
  {id:2, date:"2026-10-20", title:{th:"เตรียมสิ่งของสำหรับวันทำบุญ",en:"Preparing for a Merit-Making Day"}, text:{th:"วางแผนรายการสิ่งของล่วงหน้าเพื่อให้การจัดเตรียมเป็นไปอย่างเรียบร้อย",en:"Plan your list of items in advance for a smooth preparation."}},
  {id:3, date:"2026-10-10", title:{th:"รู้จักเครื่องสังฆภัณฑ์เบื้องต้น",en:"An Introduction to Buddhist Supplies"}, text:{th:"ทำความรู้จักกับสิ่งของที่นิยมใช้ในกิจกรรมทางพระพุทธศาสนา",en:"Learn about items commonly used in Buddhist religious activities."}}
];

let currentLanguage = "th";

// Creat Card function
function productCard(product) {

    // get Language
    const name = product.name[currentLanguage];
    const desc = product.desc[currentLanguage];

    
    const priceText = product.price === "สอบถามราคา"
        ? (currentLanguage === "th" ? "สอบถามราคา" : "Please Contact Us")
        : (currentLanguage === "th"
            ? product.price + " บาท"
            : product.price + " THB");

    return `
    <article class="product-card">

        <div class="product-image">
            <img src="assets/stock.png" alt="${name}">
        </div>

        <div class="product-info">

            <h3>${name}</h3>

            <p>${desc}</p>

            <div class="product-price">
                ${priceText}
            </div>

            <div class="product-actions">

                <button class="small-button"
                    onclick="showProductInfo(${product.id})">
                    ${translations[currentLanguage].detail}
                </button>

                <button class="small-button"
                    onclick="askAboutProduct('${name}')">
                    ${translations[currentLanguage].ask}
                </button>

            </div>

        </div>

    </article>`;
}

// Show all Shop
function renderProducts() {
  document.getElementById("featuredProducts").innerHTML = products.filter(p => p.featured).map(productCard).join("");
  filterProducts();
}

// filter products!!
function filterProducts() {
  const search = document.getElementById("productSearch").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const result = products.filter(p => {
    const text = (p.name[currentLanguage] + " " + p.desc[currentLanguage]).toLowerCase();
    return (category === "all" || p.category === category) && text.includes(search);
  });
  document.getElementById("allProducts").innerHTML = result.length
    ? result.map(productCard).join("")
    : `<p>${currentLanguage === "th" ? "ไม่พบสินค้าที่ค้นหา" : "No products found."}</p>`;
}

// Ask shop button

function askAboutProduct(name) {
  location.hash = "contact";
  document.getElementById("customerMessage").value = (currentLanguage === "th" ? "สนใจสอบถามสินค้า: " : "I would like to ask about: ") + name;
}



// Create  news card and detail Newxss
function newsCard(item) {
  return `<article class="news-card"><img src="assets/placeholder.png" alt="">
    <div><small>${item.date}</small><h3>${item.title[currentLanguage]}</h3>
    <p>${item.text[currentLanguage]}</p>
    <button onclick="openNews(${item.id})">${translations[currentLanguage].readMore} →</button></div></article>`;
}
function renderNews() {
  document.getElementById("homeNews").innerHTML = news.slice(0,3).map(newsCard).join("");
  document.getElementById("allNews").innerHTML = news.map(newsCard).join("");
}
function openNews(id) {
  const item = news.find(n => n.id === id);
  const detail = document.getElementById("newsDetail");
  detail.classList.remove("hidden");
  detail.innerHTML = `<small>${item.date}</small><h2>${item.title[currentLanguage]}</h2><p>${item.text[currentLanguage]}</p><button class="small-button" onclick="closeNews()">${translations[currentLanguage].back}</button>`;
  detail.scrollIntoView({behavior:"smooth", block:"center"});
}
function closeNews() { document.getElementById("newsDetail").classList.add("hidden"); }

// chage language for seclcion
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[language][key]) element.placeholder = translations[language][key];
  });
  document.getElementById("languageSwitch").textContent = language === "th" ? "EN" : "TH";
  renderProducts();
  renderNews();
  closeNews();
}

// Change Page  Ex #about  #products
function showPage() {
  const pageId = location.hash.replace("#", "") || "home";
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  window.scrollTo({top:0, behavior:"smooth"});
}

//  Popup Detial Shop
function showProductInfo(productId) {

    //  ID
    const product = products.find(
        item => item.id === Number(productId)
    );

    if (!product) return;

    
    const lang = currentLanguage;

    // Shiw Data
    document.getElementById("modalName").textContent =
        product.name[lang];

    document.getElementById("modalDescription").textContent =
        product.desc[lang];

    document.getElementById("modalPrice").textContent =
    lang === "th"
            ? product.price + " บาท"
            : product.price + " THB";

    document.getElementById("modalCategory").textContent =
        product.category;

    // Imges
    document.getElementById("modalImage").src =
        `images/products/${product.id}.jpg`;

    // open Popup

      document.getElementById("modelQuest").addEventListener("click", () => {
      closeProductModal()
      location.hash = "contact";
      document.getElementById("customerMessage").value = (currentLanguage === "th" ? "สนใจสอบถามสินค้า: " : "I would like to ask about: ") + product.name[lang];
    });
    document.getElementById("productModal").style.display = "flex";
   
}


// Close Popup
function closeProductModal() {

    document.getElementById("productModal").style.display = "none";

}



// Click anywhere for chose Popup
document.getElementById("productModal").addEventListener("click", function(e) {

    if (e.target === this) {
        closeProductModal();
    }

});

// set filters 
document.querySelectorAll("[data-category]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("categoryFilter").value = link.dataset.category;
    filterProducts();
  });
});

// change language button
document.getElementById("languageSwitch").addEventListener("click", () => {
  setLanguage(currentLanguage === "th" ? "en" : "th");
});

// open//clise miobliee
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", nav.classList.contains("open"));
});

// Search bar and filters
document.getElementById("productSearch").addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);

// From
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formResult").textContent = translations[currentLanguage].messageSent;
  event.target.reset();
});

window.addEventListener("hashchange", showPage);
renderProducts();
renderNews();
showPage();
