const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    const results = fruit.filter(fruitName => {
        // Convert both the fruit name and the user input to lowercase for case-insensitive comparison
        const lowercaseFruit = fruitName.toLowerCase();
        const lowercaseInput = str.toLowerCase();

        // Check if the fruit name contains the user input string
        return lowercaseFruit.includes(lowercaseInput);
    });

    return results;
}

function searchHandler(e) {
    const inputValue = e.target.value.toLowerCase(); // Get the value of the input field and convert it to lowercase
    const filteredResults = search(inputValue); // Call the search function to filter results based on the input value
    showSuggestions(filteredResults, inputValue); // Call the showSuggestions function to display the filtered results
}

function showSuggestions(results, inputVal) {
    const suggestionsList = document.querySelector('.suggestions ul');
    suggestionsList.innerHTML = ''; // Clear previous suggestions
    
    // Loop through the filtered results and create a list item for each suggestion
    results.forEach(result => {
        const listItem = document.createElement('li');
        let inputIndex = 0; // Track the index of the current letter in the input
        
        // Create a span element for each letter in the suggestion
        for (let i = 0; i < result.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = result[i];

            // Check if the current letter matches the corresponding letter in the input
            if (result[i].toLowerCase() === inputVal[inputIndex]?.toLowerCase()) {
                // Make the letter bold
                letterSpan.style.fontWeight = 'bold';
                inputIndex++; // Move to the next letter in the input
            }

            listItem.appendChild(letterSpan);
        }

        suggestionsList.appendChild(listItem);
    });
}

function useSuggestion(e) {
    const clickedSuggestion = e.target.closest('li');
    if (clickedSuggestion) {
        const selectedFruit = clickedSuggestion.textContent;
        input.value = selectedFruit; // Set the input value to the selected fruit
        suggestions.innerHTML = ''; // Clear the suggestions dropdown
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);