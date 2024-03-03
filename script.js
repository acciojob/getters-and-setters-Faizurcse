//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age = age;
	}

	get_name(){
		return this.name;
	}
	set_age(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(super.get_name() +" is studying")
	}
}

class Teacher extends Person {
	teach(){
		console.log(super.get_name()+" is teaching")
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
console.log(Person.name='John');
console.log(Person.age='30');




