describe('AcmeDb', function(){
  describe('existence', function(){
    it('AcmeDb exists', function(){
      expect(AcmeDb).to.be.ok;
    });

    it('Employee exists', function(){
      expect(Employee).to.be.ok;
    });
  });

  describe('#getEmployees', function(){
    it('a new AcmeDb can be created', function(){
      var acmeDb = new AcmeDb();
      expect(acmeDb.getEmployees).to.be.ok;
      expect(acmeDb.getEmployees()).to.eql([]);
    });
  });


  describe('#addEmployee', function(){
    it('a new employee can be added', function(){
      var acmeDb = new AcmeDb();
      expect(acmeDb.addEmployee).to.be.ok;
      acmeDb.addEmployee('moe', 5);
      var employees = acmeDb.getEmployees();
      expect(employees[0].constructor).to.equal(Employee);
      expect(employees[0].name).to.equal('moe');
      expect(employees[0].id).to.equal(5);
    });

    it('employees are returned in sorted order', function(){
      var acmeDb = new AcmeDb();
      expect(acmeDb.addEmployee).to.be.ok;
      acmeDb.addEmployee('moe', 5);
      acmeDb.addEmployee('larry', 6);
      var employees = acmeDb.getEmployees();
      expect(employees[0].name).to.equal('larry');
    });
  });

  describe('#getEmployee', function(){
    var acmeDb;
    beforeEach(function(){
      acmeDb = new AcmeDb();
      acmeDb.addEmployee('moe', 5);
      acmeDb.addEmployee('larry', 6);
    });

    it('can get employee by id', function(){
      expect(acmeDb.getEmployee(6).name).to.equal('larry');
    });
  });

  describe('#deleteEmployee', function(){
    var acmeDb, moe;
    beforeEach(function(){
      acmeDb = new AcmeDb();
      acmeDb.addEmployee('moe', 5);
      acmeDb.addEmployee('larry', 6);
      moe = acmeDb.getEmployee(5);
    });

    it('an employee can be deleted', function(){
      expect(acmeDb.getEmployees().length).to.equal(2);
      acmeDb.deleteEmployee(moe);
      expect(acmeDb.getEmployees().length).to.equal(1);
    });
  });

  describe('#groupingEmployees', function(){
    var acmeDb, moe;
    beforeEach(function(){
      acmeDb = new AcmeDb();
      acmeDb.addEmployee('moe', 5);
      acmeDb.addEmployee('mike', 7);
      acmeDb.addEmployee('larry', 6);
      moe = acmeDb.getEmployee(5);
    });

    it('groups employees by the first letter of their first name', function(){
      expect(acmeDb.groupedEmployees().m.length).to.equal(2);
      expect(acmeDb.groupedEmployees().l.length).to.equal(1);
    });
  });


});
