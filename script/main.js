const slide = document.getElementById("wrapper");
const slideItems = document.getElementsByClassName("slide-item");
// element「ｓ」だから配列である
slideItems[0].classList.add("slide-item");
// ↑で.activeをつけてフェードインさせる

let activeNum = 0;
const MaxSlideNum = slideItems.length - 1;
// ↑　写真の枚数が変わっても使えるようにする
// ↑　２の所に代入すれば使いまわせる
const IntervalTime = 5000;
// ↑ここで数値を管理しとくと楽
const FadeOutTime = 1000;
slideItems[0].classList.remove("active");
//↑で.acticveを外してフェードアウトさせる

setInterval(function() {
  // 最後だけ０に戻す必要があるからif文で条件分岐する
  if (activeNum !== 2) {
    slideItems[activeNum].classList.remove("active");
    setTimeout(function() {
      slideItems[activeNum].classList.remove("zoom");
    }, FadeOutTime);
    activeNum++;
    // ↑でactiveNumに１を追加する
    slideItems[activeNum].classList.add("active", "zoom");
  } else {
    slideItems[activeNum].classList.remove("active");

    activeNum = 0;

    slideItems[activeNum].classList.add("active", "zoom");
  }
}, IntervalTime);

//↑　改善の余地あり　かぶってるところが多い
// 三項演算子で書くことが出来る
// 調べて書いてみよう
// setInterval(function() {
//   slideOtems[activeNum].classList.remove("active");
//   activeNum = activeNum === MaxSlideNum ? 0 : activeNum + 1;
//   slideItems;
// });
