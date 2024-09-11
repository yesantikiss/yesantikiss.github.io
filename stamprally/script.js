// URLを取得
let url = new URL(window.location.href); //今のURL
const id_result = document.getElementById("result");

// URLSearchParamsオブジェクトを取得
let params = url.searchParams;
let code = params.get("code"); //コードを取得
let check = false; //コードの存在チェック

window.addEventListener("load",function() {//ページが読み込まれた時に実行
  for(let i = 0;i < Object.keys(data).length;i++){
    if(code === data[i]["code"]) check = true;
  }
  if(check === false){
    this.alert("そんなコードねぇよ");
    window.location.replace("index.html");
  }
})