var textWrapper = document.querySelector('#pageHeader h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '#pageHeader .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 75 * (i+1)
  })
  .add({
    targets: '.boxes',
    duration: 500,
    opacity: [0, 1],
    easing: "easeInOutQuad",

  })