let p = fetch("info.json");
p.then((value1) => {
  return value1.json();
}).then((value2) => {
  document.getElementById("one").href = value2[0].id;
  document.getElementById("two").href = value2[1].id;
  document.getElementById("three").href = value2[2].id;
  document.getElementById("four").href = value2[3].id;
  document.getElementById("five").href = value2[4].id;

  document.getElementById("one").innerHTML = value2[0].heading;
  document.getElementById("two").innerHTML = value2[1].heading;
  document.getElementById("three").innerHTML = value2[2].heading;
  document.getElementById("four").innerHTML = value2[3].heading;
  document.getElementById("five").innerHTML = value2[4].heading;

  document.getElementById("img_a").alt = value2[0].heading;
  document.getElementById("img_a").src = value2[0].img;
  document.getElementById("heading_a").innerHTML = value2[0].heading;
  document.getElementById("contents_a").innerHTML = value2[0].blogs;

  document.getElementById("img_b").alt = value2[1].heading;
  document.getElementById("img_b").src = value2[1].img;
  document.getElementById("heading_b").innerHTML = value2[1].heading;
  document.getElementById("contents_b").innerHTML = value2[1].blogs;
  document.getElementById("contents1_b").innerHTML = value2[1].blogs1;

  document.getElementById("img_c").alt = value2[2].heading;
  document.getElementById("img_c").src = value2[2].img;
  document.getElementById("heading_c").innerHTML = value2[2].heading;
  document.getElementById("contents_c").innerHTML = value2[2].blogs;

  document.getElementById("img_d").alt = value2[3].heading;
  document.getElementById("img_d").src = value2[3].img;
  document.getElementById("heading_d").innerHTML = value2[3].heading;
  document.getElementById("contents_d").innerHTML = value2[3].blogs;

  document.getElementById("img_e").alt = value2[4].heading;
  document.getElementById("img_e").src = value2[4].img;
  document.getElementById("heading_e").innerHTML = value2[4].heading;
  document.getElementById("contents_e").innerHTML = value2[4].blogs;
});
