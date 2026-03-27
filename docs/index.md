---
title: Rock Paper Scissors Tutorial
---

# Goal

In this tutorial, you will learn how to build a Rock Paper Scissors game with a frontend and a backend. The frontend is responsible for user input and displaying results, while the backend handles the game logic.

# Previous Knowledge

We assume that you already know the basics of HTML, JavaScript, and how to run a simple Node.js project. It is also helpful if you already know what `fetch()` does.

# What you'll learn

In this tutorial, you will learn:
- how to create a backend route with Express
- how to move game logic from the frontend to the backend
- how to send player input to the backend with `fetch()`
- how to display the result in the frontend
- how to structure a small full-stack project

# Tutorial

## Step 1: Create the backend

First, install the required packages:
npm install express cors

Then create your Express server and enable JSON and CORS:

<img width="696" height="475" alt="image" src="https://github.com/user-attachments/assets/9a298c56-38dd-4232-9590-e3dab1e28a1a" />

## Step 2: Add the game logic
Create a file for the Rock Paper Scissors logic:

<img width="932" height="888" alt="image" src="https://github.com/user-attachments/assets/d7713b01-1434-4c53-8e24-3dda96a62bdb" />

## Step 3: Create the API route
Now create the /api/play route:

<img width="1371" height="647" alt="image" src="https://github.com/user-attachments/assets/6ea6894e-2061-4d45-ac85-ff602d5368fe" />

## Step 4: Connect to the Frontend
The frontend sends the player choice to the backend:

<img width="843" height="275" alt="image" src="https://github.com/user-attachments/assets/59be02cc-7fd8-4cd7-9922-27e0b3ac9e92" />

## Step 5: isplay the Result in HTML
Instead of using prompt() and alert(), the result can be shown directly in the page:

<img width="594" height="339" alt="image" src="https://github.com/user-attachments/assets/c43b39f4-7518-4abb-9efa-e344178d5e56" />

## Result
At the end of this tutorial, you will have a Rock Paper Scissors game in which the backend calculates the enemy choice and the game result. The frontend is used for user input and for displaying the result.

![ezgif-59468eefa7a38db7](https://github.com/user-attachments/assets/e9bf266c-5bbe-4adc-b0f8-d1cfc066092e)



## What could go wrong?
- the backend server is not running
- the frontend sends the wrong JSON key
- the route path is incorrect
- express.json() is missing
- CORS is not enabled
- import/export paths are wrong



