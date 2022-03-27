const directMessage = document.getElementById('direct-msg');
const WHATSAPP_CONTACT = +55019991550438;

directMessage.setAttribute('href', `https://api.whatsapp.com/send?phone=${WHATSAPP_CONTACT}`);