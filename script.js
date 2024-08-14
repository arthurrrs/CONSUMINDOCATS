function showCatFact(photoId) {
    const catFactsApiUrl = "https://catfact.ninja/fact?max_lenght=140"

    fetch(catFactsApiUrl)
        .then(response => response.json())
        .then(data => {
            // Extraindo o fato de gato da resposta
            const catFact = data.fact

            document.getElementById('catFactMessage').innerText = catFact
        })

        .catch(error => {
            console.error(`erro ao obter a frase: ${error}`);
            document.getElementById('catFactMessage').innerText = 'Erro ao obter a frase'
        })

}