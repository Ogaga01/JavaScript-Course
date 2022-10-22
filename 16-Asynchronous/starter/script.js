// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // 'https://restcountries.com/v2/'

// ///////////////////////////////////////
// // const getCountryData = (country) => {
// //     // const request = new XMLHttpRequest()
// //     // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //     // request.send()

// //     request.addEventListener('load', () => {
// //         // console.log(JSON.parse(request.responseText))
// //         const [data] = JSON.parse(request.responseText)
// //         // console.log(data)

// //     const html = `
// //     <article class="country">
// //       <img class="country__img" src="${data.flags.svg}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
// //         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //         <p class="country__row"><span>💰</span>${data.currencies[0].name} ${data.currencies[0].symbol}</p>
// //       </div>
// //     </article>
// // `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html)
// //     countriesContainer.style.opacity = 1
// //     })
// // }

// // getCountryData('nigeria')
// // getCountryData('uae')
// // getCountryData('usa')
// // getCountryData('australia')

const renderCountry = (data, classname = '') => {
  const html = `
        <article class="country ${classname}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages?.[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies?.[0].name
            } ${data.currencies?.[0].symbol}</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = country => {
  // fetch(`https://restcountries.com/v2/name/${country}`)
  //   .then(response => {
  //       if (!response.ok)throw new Error(`Country not found ${response.status}`)
  //     return response.json();
  //   })
  //   .then(data => {
  //     const [country] = data;
  //     renderCountry(country);

//         const neighbour = country.borders?.[0];
//         if (!neighbour) throw new Error(`No Neighbour found`)
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       return response.json();
//     })
//     .then(data2 => {
//       renderCountry(data2, 'neighbour');
    // }).catch((err) => {
    //     const errMessage = `Something went wrong. ${err.message}`;
    //     countriesContainer.insertAdjacentText('beforeend', errMessage)
    // }).finally(() => {
    //     countriesContainer.style.opacity = 1;
    // });
// };

// btn.addEventListener('click', () => {
//     countriesContainer.innerHTML = ''
//     getCountryData('nigeria');
//     getCountryData('australia')
// })
// getCountryData('hgkj');

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // array.foreach to work with it
//   });

// fetch('https://api.tvmaze.com/shows')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

const whereAmI = (lng, lat) => {
  fetch(`https://geocode.xyz/${lng},${lat}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`City not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      const countryName = data.country;
      if (!countryName) throw new Error(`No Country found`);
      return fetch(`https://restcountries.com/v2/name/${countryName}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      const [country] = data;
      renderCountry(country);
    })
    .catch(err => {
      const errMessage = `Something went wrong. ${err.message}`;
      countriesContainer.insertAdjacentText('beforeend', errMessage);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });;
}
52.508; 13.381;
whereAmI(52.508, 13.381)
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);

// fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//         if (!response.ok)throw new Error(`Country not found ${response.status}`)
//       return response.json();
//     })
//     .then(data => {
//       const [country] = data;
//       renderCountry(country);}
