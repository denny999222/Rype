# Rype

A React-Native project for [cookiecutter]https://github.com/denny999222/Rype

## Tech stack
- React-Native
- Redux
- Firebase
- Node.js

## Configure and Run
1. npm install
2. brew install node
3. brew install watchman
4. sudo gem install cocoapods
5. cd ios
6. pod install
7. react-native run-ios

## Features
MANAGER
- Managing customers
- Declining/Approving Customers
- Manager pays salary to employees (cook, manager, delivery)
- Manager handles customer/employee complaints
- Manager inititates bidding process

SALESPERSON
- Sells supplies to cooks
- Manages supply

DELIVERY PERSON
- Bidding on the order of the food
- Map GPS for shortest route from restaurant to customer
- Rate customer

COOK
- Determines the supply quality from salesperson
- Creates the menu and adds the food/ingredients

CUSTOMER
- Order food
- Pays different prices based on status (VIP, regular, etc)
- Customer rates the food/cook and delivery person
- Has option to write complaints that is fast tracked to the manager
- Has voice recognition help

