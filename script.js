// جميع الأسماء للفائزين من ملف Excel
const winnersData = [
  {"name": "روان عبد الاله محمد محسن  الحائطى", "accounts48h": "126", "totalAccounts": "126"},
  {"name": "علي مجاهد علي الهنومي", "accounts48h": "89", "totalAccounts": "89"},
  {"name": "محمد  عبد الله محمد حسن  مثنى", "accounts48h": "58", "totalAccounts": "58"},
  {"name": "شهاب  احمد عبد المجيد   المعلمى", "accounts48h": "57", "totalAccounts": "57"},
  {"name": "افراح عبد الفتاح عبد العزيز محسن", "accounts48h": "73", "totalAccounts": "74"},
  {"name": "بسام الرحبي", "accounts48h": "81", "totalAccounts": "82"},
  {"name": "رزان علي محمد زهره", "accounts48h": "54", "totalAccounts": "54"},
  {"name": "محمد صادق محمد يحيى زاهر", "accounts48h": "84", "totalAccounts": "84"},
  {"name": "ليلى خالد محمد  محمود", "accounts48h": "60", "totalAccounts": "60"},
  {"name": "اسامه صالح حزام العصري", "accounts48h": "69", "totalAccounts": "71"},
  {"name": "ريم محمد عبدالجليل العريقي", "accounts48h": "92", "totalAccounts": "93"},
  {"name": "عمر عبدالحكيم  علوي", "accounts48h": "56", "totalAccounts": "56"},
  {"name": "حامد  احمد يحيى   المسهلى", "accounts48h": "83", "totalAccounts": "99"},
  {"name": "احمد المدعي", "accounts48h": "172", "totalAccounts": "217"},
  {"name": "محمد مجاهد صالح محمد الورد", "accounts48h": "62", "totalAccounts": "63"},
  {"name": "زياد عبده سعيد على مانع", "accounts48h": "54", "totalAccounts": "54"},
  {"name": "على عبد الله محمد على الصماط", "accounts48h": "55", "totalAccounts": "55"},
  {"name": "تيسير أيوب طاهر الطاهري", "accounts48h": "88", "totalAccounts": "89"},
  {"name": "رابعه نجيب عبد الله سلام", "accounts48h": "53", "totalAccounts": "53"},
  {"name": "غدير محمد محمد بركات", "accounts48h": "49", "totalAccounts": "49"},
  {"name": "نهلة فضل على سعيد البناء", "accounts48h": "54", "totalAccounts": "54"},
  {"name": "انسام صدام قحطان الشرعبى", "accounts48h": "75", "totalAccounts": "75"},
  {"name": "عبدالله صالح محسن درهم  المعصار", "accounts48h": "59", "totalAccounts": "60"},
  {"name": "عمر  عبد العزيز احمد مسعد   حمران", "accounts48h": "55", "totalAccounts": "55"},
  {"name": "عبدالرحمن منصوراحمد  الصلوي", "accounts48h": "67", "totalAccounts": "67"},
  {"name": "ابراهيم منير حمود الدعيس", "accounts48h": "63", "totalAccounts": "63"},
  {"name": "نشوان جمال على  العنسي", "accounts48h": "51", "totalAccounts": "51"},
  {"name": "خالد على على يحيى القهالى", "accounts48h": "59", "totalAccounts": "83"},
  {"name": "محمد فيصل عبد السلام  قمحان", "accounts48h": "54", "totalAccounts": "56"},
  {"name": "فاطمه احمد حسن الصديق", "accounts48h": "48", "totalAccounts": "48"},
  {"name": "محمد حسين علي احسن العوي", "accounts48h": "60", "totalAccounts": "73"},
  {"name": "صالح مهدي يحيي اسماعيل المطري", "accounts48h": "48", "totalAccounts": "48"},
  {"name": "ابراهيم محمد محمد حسين الحيمى", "accounts48h": "51", "totalAccounts": "51"},
  {"name": "رياض طارق عبد الله  طاهر", "accounts48h": "65", "totalAccounts": "66"},
  {"name": "سماح محمد احمد الخدفي", "accounts48h": "60", "totalAccounts": "67"},
  {"name": "احمد محمد ناصر احمد العفاري", "accounts48h": "62", "totalAccounts": "102"},
  {"name": "ياسين  على على  الرهمى", "accounts48h": "61", "totalAccounts": "75"},
  {"name": "رشاد احمد المطرى", "accounts48h": "49", "totalAccounts": "49"},
  {"name": "عبدالعزيز عبد الله الله محمود الاحمر", "accounts48h": "54", "totalAccounts": "54"},
  {"name": "احمد عبد الغنى نصر الدين احمد الميثالى", "accounts48h": "54", "totalAccounts": "54"},
  {"name": "نايف احمد صالح منصور العامرى", "accounts48h": "65", "totalAccounts": "65"},
  {"name": "هناء على احمد يحيى عطان", "accounts48h": "64", "totalAccounts": "73"},
  {"name": "شيماء مجاهد شوعى الهزار", "accounts48h": "48", "totalAccounts": "48"},
  {"name": "المنتصر بالله محمد السماوي", "accounts48h": "50", "totalAccounts": "53"},
  {"name": "امين محمد حمدى  منصور", "accounts48h": "52", "totalAccounts": "56"},
  {"name": "اسماء  عباس حسن عباس التركى", "accounts48h": "48", "totalAccounts": "49"},
  {"name": "عبدالله عبدالواحد عبدالرزاق", "accounts48h": "79", "totalAccounts": "81"},
  {"name": "علاء مطهر احمد احمد تقي", "accounts48h": "67", "totalAccounts": "90"}
];

