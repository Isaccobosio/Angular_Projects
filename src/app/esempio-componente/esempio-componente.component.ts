/* file esempio-componente.component.ts */
import { Component } from "@angular/core";

/* 
*   definiamo una costante FONT_FAMILY
*   che usiamo nella definizione della proprietà font-family
*/
const FONT_FAMILY = '\'Courier New\', Courier, monospace;';


@Component({
    selector: 'app-esempio-componente', /* tag html */
    template: `<h2>Componente: {{nomeComponente}}</h2>`, /* posso fare anche riferimento ad un file esterno */
    styles: [ /* posso fare anche riferimento ad un file esterno */
        `h2 {
            color: midnightblue;
            font-family: ${FONT_FAMILY}
          }`,
          `h2:hover {
            color: crimson;
          }`
    ]
} )

export class EsempioComponenteComponent {
    nomeComponente = this.constructor.name;
}