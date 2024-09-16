const data = [
    {
        "code" : "TEST", //入力する用のコード
        "dummy" : "0", //スタンプを与えず紹介だけするための偽のコード
        "content" : "<h1>これはテストです</h1>", //中身
    },
    {
        "code" : "AAAA",
        "dummy" : "1",
        "content" : '<a href="index.html">わぁ</a>',
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