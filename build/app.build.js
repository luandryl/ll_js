/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor () {
        this.head = null;
        this.length = 0;
    }
    
    addEnd (data) {
        const newNode = new Node(data);
        let tmp = this.head;

        if (!tmp) {
            this.head = newNode;
            this.length++;
            return newNode;
        }

        while(tmp.next)
            tmp = tmp.next;
        
        tmp.next = newNode;
        this.length++;
    
        return newNode;
    }

    addStart (data) {
        const newNode = new Node(data);
        let tmp = this.head;

        if (!tmp) {
            this.head = newNode;
            this.length++;
            return newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return newNode;
        }
        
    }

    getById (num) {
        let tmp = this.head;
        let i = 0;

        if (num > this.length) 
            throw new Error({err: "Doesn't Exist!"})
        
        while(i < num) {
            tmp = tmp.next;
            i++;
        }

        return tmp.data;
    }

    remove (num) {
        let tmp = this.head,
            i = 0,
            prev = null;
        
        if (num > this.length) 
            throw new Error({err: "Doesn't Exist!"})
        
        if (num === 0) {
            this.head = tmp.next;
            this.length--;

            return this.head;
        }

        while (i < num) {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }

        prev.next = tmp.next;
        tmp = null;
        this.length--;

        return this.head;
    }

    printList () {
        let tmp = this.head;
        let i = 0;
        while(i < this.length) {
            console.log(tmp.data)
            tmp = tmp.next;
            i++;
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedList;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_structures_LinkedList__ = __webpack_require__(0);



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
const userList = new __WEBPACK_IMPORTED_MODULE_0__data_structures_LinkedList__["a" /* default */]()
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

/***/ })
/******/ ]);