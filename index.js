
import LinkedList from './data_structures/LinkedList'

const user = {
    name: 'Archer',
    email: 'archer@test.com',
    _id: '3'
}

const user1 = {
    name: 'Batman',
    email: 'batman@test.com',
    _id: '2'
}

const user2 = {
    name: 'Luke',
    email: 'luke@test.com',
    _id: '1'
}

console.log("Create list")
const userList = new LinkedList()
userList.addStart(user)
userList.addStart(user1)
userList.addEnd(user2)
userList.printList()
console.log("\n")
console.log("Remove by ID")
userList.remove(0)
userList.printList()
console.log("\n")
console.log("Get by ID")
console.log(userList.getById(1))
console.log("\n")