# Slots
Pseudo - Friends Themed Game objective to get 3 of the same characters in a row to win grand prize $1000. Will win $50 everytime two matching chracters. Will lose $25 otherwise. You have 10 chances to pull slot machine.

- When game loads:
    - Initialize all state variables by calling init()
    - Update the display by calling render()
    -Play audio theme song, play audio 'lets go to vegas' and coffee shop animation
    -transition screen and audio

- When a players "start" by clicking start button:
    - Display flashes start screen 1
    - If the player presses the start button 10 round game begins
    - Red button flashes
    -Display screen 1 "Round 1"
    - Display screen 2 "$0"
    -If player presses red button slots begin to scroll 
    - Random generate from array 1 to 7 for first slot
    - Random generate from array 1 to 7 for second slot
    -Random generate from array 1 to 7 for third slot
    - Update the winner variable by calling getWinner()
    - Check to see if all three randomized selections are equal

- getWinner logic:
    - Start column 1 remember which character
    - Check column 2 , 3 in similar way
    - Compare character in each column
    - If a winner is found while checking, return winner and add $50 to money earned
    - Otherwise if a winner is not found, and return you lose and deduct $10 from money earned
 

- Render logic:
   - Render the displays message:
        - If all three are equal flash 
            -For display you won round 1 on screen 1
            -For diplay amount of money earned(add n + $50) on Screen 2 
             -Play audio You win
        -If only not all 3 are equal 
            -For display you lose round 1 on Screen 1
            -For display amount of money lost (sub n - $ 50) on Screen 2
            -Play audio You lose
        - Render the screen for round 2 
            -Flash red button
            -Display Round 2 on screen 1
            -Keep display for screen 2
        -Repeat Renders until all ten rounds complete 
            -while adjusting screen 1 to display each round #
            -while adjusting screen 2 to dsiplay total amount of money
            -Play audio fo slots running + transition money falling animation and audio
            -Change to exit screen 

           