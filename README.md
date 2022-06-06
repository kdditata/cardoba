# Cardoba

>By Kirstin Ditata

Cardoba is designed to unite vendors and patrons in a convenient fashion. This application minimizes the miles between consumer and seller by uniting potential purchasers and dealers. Cardoba provides a platform for vendors to reach a larger customer base as well as allow consumers to narrow their search for the perfect vehicle. 

# Terminals
We need to install the dependencies necessary to run this application. We have to install dependencies on the client side as well as the server side. We will also run a mongo database. 

-------------------
Open the first terminal and cd into the server directory by typing cd server. Then install the necessary dependencies by typing the following: 
```bash
npm install
```
--------------------
Open a second terminal and move into the client directory by typing cd client. Then install the necessary dependencies by typing the following: 
```bash
npm install
```
---------------------
To open our access point for the mongo database, open a third terminal and type the following: 
```bash
/usr/local/mongodb/bin/mongod --dbpath ~/.mongo
```
---------------------
Open a fourth terminal and type the following to start mongo. 
```bash
mongo
```
---------------------
- Redirect to the first terminal and type the following:
> npm start 
* Nodemon will begin to run the server.
- Redirect to the second terminal and type the following:
> npm start 
* This will open the browser for the client. 

---------------------

#### The server will begin and you may access Cardoba on the at the following:
(localhost:3000)

---------------------
### User Experience
- The user will be welcomed on the home page with information pertaining to the site. 
- There is a navbar with the title of the application and a home button.
- There is a footer with the title and subtitle of site and various inactive social media links as well as a link to view vehicle inventory.
- The user will be presented with the option of determining whether they are visiting cardoba to create an account/login as a vendor or purchase a vehicle as a customer.

#### Vendor interface
- The vendor is given the option to create an account or login to an existing account.

    - Create Account: 
        - A vendor first visiting the site will be offered the option to create an account.
        - Upon clicking the create account link, the user will be presented with a simple form.
        - Upon completion of the form, a thank you message will be available to the user along with a choice to add their vehicles to the inventory or return home.
        - The user now has an account. Upon cliking the add inventory link, the user is presented with a form.
        - The vendor provides vehicle information and submits the form.
        - Once the form is submitted, the user is introduced to a simple message of appreciation. 
        - The message then disappears, and the vendor is given the option to add another vehicle.
    - Login:
        - A returning vendor is given presented with the opportunity to login. 
        - Upon clicking the login button/link, the vendor is presented with a simple form.
        - The user is required to enter the correct login information.
        - If the user enters incorrect login information, an error message is then displayed. The user is also presented with a link to sign up/create account.
        - When the correct account information is supplied, the user is presented with a form to submit a vehicle.
        - Once the form is submitted, the user is introduced to a simple message of appreciation. 
        - The message then disappears, and the vendor is given the option to add another vehicle.

#### Purchaser interface
- The patron is given the option to view the available vehicle inventory.
- Once the view inventory link is selected, the user is presented with an image of a vehicle along with various details about the vehicle.
- If the user desires to purchase a vehicle they are invited to click the purchase this vehicle button.
- The customer is presented with a form and prompted to provide their shipping/billing information.
- Once the information is submitted, the user is given a message and informed of shipping details. 
- If the customer is having second thoughts and wants to cancel their purchase, they are presented with the option to cancel as well. 



