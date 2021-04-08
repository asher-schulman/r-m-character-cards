if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};
//variables for ajax requests
const baseURL = 'https://rickandmortyapi.com/api/character';
const page = '?page=';
let currentPage = 1;
let filter = '';
let queryURL = baseURL + page + currentPage + filter;
let pages = 34;
let characters = 0;
//$.ajax() request for character data
const getRequest = () => {
    const $cardContainer = $('#cardContainer');
    $cardContainer.empty();
    $.ajax({
            url: queryURL,
            type: 'GET',
            statusCode: {
                404: function() {
                  alert("page not found");
                  queryURL = 'https://rickandmortyapi.com/api/character?page=1';
                  const $searchinput = $('#searchbar').val('');
                  getRequest()
                }
            }
        })
        .then(results = (data) => {
            console.log(queryURL);
            const allData = data;
            console.log(allData);
            pages = allData.info.pages;
            characters = allData.info.count;
            
            const $searchinput = $('#searchbar').val();
            $('#searchDisplay').empty();
            const $searchResultDisplay = $('<div>').addClass('searchDisplay').html(`
                <h2>Displaying ${characters} results: </h2>
                <h2 id="displaySearch">${$searchinput}</h2>
            `);
            $('#searchDisplay').append($searchResultDisplay);

            const array = data.results;
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                console.log(`adding ${array[i].name} to a card`);
                // const $cardContainer = $('#cardContainer');
                const $card = $('<div>').addClass('card').attr('id', `card${array[i].id}`);
                const $cardImg = $('<img>').addClass('cardImg').attr('src', `${array[i].image}`);
                const $cardTextContainer = $('<div>').addClass('cardTextContainer').html(`
                    <h3 class="cardText">${array[i].name}</h3>
                    <p><span class='title'>Species: </span>${array[i].gender} ${array[i].species}. ${array[i].type}</p>
                    <p><span class='title'>Origin Planet: </span>${array[i].origin.name}</p>
                    <p><span class='title'>Status: </span>${array[i].status}</p>
                    `);
                $card.append($cardImg);
                $card.append($cardTextContainer);
                $cardContainer.append($card);
            }
        })
}
//<button class='moreButton'>More information (not functional yet)</button>
const listeners = {
    id: 'object storing functions',
    //on next button click
    next: function (event) {
        event.preventDefault();
        console.log('changing pages');
        currentPage += 1;
        if (currentPage > pages) {
            alert('you are already on the last page');
            currentPage -= 1;
            getRequest();
        }
        queryURL = baseURL + page + currentPage + filter;
        let $currentPage = $('.pg');
        $currentPage.text(currentPage);
        getRequest();
    },
    //on prev button click
    prev: function (event) {
        event.preventDefault();
        console.log('changing pages');
        currentPage -= 1;
        if (currentPage < 1) {
            alert('you are already on the first page');
            currentPage += 1;
            getRequest();
        }
        queryURL = baseURL + page + currentPage + filter;
        let $currentPage = $('.pg');
        $currentPage.text(currentPage);
        getRequest();
    },
    //on search button click
    search: function (event) {
        event.preventDefault();
        const $searchinput = $('#searchbar').val();
        console.log('clicking now');
        console.log($searchinput);
        //more code here
        filter = `&name=${$searchinput}`;
        currentPage = 1
        queryURL = baseURL + page + currentPage + filter;
        let $currentPage = $('.pg')
        $currentPage.text(currentPage);
        // $('#searchDisplay').empty();
        // const $searchResultDisplay = $('<div>').addClass('searchDisplay').html(`
        //     <h2>Displaying ${characters} results for ${$searchinput}</h2>
        // `);
        // $('#searchDisplay').append($searchResultDisplay);
        getRequest();
    },
    //on alive filter button click
    aliveFilter: function (event) {
        event.preventDefault();
        console.log('alive filter');
        // filter = '&status=alive';
        currentPage = 1;
        filter = '&status=alive';
        queryURL = baseURL + page + currentPage + filter;
        let $currentPage = $('.pg');
        $currentPage.text(currentPage);
        // $('#searchDisplay').empty();
        // const $searchResultDisplay = $('<div>').addClass('searchDisplay').html(`
        //     <h2>Displaying ${characters} alive characters</h2>
        // `);
        // $('#searchDisplay').append($searchResultDisplay);
        getRequest();
    },
    //on dead filter button click
    deadFilter: function (event) {
        event.preventDefault();
        console.log('dead filter');
        // filter = '&status=alive';
        currentPage = 1;
        filter = '&status=dead';
        queryURL = baseURL + page + currentPage + filter;
        let $currentPage = $('.pg');
        $currentPage.text(currentPage);
        // $('#searchDisplay').empty();
        // const $searchResultDisplay = $('<div>').addClass('searchDisplay').html(`
        //     <h2>Displaying ${characters} dead or unknown characters</h2>
        // `);
        // $('#searchDisplay').append($searchResultDisplay);
        getRequest();
    },
};
$(() => {
    getRequest();
    $('.next').on('click', listeners.next);
    $('.previous').on('click', listeners.prev);
    $('#search').on('click', listeners.search);
    $('#aliveFilter').on('click', listeners.aliveFilter);
    $('#deadFilter').on('click', listeners.deadFilter);
});