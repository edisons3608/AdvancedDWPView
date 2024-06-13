
async function checkElementExists(timeout = Infinity) {
    let startTime = Date.now();
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (iframeobj2.contentDocument.getElementsByClassName("dwpEntryLink")[0]) {
          clearInterval(intervalId);
          resolve(true);
        } else if (Date.now() - startTime >= timeout * 1000) {
          clearInterval(intervalId);
          resolve(false);
        }
      }, 100);
    });
  }	
function repeat(){
    var iframeobj2 = document.getElementById("iframe2");
    enterBtn = iframeobj2.contentDocument.getElementById("btnStudentCheckin");
    enterBtn.addEventListener("click",() =>{
        checkElementExists().then((result) => {
            iframeobj2.contentWindow.location.reload();
        })
    })
}
checkElementExists().then((result) => {
    let ninter = setInterval(repeat,1000);
})
