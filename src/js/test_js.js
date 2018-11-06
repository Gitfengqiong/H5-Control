//this main  Nvr JavaScript File ....//
/*
  const dests = document.getElementById("destdiv");
  const dsmove = function (evt) {
    evt.dataTransfer.setData("text/plain", "<item>" + evt.target.innerHTML);
  };
  dests.ondrop = function (evt) {
    let text = evt.dataTransfer.getData("text/plain");
    if (text.indexOf("<item>") == 0) {
      let newEle = document.createElement("div");
      newEle.id = new Date().getUTCMilliseconds();
      newEle.innerHTML = text.substring(6);
      newEle.draggable = "true";
      newEle.ondragstart = function (evt) {
        evt.dataTransfer.setData("text/plain", "<remove>" + newEle.id);

      }
      dests.appendChild(newEle);
    }

  }
  document.getElementById("deleate").ondrop = function (evt) {
    const id = evt.dataTransfer.getData("text/plain");
    if (id.indexOf("<remove>") == 0) {
      const target = document.getElementById(id.substring(8));
      dests.removeChild(target);
    }

  }

  const moveico = document.createElement("img");
  moveico.src = "favicon.ico";
  document.ondragstart = function (evt) {
    const dt = evt.dataTransfer;
    dt.effectAllowed = "link";
    dt.setDragImage(moveico, 0, 0);
  }

  document.ondragover = function (evt) {
    return false;
  }
  document.ondrop = function (evt) {
    return false;
  }
*/
  const h=document.getElementById("tab").getElementsByClassName("h3");
  const d=document.getElementById("tab").getElementsByClassName("div");
       function go_to(ao) {
    for(var i =0 ;i< h.length ;i++){
      if(ao-1==i ){
        h[i].className+="up";
        d[i].className+="block";
      }else{
        h[i].className+=" ";
        d[i].className+=" ";

    }
    }

  }

