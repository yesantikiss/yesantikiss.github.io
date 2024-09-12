const data = [
    {
        "code" : "TEST",
        "content" : "<h1>これはテストです</h1>"
    },
    {
        "code" : "AAAA",
        "content" : '<a href="index.html">わぁ</a>'
    }
]

function getCookie(name) { //特定のクッキーの取得
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}