let url = new URL(window.location.href); //今のURL
const id_content = document.getElementById("content");

let params = url.searchParams; //URLSearchParamsオブジェクトを取得
let code = params.get("code"); //コードを取得
let dummy = params.get("dummy"); //偽のコードを取得
let check = false; //コードの存在チェック

window.addEventListener("load",function() {//ページが読み込まれた時に実行
  for(let i = 0;i < Object.keys(data).length;i++){
    if(code === data[i]["code"] || dummy === data[i]["dummy"]) {//コードの確認
      check = true;
      if(!getCookie(data[i]["code"]) && dummy != data[i]["dummy"]) {//Cookieが無いかとダミーではないかの確認
        this.document.cookie = data[i]["code"] + "=true";
      }
      id_content.innerHTML = data[i]["content"];//本文を挿入
    }
  }

  if(check === false){//一致するコードがない場合
    this.alert("そんなコードねぇよ");
    window.location.replace("index.html");//トップページに戻る
  }
})