import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
  Generated class for the TaggingText component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'tagging-text',
  templateUrl: 'tagging-text.html'
})
export class TaggingTextComponent {

@Input('myText') textToUse
  text: string;
  values = '';

  constructor() {

  }



  onKey(event:any) { // without type info
    
    //this.values += event.target.value + ' | ' + event.which;

    let el = document.querySelector("#textarea input");
    let key = event.which;
    
    if (key == 188) {
        //console.log(el.value.slice(0,-1));
        //pegar o pai de el
        var refenceNode = el.parentNode;
        //console.log(refenceNode);
        //criar elemento button
        var button = document.createElement("button");
        //inserir no button o texto digitado antes da vírgula(-1)
        button.innerText = event.target.value.slice(0, -1);
        //inserir no antes de el, o novo elemento button
        refenceNode.insertBefore(button, el);
        //limpar campo de texto
        event.target.value = '';
        //setar focus
        event.target.focus();

        this.delegate(document, "click", "button", (event) => {

            event.target.style.display = 'none';
        });
    }
  }

  delegate(el, evt, sel, handler) {
      el.addEventListener(evt, (event) => {
        var t = event.target;
        while (t && t !== this) {
          if (t.matches(sel)) {
            handler.call(t, event);
          }
          t = t.parentNode;
        }
      });
 }

}



