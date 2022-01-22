const ACCOUNT_TYPE_SAVINGS = 'savings'
const ACCOUNT_TYPE_CHECKING = 'checking'

class Account {
  // Properties
  constructor(account, owner, balance) {
    this.AccountId = account
    this.OwnerId = owner
    this.Balance = balance
  }
  // ...

  // Operations
  Deposit(amount) {
    this.Balance += amount
  }
  Withdraw(amount) {
    this.Balance -= amount
  }
  Transfer(amount, otherAccount) {
    otherAccount.Withdraw(amount)
    this.Deposit(amount)
  }
  // ...
}

class SavingsAccount extends Account {
  // additional savings account specific stuff here
}

class CheckingAccount extends Account {
  // additional checking account specific stuff here
}

class BasicSavingsAccount extends SavingsAccount {
  // basic account stuff here
  Transfer(amount, otherAccount) {
    if (amount > 100) {
      //charge fee
      otherAccount.Withdraw(amount)
      this.Deposit(amount - fee)
    }
    if (amount < 100) {
      super.Transfer(amount, otherAccount)
    }
  }
}

class AdvancedSavingsAccount extends SavingsAccount {
  // advanced account stuff here
}

// Question to ask:
// Could we make conditonal ternery for charge fee?
// condition ? ExpressionTrue : ExpressionFalse
