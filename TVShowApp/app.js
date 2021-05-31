// const form = document.getElementById('form');
// const ul = document.querySelector('ul');

// const getTVShows = async(searchText) => {
//     const url = `http://api.tvmaze.com/search/shows?q=${searchText}`;
//     const fetchedData = await axios.get(url);
//     for (let item of fetchedData.data) {
//         if (item.show.image) {
//             const img = document.createElement('img');
//             img.src = item.show.image.medium;
//             img.style.margin = "20px";
//             ul.append(img);
//             form.elements[0].value = "";
//         }
//         // console.log(item.show.image.medium);
//     }
// }

// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const searchText = form.elements[0].value;

//     getTVShows(searchText);
// })
const form = document.getElementById('form');
const ul = document.querySelector('ul');

const getTVShows = async(searchText) => {

    const url = `http://api.tvmaze.com/search/shows?q=${searchText}`;

    const fetchedData = await axios.get(url);


    for (let images of fetchedData.data) {
        console.log(images);

        const img = document.createElement('img');

        img.src = images.show.image.medium;

        img.style.margin = "20px";

        ul.append(img);

        form.elements[0].value = "";

    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.elements[0].value;
    // console.log(form.elements[0].value);
    getTVShows(searchText);
})