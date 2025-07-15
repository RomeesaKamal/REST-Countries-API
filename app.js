const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");
const themeChanger = document.querySelector(".theme-changer");

let allCountriesData = [];

// Normalize region names to handle "Americas" vs "America"
function normalizeRegion(region) {
  const regionMap = {
    "Americas": "America",
    "North America": "America",
    "South America": "America"
  };
  return regionMap[region] || region;
}

// Load and prepare country data
async function loadCountriesData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load data');
    allCountriesData = await response.json();
    
    // Normalize region names and add searchable name
    allCountriesData = allCountriesData.map(country => ({
      ...country,
      region: normalizeRegion(country.region),
      searchName: country.name.toLowerCase()
    }));
    
    renderCountries(allCountriesData);
    populateRegionFilter();
  } catch (error) {
    console.error('Error loading data:', error);
    countriesContainer.innerHTML = `
      <div class="error-message">
        <p>Failed to load country data. Please try again later.</p>
      </div>
    `;
  }
}

// Populate region filter dropdown
function populateRegionFilter() {
  const regions = new Set(allCountriesData.map(country => country.region));
  const regionOptions = Array.from(regions).sort();
  
  regionOptions.forEach(region => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    filterByRegion.appendChild(option);
  });
}

// Render countries to the page
function renderCountries(countries) {
  countriesContainer.innerHTML = "";
  
  if (countries.length === 0) {
    countriesContainer.innerHTML = `
      <div class="no-results">
        <p>No countries found matching your criteria.</p>
      </div>
    `;
    return;
  }

  countries.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.className = 'country-card';
    countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name} flag" />
      <div class="card-text">
        <h3>${country.name}</h3>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital || 'N/A'}</p>
      </div>
    `;
    
    countryCard.addEventListener('click', () => {
      showCountryDetails(country);
    });
    
    countriesContainer.appendChild(countryCard);
  });
}

// Show country details page
function showCountryDetails(country) {
  sessionStorage.setItem('selectedCountry', JSON.stringify(country));
  window.location.href = `country.html?name=${encodeURIComponent(country.name)}`;
}

// Filter by region
filterByRegion.addEventListener('change', (e) => {
  const region = e.target.value;
  const filtered = region === 'all' 
    ? allCountriesData 
    : allCountriesData.filter(c => c.region === region);
  renderCountries(filtered);
});

// Search functionality
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  const filtered = allCountriesData.filter(c => 
    c.searchName.includes(term)
  );
  renderCountries(filtered);
});

// Theme switcher
themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Initialize dark mode if previously set
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Load the app
loadCountriesData();