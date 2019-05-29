const table = [
  [
    {
      title: "Exercise: Fair price",
      content: [
        {
          subTitle: "Declare the following variables:",
          descript: [
            "Variable that will be used to display a message",
            "Variable that will count the number of tests",
            "Variable of the **minimum** value that can be entered (here 20)",
            "Variable of the **maximum** value that can be entered (here 80)"
          ]
        },
        {
          subTitle: "Declare the following functions:",
          descript: [
            "Function that returns a random number between **minimum** and the **maximum** variable, rounded to the nearest integer",
            "Function that takes an argument and test if the number entered matches the random number generated above. Returns one of the following strings based on the test result:  \"It's more, It's less, It's just you found in X moves\""
          ]
        },
        {
          subTitle: "Use the following console **or** native features:",
          descript: [
            "window.prompt ();",
            "winddow.alert ();",
            "window.confirm ();"
          ]
        }
      ]
    },

    {
      title: "Exercise: Minimum and Maximum",
      content: [
        {
          subTitle: "Declare the following variables:",
          descript: [
            "The value is equal to the smallest digit in the following set: 7, 5, -12, 6, 32, 18, 14, -2",
            "The value is equal to the largest number in the following set: -3, 9, 21, 36, 27, 54, 17, 35",
            "The value is equal to the addition of the two previous variables"
          ]
        },
        {
          subTitle: "Exercise: Random 1",
          descript: [
            "Make a `floatBateau` variable whose value is 10.4",
            "Make a `float` variable whose value is` floatBateau` rounded to the ** bottom **",
            "Make a `floatTable` variable whose value is` floatBateau` rounded up to ** up **"
          ]
        },
        {
          subTitle: "Exercise: Random 2",
          descript: [
            "Declare a random variable whose render a value between ** 50 ** and ** 100 **",
            "Declare a random variable whose render only ** 0 ** or ** 1 **",
            "Declare a random value can be range from ** 0 ** to ** 10 ** included"
          ]
        },
        {
          subTitle: "Exercise: random 3",
          descript: [
            "creates an array that contains the following values: Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpio, Shang Tsun, Sonya, Sub-Zero",
            "choose a character randomly in the table"
          ]
        }
      ]
    },
    {
      title: "Exercise: JS Cookie Clicker",
      content: [
        {
          subTitle: "Step 1: Basic structure",
          descript: [
            'Make a basic structure * HTML * / * CSS * / * JS *. In HTML, put a button with a "click" identifier and a "div" with a "display" identifier, whose initial value will be "0".'
          ]
        },
        {
          subTitle: "Step 2: prepare the JS",
          descript: [
            "Prepare the variables at the top of the * JS * that will allow us to manipulate our button and our `div`. We will also need a `score` variable that we will initialize to` 0`."
          ]
        },
        {
          subTitle: "Step 3: increase the score",
          descript: [
            "When you click on the button, increase the `score` variable by` 1`, and then display that score in the `div` display."
          ]
        },
        {
          subTitle: "Step 4: preparing the multiplier",
          descript: [
            "Add a button whose identifier is 'multiply'. Create a click counter (whose variable will be called `multiplier` and will be initialized to` 1`) on this button. The function associated with the multiplier's click will be called `increaseMultiplier`."
          ]
        },
        {
          subTitle: "Step 5: use the multiplier",
          descript: [
            "Make sure that the increase of the score via the click of the first button is not more than 1 but the value of the multiplier. For example, if I clicked the multiplier button once, each click on the first button will now add `2` instead of` 1`."
          ]
        },
        {
          subTitle: "Step 6: the price of the multiplier",
          descript: [
            "The multiplier allows you to score faster. It should not be free! Make sure that clicking the multiplier button decreases your score by 50."
          ]
        },
        {
          subTitle: "Step 7: Do not give credit",
          descript: [
            "We can not give credit and we do not want a negative score. Remember to update the display of the score after the purchase!"
          ]
        },
        {
          subTitle: "Step 8: meter display",
          descript: [
            "Display the multiplier counter inside the button. For example, if counter is' 5`, the text of the button must be 'Multiplier x5'."
          ]
        },
        {
          subTitle: "Step 9: the price increase",
          descript: [
            "Buying lots of multipliers is too easy. Try from step 6, you will understand why it would be necessary that the more one buys multipliers, the more these are expensive.",
            "For example, the first would be `50`, the next` 100`, the `200`, etc. .. No need to complicate your life, do not make full conditions. Find another way to change the price!"
          ]
        },
        {
          subTitle: "Step 10: price display",
          descript: [
            'In the button text, in addition to the "x5", add the cost of the next purchase.'
          ]
        },
        {
          subTitle: "Step 11: autoclicker",
          descript: [
            "New improvement to buy: Autoclick. As soon as you have a score of `200`, a click is done automatically every second. (`setInterval` is your friend)"
          ]
        },
        {
          subTitle: "Step 12: achat to autoclicker",
          descript: [
            "The autoclicker will no longer be automatic. It is now necessary to buy the autoclicker. You will add a button with the id `autoclic`. It will cost 500. Once the autoclicker has been purchased, you will need to disable the autoclic button."
          ]
        },
        {
          subTitle: "Step 13: buying a bonus",
          descript: [
            "Now, we must be able to buy a bonus that increases the score by 200% with each click for 30 seconds. That is to say that if with each click, the score increases of `3`, during the 30 seconds of bonus the score will increase of` 6` with each click, after 30 seconds the score will increase again by `3` per click.",
            'You will create the "BONUS" button with the bonus id, and the bonus will cost 5000. When the bonus is bought, the number of seconds will be displayed in the button with the countdown and the button will have to be deactivated during the bonus time. When the bonus is finished, the button is reactivated and returns to its original text.'
          ]
        },
        {
          subTitle:
            "Step 14: deactivate the buttons (if I do not have the score to buy the improvements)",
          descript: [
            "Make sure that the multiplier, autoclic and bonus buttons are clickable only if I have the score needed to buy them."
          ]
        },
        {
          subTitle: "Step 15: the CSS",
          descript: ["How beautiful! No pictures!"]
        }
      ]
    },
    {
      title: "Exercise: Hangman game",
      content: [
        {
          subTitle: "Info: the number of tests is unlimited",
          descript: [
            "Create an array to contain the letters of the word: 'G', 'O', 'O', 'D', 'M', 'O', 'R', 'N', 'I', 'N', 'G'",
            "Create another table to put the guessed letters: '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'"
          ]
        },
        {
          subTitle: 'Write a function called "guessLetter" this function goes:',
          descript: [
            "Iterate through the letters",
            "See if the letter guessed is in the word",
            "If yes change the diverted letters table to add the new letter",
            "Display in the console the guessed letters",
            "The game must know when the game is over and congratulate the player"
          ]
        },
        {
          subTitle: "Bonus: Getting closer to the real hanged man:",
          descript: [
            "Keep in mind all guessed letters (good and bad) and only let the user guess a letter once.",
            "If a letter is entered twice, do nothing.",
            "Count the number of failed attempts"
          ]
        },
        {
          subTitle: "Tip: Use the ** or ** native features console:",
          descript: [
            "window.propmt();",
            "window.alaert();",
            "window.confirm();"
          ]
        }
      ]
    },
    {
      title: "Exercise: MasterMind",
      content: [
        {
          subTitle: "Goal",
          descript: ["develop a mastermind in HTML - CSS - JS"]
        },
        {
          subTitle: "Create a MasterMind",
          descript: [
            "<a href='https://en.wikipedia.org/wiki/Mastermind' target='_blank'>Rules of game</a>",
            "Precision: for the normal mode, the solution = 4 different colors"
          ]
        },
        {
          subTitle: "Create in HTML 3 div (minimum - you can do as you want)",
          descript: [
            "one for the response history",
            "one for the current answers",
            "one for the choice of colors (place 6 circles of different colors)"
          ]
        },
        {
          subTitle: "In JS:",
          descript: [
            "make sure that when you click on a color, it is placed in the div of answers.",
            "Make sure that when the 4 colors are placed in the div answer, they move in the historical div.",
            "When the colors arrive in the history, on the right, there are black or white balls that indicate if:",
            "- they are well placed",
            "- they are right but not in the right place"
          ]
        },
        {
          subTitle:
            "PS: it is not necessary that the black and white balls are in the same order as the balls of color (otherwise it is too easy)",
          descript: []
        },
        {
          subTitle: "Tip: first show the black balls and then the white balls.",
          descript: [
            "Make a function that creates an automatic solution at the beginning of each game. (use the random)"
          ]
        },
        {
          subTitle: "Extra Tip:",
          descript: [
            "Use innerHTML and others",
            "Use a class 'round' and just change the background-color (for displacements in different div)"
          ]
        },
        {
          subTitle: "Bonus",
          descript: [
            "Make sure that when we are wrong we can remove colors from the current answers."
          ]
        }
      ]
    },
    {
      title: "Exercise: Mouse Events",
      content: [
        {
          subTitle: "Mouse Events",
          descript: [
            "click, ctextmenu, dblclick, mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup"
          ]
        },
        {
          subTitle: "Part 1",
          descript: [
            "Creates (in HTML) 3 `DIV` with the same class 'hoverMe'",
            "Make disappear the divs when one passes the mouse over",
            "Tip: use the `mouseenter` or `mouseover`"
          ]
        },
        {
          subTitle: "Part 2",
          descript: [
            "Create (in HTML) a `DIV` with a reset id",
            "To make that when we click on it makes reappear the 3 divs first created",
            "Tip: with an animation it would be super cool"
          ]
        },
        {
          subTitle: "Part 3",
          descript: [
            "Create (in HTML) 2 `DIV` with one id each 'x-axis' and 'y-axis'",
            "So that when you move the mouse in the * window *, the position is displayed in the associated divs",
            "Tip: Use the received event as an argument",
            "Tip: Use `innerHTML` or` innerText`"
          ]
        }
      ]
    },
    {
      title: "Exercise: Keyboard",
      content: [
        {
          subTitle: "Excercise 1",
          descript: [
            "Create (in HTML) a `DIV` with the id 'character'",
            "Change background color to this `DIV` each time you press a number from 0 to 9 on the keyboard",
            "Tip: use the `switch`"
          ]
        },
        {
          subTitle: "Excercise 2",
          descript: [
            "Create (in HTML) 4 `divs` with the following ids: 'up, down, left, right'",
            "creates a class 'highlight' in CSS that reduces the opacity of the element",
            "For each div add the class 'highlight' when one of the directional keys is pressed",
            "For each div retaining the class 'highlight' when you release the key",
            "Tip: Make HTML structure without JavaScript"
          ]
        }
      ]
    },
    {
      title: "Exercise: Object",
      content: [
        {
          subTitle: "The NPC (Non-Player-Character)",
          descript: [
            "Creates a 'Character' object that contains the following information:"
          ]
        },
        {
          subTitle: "",
          descript: ["name (string)", "age (number)", "items_to_give (table)"]
        },
        {
          subTitle: "",
          descript: [
            "display each information on a separate line in the __ (for in) console __",
            "do a 'giveItem' function that allows the NPC to randomly give an object"
          ]
        },
        {
          subTitle: "The Shop",
          descript: [
            "Create a table with * items * for sale (sword, ax, scepter, etc.)",
            "Characteristic of each object:",
            "  - title (string)",
            "  - physic (int)",
            "  - magic (int)",
            "  - minLevel (int)",
            "  - available (boolean)",
            "do a function to display all the objects",
            "do a function to display the available objects",
            "do a function to display objects whose minimum level is 10"
          ]
        },
        {
          subTitle: "The Character",
          descript: [
            "Creates a 'mainCharacter' object that has the following properties:",
            "  - name (string)",
            "  - level (int)",
            "  - life (int)",
            "  - weapon (object)",
            "  - attack (function)"
          ]
        },
        {
          subTitle: "",
          descript: [
            "the 'weapon' object has the following properties:",
            "  - name (string)",
            "  - damage (int)"
          ]
        },
        {
          subTitle: "",
          descript: [
            "Call the 'attack' function of the character",
            "  - the function must return:",
            "       (the name of the character) attack with the weapon (name of the weapon) the damage is (level of the character multiplied by the damage of the weapon)"
          ]
        },
        {
          subTitle: "BONUS: The Opponent",
          descript: [
            "Creates a 'character' object that has the following properties:",
            "  - name (string)",
            "  - level (int)",
            "  - life (int)",
            "  - weapon (object)",
            "  - attack (function)",
            "  -receiveDamage (function)"
          ]
        },
        {
          subTitle: "",
          descript: [
            "the 'weapon' object has the following properties:",
            "  - name (string)",
            "  - damage (int)"
          ]
        },
        {
          subTitle: "",
          descript: [
            "Creates an 'opponentCharacter' object from character",
            "Create a 'mainCharacter' object from character"
          ]
        },
        {
          subTitle: "",
          descript: [
            'Call the "attack" function of "mainCharacter" so that it attacks "opponentCharacter"',
            "  - the function must display in the console (line by lige)",
            "(the name of the character) attack (name of the opponent)",
            "with the weapon (name of the weapon)",
            "and inflicts damage (character level multiplied by weapon damage)",
            "(name of the opponent) now has (life of the opponent) of life"
          ]
        }
      ]
    }
  ]
];

export default table;
