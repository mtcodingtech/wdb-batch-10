let btns = document.querySelectorAll(".btn");
console.log(btns);
let theme = document.documentElement;
console.log(theme);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.classList)
    let classList = e.currentTarget.classList;
    console.log(classList.contains("btn1"));
    if (classList.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(215, 215, 12)");
    } else if (classList.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(117, 229, 83)");
    } else if (classList.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(163, 27, 190)");
    } else {
      theme.style.setProperty("--theme-color", "rgb(226, 31, 37)");
    }
  });
});
