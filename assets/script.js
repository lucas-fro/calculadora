        var valorUm = 0;
        var valorDois = 0;
        var VarOperador = undefined;

        var numTextElemesmo = ''


        function numero(numero){
            var display = document.querySelector('#display');
            

            if(VarOperador === undefined){
                display.value += numero;
                valorUm = parseInt(display.value);
            }else{
                display.value += numero;

                let numeroTexto = numero.toString();

                numTextElemesmo += numeroTexto;
                valorDois = numTextElemesmo;
                
            }
        }

        function operador(op) {
            var display = document.querySelector('#display');

            if (display.value !== '') {
                VarOperador = op;
                display.value += VarOperador;
            }
        }

        function igual(){
            var display = document.querySelector('#display');

            var resultado = undefined;
    
            switch(VarOperador){

                case ' + ':
                    resultado = valorUm + parseInt(valorDois);
                    break;
                case ' - ':
                    resultado = valorUm - parseInt(valorDois);
                    break;

                case ' / ':
                    resultado = valorUm / parseInt(valorDois);;
                    break;
                
                case ' x ':
                    resultado = valorUm * parseInt(valorDois);;
                    break;

                
            }

            display.value = resultado;
            valorUm = resultado;
            valorDois = 0;
            VarOperador = undefined;
            numTextElemesmo = '';

        }

        function limpar(){
            var display = document.querySelector('#display');

            display.value = '';
            valorUm = 0;
            valorDois = 0;
            VarOperador = undefined;
            numTextElemesmo = '';

        }

        function voltar(){
            console.log('display: ' +  display.value);
            console.log('valor1: ' + valorUm);
            console.log('operador: ' + VarOperador);
            console.log('valor2: ' + valorDois);
            
        }

