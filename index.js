let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let employerId = 0;
let store = {customers: [], meals: [], deliveries: [], employers: []}

class Customer {
  constructor(name, employer) {
    this.name = name;
    this.employer = employer;
    this.id = ++customerId;

    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id
    })
  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;

    store.meals.push(this)
  }

  static byPrice() {
    return store.meals.sort(function(a, b) {
      return b.price - a.price
    })
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.mealId === this.id
    })
  }

  customers() {
    let mealDeliveries = this.deliveries();

    return store.customers.filter(customer => {
      return mealDeliveries.some(function(el) {
        return el.customerId === customer.id
      });
    });
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

  meal(){
    return store.meals.find(function(meal){
      return meal.id === this.mealId
    }.bind(this))
  }

  customer(){
    return store.customers.find(function(customer){
      return customer.id === this.customerId
    }.bind(this))
  }
}

class Employer {
  constructor(name) {
    this.name = name;
    this.id = ++employerId;

    store.employers.push(this)
  }
}
