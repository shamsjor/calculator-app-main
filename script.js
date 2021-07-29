function themes() {
  let space = document.querySelector("span.space"),
    head = document.querySelector("header .container"),
    circle = document.querySelector("span.circle"),
    keypad = document.querySelector(".keypad .container"),
    screen = document.querySelector(".screen .container"),
    resetKey = document.querySelectorAll(
      ".keypad .container .keys div.reset, .keypad .container .keys div.del"
    ),
    keys = document.querySelectorAll(
      ".keypad .container .keys div:not(.equal,.reset,.del)"
    );
  (equalKey = document.querySelector(".keypad .container .keys div.equal")),
    (index = 0),
    (move = ["15px", "34px", "50px"]),
    (mainColor = [
      "hsl(222, 26%, 31%)",
      "hsl(0, 0%, 90%)",
      "hsl(268, 75%, 9%)",
    ]),
    (keypadColor = [
      "hsl(223, 31%, 20%)",
      "hsl(0, 5%, 81%)",
      "hsl(268, 71%, 12%)",
    ]),
    (screenColor = [
      "hsl(224, 36%, 15%)",
      "hsl(0, 0%, 93%)",
      "hsl(268, 71%, 12%)",
    ]),
    (resetKeyColor = [
      "hsl(225, 21%, 49%)",
      "hsl(185, 42%, 37%)",
      "hsl(281, 89%, 26%)",
    ]),
    (resetShadow = [
      "hsl(224, 28%, 35%)",
      "hsl(185, 58%, 25%)",
      "hsl(285, 91%, 52%)",
    ]),
    (equalKeyColor = [
      "hsl(6, 63%, 50%)",
      "hsl(25, 98%, 40%)",
      "hsl(176, 100%, 44%)",
    ]),
    (equalShadow = [
      "hsl(6, 70%, 34%)",
      "hsl(25, 99%, 27%)",
      "hsl(177, 92%, 70%)",
    ]),
    (textColor = [
      "hsl(0, 0, 100%)",
      "hsl(198, 20%, 13%)",
      "hsl(52, 100%, 62%)",
    ]);
  space.addEventListener("click", () => {
    document.body.style.backgroundColor = `hsl(0, 0%, 90%)`;
    index++;
    for (let i = 0; i < move.length; i++) {
      if (index === i) {
        equalKey.style.backgroundColor = equalKeyColor[i];
        circle.style.marginLeft = move[i];
        circle.style.backgroundColor = equalKeyColor[i];
        document.body.style.backgroundColor = mainColor[i];
        keypad.style.backgroundColor = keypadColor[i];
        space.style.backgroundColor = keypadColor[i];
        screen.style.backgroundColor = screenColor[i];
        resetKey.forEach((element) => {
          element.style.backgroundColor = resetKeyColor[i];
          element.style.boxShadow = `${resetShadow[i]} 0px 5px`;
        });
        equalKey.style.backgroundColor = equalKeyColor[i];
        equalKey.style.boxShadow = `${equalShadow[i]} 0px 5px`;
        head.style.color = textColor[i];
        screen.style.color = textColor[i];
      }
      if (index === 2) {
        keys.forEach((element) => {
          element.style.backgroundColor = keypadColor[2];
          element.style.boxShadow = ` hsl(290, 70%, 36%) 0px 5px`;
          element.style.color = `hsl(52, 100%, 62%)`;
        });
      } else {
        keys.forEach((element) => {
          element.style.backgroundColor = ``;
          element.style.boxShadow = ``;
          element.style.color = ``;
        });
      }
      if (index > move.length - 1) {
        index = 0;
        circle.style.marginLeft = move[index];
        circle.style.backgroundColor = equalKeyColor[index];
        document.body.style.backgroundColor = mainColor[index];
        keypad.style.backgroundColor = keypadColor[index];
        space.style.backgroundColor = keypadColor[index];
        keys = document.querySelectorAll(
          ".keypad .container .keys div:not(.equal,.reset,.del)"
        );
        screen.style.backgroundColor = screenColor[index];
        resetKey.forEach((element) => {
          element.style.backgroundColor = resetKeyColor[index];
          element.style.boxShadow = `${resetShadow[index]} 0px 5px`;
        });
        equalKey.style.backgroundColor = equalKeyColor[index];
        equalKey.style.boxShadow = `${equalShadow[index]} 0px 5px`;
        head.style.color = ``;
        screen.style.color = ``;
      }
    }
  });
}

function screen() {
  let keys = document.querySelectorAll(
      ".keypad .container .keys div:not(.reset, .del, .equal)"
    ),
    resetKey = document.querySelector(".reset"),
    delKey = document.querySelector(".del"),
    equalKey = document.querySelector(".equal"),
    screen = document.querySelector(".screen .container");
  keys.forEach((element) => {
    element.addEventListener("click", (event) => {
      let textNode = document.createTextNode(event.target.textContent);
      screen.appendChild(textNode);
    });
  });
  equalKey.addEventListener("click", () => {
    let equation = screen.innerHTML;
    // equationArray = Array(equation);
    try {
      screen.innerHTML = new Function(`return ${equation}`)();
    } catch {
      screen.innerHTML = `invalid equation`;
    }
  });
  resetKey.addEventListener("click", () => {
    screen.innerHTML = "";
  });
  delKey.addEventListener("click", () => {
    let screenText = screen.innerHTML;
    screen.innerHTML = screenText.slice(0, screenText.length - 1);
  });
}
themes();
screen();
