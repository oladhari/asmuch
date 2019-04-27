function exo1(){
    return `
        <h2>Exercise: Fair price</h2>

        <p>Declare the following variables:</p>
        <ul>
            <li>Variable that will be used to display a message</li>
            <li>Variable that will count the number of tests</li>
            <li>Variable of the **minimum** value that can be entered (here 20)</li>
            <li>Variable of the **maximum** value that can be entered (here 80)</li>
        </ul>

        <p>Declare the following functions:</p>

        <p>Creates functions:</p>
        <ol>
            <li>Function that returns a random number between **minimum** and the **maximum** variable, rounded to the nearest integer</li>
            <li>Function that takes an argument and test if the number entered matches the random number generated above. Returns one of the following strings based on the test result:  "It's more, It's less, It's just you found in X moves"</li>
        </ol>
        <p>Use the following console **or** native features:</p>
        <ul>
            <li>window.prompt ();</li>
        <li>window.alert ();</li>
        <li>window.confirm ();</li>
    `;
}

export default exo1