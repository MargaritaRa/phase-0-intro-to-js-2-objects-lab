
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = cloneObject(employee);
    delete clonedEmployee[key];
    return clonedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  const employee = {
    name: 'John Doe',
    age: 30,
    department: 'Engineering'
  };
  
  describe('employees', () => {
    let employee;
  
    beforeEach(() => {
      
      employee = {
        name: 'John Doe',
        age: 30,
        department: 'Engineering'
      };
    });
  
    it('updateEmployeeWithKeyAndValue(employee, key, value)', () => {
     
    });
  
    it('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', () => {
    
    });
  
    it('deleteFromEmployeeByKey(employee, key)', () => {
    
    });
  
    it('destructivelyDeleteFromEmployeeByKey(employee, key)', () => {
    });
  });
  