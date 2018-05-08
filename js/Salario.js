class Salario {
    /**
     * Construtor da Classe
     * @param {number} pSalarisoBruto Salario Bruto;
     */
    constructor(SalarioBruto){
      
        //DEFININDO COMO TIPO INDEFINIDO
        this._salarioBruto = undefined;
        this._descontoINSS = undefined;
        this._descontoIRRF = undefined;
        
        //CONTINUAÇÃO
        this._validarRegras(SalarioBruto);
        this._salarioBruto = SalarioBruto;
        this.descontoINSS;
        this.descontoIRPF;
        Object.freeze(this);        

    }
        //VALIDANDO AS REGRAS E INICIANDO
    _validarRegras(valor){
        if (typeof valor !== 'number' || valor < 0){
            throw new Error('O número inserido deve ser maior ou igual a 0');
        }
    }
    //INICIANDO SALARIO BRUTO
    get salarioBruto(){
        return this._salarioBruto;
    }
    //INICIO DO CALCULO DO INSS
    get descontoINSS(){
        if(this._salarioBruto <= 1693.72){
            this._descontoINSS = Number((this._salarioBruto * 0.08).toFixed(2));
            return this._descontoINSS;
        }
        else{
            if(this._salarioBruto <=2822.90){
                this._descontoINSS = Number((this._salarioBruto * 0.09).toFixed(2));
                return this._descontoINSS;
            }
            else{
                if(this._salarioBruto <=5645.80){
                    this._descontoINSS = Number((this._salarioBruto * 0.11).toFixed(2));
                    return this._descontoINSS;
                }
                else{
                    this._descontoINSS = 621.04;
                    return this._descontoINSS;
                } //FIM DO CALCULO DO INSS
            }
        }
    }
    get descontoIRPF(){
        this._baseDescontoIR = this._salarioBruto - this._descontoINSS

        // INICIO DO CALCULO DO IMPOSTO DE RENDA

        if(this._baseDescontoIR <= 1903.98){
            this._descontoIRRF = 0.00;
            this._debitoIR = 0;
            return this._descontoIRRF;
        }
        else{
            if(this._baseDescontoIR <= 2826.65 && ( this._baseDescontoIR <= 2826.65)){
                this._descontoIRRF = this._baseDescontoIR * (7.5/100)
                this. _debitoIR = this._descontoIRRF - 142.80
                return this._descontoIRRF;
            }
            else{
                if(this._baseDescontoIR <=3751.05){
                    this._descontoIRRF = this._descontoIRRF * (15.00/100)
                    _debitoIR = this._baseDescontoIR - 354.80
                    return this._descontoIRRF;
                }
                else{
                    if(this._baseDescontoIR <=4664.68){
                        this._descontoIRRF = this._baseDescontoIR * (22.5/100)
                        _debitoIR = this._descontoIRRF - 636.13
                        return this._descontoIRRF;
                    }
                    else{
                        this._descontoIRRF = this._baseDescontoIR * (27.5/100)
                        _debitoIR = this._descontoIRRF - 869.36
                        return this._descontoIRRF;
                    }
                }
            }
        }

    } //FIM DO CALCULO DO IMPOSTO DE RENDA

    //CALCULANDO TOTAL DOS DESCONTOS
    get totalDescontos(){
        return this._descontoINSS + this._descontoIRRF;
    }
    // CALCULANDO O SALARIO LIQUIDO
    get salarioLiquido(){
        return this._salarioBruto.toFixed(2) - this._descontoINSS.toFixed(2) - this._descontoIRRF.toFixed(2) - this._debitoIR.toFixed(2)
        return this.salarioLiquido.toFixed(2);

        
    }
}