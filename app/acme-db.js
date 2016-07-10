function AcmeDb() {
	this.employees = [];
}



AcmeDb.prototype.getEmployees = function() {
	return this.employees.sort(function(a,b){
	if (a.name < b.name)
		return -1;
	else if (a.name > b.name)
		return 1;
	else return 0;
	});
}

AcmeDb.prototype.addEmployee = function(name, id) {
	this.employees.push(new Employee(name, id));
};

AcmeDb.prototype.getEmployee = function(id) {
	for (let i = 0; i < this.employees.length; i++) {
		if (this.employees[i].id === id) {
			return this.employees[i];
		}
	}
}

AcmeDb.prototype.deleteEmployee = function(employee) {
	for (let i = 0; i < this.employees.length; i++) {
		if (this.employees[i] === employee) {
			this.employees.splice(i, 1);
		}
	}
}

AcmeDb.prototype.groupedEmployees = function() {
	var grouped = {};
	for (let i = 0; i < this.employees.length; i++) {
		let firstLetter = this.employees[i].name[0];
		if (grouped[firstLetter])
			grouped[firstLetter].push(this.employees[i]);
		else 
			grouped[firstLetter] = [this.employees[i]];
	}
	return grouped;
}