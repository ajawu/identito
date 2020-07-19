let hero_text_value = ["Scale the power of identity verification with ease",
                        "An interplay between data and technology",
                        "Data is black and white"];

let image_title_values = ["Reliable. Easy",
                          "Fast. Safe",
                          "Smart. Scalable"];

let image_src_values= ["Image 1_resized.png",
                       "Image 2_resized.png",
                       "Image 3_resized.png"];

let color_codes= ["#F1FFF1", "#F1F2FF", "#FDF1FF"]

let image_src_root = (document.getElementById("hero-image").src).split('/');
image_src_root.pop();


setInterval(function() {
  let random_index = Math.floor(Math.random() * 3);
  document.getElementById("hero-text").innerHTML = hero_text_value[random_index];
  let temp = [...image_src_root];
  temp.push(image_src_values[random_index]);
  document.getElementById("hero-image").src = temp.join('/')
  document.getElementById("image-title").innerHTML = image_title_values[random_index];
  let elements_to_switch = document.getElementsByClassName('color-switch');
  Array.prototype.forEach.call(elements_to_switch, element =>  element.style.backgroundColor = color_codes[random_index]);
  }, 20000);