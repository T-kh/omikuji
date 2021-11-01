'use strict';

// {
//   //配列に文字列を設定し、配列[Math.floor(Math.random() * 配列.length)]としてランダムに文字列を取得し、それをテキストに表示させるやり方。
//   function omikuji_1() {
//     const btn = document.getElementById('container');
//     btn.addEventListener('click', () => {
//       const texts = ['大吉', '中吉', '吉', '凶'];
//       const text = texts[Math.floor(Math.random() * texts.length)];
//       btn.textContent = text;
//     });
//   }
//   omikuji_1();

// }


//定数nにランダムに数字を入れ、switchの引数とする。
// {
//   function omikuji_2 () {

//     const btn = document.getElementById('container');

//     btn.addEventListener('click', () => {
//       const n = Math.floor(Math.random() * 4);   //0 ~ 3の数字をランダムにnに入れる。

//       //switchの引数にnを入れて、0 ~ 3のcaseの場合のtextContentを変える。
//       switch(n) {
//         case 0:
//           btn.textContent = '大吉';
//           break;

//         case 1:
//           btn.textContent = '中吉';
//           break;

//         case 2:
//           btn.textContent = '小吉';
//           break;

//         case 3:
//           btn.textContent = '吉';
//           break;
//       }
      
//     });
//   }

//   omikuji_2();
// }


// 定数nに0 ~ 1未満の数字を取得し、if文を使って確立を操作する。
{
  function omikuji_3 () {
    const btn = document.getElementById('container');
    btn.addEventListener('click', () => {
      const n = Math.random();   // 0 ~ 1未満の数字をランダムで取得する。

      if(n < 0.05) {        //0.05 = 5%
        btn.textContent = '大吉';
      }else if(n < 0.2) {    //0.2 - 0.05 = 0.15 = 15%
        btn.textContent = '中吉';
      }else {                //(5% + 15%) - n = 80%
        btn.textContent = '吉'
      }

    });

  }

  omikuji_3();
}