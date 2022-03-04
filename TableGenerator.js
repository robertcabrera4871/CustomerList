class Customer{
    constructor(firstName, lastName, phoneNo, address, city, state){
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNo = phoneNo
        this.address = address
        this.city = city
        this.state = state
    }
}

let tableBody = document.createElement("tbody")
let table = document.getElementById("customerTable")

const cust1 = new Customer("Robert", "Cabrera", "516-404-6676", "404 6th St", "East Northport", "New York")
const cust2 = new Customer("Larissa", "Manfredi", "123-456-7890", "404 6th St", "East Northport", "New York")
const cust3 = new Customer("Jeffery", "Reyes", "111-213-1415", "909 8th Ave", "Jericho", "California")
const cust4 = new Customer("Anthony", "Rizanno", "161-718-1820", "12 Parker Pl", "El Paso", "Texas")
const cust5 = new Customer("Johnathan", "Dcosta", "212-223-2425", "7112 Savannah Rd", "Atlanta", "Georgia")

let customerList = new Array(cust1, cust2, cust3, cust4, cust5)


customerList.forEach((customer) => {
    tableBody.insertRow().innerHTML = `<tr>
        <td>${customer.firstName}</td>
        <td>${customer.lastName}</td>
        <td>${customer.phoneNo}</td>
        <td>${customer.address}</td>
        <td>${customer.city}</td>
        <td>${customer.state}</td>
    </tr>`
})

table.appendChild(tableBody)



