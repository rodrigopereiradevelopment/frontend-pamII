import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js';


class UsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        this.innerHTML = `
            ${createHeader('usuario')}
             <div class="container">
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-label>Nome</ion-label>
                        <ion-input placeholder="Digite o nome"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Email</ion-label>
                        <ion-input type="email" placeholder="Digite o email"></ion-input>
                    </ion-item>
                </ion-list>
                <ion-button expand="block" color="primary">Salvar</ion-button>
            </ion-content>
            </div>
        `;
    }
}

customElements.define('usuario-page', UsuarioPage);
this.querySelector('#logout-btn').addEventListener('click' , logout);