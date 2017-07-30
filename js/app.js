function requestListener(link, listener) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", listener);
  newReq.open("GET", link);
  newReq.send();
}

function createBeach() {

  var beachObject = JSON.parse(this.responseText);

  for(var i = 0; i < beachObject.length; i++) {
    console.log(beachObject[i]);
  }
}

requestListener("http://hawaiibeachsafety.com/rest/conditions.json", createBeach);