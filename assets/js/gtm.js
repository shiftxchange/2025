function loadGoogleTagManager() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;

    // TO ADD NEW LINK??
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-016QW2NDDV";
    document.head.appendChild(gtagScript);

    var gtagConfigScript = document.createElement('script');
    gtagConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-016QW2NDDV');
    `;
    document.head.appendChild(gtagConfigScript);
}

loadGoogleTagManager();
