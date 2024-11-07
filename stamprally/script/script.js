let url = new URL(window.location.href); //今のURL
const id_content = document.getElementById("content");
const id_title = document.getElementById("title");
const id_locate = document.getElementById("locate");
const id_img = document.getElementById("img");
const id_info = document.getElementById("info");

let params = url.searchParams; //URLSearchParamsオブジェクトを取得
let code = params.get("code"); //コードを取得
let dummy = params.get("dummy"); //偽のコードを取得
let check = false; //コードの存在チェック
let stampnum = 0; //取得済みスタンプの数

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

  if(code == "FES"){
    if(stampnum != 9){
      this.alert("全てのスタンプを集めてください！");
      check = true;
      window.location.replace("index.html");//トップページに戻る
    } else {
      check = true;
      id_info.innerText = "全てのスタンプをゲットしました！";
      id_title.innerText = "おめでとうございます！";
      id_content.innerHTML = '下のボタンを受付で押して、景品を受け取ってください！<button id="exchange">景品を交換</button>';
      if(getCookie("FES")){
        this.document.getElementById("exchange").style.display = "none";
        id_info.innerText = "景品を交換済みです！";
      }
      id_locate.innerHTML = "場所：受付";
      id_img.style.display = "none";
    }
  }
  const btn = document.getElementById("exchange");
  if(!btn) return;
  btn.addEventListener('click',() => {
    let result = this.window.confirm("景品を交換しますか？\nもしOKを押すと、このボタンが消えてしまいます。");
    if(result){
      this.document.cookie = "FES=true; " + "max-age=86400";
      btn.style.display = "none";
      this.alert("この画面をスタッフに見せて、景品を受け取ってください！");
    }
  });

  if(check === false){//一致するコードがない場合
    this.alert("コードが間違ってます（;;）");
    window.location.replace("index.html");//トップページに戻る
  }
})