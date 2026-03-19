import { logout } from './logout.js';

const createAndInjectionMenu = () => {
    if (document.querySelector('ion-menu'))
        return

    const mainContent = document.querySelector('ion-nav');
    const contentId = 'main-content';
    mainContent.id = contentId;

    const menu = document.createElement('ion-menu');
    menu.contentId = contentId;

    menu.innerHTML = `
        <ion-header>
            <ion-toolbar color='secondary'>
                <ion-title>Menu</ion-title>         
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item button class="menu-item" data-url="/home">
                    <ion-icon name="home" slot="start"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item button class="menu-item" data-url="/produto">
                    <ion-icon name="cafe" slot="start"></ion-icon>
                    <ion-label>Produtos</ion-label>
                </ion-item>
                <ion-item button class="menu-item" data-url="/usuario">
                    <ion-icon name="person" slot="start"></ion-icon>
                    <ion-label>Usuários</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    `;

    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', async () => {
            const url = item.dataset.url;
            const router = document.querySelector('ion-router');
            if (router && window.location.hash.substring(1) !== url)
                router.push(url, 'root')
            await menu.close();
        })
    });

    document.body.prepend(menu);

    // 👇 Evento do botão logout
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btn-logout')) {
            logout();
        }
    });
}

export function createHeader(pageName) {
    if (pageName !== 'login')
        createAndInjectionMenu();

    const start = pageName !== 'login' 
        ? `<ion-menu-button slot='start'></ion-menu-button>`
        : `<ion-icon name="cafe" style="margin-left: 15px; font-size: 24px;" slot="start"></ion-icon>`;

    const logoutBtn = pageName !== 'login' 
        ? `<ion-button slot="end" fill="clear" style="--color: white;" id="btn-logout">
                <ion-icon name="log-out-outline" slot="icon-only"></ion-icon>
           </ion-button>` 
        : '';
    
    return `
        <ion-header>
            <ion-toolbar style="--background: #5D3A1A; --color: white;">
                ${start}
                <ion-title>Quero Café Bar - ${pageName}</ion-title>
                ${logoutBtn}
            </ion-toolbar>
        </ion-header>
    `;
}