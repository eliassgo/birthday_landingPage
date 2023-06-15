AOS.init();

const dataDoEvento = new Date("jan, 2024 22:00:00"); // Objeto para representar a hora do evento
const timeStampDoEvento = dataDoEvento.getTime(); // getTime() para obter o timestamp da data do evento, time stamp é uma representação em milissegunndos

const contaAsHoras = setInterval(function () { //função anônima executada a cada milisegundo 
    const agora = new Date(); // Objeto date com a data da  hora atual 
    const timeStampAtual = agora.getTime(); // //timestamp atual 

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // Calcula a diferença entre o timestamp do evento e o timestamp atual

    //constantes para converter a diferença em dias, horas, minutos e segundos. Cada representa o valor para milissegundos 
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    //Constantes para converter a distançia até o evento em dias, horas, minutos e segundos
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    //Atualizar o conteúdo no HTML para exibir a contagem regressiva 
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`

    //Verificação da difereça entre os timestraps, se for zero exibir da mensagem
    if (distanciaAteOEvento < 0) {
        document.getElementById('contador').innerHTML = '(Evento expirado)'
    }
}, 1000);