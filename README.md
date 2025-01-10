# Frontend Mentor - Personal finance app solution

This is a solution to the [Personal finance app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/personal-finance-app-JfjtZgyMt1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)





### The challenge

Users should be able to:

- See all of the personal finance app data at-a-glance on the overview page
- View all transactions on the transactions page with pagination for every ten transactions
- Search, sort, and filter transactions
- Create, read, update, delete (CRUD) budgets and saving pots
- View the latest three transactions for each budget category created
- View progress towards each pot
- Add money to and withdraw money from pots
- View recurring bills and the status of each for the current month
- Search and sort recurring bills
- Receive validation messages if required form fields aren't completed
- Navigate the whole app and perform all actions using only their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Save details to a database (build the project as a full-stack app)
- **Bonus**: Create an account and log in (add user authentication to the full-stack app)

### Screenshot

# My Project

This project has various features. Below are some screenshots demonstrating different aspects of it.

## Table of Contents
1. [Feature 1](#feature-1)
2. [Feature 2](#feature-2)
3. [Feature 3](#feature-3)
4. [Feature 4](#feature-4)
5. [Feature 5](#feature-5)

---

## Feature 1

### Screenshot 1
![Feature 1 Screenshot](./screenshots/screenshot1.png)

---

## Feature 2

### Screenshot 2
![Feature 2 Screenshot](assets/screenshots/screenshot2.png)

---

## Feature 3

### Screenshot 3
![Feature 3 Screenshot](assets/screenshots/screenshot3.png)

---

## Feature 4

### Screenshot 4
![Feature 4 Screenshot](assets/screenshots/screenshot4.png)

---

## Feature 5

### Screenshot 5
![Feature 5 Screenshot](assets/screenshots/screenshot5.png)




### Links

- Solution URL: [https://github.com/mista4chun/finance-app](https://github.com/mista4chun/finance-app)
- Live Site URL: [https://finance-app-seven-pi.vercel.app](https://finance-app-seven-pi.vercel.app)



### Built with

- Semantic HTML5 markup

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwindcss - CSS Library
- Supabase 
- React Query
- React hook Form
- Hot Toast - For notifications
- Motion - For animation
- React Router



### What I learned

I was able to build a backend without any prior knowledge with the powerful tool called supabase superb product.I learnt to manage remote state with react query(tanstack query) things like mutation prefetching and useQuery. And I must say things like Pagination, Search, filter and Sort is a breeze when done on the server side I was able to achieve that with supabase. Authentication was implemented easily with the help of supabase again I must say Supabase and React Query make a powerful combination.

Things Like CRUD operations was fun to practice both in Budgets and pots page.

Just in case you read the "Readme" and do not feel like signing up though i think it's pretty easy with services like Temp-mail here's access email and password for you.
Email: "fortune@example.com"
Password: "pass0987"

React hook form is such a great lib for handling form i think it shines more while handling errors.
Overall i learnt a lot polished my React skills.

 ## Debouncing the Search Term

I used debounced to fix searching functionality because it was re-rendering for each letter i typed.
 

This code snippet shows how to debounce a search term input to reduce the number of API calls or expensive operations while typing.

```javascript
// Debounce the search term
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearchTerm(search);
  }, 300); // Adjust delay as needed
  return () => clearTimeout(timer);
}, [search]);

```




### Continued development

Sad I could not implement advanced react patterns like compound component. Hoping I get the hang of it and implement it in my next project that will be nice. And I hoping to perfect building custom drop downs with amazing styles. Still learning Motion(fka. Framer Motion) there are scarce resources to learn motion. I guess the documentation will have to do.



### Useful resources

- ChatGPT [openai.chat.com] works as a useful resource too it helped me with my filter, sort and pagination logic.

## Author

- Website - [portfolio](https://www.porfoliox.netlify.app)
- Frontend Mentor - [@mista4chun](https://www.frontendmentor.io/profile/mista4chun)
- Twitter - [@mista4chun](https://www.twitter.com/mista4chun)



## Acknowledgments

I will like to thank Frontend mentor for this beautiful yet hard project it was fun to build long but fun.

