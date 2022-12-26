/*<div id="joke" class="joke">Awesome Joke is loading...</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// using promises
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//      .then((res) =>  /* isme hame ek response milta hai jisko ham "then" ki help se call karte hain */
//         res.json()) /* jo response milta hai hame woh html format mein hota hai toh usko ham change karte hain json format mein through ".json()" */
//      .then((data) => {
//         jokes.innerHTML = data.joke;
//      })
//      .catch((error) => { /* agar error aaya toh catch sambhal lega */
//         console.log(error); /* error ko print karva denge ham */
//      })
// }


// using async await
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch(err){
        console.log(`the error is ${err}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();