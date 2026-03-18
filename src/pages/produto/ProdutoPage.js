const template = document.createElement('template');

template.innerHTML = `
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Produtos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Página de Produtos</p>
    </ion-content>
  </ion-page>
`;

customElements.define('produtos-page', class extends HTMLElement {
  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
});