

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        var tabs = JSON.stringify(request);
        showModal(request.content);
        
    });




const showModal = (tabsInfo) => {
    const modal = document.createElement("div");
    const list = document.createElement("ul");
    for (var oneTab in tabsInfo) {
        console.log(tabsInfo[oneTab]);
        list.innerHTML += `<li><a href="` + tabsInfo[oneTab].url+ `">`+ tabsInfo[oneTab].title + `</a></li>`;
    }
    console.log(list);
    modal.setAttribute(
    "style",`
    
    position:fixed;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    background:rgba(200,200,200,.5);
    z-index:100;
    border-radius: 20px;
    `
    );
    modal.innerHTML = `
    <dialog>
    <form method="dialog">
    <section>
      <h3><label for="favAnimal">Открытые вкладки:</label><h1>
      <ul>`+
        list.innerHTML
      +`</ul>
    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
  </dialog>`;
    document.body.appendChild(modal);
    modal.appendChild(list);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    dialog.querySelector("button").addEventListener("click", () => {
    dialog.close();
    });
    }