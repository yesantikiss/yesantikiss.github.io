let url = new URL(window.location.href); //今のURL
const id_content = document.getElementById("content");
const id_title = document.getElementById("title");
const id_locate = document.getElementById("locate");
const id_img = document.getElementById("img");
const id_info = document.getElementById("info");
const id_return = document.getElementById("return");
const id_explain = document.getElementById("explain");
const id_textbox = document.getElementById("textbox");

let params = url.searchParams; //URLSearchParamsオブジェクトを取得
let code = params.get("code"); //コードを取得
let dummy = params.get("dummy"); //偽のコードを取得
let check = false; //コードの存在チェック
let stampnum = 0; //取得済みスタンプの数
let content = '下のボタンを受付で押して、景品を受け取ってください！'

window.addEventListener("load",function(){//ページが読み込まれた時に実行
  for(let i = 0;i < Object.keys(data).length;i++){
    if(code === data[i]["code"] || dummy === data[i]["dummy"]){//コードの確認
      check = true;
      if(dummy === data[i]["dummy"]){
        id_info.innerText = "この企画に参加してスタンプをゲットしよう！";
      }
      if(getCookie(data[i]["code"])){
        id_info.innerText = "もうスタンプを持っているよ";
      }
      if(!getCookie(data[i]["code"]) && dummy != data[i]["dummy"]){//Cookieが無いかとダミーではないかの確認
        this.document.cookie = data[i]["code"] + "=true; " + "max-age=86400";
        id_info.innerText = "スタンプをゲットしました！";
      }
      id_title.innerText = data[i]["title"];//タイトルを挿入
      id_content.innerHTML = data[i]["content"];//本文を挿入
      id_locate.innerHTML = "場所：" + data[i]["locate"];//場所を挿入
      if(data[i]["img"]){//画像がある場合
        id_img.src = "src/" + data[i]["img"];//画像を挿入
      } else {
        id_img.style.display = "none";//画像がない場合、画像を非表示
      }
    }
    if(getCookie(data[i]["code"])){
      this.document.getElementById("c"+ i).style.display = "none";//スタンプを隠す図形を削除し、スタンプを表示
      stampnum++;
    }
  }

  if(stampnum === 9) {
    if(id_return) id_return.innerHTML = '答えを入力しに行く';
    if(id_explain) id_explain.innerHTML = '問題の答えを入力';
    if(id_textbox) id_textbox.setAttribute("placeholder", "Enter Answer");
  }
  if(code === "FES"){
    if(stampnum != 9){
      this.alert("全てのスタンプを集めてください！");
      check = true;
      window.location.replace("index.html");//トップページに戻る
    } else {
      check = true;
      id_return.style.display = "none";
      id_info.innerText = "全てのスタンプをゲットしました！";
      id_title.innerText = "おめでとうございます！";
      id_content.innerHTML = content + '<button id="exchange">景品を交換</button>';
      if(getCookie("FES")){
        this.document.getElementById("exchange").style.display = "none";
        id_info.innerText = "景品を交換済みです！";
        id_content.innerHTML = content + '<span id="hid">スタンプラリーを楽しんでくれてありがとう！<br/>プログラムのコードは<a href="https://github.com/yesantikiss/yesantikiss.github.io/tree/main/stamprally">こちら</a>から見れます</span>'
      }
      id_locate.innerHTML = "場所：受付";
      id_img.style.display = "none";
    }
  }
  if(check === false && code){//一致するコードがない場合
    this.alert("コードが間違ってます（;;）");
    window.location.replace("index.html");//トップページに戻る
  }
  const btn = document.getElementById("exchange");
  if(!btn) return;
  btn.addEventListener('click',() => {
    let result = this.window.confirm("景品を交換しますか？\nもしOKを押すと、このボタンが消えてしまいます。");
    if(result){
      this.document.cookie = "FES=true; " + "max-age=86400";
      btn.style.display = "none";
      this.alert("この画面をスタッフに見せて、景品を受け取ってください！");
      id_info.innerText = "景品を交換済みです！";
      id_content.innerHTML = content + '<span id="hid">スタンプラリーを楽しんでくれてありがとう！<br/>プログラムのコードは<a href="https://github.com/yesantikiss/yesantikiss.github.io/tree/main/stamprally">こちら</a>から見れます</span>'
    }
  });
})