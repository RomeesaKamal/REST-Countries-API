const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg || country.flags.png
    countryNameH1.innerText = country.name.common || 'N/A'
    population.innerText = country.population?.toLocaleString() || 'N/A'
    region.innerText = country.region || 'N/A'
    topLevelDomain.innerText = country.tld?.join(', ') || 'N/A'
    capital.innerText = country.capital?.[0] || 'N/A'
    subRegion.innerText = country.subregion || 'N/A'

    // ✅ Safely access native name
    if (country.name.nativeName) {
      const nativeNames = Object.values(country.name.nativeName)
      if (nativeNames.length > 0) {
        nativeName.innerText = nativeNames[0].common
      } else {
        nativeName.innerText = country.name.common
      }
    } else {
      nativeName.innerText = country.name.common
    }

    // ✅ Safe access for currencies
    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ')
    } else {
      currencies.innerText = 'N/A'
    }

    // ✅ Safe access for languages
    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(', ')
    } else {
      languages.innerText = 'N/A'
    }

    // ✅ Border countries
    if (country.borders?.length) {
      borderCountries.innerHTML = '' // clear existing
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            const borderCountryTag = document.createElement('a')
            borderCountryTag.innerText = borderCountry.name.common
            borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
            borderCountries.append(borderCountryTag)
          })
          .catch((err) => console.error('Error fetching border country:', err))
      })
    } else {
      borderCountries.innerText = 'None'
    }

  })
  .catch((err) => {
    console.error('Error fetching country:', err)
  })
