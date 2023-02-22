# **Countries App**

This is a small app I created using [Countries API](https://restcountries.com/). 

It has one page (view) displaying the list of countries. It also has buttons to sort the list. A user can also filter countries by an area smaller than Lithuania and Oceania region.

To see the user interface, enter the link: https://viktorijamart.github.io/countries-app/

## **Details**

This is the project I did in order to practise fetching API data in React. Also, this is the first React app I did using TypeScript. I did practice TypeScript in vanilla JavaScript, and it was fun to learn how it works with React.

As of now, I didn't implement all the logic I wanted and left some small mistakes. I will come back to it and improve it in the near future.

- The filter logic I came up with is best suitable for this situation (only having two filter categories with one option each). In more complex cases I would need to use different logic.
- I tried implementing pagination which didn't work.
- I didn't make it fully responsive yet:
  -  on phones the sort buttons look squished - I will hide the text and keep the icons for both sort and filter buttons.
  -  on phones filter section looks disproportioned - I will change flex-direction to a column.
  -  on phones I will make the h1 font smaller.
-  I didn't change the title and icon of the app.

## Installing

If you want to play around with this project: 

1. Clone it into a new repo
    ```sh
    git clone https://github.com/ViktorijaMart/countries-app.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
    
## Built with

- HTML
- CSS
- JavaScript
- React
- TypeScript


