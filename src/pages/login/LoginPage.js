import './LoginPage.css';
import { createHeader } from '../../shared/Header.js'

const pagename = 'login';

class LoginPage extends HTMLElement {

    connectedCallBack() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pagename);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('login-page', LoginPage);
