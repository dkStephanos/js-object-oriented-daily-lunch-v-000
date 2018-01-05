let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let employeeId = 0;
let store = {customers: [], meals: [], deliveries: [], employees: []}

class Customer {
  constructor(name, employer) {
    this.name = name;
    this.employer = employer;
    this.id = ++customerId;

    store.customers.push(this)
  }



  static function totalSpent() {

  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;

    store.meals.push(this)
  }


}

class Delivery {
  constructor(meal, customer) {
    this.meal = meal;
    this.customer = customer;
    this.id = ++deliveryId;

    store.deliveries.push(this)
  }
}
