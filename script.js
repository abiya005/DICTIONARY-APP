const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionary = document.querySelector('dictionary-app')

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionaryFn(word){
    const ref = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    console.log(res)
}
btn.addEventListener('click', fetchandCreateCard)
async function fetchandCreateCard() {
    const data = await dictionaryFn(input.value)
    console.log(data)
    dictionary.innerHTML = `
        <div class="card">
                <div class="property">
                    <span>Word:</span>
                    <span>The name of the word</span>
                </div>
                <div class="property">
                    <span>Phonetics:</span>
                    <span>Phonetics will go here</span>
                </div>
                <div class="property">
                    <span>Audio</span>
                </div>
                <div class="property">
                    <span>Definition:</span>
                    <span>Definition will go here</span>
                </div>
                <div class="property">
                    <span>Parts of speech:</span>
                </div>

            </div>
`
}
