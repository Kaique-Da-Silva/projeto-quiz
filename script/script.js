function comecar() {

    let imagem = document.getElementById('imagem')
    let options = document.getElementById('options')
    
    imagem.innerHTML = ''
    options.innerHTML = ''

    let questions = [
        { question: "Em que época a internet surgiu?", options: ["Guerra Fria", "Primeira Guerra Mundial", "Crise de 1929"], answer: "Guerra Fria"},

        { question: "O que significa a sigla WWW na internet?", options: ["World Wide Web", "Web Wireless World", "Web Windows Work"], answer: "World Wide Web"},

        { question: "Qual destes é um sistema operacional?", options: ["Google Chrome", "Windows", "Intel Core i7"], answer: "Windows"},

        { question: "Qual unidade de medida é usada para indicar a velocidade de conexão com a internet?", options: ["Megabytes por segundo (MB/s)", "Megabits por segundo (Mbps)", "Milissegundos (ms)"], answer: "Megabits por segundo (Mbps)"},

        { question: "Qual desses navegadores pertence ao Google?", options: ["Safari", "Chrome", "Firefox"], answer: "Chrome"},

        { question: "Qual tecnologia é usada para conexões sem fio de curta distância entre dispositivos?", options: [" Bluetooth", "HDMI", "Ethernet"], answer: " Bluetooth"},

        { question: "Qual empresa criou o iPhone?", options: ["Microsoft", "Samsung", "Apple"], answer: "Apple"},

        { question: "Qual formato de arquivo é comumente usado para imagens na internet?", options: [".mp3", ".exe", ".jpg "], answer: ".jpg "},

        { question: "Qual destas linguagens é de programação?", options: ["JavaScript", "HTML", "CSS"], answer: "JavaScript"},

        { question: "Quem é considerado pai da ciência da computação?", options: ["Ada Lovelace", "Steve Jobs", "Alan Turing"], answer: "Alan Turing"}
    ]

    let atualQuestion = 0
    let score = 0

    function carregarQuestion() {
        if (atualQuestion < questions.length) {
            document.getElementById("perguntas").innerText = questions[atualQuestion].question
            let optionsDiv = document.getElementById("options")
            optionsDiv.innerHTML = ""
            questions[atualQuestion].options.forEach(option => {
                let button = document.createElement("button")
                button.innerText = option
                button.onclick = () => checkAnswer(option)
                optionsDiv.appendChild(button)
            })
        } else {
            document.getElementById("quiz").innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`
            if (score < 1) {
                document.getElementById("quiz").innerHTML += `<img src="../images/carminhagrito.webp" alt="Ahhhhhhhh!!!!!">`
                document.getElementById("quiz").innerHTML += `<h2>Meu Deus!</h2>`
            } else if (score < 6) {
                document.getElementById("quiz").innerHTML += `<img src="../images/meme_da_chloe.jpg" alt="carminhaCongelada">`
                document.getElementById("quiz").innerHTML += `<h2>Poderia ser um pouco melhor!</h2>`
            } else if (score < 10) {
                document.getElementById("quiz").innerHTML += `<img src="../images/achievement-5597527_640.png" alt="Tão perto">`
                document.getElementById("quiz").innerHTML += `<h2>Você está quase lá!</h2>`
            } else {
                document.getElementById("quiz").innerHTML += `<img src="../images/couple-5963678_640.png" alt="Viva!!!!!">`
                document.getElementById("quiz").innerHTML += `<h2>Uhuul!</h2>`
            }
        }
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === questions[atualQuestion].answer) {
            score++
        }
        atualQuestion++
        carregarQuestion()
    }
    
    carregarQuestion()   
}