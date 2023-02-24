package com.gubbyduo.employeecreator.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.gubbyduo.employeecreator.entity.Employee;
import com.gubbyduo.employeecreator.repository.EmployeeRepository;

@RestController
public class EmployeeController {
	
	public EmployeeRepository employeeRepository;
	
	public EmployeeController(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users")
	public ResponseEntity<List<Employee>> getAllUsers() {
		System.out.println(employeeRepository.findAll());
		return new ResponseEntity<List<Employee>>(employeeRepository.findAll(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/user/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		System.out.println(employee);
		return new ResponseEntity<Employee>(employeeRepository.save(employee), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/user/delete/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable long id){
		if(employeeRepository.existsById(id)) {
			employeeRepository.deleteById(id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/user/edit/{id}")
	public ResponseEntity<Employee> editEmployee(@PathVariable long id, @RequestBody Employee updatedEmployee){
		Employee employee = employeeRepository.findById(id).orElseThrow();
		
		employee.setFirstName(updatedEmployee.firstName);
		employee.setLastName(updatedEmployee.lastName);
		employee.setAddress(updatedEmployee.address);
		employee.setMobileNo(updatedEmployee.mobileNo);
		employee.setEmail(updatedEmployee.email);
		employee.setContractType(updatedEmployee.contractType);
		employee.setStartDate(updatedEmployee.startDate);
		employee.setEndDate(updatedEmployee.endDate);
		employee.setEmploymentTime(updatedEmployee.employmentTime);
		employee.setHoursPerWeek(updatedEmployee.hoursPerWeek);
		
		return new ResponseEntity<Employee>(employeeRepository.save(employee), HttpStatus.OK);
		
	}
	
	
	
}
