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
    }
  ]
];

export default table;
