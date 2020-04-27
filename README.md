# randomname-2020-04-sjl-05

# JS homework 05 third party API 

![Screenshot of the project](/hw-05.PNG)

## The page features:
* Jumbotron for the header 
* Grid system for the time blocks. 
* Rows for each time frame. 
* Column - 2 for each hour block and save button. 
* Column - 8 for input textareas. 
* Basic HTML and CSS were given, I added all the components of hour blocks, time blocks, and buttons. 

## I wrote the JS file. 
Each button saves the contents in the textarea adjacent to it. 
The inputs are stored in local storage. 
The inputs are shown when you load the page. 

## Struggles: 
I struggled to have each button reference each textarea. 
I have tried: 
* Using .each() method to loop through the buttons, travers them by .get() method. 
    Once the each method finds the elements with .get(), use the index to traverse the textareas to match them with the buttons. 
    Since each row is a separate dive, every button and every textarea had the same index. 
* individually saving textarea values in local storage to each button. Reference each textarea by id and each button by id. For each button id, each textarea with id is referenced. 
* using .siblings() method to traverse the button's sibling. Find its sibling and save its value.
    This method led to my solution