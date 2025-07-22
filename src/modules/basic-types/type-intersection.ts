export const bootstrap = (): void => {
    type Person = {
        name: string,
        age: number
    }

    type Employee = {
        department: string
    }

    type Customer = {
        wishlist: string[]
    }

    type EmployeeDetails = Person & Employee;

    const employeeDetails: EmployeeDetails = {
        name: 'Leonel',
        age: 26,
        department: 'TI'
    };

    type CustomerDetails = Person & Customer;

    const customerDetails: CustomerDetails = {
        name: 'Roberta',
        age: 20,
        wishlist: ['Smartphone','Laptop', 'Headphone']
    };

    console.log(employeeDetails);
    console.log(customerDetails);
}