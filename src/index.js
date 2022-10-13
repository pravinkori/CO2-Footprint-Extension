// Holding the values associated with form fields.
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-contianer');
const usage = document.querySelector('.carbon-usage');
const fossilFuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

//6
//API call

//5
//set the api key and region for the user

//4
// manages the sending of the form

//3 initial checks
// function to initialize the extension
function init() {

    // to check if the user has stored an APIKey and region code in local storage.
    const storedApiKey = localStorage.getItem('apiKey');
    const storedRegion = localStorage.getItem('regionName');

    //
    if (storedApiKey === null || storedRegion === null) {
        //if we don't have the keys, show the form
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
        clearBtn.style.display = 'none';
        errors.style.display = 'none';
    } else {
        // if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
        results.style.display = 'none'
        form.style.display = 'none'
        clearBtn.style.display = 'block'
    }
}

function reset(e) {
    e.preventDefault();
    localStorage.removeItem('regionName');
    init();
}

//2
// set the listeners and start of the app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => resizeTo(e));
init();