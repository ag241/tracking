(function(w,d,s,l,i){
    // Código do Google Tag Manager
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);

    // Criação do iframe para noScript
    var iframe = d.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + i;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    d.body.appendChild(iframe);

})(window,document,'script','dataLayer','GTM-5NS53DFS');
