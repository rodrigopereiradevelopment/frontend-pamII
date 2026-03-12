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
            <ion-toolbar color='secundary'>
                <ion-title>Menu</ion-title>         
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item button class="menu-item" data-url="/home">
                    <ion-label>Home</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    `;

    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', async () => {
            const url = item.dataset.url;
            const router = document.querySelector('ion-router');
            
            //verificando se a rota existe
            if (router && window.location.hash.substring(1) !== url)
                router.push(url, 'root')

            await menu.close();
        })

    });

     document.body.prepend(menu);

}

export function createHeader(pageName) {
    //validar de se nao e pagina de login
    if (pageName !== 'login')
        createAndInjectionMenu();

    const start = pageName !== 'login' ? `<ion-button>
        <ion-menu-button slot='start'></ion-menu-button>
    </ion-button>`:
    '<ion-icon name="cafe" style="margin-left: 15px; font-size: 24px;" slot="start"></ion-icon>'
    
    return `
        <ion-header>
          <ion-toolbar style="--background: primary; --color: white;">
                ${start}
               <ion-title>Quero Café Bar - ${pageName}</ion-title>
            </ion-toolbar>
        </ion-header>
    `;
}