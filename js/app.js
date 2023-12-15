/*
    PART 1:

        Start simple and create the list foundation using ul and li

        JUST do const and let for now.

        I think a fine base would just to be adding a text box that you can input text in. make sure the text is a string, i think.

        Make a notification check that will confirm if the input has worked or an error if it doesnt. 


    PART 2: 

        Make it so that more inputs can be added to this list.

    PART 3: 

        Create a function that allows you to add or remove items in the list. 

    PART 4: 

        Make a checkbox for each item. (not the same as adding or removing. make the text grey out or something if checked.)

    PART FINAL(?):

        Once you are certain everything is running smoothly, then you can start working on the visual design (""fun part"").
        ***AGAIN***, MAKE SURE EVERYTHING WORKS BEFORE GETTING CRAZY WITH THE ART

    FANCY STUFF:
        
        Try to make a timer that will let you know when it's time to do something.
        
        Make a list that will reset to defaults every new day. (i remember we did a lesson that had a time related prospect)

        Maybe also find a way to make it so that the list doesn't clear if you reset the page. (altho herb said its a bit too ambitious atm) 

        Add a function that will let you save list profiles with any specific choices you wish. This will also allow you to make a name for 
        your list.

*/

// Right now i'm trying to figure out how to add an item to the list with a click. Add Lime button

// Make sure to add a function that won't let you add 2 of the exact same task on the list. This will avoid clutter and accidently repeating a task

const myName = document.getElementById('myName');

myName.innerText = "Seth";

let listItems = [
    "time",
    "fine",
    "slime"
];

console.log(listItems);

let newListItem = [...listItems, "climb"];

console.log(newListItem);

const list = document.getElementById('list');

listItems.forEach(item => {

    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
})
