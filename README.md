<h1 align="center">1mg.com Clone</h1>
<h3 align="center">It's a MERN Stack healthcare web application with all the major functionalities</h3>

<br/>

<h2 align="center">🖥️ Tech Stack</h2>

<h4 align="center">Frontend:</h4>
<p align="center">
  <img src="https://img.shields.io/badge/React (18.2.0)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
  <img src="https://img.shields.io/badge/Redux (4.2.0)-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
  <img src="https://img.shields.io/badge/Chakra%20UI (2.2.8)-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui" />
  <img src="https://img.shields.io/badge/Firebase (9.9.3)-20232A?style=for-the-badge&logo=firebase&logoColor=ffcd33" alt="Firebase" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
</p>
<h4 align="center">Backend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js (16.14.2)-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/Express.js (4.18.1)-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
  <img src="https://img.shields.io/badge/MongoDB (6.0)-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
</p>

<h4 align="center">Payment Gateway:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/-Instamojo-blue" alt="Instamojo" />
</p>

<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku" />
</p>

<h3 align="center"><a href="https://tata1mg-clone-nem201.vercel.app/"><strong>Want to see live preview »</strong></a></h3>

Tata 1mg is India’s leading consumer health platform. It provides services, including e-pharmacy, diagnostics, e-consultation and health content.
<br/>

## 🚀 Features

-   Login and Signup Page with mobile OTP
-   Firebase Authentication
-   Product Filters Based on Brand and Discount
-   Product Sorting Based on Price, Rating
-   Product Filtering and Sorting works together
-   Cart Add and Remove Items
-   Cart Update Quantities
-   Address Management
-   Order Summary
-   Instamojo Payment Gateway

## 🚀 Our Team Members:-

-   Ramesh [[LinkedIn Profile](https://www.linkedin.com/in/ramesh-mane-268a0014a/)]

-   Rahul Singh [[LinkedIn Profile](https://www.linkedin.com/in/rahul-singh-437a4b234/)]

-   Shristi Kumari [[LinkedIn Profile](https://www.linkedin.com/in/shristi-kumari-b07927247/)]

-   Himanshu Sharma [[LinkedIn Profile](https://www.linkedin.com/in/himanshu-40a7b7135/)]

## Screenshots

### Homepage -

This is the main landing page of our website. Here, if you clicked on any navigation then you will redirect to respective page. Also, we have added searching of product option with debouncing feature.

All pages are responsive.

![Homepage ](./screenshots/homepage.png)

### Sign up / Sign in Page -

On this page, you can register a user. If the user is already registered, you can simply sign in by providing valid details of the user. We have used `Firebase Authentication` so, once you entered your mobile number you will get `OTP`, you need to enter that `OTP`.

![Sign In](./screenshots/login.PNG)

### Search Functionality

If you type any `keyword` the list of product will appear in the modal component. You can add it to cart directly from here or you can see more details by clicking on the product.
We have added debouncing functionality on searching products.

![Search Product](./screenshots/search.png)

### Products Page -

Here users can browse, `filter` the product based on `brand and discound`, `sort` by `price or rating`, filter and sort will work togather and add items to the cart by clicking on the `Add to Cart` button.

![Products Page](./screenshots/product.png)

### Cart Page -

Here all the products added to the cart will be shown. On this page, you can `remove` the item from cart and also, `increase` or `decrease` count. By clicking on the `CHECKOUT` button you will be redirect to the checkout page.

![Cart](./screenshots/cart.png)

### Order Summary Page -

On this page you will see all details like, address, total bill, shipping address. By clicking on `Proceed to payment` button you will be redirect to payment page.

![Order Summary](./screenshots/ordersummary.png)

### Payment Page -

For payment, we have used `Instamojo Payment Gateway`. So, users need to add required card details.

`Note:` For demo purpose use below card details

-   Card Number: `4242 4242 4242 4242`
-   Expiry: `01/25`
-   CVV: `111`

![Payment Page](./screenshots/payment.png)

### Payment Status

After submitting the payment details you will get `Payment Successful` or `Payment Failed` depending on the `status of the payment`. Also, you received mail of bill details of order.

<table>
  <tr>
    <td><img src="./screenshots/paymentsuccessful.png" alt="Payment Successful" /></td>
    <td><img src="./screenshots/paymentfailed.png" alt="Payment Failed" /></td>
  </tr>
</table>

## Run Locally

Clone the project

```bash
  git clone https://github.com/rameshmane7218/humane-shelf-7123.git
```

Go to the project directory

```bash
  cd humane-shelf-7123
```

Install dependencies for frontend as well as backend

```bash
  cd frontend
  npm install
```

```bash
  cd ../backend
  npm install
```

Start the localhost server

```bash
  cd ../frontend
  npm start
```

## Deployed link

### Vercel Link

[https://tata1mg-clone-nem201.vercel.app/](https://tata1mg-clone-nem201.vercel.app/)

## Show your support

Give a ⭐️ if you like this project!
