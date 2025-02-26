const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto e conectado!');
});

// Função auxiliar para simular digitação com atraso
async function sendWithTyping(chatId, text, delay = 2000) {
    // usaremos apenas um atraso para simular que o bot está "digitando..."
    await new Promise(resolve => setTimeout(resolve, delay));
    // Envia a mensagem
    client.sendMessage(chatId, text);
}

/* ===== Fluxo de mensagens simulando uma conversa ===== */
client.on('message', async (message) => {
    const texto = message.body.toLowerCase();

    if (texto === 'oi' || texto === 'olá' || texto === 'ola') {
        await sendWithTyping(message.from, "Olá! 😊 Bem-vindo(a)!");
        await sendWithTyping(message.from, "Eu sou o Assistente virtual da Ton e estou aqui para te ajudar escolher sua maquininha.");
        await sendWithTyping(message.from, "Selecione uma das opções:\n\n1️⃣ Quero conhecer os modelos 💳\n2️⃣ Quero saber sobre as taxas 💰\n3️⃣ Quero saber o prazo de entrega 📆");
        return;
    }

    if (texto === '2') { // Se o usuário escolheu saber sobre taxas
        await sendWithTyping(message.from, "Estamos com as menores taxas do mercado:");
        await sendWithTyping(message.from, "✅ Débito: 0,74%");
        await sendWithTyping(message.from, "✅ Crédito à vista: 0,74%");
        await sendWithTyping(message.from, "✅ Crédito em até 12x: 8,99%");
        await sendWithTyping(message.from, "Digite 1 e escolha um modelo de maquininha");
        return;
    }

    if (texto === '3') { // Se o usuário escolheu saber o prazo de entrega
        await sendWithTyping(message.from, "O prazo de entrega das maquininhas podem variar de acordo com o modelo escolhido.");
        await sendWithTyping(message.from, "Confira o prazo de entrega direto no carrinho e no resumo do seu pedido.");
        await sendWithTyping(message.from, "Digite 1 e escolha um modelo de maquininha");
        return;
    }

    if (texto === '1') { // Se o usuário quiser conhecer os modelos
        await sendWithTyping(message.from, "Aqui estão nossos modelos de maquininhas:");
        await sendWithTyping(message.from, "🔹 T1 - Pequena e prática (conecta ao celular).");
        await sendWithTyping(message.from, "🔹 T2 - Não precisa de celular, funciona com chip próprio.");
        await sendWithTyping(message.from, "🔹 T3 - A mais completa, com tela touch e recibo impresso.");
        await sendWithTyping(message.from, "Digite T1, T2 ou T3 para saber mais.");
        return;
    }

    if (texto === 't1' || texto === 't2' || texto === 't3') {
        let url = "";
        if (texto === 't1') url = "https://bit.ly/MinizinhaTonT1";
        if (texto === 't2') url = "https://bit.ly/T2BlackTon";
        if (texto === 't3') url = "https://bit.ly/SmartTonT3";

        await sendWithTyping(message.from, "Ótima escolha! Vou te redirecionar para a página de compra...");
        await sendWithTyping(message.from, `Clique aqui para comprar: ${url}`);
        return;
    }
});

client.initialize();
