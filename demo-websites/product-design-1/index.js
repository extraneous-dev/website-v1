var textWrapper = document.querySelector('#pageHeader h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '#pageHeader .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 400,
    delay: (el, i) => 50 * (i+1)
  })