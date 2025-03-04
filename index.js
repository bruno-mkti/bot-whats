const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto e conectado!');
});

function sendMessageWithDelay(chatId, messages, delay = 2000) {
    messages.forEach((msg, index) => {
        setTimeout(() => {
            client.sendMessage(chatId, msg);
        }, index * delay);
    });
}

client.on('message', message => {
    const msgText = message.body.toLocaleLowerCase();
    const chatId = message.from;

    if (msgText === 'oi') {
        sendMessageWithDelay(chatId, [
            'Olá, eu sou o seu atendente virtual da Ton e vou te ajudar a escolher a melhor maquininha para sua empresa.',
            'Digite a opção desejada:',
            '1. Quero conhecer os modelos 💳',
            '2. Quero saber sobre taxas 💰',
            '3. Prazo de entrega 📆'
        ]);
    }

    if (msgText === '1') {
        sendMessageWithDelay(chatId, [
            'Temos várias opções de maquininhas. Digite a opção que mais se encaixa no seu negócio:',
            'T1. Pequena, moderna e conecta via Bluetooth com o celular',
            'T2. Pequena Possui chip próprio, sem necessidade de celular',
            'T3. SmartTon T3 – A mais completa com Wi-Fi, 4G, tela Touch e comprovante de recibo',
            'Digite T1, T2 ou T3.'
        ]);
    }

    if (msgText === '2') {
        sendMessageWithDelay(chatId, [
            'Estamos com as menores taxas do mercado:', 
            '☑️ Débito: 0,74%',
            '☑️ Crédito à vista: 0,74%',
            '☑️ Crédito em até 12x: 8,99%',
            'Digite 1 e escolha sua maquininha.'
        ]);
    }
    
    if (msgText === '3') {
        sendMessageWithDelay(chatId, [
            'O prazo de entrega das maquininhas pode variar de acordo com o modelo escolhido.', 
            'Confira o prazo de entrega direto no carrinho e no resumo do seu pedido.',
            'Digite 1 e escolha sua maquininha.'
        ]);
    }

    if (msgText === 't1') {
        sendMessageWithDelay(chatId, [
            'Ótima escolha! Essa maquininha é perfeita para o seu negócio.',
            'Entre no link e faça seu pedido: https://bit.ly/MinizinhaTonT1'
        ]);
    }

    if (msgText === 't2') {
        sendMessageWithDelay(chatId, [
            'Ótima escolha! Essa maquininha é perfeita para o seu negócio.',
            'Entre no link e faça seu pedido: https://bit.ly/T2BlackTon'
        ]);
    }
    
    if (msgText === 't3') {
        sendMessageWithDelay(chatId, [
            'Ótima escolha! Essa maquininha é perfeita para o seu negócio.',
            'Entre no link e faça seu pedido: https://bit.ly/SmartTonT3'
        ]);
    }
});

client.initialize();
