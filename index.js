const input = document.getElementById("name");
const button = document.getElementById("button");
const lista = document.getElementById("list");
const lis = document.querySelectorAll('li')

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value.trim() !== "") {
        saveUcenik();
    } else {
        alert("Upiši ime")
    }
});

function saveUcenik() {
    const uceniciIzStorage = localStorage.getItem("ucenici")
    if (uceniciIzStorage) {
       let ucenici =  JSON.parse(uceniciIzStorage);
       const ucenik = {
           ime: input.value
       }
       ucenici.push(ucenik);
       localStorage.setItem("ucenici", JSON.stringify(ucenici));
       displayName(input.value)
    } else {
        const ucenici = [{
            ime: input.value
        }];
        const stringifiedUcenici = JSON.stringify(ucenici);
        localStorage.setItem("ucenici", stringifiedUcenici);
        displayName(input.value)
    }
}

function loadUcenici(){
  const data = localStorage.getItem("ucenici");
  if (data) {
    const ucenici = JSON.parse(data)
    const imena = ucenici.map((ucenik) => ucenik.ime);
    randomPick(imena)

    let newLi;
    const lis = imena.map((ime) => {
       newLi = document.createElement("li");
       const newContent = document.createTextNode(ime);
       newLi.appendChild(newContent);
       return newLi;
    })
  
    lis.map((li) => {
      lista.appendChild(li)
    });    
  }
}

function displayName(name) {
    newLi = document.createElement("li");
    const newContent = document.createTextNode(name);
    newLi.appendChild(newContent);
    lista.appendChild(newLi)
}

function randomPick(obj) {
    const heading = document.getElementById("pick")
    if (obj) {
        const no =  Math.floor(Math.random() * obj.length);
        pickedStudent = obj[no]
        heading.innerHTML = pickedStudent;
    }
}

loadUcenici()