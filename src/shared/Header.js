export function createHeader(pagename) {
    return `
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>${pagename}</ion-title>
            </ion-toolbar>
        </ion-header>
    `;
}