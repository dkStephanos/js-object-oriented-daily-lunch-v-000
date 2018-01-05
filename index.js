let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let employerId = 0;
const store = {customers: [], meals: [], deliveries: [], employers: []}

class Customer {
  constructor(name, employer) {
    this.name = name;
    this.employer = employer;
    this.id = ++customerId;

    store.customers.push(this)
  }

}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;

    store.meals.push(this)
  }

  static function byPrice() {
    return store.meals.sort(function(a, b) {
      return a.price - b.price
    })
  }
}

class Delivery {
  constructor(meal, customer) {
    if(meal) {
        this.mealId = meal.id;
    }
    if(customer) {
        this.customerId = customer.id;
    }
    this.id = ++deliveryId;

    store.deliveries.push(this)
  }
}

class Employer {
  constructor(name) {
    this.name = name;
    this.id = ++employerId;

    store.employers.push(this)
  }
}
