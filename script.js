const translations = {
    en: {
        title: "Welcome to the Aurelian Kingdom",
        subtitle: "Discover the golden lands, their legends, and their rulers.",
        "about-title": "About the Kingdom",
        "about-text": "Aurelian Kingdom, the land of harmony and light, was founded by King Evandor I over a thousand years ago. It is divided into five duchies, each with unique landscapes, resources, and culture.",
        "map-title": "Interactive Map",
        "explore-title": "Explore the Duchies",
        footer: "&copy; 2025 Aurelian Kingdom. All Rights Reserved."
    },
    ru: {
        title: "Добро пожаловать в королевство Аурелия",
        subtitle: "Исследуйте золотые земли, их легенды и правителей.",
        "about-title": "О королевстве",
        "about-text": "Королевство Аурелия, земля гармонии и света, было основано королём Эвандором I более тысячи лет назад. Оно делится на пять герцогств, каждое из которых уникально своими ландшафтами, ресурсами и культурой.",
        "map-title": "Интерактивная карта",
        "explore-title": "Исследуйте герцогства",
        footer: "&copy; 2025 Королевство Аурелия. Все права защищены."
    },
    ua: {
        title: "Ласкаво просимо до королівства Аурелія",
        subtitle: "Досліджуйте золоті землі, їхні легенди та правителів.",
        "about-title": "Про королівство",
        "about-text": "Королівство Аурелія, земля гармонії та світла, було засноване королем Евандором I понад тисячу років тому. Воно поділене на п'ять герцогств, кожне з яких унікальне своїми ландшафтами, ресурсами та культурою.",
        "map-title": "Інтерактивна карта",
        "explore-title": "Дослідіть герцогства",
        footer: "&copy; 2025 Королівство Аурелія. Усі права захищені."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
        const key = el.id;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}
