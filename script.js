
const menuData = {
    "🍝 麵食類": ["山羊起司雙茄義大利麵", "義式肉醬麵", "かがり雞白湯叉燒拉麵", "日清拉麵", "營多撈麵"],
    "🍗 雞肉料理": ["香煎雞腿排", "照燒雞腿排", "清炒櫛瓜雞胸肉", "椒鹽雞胸肉", "台式鹽酥雞佐羅勒", "鄉村蔬菜雞腿咖哩飯（可加蛋包）", "水煮雞胸肉"],
    "🦐🐟 海鮮料理": ["香煎蒜味奶油圈圈蝦", "紹興酒燒蝦", "白酒淡菜", "石狩味增湯"],
    "🍳 蛋料理／早餐主食": ["鮪魚蛋餅", "玉米蛋餅", "羅勒烘蛋", "荷包蛋", "蕃茄炒蛋", "早餐三明治", "早餐果醬吐司（草莓／藍莓）", "鮮奶饅頭"],
    "🥬 蔬食／副食類": ["時令蔬菜", "炒青菜", "蒸南瓜", "蒸玉米", "日式馬鈴薯燉肉"],
    "🥣 湯品／鍋物": ["石狩味增湯", "南瓜濃湯", "蘿蔔蓮藕排骨湯", "火鍋"],
    "🍟 小點／配菜": ["氣炸薯條", "香蕉煎餅"],
    "🧋 飲品類": ["冰／熱拿鐵", "手沖咖啡（淺／中／深焙）", "麥茶", "香蕉牛奶", "蘋果牛奶", "酪梨牛奶", "藍莓牛奶"]
};

const cart = {};

function renderMenu() {
    const menu = document.getElementById('menu');
    for (const category in menuData) {
        const div = document.createElement('div');
        div.className = 'menu-category';
        div.innerHTML = `<h3>${category}</h3>`;
        menuData[category].forEach(item => {
            div.innerHTML += `
                <div class="menu-item">
                    ${item}
                    <button onclick="addToCart('${item}')">＋</button>
                    <span id="qty-${item}">0</span>
                    <button onclick="removeFromCart('${item}')">－</button>
                </div>
            `;
        });
        menu.appendChild(div);
    }
}

function addToCart(item) {
    cart[item] = (cart[item] || 0) + 1;
    updateCart();
}

function removeFromCart(item) {
    if (cart[item]) {
        cart[item]--;
        if (cart[item] === 0) delete cart[item];
    }
    updateCart();
}

function updateCart() {
    const ul = document.getElementById('cart');
    ul.innerHTML = '';
    for (const item in cart) {
        ul.innerHTML += `<li>${item} x ${cart[item]}</li>`;
        document.getElementById(`qty-${item}`).innerText = cart[item];
    }
}

function submitOrder() {
    alert("訂單已送出！\n" + Object.entries(cart).map(([k, v]) => `${k} x ${v}`).join('\n'));
}

window.onload = renderMenu;
