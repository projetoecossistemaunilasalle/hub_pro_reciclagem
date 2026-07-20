const btnCalcular = document.querySelector(".btn");

function ativaCalculo(event) {
  event.preventDefault();

  const produtoCalcular = document.querySelector("#produto").value;
  let quantidadeCalcular = document.querySelector("#quantidade").value;

  if (produtoCalcular && quantidadeCalcular) {
    const calculadoraResultado = document.querySelector(
      ".calculadora-resultado"
    );
    const calculadoraRight = document.querySelector(".calculadora-right");

    quantidadeCalcular = Number(quantidadeCalcular);

    if (quantidadeCalcular <= 0 || quantidadeCalcular > 3000) {
      calculadoraRight.classList.add("ativar");
      calculadoraResultado.innerHTML = "";

      let h2 = document.createElement("h2");
      h2.innerHTML = `<h2>Número inválido</h2>`;
      calculadoraResultado.appendChild(h2);
    } else if (quantidadeCalcular > 0) {
      calculadoraRight.classList.add("ativar");
      calculadoraResultado.innerHTML = "";

      let h2 = document.createElement("h2");
      h2.innerHTML = `<h2>Resultado ao Reciclar</h2>`;
      calculadoraResultado.appendChild(h2);

      if (produtoCalcular === "garrafaPet2L") {
        let kg = (quantidadeCalcular * 91) / 1000;
        let co2 = kg * 3;
        let energia = kg * 0.00506;
        let petroleo = kg * 0.13;

        let energiaCal = (energia * 1000 * 60) / 60;
        let unidade = "minutos";
        if (energiaCal >= 60) {
          energiaCal = energiaCal / 60;
          unidade = "horas";
        }

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
          <label>Redução de CO2</label>
          <input type="text" value="${co2.toFixed(2)} KG" readonly>
          <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
            co2 / 0.096
          ).toFixed(2)} KM.</p>
        `;
        calculadoraResultado.appendChild(divCo2);

        let divEnergia = document.createElement("div");
        divEnergia.innerHTML = `
          <label>Economia de energia</label>
          <input type="text" value="${energia.toFixed(4)} MWh" readonly>
          <p>Com a economia, uma lâmpada de 60W poderia ficar acessa por ${energiaCal.toFixed(
            1
          )} ${unidade}.</p>
          `;
        calculadoraResultado.appendChild(divEnergia);

        let divPetroleo = document.createElement("div");
        divPetroleo.innerHTML = `
          <label>Economia de petróleo</label>
          <input type="text" value="${petroleo.toFixed(2)} L" readonly>
          <p>Evita-se a necessidade de produzir novas resinas de plástico a partir de petróleo, reduzindo o consumo de recursos naturais.</p>
        `;
        calculadoraResultado.appendChild(divPetroleo);

        let divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Além de reduzir a poluição nos oceanos, aterros sanitários e ruas, também protege a biodiversidade marinha, evita a morte de animais e contribui para o equilíbrio dos ecossistemas marinhos.</p>
        `;

        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "garrafaPet500ml") {
        let kg = (quantidadeCalcular * 16.7) / 1000;
        let co2 = kg * 3;
        let energia = kg * 0.00506;
        let petroleo = kg * 0.13;

        let energiaCal = (energia * 1000 * 60) / 60;
        let unidade = "minutos";
        if (energiaCal >= 60) {
          energiaCal = energiaCal / 60;
          unidade = "horas";
        }

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
          <label>Redução de CO2</label>
          <input type="text" value="${co2.toFixed(2)} KG" readonly>
          <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
            co2 / 0.096
          ).toFixed(2)} KM.</p>
        `;
        calculadoraResultado.appendChild(divCo2);

        let divEnergia = document.createElement("div");
        divEnergia.innerHTML = `
          <label>Economia de energia</label>
          <input type="text" value="${energia.toFixed(4)} MWh" readonly>
          <p>Com a economia, uma lâmpada de 60W poderia ficar acessa por ${energiaCal.toFixed(
            1
          )} ${unidade}.</p>
          `;
        calculadoraResultado.appendChild(divEnergia);

        let divPetroleo = document.createElement("div");
        divPetroleo.innerHTML = `
          <label>Economia de petróleo</label>
          <input type="text" value="${petroleo.toFixed(2)} L" readonly>
          <p>Evita-se a necessidade de produzir novas resinas de plástico a partir de petróleo, reduzindo o consumo de recursos naturais.</p>
        `;
        calculadoraResultado.appendChild(divPetroleo);

        let divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Além de reduzir a poluição nos oceanos, aterros sanitários e ruas, também protege a biodiversidade marinha, evita a morte de animais e contribui para o equilíbrio dos ecossistemas marinhos.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "garrafavidro750ml") {
        let kg = (quantidadeCalcular * 450) / 1000;
        let co2 = (kg / 6000) * 1000;
        let areia = kg * 1.3;

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
          <label>Redução de CO2</label>
          <input type="text" value="${co2.toFixed(2)} KG" readonly>
          <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
            co2 / 0.096
          ).toFixed(2)} KM.</p>
        `;
        calculadoraResultado.appendChild(divCo2);

        let divAreia = document.createElement("div");
        divAreia.innerHTML = `
          <label>Areia evitada</label>
          <input type="text" value="${areia.toFixed(2)} KG" readonly>
          <p>Preseva a natureza pois reduz a necessidade de captação de matéria-prima para produção de novos vidros.</p>
        `;
        calculadoraResultado.appendChild(divAreia);

        let divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Reduz custos de coleta urbana, aumenta a vida útil dos aterros sanitários e preserva a natureza ao reduzir a necessidade de utilização de matéria-prima virgem.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "papelA4") {
        let kg = (quantidadeCalcular * 5) / 1000;
        let agua = kg * 98;
        let garrafasAgua = agua / 0.5;
        let energia = kg * 3.25;
        let arvores = kg * 0.03;
        let porcentagemArvores = (arvores / 1) * 100;

        let energiaCal = (energia * 60) / 60;
        let unidade = "minutos";
        if (energiaCal >= 60) {
          energiaCal = energiaCal / 60;
          unidade = "horas";
        }

        let divAgua = document.createElement("div");
        divAgua.innerHTML = `
          <label>Água economizada</label>
          <input type="text" value="${agua.toFixed(2)} L" readonly>
          <p>Isso equivale a encher aproximadamente ${Math.ceil(
            garrafasAgua
          )} garrafas de água de 500ml.</p>
        `;
        calculadoraResultado.appendChild(divAgua);

        let divEnergia = document.createElement("div");
        divEnergia.innerHTML = `
          <label>Economia de energia</label>
          <input type="text" value="${energia.toFixed(4)} kWh" readonly>
          <p>Com a economia, uma lâmpada de 60W poderia ficar acessa por ${energiaCal.toFixed(
            1
          )} ${unidade}.</p>
        `;
        calculadoraResultado.appendChild(divEnergia);

        let divArvore = document.createElement("div");
        divArvore.innerHTML = `
          <label>Árvores impedidas</label>
          <input type="text" value="${arvores.toFixed(3)} " readonly>
          <p>Isso equivale a evitar o corte de aproximadamente ${porcentagemArvores.toFixed(
            2
          )}% de uma árvore. Se todos reciclassem, seria possivel salvar muitas árvores!</p>
        `;
        calculadoraResultado.appendChild(divArvore);

        divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Evitamos que o papel seja depositado em aterros ou incinerado, processos que contribuem para o aquecimento global. Além disso, reduzimos significativamente as emissões associadas e a necessidade de captação de matéria-prima virgem.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "lataAluminio350ml") {
        let kg = (quantidadeCalcular * 15) / 1000;
        let co2 = kg * 9;
        let bauxita = kg * 5;
        let energia = kg * 16.85;

        let energiaCal = (energia * 60) / 60;
        let unidade = "minutos";
        if (energiaCal >= 60) {
          energiaCal = energiaCal / 60;
          unidade = "horas";
        }

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
        <label>Redução de CO2</label>
        <input type="text" value="${co2.toFixed(2)} KG" readonly>
        <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
          co2 / 0.096
        ).toFixed(2)} KM.</p>
      `;
        calculadoraResultado.appendChild(divCo2);

        let divEnergia = document.createElement("div");
        divEnergia.innerHTML = `
          <label>Economia de energia</label>
          <input type="text" value="${energia.toFixed(4)} kWh" readonly>
          <p>Com a economia, uma lâmpada de 60W poderia ficar acessa por ${energiaCal.toFixed(
            1
          )} ${unidade}.</p>
          `;
        calculadoraResultado.appendChild(divEnergia);

        let divBauxita = document.createElement("div");
        divBauxita.innerHTML = `
        <label>Bauxita economizada</label>
        <input type="text" value="${bauxita.toFixed(2)} KG" readonly>
        <p>Alumínio é extraído do mineral bauxita, ao reciclar reduz a necessidade de extração, preservando as reservas naturais e diminuindo a degradação do solo.</p>
      `;
        calculadoraResultado.appendChild(divBauxita);

        divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>O alumínio pode ser reciclado infinitas vezes sem perder suas propriedades. Isso resulta em menos extração de minérios, menor gasto de energia e redução na geração de resíduos.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "lataAluminio473ml") {
        let kg = (quantidadeCalcular * 16) / 1000;
        let co2 = kg * 9;
        let bauxita = kg * 5;
        let energia = kg * 16.85;

        let energiaCal = (energia * 60) / 60;
        let unidade = "minutos";
        if (energiaCal >= 60) {
          energiaCal = energiaCal / 60;
          unidade = "horas";
        }

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
        <label>Redução de CO2</label>
        <input type="text" value="${co2.toFixed(2)} KG" readonly>
        <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
          co2 / 0.096
        ).toFixed(2)} KM.</p>
      `;
        calculadoraResultado.appendChild(divCo2);

        let divEnergia = document.createElement("div");
        divEnergia.innerHTML = `
          <label>Economia de energia</label>
          <input type="text" value="${energia.toFixed(4)} kWh" readonly>
          <p>Com a economia, uma lâmpada de 60W poderia ficar acessa por ${energiaCal.toFixed(1)} ${unidade}.</p>
          `;
        calculadoraResultado.appendChild(divEnergia);

        let divBauxita = document.createElement("div");
        divBauxita.innerHTML = `
        <label>Bauxita economizada</label>
        <input type="text" value="${bauxita.toFixed(2)} KG" readonly>
        <p>Alumínio é extraído do mineral bauxita, ao reciclar reduz a necessidade de extração, preservando as reservas naturais e diminuindo a degradação do solo.</p>
      `;
        calculadoraResultado.appendChild(divBauxita);

        divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>O alumínio pode ser reciclado infinitas vezes sem perder suas propriedades. Isso resulta em menos extração de minérios, menor gasto de energia e redução na geração de resíduos.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "lataAco280g") {
        let kg = (quantidadeCalcular * 54) / 1000;
        let ferro = kg * 1.4;
        let carvao = kg * 0.155;
        let cal = kg * 0.0018;

        const divFerro = document.createElement("div");
        divFerro.innerHTML = `
          <label>Minério de Ferro economizado</label>
          <input type="text" value="${ferro.toFixed(3)} KG" readonly>
        <p>Evita-se a extração do minério que ocasiona no desmatamento. Isso porque grandes volumes de terra são removidos para o processamento de minério.</p>
        `;
        calculadoraResultado.appendChild(divFerro);

        const divCarvao = document.createElement("div");
        divCarvao.innerHTML = `
          <label>Carvão economizado</label>
          <input type="text" value="${carvao.toFixed(3)} KG" readonly>
        <p>O carvão é um recurso não renovável. Ao economizar, evita-se emissões de gazes poluente.</p>
        `;
        calculadoraResultado.appendChild(divCarvao);

        const divCal = document.createElement("div");
        divCal.innerHTML = `
          <label>Cal economizado</label>
          <input type="text" value="${cal.toFixed(3)} KG" readonly>
        <p>O óxido de cálcio, ou cal, é utilizado no processo de purificação do aço. Portanto, ao reciclar reduz o consumo de recursos naturais .</p>
        `;
        calculadoraResultado.appendChild(divCal);

        divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Latas de aço são totalmente recicláveis. Ao coletar e destinar corretamente, pode ser transformada em aço novamente, servindo como máteria-prima e evitando a extração de minérios.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      } else if (produtoCalcular === "pneu") {
        let quantidade = quantidadeCalcular;
        let co2 = quantidade * 20;
        let petroleo = quantidade * 7;

        let divCo2 = document.createElement("div");
        divCo2.innerHTML = `
          <label>Redução de CO2</label>
          <input type="text" value="${co2.toFixed(2)} KG" readonly>
          <p>Seria como evitar a emissão de CO2 de um carro rodando aproximadamente ${(
            co2 / 0.096
          ).toFixed(2)} KM.</p>
        `;
        calculadoraResultado.appendChild(divCo2);

        let divPetroleo = document.createElement("div");
        divPetroleo.innerHTML = `
          <label>Economia de petróleo</label>
          <input type="text" value="${petroleo.toFixed(2)} L" readonly>
          <p>Reduz a necessidade de extrair recursos naturais. Assim, podemos reutilizar esse material e presevar recursos naturais limitados.</p>
        `;
        calculadoraResultado.appendChild(divPetroleo);

        divConsequencia = document.createElement("div");
        divConsequencia.innerHTML = `
          <h3>Consequência:</h3>
          <p>Ao reciclar estamos preservando recursos naturais, reduzindo o impacto ambiental quando pneus são descartados de maneira errada e estamos promovendo a sustentabilidade.</p>
        `;
        calculadoraResultado.appendChild(divConsequencia);
      }
    }
  }
}

btnCalcular.addEventListener("click", ativaCalculo);
