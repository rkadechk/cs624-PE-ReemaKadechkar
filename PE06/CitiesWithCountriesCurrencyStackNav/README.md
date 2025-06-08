### Input

The application processes two main types of input:

1. **User Navigation**: Interactions via tab-based (CountriesNav, CitiesNav, AddCountry) and stack-based (drilling into country or city details) navigation.

2. **Data Sets**: Predefined information about countries, cities, and currencies, including:

- Country names and their currency usage (indicating whether a currency is used or not)

- City names linked to respective countries

- Currency attributes (symbols, exchange rates)

### Process

The application employs a combined navigation structure for seamless user experience:

1. **Tab-Based Navigation**: Using React Navigation Tabs, the app organizes content into four primary tabs:

- CountriesNav: For browsing countries with stack navigation

- CitiesNav: For exploring cities with stack navigation

- AddCountry: To add new country entries

- Settings: For application configurations

2. **Stack Navigation**: Nested within relevant tabs to allow hierarchical exploration:

- In CountriesNav: Countries list → Country details → Currency information

- In CitiesNav: Cities list → Individual city details

3. **State Management**:

- The Context API is utilized for sharing global data (like currencies and countries) across components.

- Navigation parameters are used to pass specific data (like selected country or city) between screens.

### Output

The application presents the following outputs through its user interface:

1. **Tab Bar**: A persistent bottom tab bar providing access to the four main sections.

2. **Country Navigation Flow**:

- A list of countries with indicators for currency usage.

- Detailed view of a selected country, showing its currency usage status.

- Specific currency details (exchange rates, symbols) when selected.

3. **City Navigation Flow**:

- A list of cities, which can be filtered by country.

- Detailed profiles for individual cities.