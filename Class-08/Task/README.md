# HR-management-system
## **Task 08**

### **Overview**

Today will be the beginning of a multi-task project, where you will build an Employee Management System.

### **Problem domain**

You are building an HR management system for a company, where they can organize their employees with their information and filter them.

### **Requirements**

#### Set up your Github Repository

- Create a new repository called `HR-management-system`
- Add a **README** file to add your changes for each day.
- Clone this repo to your local machine.
- Check out a new branch called `literal-object` for today's task.
- Open it in VS code.

You will create two pages `index.html` and `accounting.html`.

#### **Home page**

1. Header for navigating to any other pages.
2. Main render the information for each employee from JavaScript.
3. Footer will have some social media links with copyright.

### **Javascript**

1. You will display the employees using a literal object, each employee is an object.
Within your javascript file (example: app.js), create separate JS object literals for each employee that outputs the following to :
    Each employee object will have these following properties: 
    - Employee ID
    - Full Name
    - Department:
        - Administration
        - Marketing
        - Development
        - Finance

    - Level:
        - Junior
        - Mid-Senior
        - Senior

    - Image URL
    - Salary

2. Create a method to generate a unique four digits employee id number.


3. You will create a method for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, use the below table to calculate the salary depending on the employee level.

4. After calculating the random salary you should calculate the net salary where the tax percent is 7.5.

    | Level      | Min  | Max  |
    | ---------- | ---- | ---- |
    | Senior     | 1500 | 2000 |
    | Mid-Senior | 1000 | 1500 |
    | Junior     | 500  | 1000 |

5. You will create a render method to render each employee's name with their salary on the home page using `document. write()` or you can use `innerHTML` to display them.
- The output of the render function in the browser should look like this: 
```js
Employee name: Ghazi Samer
Employee salary: 1728

Employee name: Lana Ali
Employee salary: 1809

Employee name: Tamara Ayoub
Employee salary: 1589

Employee name: Safi Walid
Employee salary: 1178

Employee name: Rana Saleh
Employee salary: 480

Employee name: Hadi Ahmad
Employee salary: 1121
```

6. Use the information shown in the table below to create employee instances.

    | Employee ID | Full Name    | Department     | Level      |
    | ----------- | ------------ | -------------- | ---------- |
    | 1000        | Ghazi Samer  | Administration | Senior     |
    | 1001        | Lana Ali     | Finance        | Senior     |
    | 1002        | Tamara Ayoub | Marketing      | Senior     |
    | 1003        | Safi Walid   | Administration | Mid-Senior |
    | 1004        | Omar Zaid    | Development    | Senior     |
    | 1005        | Rana Saleh   | Development    | Junior     |
    | 1006        | Hadi Ahmad   | Finance        | Mid-Senior |

### **Accounting page**

- For now, this page should have:
  1. Header for navigating to any other pages.
  2. Main will be empty for today's task.
  3. Footer will have some social media links with copyright.


## Submission Instructions:
- When your work is complete and ready for submission, push to the `literal-object` branch.
- Create a pull request.
- Deploy to the Github pages.
- Submit the pull request and deployed version (Live URL) links.
- Merge `literal-object` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?