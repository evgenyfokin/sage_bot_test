'use strict';

const token = '5414936574:AAER2mcR1KtOZ6sXxo2dnbLn2JSrh7oFSds';
const chatID = '-1001503430907';
const uri_API = `https://api.telegram.org/bot${token}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('1111')

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Product: </b> ${this.name.value} \n`;
    message += `<b>Telegram tag: </b> ${this.email.value}`;

    axios.post(uri_API, {
        chat_id: chatID,
        parse_mode: 'html',
        text: message,
    })
    console.log(message);
})