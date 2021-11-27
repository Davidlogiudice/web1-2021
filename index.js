let span = document.getElementsByClassName("shop_block"),
  count = 0;
span.onclick = function() {
  count += 1;
  span.innerHTML = "Click me: " + count;
  console.log(count);
};