/**
 * Extract first name and last name from full Arabic name
 */
function extractFirstAndLastName(fullName) {
    if (!fullName || typeof fullName !== 'string') {
        return fullName;
    }
    
    const trimmed = fullName.trim();
    const nameParts = trimmed.split(/\s+/).filter(part => part.length > 0);
    
    if (nameParts.length <= 2) {
        return trimmed;
    }
    
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
}

/**
 * Create winner card
 */
function createWinnerCard(winner, index) {
    const card = document.createElement('div');
    card.className = 'winner-card';
    
    // Add animation delay
    card.style.animationDelay = `${index * 0.05}s`;
    
    // Add special class for top 3
    if (index === 0) card.classList.add('top-1');
    else if (index === 1) card.classList.add('top-2');
    else if (index === 2) card.classList.add('top-3');
    
    // Crown icon for top 3
    const crownIcon = index < 3 ? '<div class="crown-icon">👑</div>' : '';
    
    // Extract first and last name
    const displayName = extractFirstAndLastName(winner.name);
    
    card.innerHTML = `
        <div class="rank-badge">${index + 1}</div>
        ${crownIcon}
        <div class="winner-name">${displayName}</div>
        <div class="stats-container">
            <div class="stat-box">
                <div class="stat-label">خلال 48 ساعة</div>
                <div class="stat-value">${winner.accounts48h}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">الإجمالي</div>
                <div class="stat-value">${winner.totalAccounts}</div>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Create total stats card
 */
function createTotalStatsCard() {
    const card = document.createElement('div');
    card.className = 'total-stats-box';
    
    card.innerHTML = `
        <div class="total-number">7,981</div>
        <div class="total-text">حساب في 48 ساعة</div>
        <div class="total-slogan">روح الفريق تصنع الفارق</div>
    `;
    
    return card;
}

/**
 * Display all winners
 */
function displayWinners() {
    const grid = document.getElementById('winnersGrid');
    
    if (!grid) {
        console.error('Winners grid element not found');
        return;
    }
    
    // Clear grid
    grid.innerHTML = '';
    
    // Split winners - put stats box after 20 cards
    const totalWinners = winnersData.length;
    const firstHalf = Math.floor(totalWinners / 2) - 3; // Move back three positions
    
    // Add first half
    for (let i = 0; i < firstHalf; i++) {
        const card = createWinnerCard(winnersData[i], i);
        grid.appendChild(card);
    }
    
    // Add total stats card in the middle
    const statsCard = createTotalStatsCard();
    grid.appendChild(statsCard);
    
    // Add second half
    for (let i = firstHalf; i < totalWinners; i++) {
        const card = createWinnerCard(winnersData[i], i);
        grid.appendChild(card);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', displayWinners);
