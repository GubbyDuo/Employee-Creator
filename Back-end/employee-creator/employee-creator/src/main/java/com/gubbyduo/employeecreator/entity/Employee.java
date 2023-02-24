package com.gubbyduo.employeecreator.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	public String firstName;
	public String lastName;
	public String email;
	public int mobileNo;
	public String address;
	public String contractType;
	public LocalDate startDate;
	public LocalDate endDate;
	public String employmentTime;
	public int hoursPerWeek;
	
	public Employee() {}
	
	public Employee(String firstName, String lastName, String email, int mobileNo, String address, String contractType,
			LocalDate startDate, LocalDate endDate, String employmentTime, int hoursPerWeek) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.address = address;
		this.contractType = contractType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.employmentTime = employmentTime;
		this.hoursPerWeek = hoursPerWeek;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(int mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getContractType() {
		return contractType;
	}


	public void setContractType(String contractType) {
		this.contractType = contractType;
	}


	public LocalDate getStartDate() {
		return startDate;
	}


	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}


	public LocalDate getEndDate() {
		return endDate;
	}


	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}


	public String getEmploymentTime() {
		return employmentTime;
	}


	public void setEmploymentTime(String employmentTime) {
		this.employmentTime = employmentTime;
	}


	public int getHoursPerWeek() {
		return hoursPerWeek;
	}


	public void setHoursPerWeek(int hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}
	
	





}


