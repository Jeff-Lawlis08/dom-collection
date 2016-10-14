var marketsByDistance = markets.filter(function(market, i, arr) {
 if (market.marketname.split(' ')[0] <= 10) {
    return true;
  }
}).map(function(market, i, arr) {
   return market.marketname.split(' ').slice(1).join(' ');
});

console.log(marketsByDistance);


marketsByDistance.forEach(function(market, i){
 var li=$('<li>' + marketsByDistance[i] + '</li>');
 $('body').append(li);

});

var cats=results.data.map(function(result,i){
return results.data[i].images.fixed_height.url;
 });
console.log(cats);

results.data.forEach(function(result, i) {
var img=$('<img src=' + cats[i] + '>');
$('.cats1').append(img);
});



//
// var cats1 = $('.cats1');
//
// console.log(results.data[0].images.fixed_height.url);
//
// var poop = results.filter(function(result, i, arr) {
//   return true;
// });
// console.log(poop);
//
// var plzWork = results.forEach(function(result, i) {
//   var img=$('<img src='+result.data[i].images.fixed_height.url)+'/>';
// $('.cats1').append(img);
//
// });
