window.addEventListener("load",function(){//ページが読み込まれた時に実行
    for(let i = 0;i < Object.keys(data).length;i++){
      if(getCookie(data[i]["code"])){
        this.document.getElementById("c"+ i).style.display = "none";//スタンプを隠す図形を削除し、スタンプを表示
      }
    }
  })