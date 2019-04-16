import React from 'react';

const table = [
    {
        title: <h4><b>Exercise: Fair price</b></h4>,
        content: <div>
                <h4><b>Declare the following variables:</b></h4>
                <ul>
                    <li>Variable that will be used to display a message</li>
                    <li>Variable that will count the number of tests</li>
                    <li>Variable of the **minimum** value that can be entered (here 20)</li>
                    <li>Variable of the **maximum** value that can be entered (here 80)</li>
                </ul>

                <h4><b>Declare the following functions:</b></h4>

                <h5><b>Creates functions:</b></h5>
                <ol>
                    <li>Function that returns a random number between **minimum** and the **maximum** variable, rounded to the nearest integer</li>
                    <li>Function that takes an argument and test if the number entered matches the random number generated above. Returns one of the following strings based on the test result:  "It's more, It's less, It's just you found in X moves"</li>
                </ol>
                <h4><b>Use the following console **or** native features:</b></h4>
                <ul>
                    <li>window.prompt ();</li>
                    <li>window.alert ();</li>
                    <li>window.confirm ();</li>
                </ul>
            </div>,
    },
    {
        title: <h4><b>Exercise: Minimum and Maximum</b></h4>,
        content: <div>
                    <h4><b>Declare the following variables:</b></h4>
                    <ul>
                        <li> The value is equal to the smallest digit in the following set: 7, 5, -12, 6, 32, 18, 14, -2 </li>
                        <li> The value is equal to the largest number in the following set: -3, 9, 21, 36, 27, 54, 17, 35 </li>
                        <li> The value is equal to the addition of the two previous variables </li>
                    </ul>
                    <h4><b> Exercise: Random 1 </b></h4>
                    <ul>
                        <li> Make a `floatBateau` variable whose value is 10.4 </li>
                        <li> Make a `float` variable whose value is` floatBateau` rounded to the ** bottom ** </li>
                        <li> Make a `floatTable` variable whose value is` floatBateau` rounded up to ** up ** </li>
                    </ul>
                    <h4><b>Exercise: Random 2 </b></h4>

                    Declare the following variables:
                                    <ul>
                        <li> The random value between ** 50 ** and ** 100 ** </li>
                        <li> The random value can be only ** 0 ** or ** 1 ** </li>
                        <li> The random value can range from ** 0 ** to ** 10 ** __ * included * __ </li>
                    </ul>
                    <h4><b>Exercise: random 3</b></h4>
                    <ul>
                        <li> creates an array that contains the following values: Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpio, Shang Tsun, Sonya, Sub-Zero </li>
                        <li> choose a character randomly in the table </li>
                    </ul>
                </div>
    },
    {
        title: <h4><b>Exercise: JS Cookie Clicker</b></h4>,
        content: <div>
                    <ul>
                        <li>
                            <a href="http://orteil.dashnet.org/cookieclicker/">Official Cookie Clicker</a>
                        </li>
                        <li>
                            <a href="https://particle-clicker.web.cern.ch/particle-clicker/">CERN Particle Clicker</a>
                        </li>
                    </ul>
                    <h4><b>Step 1: Basic structure</b></h4>
                    <p>
                        Make a basic structure * HTML * / * CSS * / * JS *. In HTML, put a button with a "click" identifier and a "div" with a "display" identifier, whose initial value will be "0".
                    </p>

                    <h4><b>Step 2: _prepare the JS</b></h4>
                    <p>Prepare the variables at the top of the * JS * that will allow us to manipulate our button and our `div`. We will also need a `score` variable that we will initialize to` 0`.</p>

                    <h4><b>Step 3: _increase the score</b></h4>
                    <p>When you click on the button, increase the `score` variable by` 1`, and then display that score in the `div` display.</p>

                    <h4><b>Step 4: _preparing the multiplier</b></h4>
                    <p>Add a button whose identifier is 'multiply'. Create a click counter (whose variable will be called `multiplier` and will be initialized to` 1`) on this button. The function associated with the multiplier's click will be called `increaseMultiplier`.</p>

                    <h4><b>Step 5: _use the multiplier</b></h4>
                    <p>Make sure that the increase of the score via the click of the first button is not more than 1 but the value of the multiplier. For example, if I clicked the multiplier button once, each click on the first button will now add `2` instead of` 1`.</p>

                    <h4><b>Step 6: _the price of the multiplier</b></h4>
                    <p>The multiplier allows you to score faster. It should not be free! Make sure that clicking the multiplier button decreases your score by 50.</p>

                    <h4><b>Step 7: Do not give credit</b></h4>
                    <p>We can not give credit and we do not want a negative score. Remember to update the display of the score after the purchase!</p>

                    <h4><b>Step 8: _meter display</b></h4>
                    <p>Display the multiplier counter inside the button. For example, if counter is' 5`, the text of the button must be 'Multiplier x5'.</p>

                    <h4><b>Step 9: _the price increase</b></h4>
                    <p>Buying lots of multipliers is too easy. Try from step 6, you will understand why it would be necessary that the more one buys multipliers, the more these are expensive.</p>
                    For example, the first would be `50`, the next` 100`, the `200`, etc. .. No need to complicate your life, do not make full conditions. Find another way to change the price!

                    <h4><b>Step 10: _price display</b></h4>
                    <p>In the button text, in addition to the "x5", add the cost of the next purchase.</p>

                    <h4><b>Step 11: _autoclicker</b></h4>
                    <p>New improvement to buy: Autoclick. As soon as you have a score of `200`, a click is done automatically every second. (`setInterval` is your friend)</p>

                    <h4><b>Step 12: _achat to autoclicker</b></h4>
                    <p>The autoclicker will no longer be automatic. It is now necessary to buy the autoclicker. You will add a button with the id `autoclic`. It will cost 500. Once the autoclicker has been purchased, you will need to disable the autoclic button.</p>

                    <h4><b>Step 13: _buying a bonus</b></h4>
                    <p>Now, we must be able to buy a bonus that increases the score by 200% with each click for 30 seconds. That is to say that if with each click, the score increases of `3`, during the 30 seconds of bonus the score will increase of` 6` with each click, after 30 seconds the score will increase again by `3` per click.</p>
                    You will create the "BONUS" button with the bonus id, and the bonus will cost 5000. When the bonus is bought, the number of seconds will be displayed in the button with the countdown and the button will have to be deactivated during the bonus time. When the bonus is finished, the button is reactivated and returns to its original text.

                    <h4><b>Step 14: _deactivate the buttons (if I do not have the score to buy the improvements) </b></h4>
                    <p>Make sure that the multiplier, autoclic and bonus buttons are clickable only if I have the score needed to buy them.</p>

                    <h4><b>Step 15: _the CSS</b></h4>
                    <p>How beautiful! No pictures!</p>

                </div>
    }
]

export default table