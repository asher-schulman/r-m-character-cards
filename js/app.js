if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};
//variables for ajax requests
const baseURL = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;
const page = '?page=';
let filter = '';
//$.ajax() request for character data
const getRequest = () => {
    $.ajax({
            url: baseURL + page + currentPage + filter,
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
}

const listeners = {
    id: 'object storing functions',
    next: function nextPage(event) {
        event.preventDefault();
        $('#cardContainer').empty();
        console.log('changing pages')
        currentPage += 1
        if (currentPage > 34) {
            alert('you are already on the last page')
            currentPage = 1;
        }
        let $currentPage = $('.pg')
        $currentPage.text(currentPage);
        getRequest()
    },
    prev: function prevPage(event) {
        event.preventDefault();
        $('#cardContainer').empty();
        console.log('changing pages')
        currentPage -= 1
        if (currentPage < 1) {
            alert('you are already on the first page')
            currentPage = 34;
        }
        let $currentPage = $('.pg')
        $currentPage.text(currentPage);
        getRequest()
    }
};
// ended up putting both of these functions, withing my 'listeners' object and calling upon those methods during my event listener click events
// const nextPage = (event) => {
//     event.preventDefault();
//     $('#cardContainer').empty();
//     console.log('changing pages')
//     currentPage += 1
//     if (currentPage > 34) {
//         alert('you are already on the last page')
//         currentPage = 1;
//     }
//     let $currentPage = $('.pg')
//     $currentPage.text(currentPage);
//     getRequest()
// }
// const prevPage = (event) => {
//     event.preventDefault();
//     $('#cardContainer').empty();
//     console.log('changing pages')
//     currentPage -= 1
//     if (currentPage < 1) {
//         alert('you are already on the first page')
//         currentPage = 34;
//     }
//     let $currentPage = $('.pg')
//     $currentPage.text(currentPage);
//     getRequest()
// }
// const searchFilter = (event) => {
//     event.preventDefault();
//     console.log('search button')
// }

$(() => {
    getRequest();

    $('.next').on('click', listeners.next);
    // $('.next').on('click', nextPage);

    $('.previous').on('click', listeners.prev);
    // $('.previous').on('click', prevPage);

    $('#search').on('click', searchFilter);
});