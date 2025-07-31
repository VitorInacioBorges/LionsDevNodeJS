// A program that defines an object representing a favorite painting
// It includes properties such as the name of the painting, artist, year, location, and meaning.
// The program then logs a message to the console describing the painting.

let pinturaFavorita = {
    nomePintura: "Sol Nascente",
    nomeArtista: "Claude Monet",
    ano: 1872,
    localização: "Museu Marmottan em Paris",
    significado: "marco histórico do impressionismo"
};
console.log(`Minha pintura é ${pinturaFavorita.nomePintura} feita por ${pinturaFavorita.nomeArtista} no ano de ${pinturaFavorita.ano}.
Está localizada no ${pinturaFavorita.localização} e ela é o ${pinturaFavorita.significado}`);