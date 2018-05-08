class Salario {
    /**
     * Construtor da Classe
     * @param {number} pSalarisoBruto Salario Bruto;
     */
    constructor(SalarioBruto){
      
        this._salarioBruto = undefined;
        this._descontoINSS = undefined;
        this._descontoIRRF = undefined;
        
        this._validarRegras(SalarioBruto);
        this._salarioBruto = SalarioBruto;
        this.descontoINSS;
        this.descontoIRPF;
        Object.freeze(this);        

    }

    _validarRegras(valor){
        if (typeof valor !== 'number' || valor < 0){
            throw new Error('O número inserido deve ser maior ou igual a 0');
        }
    }
    get salarioBruto(){
        return this._salarioBruto;
    }
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
                }
            }
        }
    }
    get descontoIRPF(){
        //let this._salarioBruto-this._descontoINSS = this._salarioBruto-this._descontoINSS
        if(this._salarioBruto-this._descontoINSS <= 1903.98){
            this._descontoIRRF = 0.00;
            return this._descontoIRRF;
        }
        else{
            if(this._salarioBruto-this._descontoINSS <= 2826.65){
                this._descontoIRRF = Number(((this._salarioBruto - this._descontoINSS *7.5/100)-142.80).toFixed(2));
                return this._descontoIRRF;
            }
            else{
                if(this._salarioBruto-this._descontoINSS <=3751.05){
                    this._descontoIRRF = Number(((this._salarioBruto-this._descontoINSS *0.15)-354.80).toFixed(2));
                    return this._descontoIRRF;
                }
                else{
                    if(this._salarioBruto-this._descontoINSS <=4664.68){
                        this._descontoIRRF = Number(((this._salarioBruto-this._descontoINSS *0.225)-636.13).toFixed(2));
                        return this._descontoIRRF;
                    }
                    else{
                        this._descontoIRRF = Number(((this._salarioBruto-this._descontoINSS *0.275)-869.36).toFixed(2));
                        return this._descontoIRRF;
                    }
                }
            }
        }

    }

    get totalDescontos(){
        return this._descontoINSS + this._descontoIRRF;
    }
    get salarioLiquido(){
        return this._salarioBruto.toFixed(2) - this._descontoINSS.toFixed(2) - this._descontoIRRF.toFixed(2)
        return this.salarioLiquido.toFixed(2);

    }
}