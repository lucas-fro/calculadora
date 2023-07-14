        var valorUm = 0;
        var valorDois = 0;
        var VarOperador = undefined;

        var numTextElemesmo = ''
        var equacao = document.querySelector('#equacao');



        function numero(numero){
            var display = document.querySelector('#display');
            

            if(VarOperador === undefined){
                display.value += numero;
                valorUm = parseFloat(display.value);
            }else{
                display.value += numero;

                let numeroTexto = numero.toString();

                numTextElemesmo += numeroTexto;
                valorDois = numTextElemesmo;
                
            }
        }

        function operador(op) {
            var display = document.querySelector('#display');

            if (display.value !== '' && VarOperador === undefined) {
                VarOperador = op;
                display.value += VarOperador;
            }else{
                novoOperador(op);
            }
        }

        function novoOperador(novoOperador){
            var display = document.querySelector('#display');
            display.value = '';

            VarOperador = novoOperador;
            display.value = valorUm + novoOperador
        }

        function igual(){
            var display = document.querySelector('#display');

            var resultado = undefined;
    
            switch(VarOperador){

                case ' + ':
                    resultado = valorUm + parseFloat(valorDois);
                    break;
                case ' - ':
                    resultado = valorUm - parseFloat(valorDois);
                    break;

                case ' / ':
                    resultado = valorUm / parseFloat(valorDois);;
                    break;
                
                case ' x ':
                    resultado = valorUm * parseFloat(valorDois);;
                    break;

                
            }

            equacao.textContent = valorUm + VarOperador + valorDois + '='
            display.value = resultado;
            valorUm = resultado;
            valorDois = 0;
            VarOperador = undefined;
            numTextElemesmo = '';

        }

        function limpar(){
            var display = document.querySelector('#display');
            equacao.textContent = '';
            display.value = '';
            valorUm = 0;
            valorDois = 0;
            VarOperador = undefined;
            numTextElemesmo = '';

        }

        function backspace() {
            var display = document.querySelector('#display');
          
            if (valorDois !== 0) {
              let novoValorDois = numTextElemesmo.slice(0, -1);
              numTextElemesmo = novoValorDois;
              valorDois = parseFloat(novoValorDois);
              display.value = display.value.slice(0, -1);
            } else if (valorUm !== 0) {
              let novoValorUm = valorUm.toString().slice(0, -1);
              valorUm = parseFloat(novoValorUm);
              display.value = novoValorUm;
            }
          }

