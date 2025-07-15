// DOM Elements
const flagImage = document.querySelector('.country-details img');
const countryNameH1 = document.querySelector('.country-details h1');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies');
const languages = document.querySelector('.languages');
const borderCountries = document.querySelector('.border-countries');
const backButton = document.querySelector('.back-button');

// Get country name from URL
const countryName = decodeURIComponent(
  new URLSearchParams(location.search).get('name')
);

// Load country details
async function loadCountryDetails() {
  try {
    // Try to get from sessionStorage first
    let country = JSON.parse(sessionStorage.getItem('selectedCountry'));
    
    // If not in sessionStorage, search in full dataset
    if (!country) {
      const response = await fetch('data.json');
      if (!response.ok) throw new Error('Failed to load data');
      const countries = await response.json();
      country = countries.find(c => c.name === countryName);
      if (!country) throw new Error('Country not found');
    }
    
    renderCountryDetails(country);
  } catch (error) {
    console.error('Error:', error);
    document.querySelector('.country-details').innerHTML = `
      <div class="error-message">
        <p>Failed to load country details. Please try again.</p>
        <button onclick="window.location.href='index.html'">Back to Home</button>
      </div>
    `;
  }
}

// Render country details
function renderCountryDetails(country) {
  flagImage.src = country.flags.svg || country.flags.png;
  flagImage.alt = `${country.name} flag`;
  countryNameH1.textContent = country.name;
  population.textContent = country.population?.toLocaleString() || 'N/A';
  region.textContent = country.region || 'N/A';
  subRegion.textContent = country.subregion || 'N/A';
  capital.textContent = country.capital || 'N/A';
  topLevelDomain.textContent = country.topLevelDomain?.join(', ') || 'N/A';
  nativeName.textContent = country.nativeName || country.name || 'N/A';

  // Currencies
  if (country.currencies?.length) {
    currencies.textContent = country.currencies
      .map(c => c.name)
      .join(', ');
  } else {
    currencies.textContent = 'N/A';
  }

  // Languages
  if (country.languages?.length) {
    languages.textContent = country.languages
      .map(l => l.name)
      .join(', ');
  } else {
    languages.textContent = 'N/A';
  }

  // Border countries
  renderBorderCountries(country.borders || []);
}

// Render border countries
async function renderBorderCountries(borderCodes) {
  borderCountries.innerHTML = '';
  
  if (!borderCodes.length) {
    borderCountries.textContent = 'None';
    return;
  }

  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load border countries');
    const countries = await response.json();
    
    borderCodes.forEach(code => {
      const borderCountry = countries.find(c => 
        c.alpha3Code === code || c.alpha2Code === code
      );
      
      if (borderCountry) {
        const borderTag = document.createElement('div');
        borderTag.className = 'border-country';
        borderTag.textContent = borderCountry.name;
        borderTag.addEventListener('click', () => {
          sessionStorage.setItem('selectedCountry', JSON.stringify(borderCountry));
          window.location.href = `country.html?name=${encodeURIComponent(borderCountry.name)}`;
        });
        borderCountries.appendChild(borderTag);
      }
    });
  } catch (error) {
    console.error('Error loading borders:', error);
    borderCountries.textContent = 'Error loading border countries';
  }
}

// Back button functionality
backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Initialize the page
loadCountryDetails();