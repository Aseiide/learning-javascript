// イミュータブルなデータ

let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0
};

// color_lawnに変更を加える
function rateColor(color, rating) {
  color.rating = rating;
  return color;
};

// rateColor関数の呼び出し後にもとのオブジェクトのratingの値も変わってしまっている
console.log(rateColor(color_lawn, 5).rating); //5
console.log(color_lawn.rating); //5
