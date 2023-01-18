let image_array = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg", "./img/img6.jpg", "./img/img7.jpg", "./img/img8.jpg", "./img/img9.jpg", "./img/img10.jpg"];

function get_random_image(nameElement) {
    let random_index = Math.floor(Math.random() * image_array.length);
    let selected_image = image_array[random_index];
    console.log(selected_image)
    nameElement.innerHTML = `<img src=${selected_image}></img>`;
}
