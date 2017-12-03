global.println = function (somestring) {
    console.log(somestring)
}

class Human {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
    sayHi() {
        var result = "Hi, my name is " + this.name + " " + this.lastname
        println(result)
        return result;
    }
}

class Programmer extends Human {
    constructor(name, lastname, job, language) {
        super(name, lastname)
        this.job = job
        this.language = language
    }
    sayHiProgrammer() {
        super.sayHi()
        console.log("My job is " + this.job + ", and my lanugage is " + this.language)
    }
    startCoding(lang) {
        if (this.language.indexOf(lang) != -1) {
            console.log("Okay i'm start coding " + lang)

        } else {
            console.log("I try to start code " + lang + ", but my language is " + this.language)
        }

    }
}

class DataScientist extends Programmer {
    constructor(name, lastname, job, language, typeOfNeural) {
        super(name, lastname, job, language)
        this.typeOfNeural = typeOfNeural

    }

    startTrainingNeural(neurons) {
        neurons.forEach(neuron => {
            println("Start train " + neuron + " with algorythm " + this.typeOfNeural)
        });
    }

}


var vasya = new Programmer("Vasya", "Pupkin", "Junior-programmer", ["Visual Basic"])

vasya.sayHiProgrammer()
vasya.startCoding("C#")

vasya.startCoding("Visual Basic")

var Ilya = new Programmer("Ilya", "Kapitonov", "Senior-GOD PROGRAMMER", ["C#", "Python"])

println("\n")
Ilya.sayHiProgrammer()
Ilya.startCoding("C#")

Ilya.startCoding("Python")

var Artur = new DataScientist("Artur", "Bobrovskih", "Data-scientist", ["R"], "Reccurent Neural Network")

Artur.sayHiProgrammer()

var neuronDataSet_1 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

Artur.startTrainingNeural(neuronDataSet_1)

Artur.startCoding("R")

Artur.language.push("JavaScript")

Artur.startCoding("JavaScript")

Artur.language = ["undefined"]

Artur.startCoding("Java")














