const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto e conectado!');
});

client.on('message', message => {
    if (message.body.toLocaleLowerCase() === 'oi') {
        client.sendMessage(message.from, 'Olá, eu sou o seu atendente virtual da Ton e vou te ajudar escolher a melhor maquininha para sua empresa');
        client.sendMessage(message.from, 'Digite a opção desejada:');
        client.sendMessage(message.from, '1. Quero conhecer os modelos 📌');
        client.sendMessage(message.from, '2. Quero saber sobre taxas 💰');
        client.sendMessage(message.from, '3. Prazo de entrega 📆');
    }

    if (message.body.toLocaleLowerCase() == '1') {
        client.sendMessage(message.from, 'Temos várias opções de maquininhas. Digite a opção que mais se encaixa no seu negócio:');
        client.sendMessage(message.from, 'T1. Ton T1 – Pequena, moderna e conecta via Bluetooth com o celular');
        client.sendMessage(message.from, 'T2. Ton T2 – Pequena Possui chip próprio, sem necessidade de celular');
        client.sendMessage(message.from, 'T3. SmartTon T3 – A mais completa com Wi-Fi, 4G, tela Touch e comprovante de recibo');
    }

    if (message.body.toLocaleLowerCase() == '2') {
        client.sendMessage(message.from, 'Estamos com as menores taxas do mercado: Débito: 0,74% | Crédito à vista: 0,74% | Crédito em até 12x: 8,99%');
        client.sendMessage(message.from, 'Entre no link e faça seu pedido: https://ton.com.br/catalogo/?referrer=61B2AA16-ED2A-4436-86B8-13874294904D&utm_medium=invite_share&utm_source=revendedor');
    }
    
    if (message.body.toLocaleLowerCase() == '3') {
        client.sendMessage(message.from, 'Nosso prazo é de até 10 dias úteis');
        client.sendMessage(message.from, 'Digite 1 e escolha sua maquininha');
    }

    if (message.body.toLocaleLowerCase() == 'T1') {
        client.sendMessage(message.from, 'Ótima escolha! essa maquininha vai ser a perfeita para o seu negócio');
        client.sendMessage(message.from, 'Entre no link e faça seu pedido: https://bit.ly/MinizinhaTonT1');
    }

    if (message.body.toLocaleLowerCase() == 'T2') {
        client.sendMessage(message.from, 'Ótima escolha! essa maquininha vai ser a perfeita para o seu negócio');
        client.sendMessage(message.from, 'Entre no link e faça seu pedido: https://bit.ly/T2BlackTon');
    }
    
    if (message.body.toLocaleLowerCase() == 'T3') {
        client.sendMessage(message.from, 'Ótima escolha! essa maquininha vai ser a perfeita para o seu negócio');
        client.sendMessage(message.from, 'Entre no link e faça seu pedido: https://bit.ly/SmartTonT3');
    }
});
client.initialize();
