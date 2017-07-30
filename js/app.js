// function requestListener(link, listener) {
//   var newReq = new XMLHttpRequest();
//   newReq.addEventListener("load", listener);
//   newReq.open("GET", link);
//   newReq.send();
// }

// var beaches = [];

// function createBeach() {

//   var beachObject = JSON.parse(this.responseText);

//   for (var i = 0; i < beachObject.length; i++) {
//     beaches.push({
//       title: beachObject[i].beach,
//       lat: beachObject[i].lat,
//       lon: beachObject[i].lon,
//       zIndex: i
//     });
//   }
// }

// function cl (){
//   console.log(beaches);
// }

// // setTimeout(cl, 1000);





// requestListener("http://hawaiibeachsafety.com/rest/conditions.json", createBeach);