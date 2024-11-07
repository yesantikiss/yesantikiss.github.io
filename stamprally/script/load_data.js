const data = [
    {
        "code" : "GAME1",//入力する用のコード
        "dummy" : "0",//スタンプを与えず紹介だけするための偽のコード
        "title" : "オリジナルゲーム展示会",//タイトル
        "content" : 'PCでプレイできる自作オリジナルゲームの展示',//中身
        "locate" : "小教室",//場所
    },
    {
        "code" : "MOVIE",
        "dummy" : "1",
        "title" : "動画編集",
        "content" : 'マイクラでキャンパスを作ってそれを紹介',
        "img" : "minecraft.png",//紹介画像
        "locate" : "奥教室",//場所
    },
    {
        "code" : "MYSTERY",
        "dummy" : "2",
        "title" : "謎解き",
        "content" : '梅田キャンパスの各部屋に謎を配置します',
        "locate" : "キャンパス全体",
    },
    {
        "code" : "SIGNCUT",
        "dummy" : "3",
        "title" : "気配斬り",
        "content" : '目隠し/剣を1人1つずつ受け取り、最低1人・最大4人同時に対戦できる目隠しチャンバラです！<br/>(1人の場合、相手はスタッフ)',
        "img" : "kehaigiri.png",
        "locate" : "中教室",
    },
    {
        "code" : "RECORD",
        "dummy" : "4",
        "title" : "ギネス",
        "content" : '大声、早口、指パッチン',
        "locate" : "面談室1",
    },
    {
        "code" : "QUIZ",
        "dummy" : "5",
        "title" : "クイズ(料理)",
        "content" : '食べ物にまつわるクイズに答えてもらいます。正解した方には料理サークルが制作したレシピをプレゼント!',
        "locate" : "入り口教室",
    },
    {
        "code" : "GAME2",
        "dummy" : "6",
        "title" : "マルチゲームサークル★",
        "content" : 'ゲーム大会',
        "locate" : "入り口教室",
    },
    {
        "code" : "GAME3",
        "dummy" : "7",
        "title" : "ゲーム体験・アプリ紹介",
        "content" : '主に私たちのサークルで作ったゲームを体験してもらいます。ただ、ゲームのできる端末や人数が限られているので待っていただいている方には、私たちが作ったアプリの紹介や作り方、それぞれのゲームのコードを見せて説明したりして、暇にさせないようにしようと考えています。',
        "locate" : "入り口教室",
    },
    {
        "code" : "STAGE",
        "dummy" : "8",
        "title" : "ステージ企画",
        "content" : '<table class="schedule"><caption>ステージ企画　スケジュール</caption><thead><tr><th scope="col">時間</th><th scope="col">企画名</th></tr></thead><tbody><tr><th scope="row">13:00〜13:10</th><td>GRAND OPENING (OPブロック)</td></tr><tr><th scope="row">13:15〜13:50</th><td>DEBATE ARENA @UMEDA (独自企画ブロック)</td></tr><tr><th scope="row">14:00〜14:50</th><td>UMEDA BUZZ QUIZ (クイズブロック)</td></tr><tr><th scope="row">15:00〜15:25</th><td>SPOTLIGHT UMEDA (プレゼンブロック)</td></tr><tr><th scope="row">15:30〜15:50</th><td>UMEDA COSPLAY Q&A SHOW (パフォーマンスブロック)</td> </tr><tr><th scope="row">16:00〜16:55</th><td>UMEDA MUSIC PARTY (音楽ブロック)</td></tr><tr><th scope="row">17:00〜17:10</th><td>GRAND FINALE (EDブロック)</td></tr></tbody></table>',
        "locate" : "ステージ",
    },
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