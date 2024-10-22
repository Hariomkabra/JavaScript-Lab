import { getCurrentJoke, getRandomJoke } from 'node_modules/hindi-jokes';

async function fetchJoke(jokeNo) {
    try {
        const joke = await getCurrentJoke(jokeNo);
        console.log('Joke:', joke);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

async function fetchRandomJoke() {
    try {
        const joke = await getRandomJoke();
        console.log('Random Joke:', joke);
    } catch (error) {
        console.error('Error fetching a random joke:', error);
    }
}

// Fetch a specific joke
fetchJoke(5);

// Fetch a random joke
fetchRandomJoke(); 