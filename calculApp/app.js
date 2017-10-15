var app = angular.module("calculApp", []);
app.controller("calCtrl", calCtrl);

function calCtrl() {

    this.resultValue = 0;
    this.operation = function (operationSymbol) {
        this.operationSelected = operationSymbol;
    }

    this.calculate = function () {

        var num1 = parseFloat(this.firstVal);
        var num2 = parseFloat(this.secondVal);

        if (this.operationSelected === "+") {
            this.resultValue = (num1 + num2);
        } else if (this.operationSelected === "-") {
            this.resultValue = (num1 - num2);
        } else if (this.operationSelected === "*") {
            this.resultValue = (num1 * num2);
        } else if (this.operationSelected === "/") {
            this.resultValue = (num1 / num2);
        }

        //return resultValue;
    }




}