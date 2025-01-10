const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionary = document.querySelector('dictionary-app')

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionaryFn(word){
    const ref = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    console.log(res)
}
dictionaryFn('chair')