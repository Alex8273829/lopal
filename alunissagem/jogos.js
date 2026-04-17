// Jogo da Alunissagem
//Alessandra Perez
// 08/04/2026
// versão 0.1.0
 
/** @type {HTMLCanvasElement} */
 
let canvas = document.querySelector("#jogos");
let contexto = canvas.getContext("2d");
let lançamento = (Math.round(Math.random()) == 0);
const gravidade = 0.01;
let estrelas = [];
for(let i = 0; i < 500; i++){
    estrelas[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        raio: Math.sqrt(2 * Math.random()),
        brilho: 1.0,
        apagando: true,
        cintilando: 0.05 * Math.random()
    }
}

let modulolunar = {
    posicao:{
        x: lançamento ? 100 : 700,
        y: 100
    },
    ângulo: lançamento ? -Math.PI/2 : Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: lançamento ? 2 : -2,
        y: 0
    },
    motorLigado: false,
    combustível: 1000,
    rotaçãoHorario: false,
    rotaçãoAntihorario: false
}

function mostrarCombustível(){
    mostrarIndicador(
        `Combustível: ${(modulolunar.combustível * 0.1).toFixed(0)} %`,
        50,
        80
    );
}

function mostrarIndicador(mensagem, x, y){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "White";
    contexto.fillText(
        mensagem,
        x,
        y
    );
}

function mostrarResultado(mensagem, cor){
    contexto.font = "bold 30px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText(mensagem, canvas.width * 0.5, canvas.height * 0.5);
    cancelAnimationFrame(desenharModuloLunar, mostrarCombustível, mostrarVelocidadeVertical)
 
}

function mostrarVelocidadeVertical(){
    mostrarIndicador(
        `Velocidade Vertical: ${(modulolunar.velocidade.y * 10).toFixed(2)} m/s`,
        50,
        60
    );
}

function mostrarVelocidadeHorizontal(){
    mostrarIndicador(
        `Velocidade Horizontal: ${(modulolunar.velocidade.x * 10).toFixed(2)} m/s`,
        50,
        40
    );
}

function mostrarAltitude(){
    mostrarIndicador(
        `Altitude: ${(canvas.height - modulolunar.posicao.y - 0.5 * modulolunar.altura).toFixed(0)} m`,
        400,
        80
    );
}

function mostrarAngulo(){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "White";
    contexto.fillText(
        `Ângulo: ${(Math.abs(modulolunar.ângulo) * 180/Math.PI).toFixed(0)} °`,
        400,
        60
    );
}

function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = "#000123"  
}

function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(modulolunar.posicao.x, modulolunar.posicao.y)
    contexto.rotate(modulolunar.ângulo);
    contexto.rect(modulolunar.largura * -0.5, modulolunar.altura * -0.5,
        modulolunar.largura, modulolunar.altura);
    contexto.fillStyle = modulolunar.cor;
    contexto.fill();
    contexto.closePath();
 
    if(modulolunar.motorLigado){
        desenharChama();
        modulolunar.combustível--;
        if(modulolunar.combustível <= 0){
            modulolunar.motorLigado = false;
        }
    }
    contexto.restore();
}

function desenharEstrelas(){
    contexto.clearRect(0,0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = " #000123"
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < estrelas.length; i++){
        let estrela = estrelas[i];
        contexto.beginPath();
        contexto.arc(estrela.x, estrela.y, estrela.raio, 0, 2 * Math.PI);
        contexto.closePath();
        contexto.fillStyle = `rgba(255, 255, 255, ${estrela.brilho})`;
        contexto.fill();
        if(estrela.apagando){
            estrela.brilho -= estrela.cintilando;
            if(estrela.brilho <= 0.1){
                estrela.apagando = false;
            }
        } else{
            estrela.brilho += estrela.cintilando;
            if(estrela.brilho > 0.95){
                estrela.apagando = true;
            }
        }
    }
    contexto.restore();
}

function desenharChama(){
    contexto.beginPath();
    contexto.moveTo(modulolunar.largura * -0.5, modulolunar.altura * 0.5);
    contexto.lineTo(modulolunar.largura * 0.5, modulolunar.altura * 0.5);
    contexto.lineTo(0, modulolunar.altura * 0.5 + Math.random() * 35);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}
 
function desenhar(){
    atraçãoGravitacional();
    desenharEstrelas();
    desenharModuloLunar();
    mostrarCombustível();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal();
    mostrarAltitude();
    mostrarAngulo();
 
    if(encerrarJogo()){
        return;
    }
    requestAnimationFrame(desenhar);
}

function encerrarJogo(){
    if(modulolunar.posicao.y > canvas.height - modulolunar.altura * 0.5){
       if(modulolunar.velocidade.y <= 0.5 &&
        Math.abs(modulolunar.velocidade.x) <= 0.5 &&
        Math.abs(modulolunar.ângulo) <= 5){
            mostrarResultado("Você Alunissou na Lua com Sucesso!", cor = "green");
        } else{
            mostrarResultado("Você Espatifou a Nave na Lua!", cor = "red");
        }
        return true;
    }
    return false;
}

document.addEventListener("keydown", teclaPressionada)
function teclaPressionada(evento){
    if(evento.key == "ArrowUp" && modulolunar.combustível > 1){
        modulolunar.motorLigado = true;
    } else if(evento.key == "ArrowRight"){
        modulolunar.rotaçãoHorario = true;
    } else if(evento.key == "ArrowLeft"){
        modulolunar.rotaçãoAntihorario = true;
    }
}

document.addEventListener("keyup", teclaSolta)
function teclaSolta(evento){
    if(evento.key == "ArrowUp"){
        modulolunar.motorLigado = false;
    } else if(evento.key == "ArrowRight"){
        modulolunar.rotaçãoHorario = false;
    } else if(evento.key == "ArrowLeft"){
        modulolunar.rotaçãoAntihorario = false;
    }
}

function consumirCombustível(){
    modulolunar.combustível--;
        if(modulolunar.combustível <= 0){
            modulolunar.motorLigado = false;
        }  
}

function atraçãoGravitacional(){
    modulolunar.posicao.x += modulolunar.velocidade.x;
    modulolunar.posicao.y += modulolunar.velocidade.y;
    modulolunar.velocidade.y += gravidade;
 
    if(modulolunar.rotaçãoHorario){
        modulolunar.ângulo += Math.PI/180;
    } else if(modulolunar.rotaçãoAntihorario){
        modulolunar.ângulo -= Math.PI/180;
    }
    if(modulolunar.motorLigado){
        modulolunar.velocidade.y -= 0.02 * Math.cos(modulolunar.ângulo)
        modulolunar.velocidade.x += 0.02 * Math.sin(modulolunar.ângulo)
    }
}

desenhar();
 