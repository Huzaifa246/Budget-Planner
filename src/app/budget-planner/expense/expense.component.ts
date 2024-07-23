import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import Toastify from 'toastify-js'

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string = '';
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 },
    { month: 'April', expenseAmount: 6400 },
    { month: 'May', expenseAmount: 6700 },
    { month: 'June', expenseAmount: 6600 },
    { month: 'July', expenseAmount: 6400 },
    { month: 'August', expenseAmount: 6300 },
    { month: 'September', expenseAmount: 6500 },
    { month: 'October', expenseAmount: 6400 },
    { month: 'November', expenseAmount: 6500 },
    { month: 'December', expenseAmount: 6700 },
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500},
  ];
  februaryExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 }
  ];
  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5300},
    { expenseType: 'Bills', expenseAmount: 1100},
  ];
  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5400},
    { expenseType: 'Bills', expenseAmount: 1300},
  ];
  juneExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5100},
    { expenseType: 'Bills', expenseAmount: 1400},
  ];
  julyExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 5200},
    { expenseType: 'Utilities', expenseAmount: 1200},
  ];
  augustExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 5300},
    { expenseType: 'Dinning', expenseAmount: 700},
  ];
  septemberExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 5100},
    { expenseType: 'Groceries', expenseAmount: 1400},
  ];
  octoberExpense: any[] = [
    { expenseType: 'Bills', expenseAmount: 5200},
    { expenseType: 'Groceries', expenseAmount: 1200},
  ];
  novemberExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 5300},
    { expenseType: 'Dinning', expenseAmount: 700},
  ];
  decemberExpense: any[] = [
    { expenseType: 'Bills', expenseAmount: 5400},
    { expenseType: 'Groceries', expenseAmount: 1300},
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }
  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.expenseForm.reset();
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      case 'April':
        return this.aprilExpense;
      case 'May':
        return this.mayExpense;
      case 'June':
        return this.juneExpense;
      case 'July':
        return this.julyExpense;
      case 'August':
        return this.augustExpense;
      case 'September':
        return this.septemberExpense;
      case 'October':
        return this.octoberExpense;
      case 'November':
        return this.novemberExpense;
      case 'December':
        return this.decemberExpense;
      default:
        return [];
    }
  }

  calculateTotalExpense(month: string): number {
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  onSave() {
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log("Form saved!");
    Toastify({
      text: 'Expense added successfully',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      backgroundColor: '#4CAF50',
      style: {
        background: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
      },
    }).showToast();
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
