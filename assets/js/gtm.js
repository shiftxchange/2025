function loadGoogleTagManager() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;

    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-VQ84FKCCRZ";
    document.head.appendChild(gtagScript);

    var gtagConfigScript = document.createElement('script');
    gtagConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VQ84FKCCRZ');
    `;
    document.head.appendChild(gtagConfigScript);
}

loadGoogleTagManager();
