function Worker(FirstName, LastName,Rate,Days) {
    this.getName=function (newName) {
        if(!arguments.length) return FirstName;
        if(typeof newName=='string') FirstName=newName;
    }
    this.getSurname=function (newLastName) {
        if (!arguments.length) return LastName;
        if (typeof newLastName=='string') LastName=newLastName;
    }
    this.rate=function (newRate) {
        if (!arguments.length) return Rate;
        if (typeof newRate=='number'){
            Rate=newRate;
        }
    }
    this.days=function (newDays) {
        if(!arguments.length) return Days;
        if (typeof newDays=='number') {
            if (newDays>9 && newDays<32)
            Days = newDays;
            else {
                throw new Error("Неподходящее количество дней");
            }
        }
    };
    this.salary=function () {
        return Rate*Days;
    };
}

var worker = new Worker('Иван','Иванов', 10, 31);
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.rate());
console.log(worker.days());
console.log(worker.salary());
worker.rate(20);
worker.days(10);
worker.salary(10);
console.log(worker.salary());
worker.days(5);
console.log(worker.salary());