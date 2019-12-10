function User(name,surname) {
        this.name = name;
        this.surname = surname;
        this.getInfo=function() {
            return this.name+' '+this.surname;
    }
}

function Student(name, surname, year) {
    User.call(this,name,surname);
    this._enrolled=false;
    var date = new Date();
    this.year=year;
    this.getCourse=function () {
        if (date.getFullYear()-year+1>0 && date.getFullYear()-year+1<7 && this._enrolled) return (date.getFullYear()-year+1)
        else return 'Уже не студент';
    }

    var parentGetInfo=this.getInfo;
    this.getInfo=function () {
        if (typeof this.getCourse()=='number') return (parentGetInfo.call(this) + ' - студент '+ this.getCourse() + ' курса')
        else return this.getCourse();
    }

    this.enroll=function () {
        this._enrolled=true;
    }

    this.expel=function () {
        this._enrolled=false;
    }
}

var student = new Student('Иван','Иванов', 2018);
student.enroll();
console.log(student.name);
console.log(student.surname);
console.log(student.getInfo());
console.log(student.year);
console.log(student.getCourse());
student.expel();
console.log(student.name);
console.log(student.surname);
console.log(student.getInfo());
console.log(student.year);
console.log(student.getCourse());