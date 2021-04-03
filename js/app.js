if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};
//variables for jquery getelement by id
// const $cardContainer = $('#cardContainer');
//variables for ajax requests
const baseURL = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;
const page = '?page='
//$.ajax() request for character data
const getRequest = () => {$.ajax({
    url: baseURL + page + currentPage,
    type: 'GET',
})  
    .then(results = (data) => {
        const allData = data
        console.log(allData)
        const array = data.results
        console.log(array)
        for (let i = 0; i < array.length; i++) {
            console.log(`adding ${array[i].name} to a card`)
            const $cardContainer = $('#cardContainer');
            const $card = $('<div>').addClass('card').attr('id', `card${array[i].id}`)
            const $cardImg = $('<img>').addClass('cardImg').attr('src', `${array[i].image}`)
            const $cardTextContainer = $('<div>').addClass('cardTextContainer').html(`
            <h3 class="cardText">${array[i].name}</h3>
            <p><span class='title'>Species: </span>${array[i].species}</p>
            <p><span class='title'>Subspecies (if applicable): </span>${array[i].type}</p>
            <button class='moreButton'>More information (not functional yet)</button>
            `)
            $card.append($cardImg)
            $card.append($cardTextContainer)
            $cardContainer.append($card)
        }
    })
    // .then(changePage = () => {
    //     // event.preventDefault();
    //     console.log('changing pages')
    //     currentPage += 1
    // })
}
// .then( function getInfo (data) {
//     console.log(data);
// })

const nextPage = (event) => {
    event.preventDefault();
    $('#cardContainer').empty();
    console.log('changing pages')
    currentPage += 1
    if (currentPage > 34) {
        currentPage = 34;
    }
    getRequest()
}
const prevPage = (event) => {
    event.preventDefault();
    $('#cardContainer').empty();
    console.log('changing pages')
    currentPage -= 1
    if (currentPage < 1) {
        currentPage = 1;
    }
    getRequest()
}

$(() => {
    getRequest();

    $('#next').on('click', nextPage);

    $('#previous').on('click', prevPage);

    
    // getRequest()
});