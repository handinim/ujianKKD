function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () { 
    // If found your qr code 
    function onScanSuccess(decodeText, decodeResult) { 
        // Redirect to the scanned URL
        window.open(decodeText);
    } 

    let htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbos: 250 }); 
    htmlscanner.render(onScanSuccess); 
    if (window.chrome && chrome.app && chrome.app.runtime) {
        // Running inside a Chrome App context
       } else {
        // Either not Chrome, or not as an app window
       }
});