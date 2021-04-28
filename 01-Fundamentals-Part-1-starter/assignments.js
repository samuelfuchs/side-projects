// Values and Variables
const country = 'Brazil'
const continent = 'South America'
let population = '211'

// Data Types
const isIsland = false
let language

// let, const and var
language = 'Portuguese'

// Basic Operators

let countrySplitInHalf = population / 2
countrySplitInHalf++

const populationFinland = 6

const isCountryMorePopulationThanFinland = country > populationFinland

const avgPop = 33

const isCountryMorePopulationThanAvgPop = country < avgPop

const description =
	country +
	' is in ' +
	continent +
	', and its ' +
	population +
	' million people speak ' +
	language

console.log(
	isCountryMorePopulationThanAvgPop,
	isCountryMorePopulationThanFinland,
	countrySplitInHalf,
	isIsland,
	population,
	country,
	language,
	continent,
	description
)
