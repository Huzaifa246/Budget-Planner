import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '200(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '400(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '200(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  aprilIncomes: any[] = [
    { source: 'Salary', amount: 5300, investments: '200(k)' },
    { source: 'Freelancing', amount: 1100, investments: 'Stocks' },
  ];
  mayIncomes: any[] = [
    { source: 'Salary', amount: 5400, investments: '400(k)' },
    { source: 'Freelancing', amount: 1300, investments: 'Stocks' },
  ];
  juneIncomes: any[] = [
    { source: 'Salary', amount: 5100, investments: '200(k)' },
    { source: 'Freelancing', amount: 1400, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  julyIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '200(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
  ];
  augustIncomes: any[] = [
    { source: 'Salary', amount: 5300, investments: '400(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  septemberIncomes: any[] = [
    { source: 'Salary', amount: 5100, investments: '200(k)' },
    { source: 'Freelancing', amount: 1400, investments: 'Stocks' },
  ];
  octoberIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '200(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
  ];
  novemberIncomes: any[] = [
    { source: 'Salary', amount: 5300, investments: '400(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  decemberIncomes: any[] = [
    { source: 'Salary', amount: 5400, investments: '200(k)' },
    { source: 'Freelancing', amount: 1300, investments: 'Stocks' },
  ];
  monthSelected:boolean=false;

  constructor(public Income:FormBuilder, public router:Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }
  ngOnInit(){
    this.incomeForm = this.Income.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    })
  }

  calculateTotalIncome(incomes: string): number {
    let totalIncome = 0;
    for(const income of this.getIncomesForMonth(incomes)){
      totalIncome += income.amount;
    }
    return totalIncome;
  }
  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      case 'April':
        return this.aprilIncomes;
      case 'May':
        return this.mayIncomes;
      case 'June':
        return this.juneIncomes;
      case 'July':
        return this.julyIncomes;
      case 'August':
        return this.augustIncomes;
      case 'September':
        return this.septemberIncomes;
      case 'October':
        return this.octoberIncomes;
      case 'November':
        return this.novemberIncomes;
      case 'December':
        return this.decemberIncomes;
      default:
        return [];
    }
  }

  incomeList() {
    let incomeList: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        incomeList = this.januaryIncomes;
        break;
      case 'February':
        incomeList = this.februaryIncomes;
        break;
      case 'March':
        incomeList = this.marchIncomes;
        break;
      case 'April':
        incomeList = this.aprilIncomes;
        break;
      case 'May':
        incomeList = this.mayIncomes;
        break;
      case 'June':
        incomeList = this.juneIncomes;
        break;
      case 'July':
        incomeList = this.julyIncomes;
        break;
      case 'August':
        incomeList = this.augustIncomes;
        break;
      case 'September':
        incomeList = this.septemberIncomes;
        break;
      case 'October':
        incomeList = this.octoberIncomes;
        break;
      case 'November':
        incomeList = this.novemberIncomes;
        break;
      case 'December':
        incomeList = this.decemberIncomes;
        break;
      default:
        break;
    }
    return incomeList;
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.incomeList();
  }

  onSubmit(){
    if(this.incomeForm.valid){
      const newIncomeAdd = this.incomeForm.value;
      switch (this.selectedMonth){
        case 'January':
          this.januaryIncomes.push(newIncomeAdd);
          break;
        case 'February':
          this.februaryIncomes.push(newIncomeAdd);
          break;
        case 'March':
          this.marchIncomes.push(newIncomeAdd);
          break;
        case 'April':
          this.aprilIncomes.push(newIncomeAdd);
          break;
        case 'May':
          this.mayIncomes.push(newIncomeAdd);
          break;
        case 'June':
          this.juneIncomes.push(newIncomeAdd);
          break;
        case 'July':
          this.julyIncomes.push(newIncomeAdd);
          break;
        case 'August':
          this.augustIncomes.push(newIncomeAdd);
          break;
        case 'September':
          this.septemberIncomes.push(newIncomeAdd);
          break;
        case 'October':
          this.octoberIncomes.push(newIncomeAdd);
          break;
        case 'November':
          this.novemberIncomes.push(newIncomeAdd);
          break;
        case 'December':
          this.decemberIncomes.push(newIncomeAdd);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
      Toastify({
        text: "Income added successfully",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4CAF50"
      }).showToast();
    }
  }

  saveForm() {
    Toastify({
      text: "Form saved successfully",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4CAF50"
    }).showToast();
  }
  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
