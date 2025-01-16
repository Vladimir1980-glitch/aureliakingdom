const translations = {
    en: {
        title: "Welcome to the Aurelian Kingdom",
        subtitle: "Discover the golden lands, their legends, and their rulers.",
        "legend-title": "Legend of the Aurelian Kingdom",
        "legend-text": `
            <h3>1. Origin of the Kingdom</h3>
            <p>Aurelia, "The Golden Kingdom," was founded more than a thousand years ago by the great King Evandor I, who led his people across the Solaris Mountains to fertile lands filled with golden rivers and radiant forests. At the heart of the kingdom, the capital city of Solaris was built — the City of Light, where a ruler sat upon a throne of pure gold, safeguarding the peace and prosperity of Aurelia.</p>
            <p>According to legend, the sun god Auris blessed this land, promising that its people would live in harmony with nature, but only as long as they maintained its balance and order.</p>
            <h3>2. Structure of the Kingdom and Counties</h3>
            <p>Aurelia is divided into five grand duchies, each further subdivided into counties...</p>
            <h3>3. Governance of the Kingdom</h3>
            <p>Each duchy is governed by a duke who reports directly to the king...</p>
        `,
        "map-title": "Interactive Map",
        footer: "&copy; 2025 Aurelian Kingdom. All Rights Reserved."
    },
    ru: {
        title: "Добро пожаловать в королевство Аурелия",
        subtitle: "Исследуйте золотые земли, их легенды и правителей.",
        "legend-title": "Легенда королевства Аурелия",
        "legend-text": `
            <h3>1. Происхождение королевства</h3>
            <p>Аурелия, "Золотое королевство", была основана более тысячи лет назад великим королём Эвандором I...</p>
            <h3>2. Структура королевства и графства</h3>
            <p>Аурелия разделена на пять великих герцогств, каждое из которых делится на графства...</p>
            <h3>3. Управление королевством</h3>
            <p>Каждое герцогство управляется герцогом, который подчиняется непосредственно королю...</p>
        `,
        "map-title": "Интерактивная карта",
        footer: "&copy; 2025 Королевство Аурелия. Все права защищены."
    },
    ua: {
        title: "Ласкаво просимо до королівства Аурелія",
        subtitle: "Досліджуйте золоті землі, їхні легенди та правителів.",
        "legend-title": "Легенда королівства Аурелія",
        "legend-text": `
            <h3>1. Походження королівства</h3>
            <p>Аурелія, "Золоте королівство", було засноване понад тисячу років тому великим королем Евандором I...</p>
            <h3>2. Структура королівства та графств</h3>
            <p>Аурелія поділена на п'ять великих герцогств, кожне з яких ділиться на графства...</p>
            <h3>3. Управління королівством</h3>
            <p>Кожне герцогство управляється герцогом, який підпорядковується безпосередньо королю...</p>
        `,
        "map-title": "Інтерактивна карта",
        footer: "&copy; 2025 Королівство Аурелія. Усі права захищені."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
        const key = el.id;
        if (translations[lang][key]) {
            if (key === "legend-text") {
                el.innerHTML = translations[lang][key]; // Поддержка HTML в легенде
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}
