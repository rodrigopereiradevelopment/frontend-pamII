import { createHeader } from '../../shared/Header.js';
import { logout } from '../../shared/logout.js';  
 
const template = document.createElement('template');

template.innerHTML = `
    ${createHeader('produto')}
     <div class="container">
    <ion-content>
        <ion-list>
            <ion-item>
                <ion-label>Nome do Produto</ion-label>
                <ion-input placeholder="Digite o nome"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label>Preço</ion-label>
                <ion-input type="number" placeholder="0,00"></ion-input>
            </ion-item>
        </ion-list>
        <ion-button expand="block">Salvar</ion-button>
    </ion-content>
    </div>
`;

customElements.define('produto-page', class extends HTMLElement {
    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
        this.querySelector('#logout-btn').addEventListener('click' , logout);
    }
});