function montarPergunta(){
    const main = document.querySelector("main")

    main.innerHTML = `
        <section class="pergunta">

            <div>
                <p>Questão ${pergunta} de 10</p>

                <h2> ${quiz.questions[pergunta-1].question} </h2>
            </div>

            <div class="barra_progresso">
                <div style="width: ${pergunta * 10}%"></div>
            </div>
        </section>

        <section class="alternativas">
            <form action="">

                <label for="alternativa_a">
                    <input type="radio" id="alternativa_a" name="alternativa" value = "${alterarSinais(quiz.questions[pergunta-1].options[0])}">

                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_b">
                    <input type="radio" id="alternativa_b" name="alternativa" value ="${alterarSinais(quiz.questions[pergunta-1].options[1])}">

                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>
                    
                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c" name="alternativa" value ="${alterarSinais(quiz.questions[pergunta-1].options[2])}">
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>

                <label for="alternativa_d">
                    <input type="radio" id="alternativa_d" name="alternativa" value ="${alterarSinais(quiz.questions[pergunta-1].options[3])}">
                    <div>
                    <span>D</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                    </div>
                </label>
            </form>

            <button>Responder</button>
        </section>
    `
}