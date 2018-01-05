let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let store = {customers: [], meals: [], deliveries: []}

class Customer {
  constructor(name, employer) {
    this.name = name;
    this.employer = employer;
    this.id = ++customerId;
  }


}
