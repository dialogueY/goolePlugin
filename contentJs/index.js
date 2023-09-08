/*
 * @Author: yangfeng
 * @Date: 2023-09-07 13:46:28
 * @LastEditors: yangfeng
 * @LastEditTime: 2023-09-08 09:18:07
 * @FilePath: \goolePlugin\contentJs\index.js
 * @Description: 
 */
window.onload = ()=>{
    // 添加div
    const divEL = document.createElement("div");
    divEL.setAttribute("class","fix-div");
    divEL.setAttribute("id","fix-div");
    // 添加img
    const img = document.createElement("img");
    const imgUrl = chrome.runtime.getURL("img/xxxx.png");
    img.src = imgUrl;
    img.setAttribute("class","img")
    divEL.appendChild(img);
    const body = document.body;
    body.appendChild(divEL);
    // 绑定拖动事件
    const draggableImage = document.querySelector("#fix-div")
    const dragObj = {x:0,y:0};
    let isDragging = false;
    draggableImage.addEventListener("mousedown",function (e) {
      isDragging = true;
      dragObj.x = e.clientX - draggableImage.getBoundingClientRect().left;
      dragObj.y = e.clientY - draggableImage.getBoundingClientRect().top;
    })
    // 鼠标移动事件
    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
          // 计算图片的新位置
          var x = e.clientX - dragObj.x;
          var y = e.clientY - dragObj.y;

          // 设置图片的位置
          draggableImage.style.left = x + "px";
          draggableImage.style.top = y + "px";
      }
    });
    // 鼠标释放事件
    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
}