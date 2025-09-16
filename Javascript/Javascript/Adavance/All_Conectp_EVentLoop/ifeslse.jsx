1. How does an if statement work, and when should you use it?
✅ An if statement evaluates a condition and executes a block of code only if the condition is true.
✅ It is useful for decision-making where only one condition needs to be checked.

2. What is the difference between if…else and if…else if statements?
✅ if…else allows two execution paths: one when the condition is true and another when false.
✅ if…else if allows multiple conditions to be checked sequentially, executing only the first true block.
✅ Overusing if…else if can lead to less readable code; in such cases, switch or early returns may be better alternatives.

3. When should you use the ternary (?:) operator instead of an if statement?
✅ The ternary operator is useful for concise conditional expressions where only one value needs to be returned.
✅ It should be avoided for complex conditions, as excessive nesting reduces readability.
✅ It is ideal for simple value assignments, such as toggling a Boolean or setting default values.

4. How does a switch statement improve performance over multiple if…else if statements?
✅ switch is optimized for evaluating a single variable against multiple values, making it more efficient in cases where many conditions depend on the same expression.
✅ It enhances code readability by reducing repetitive condition checks.
✅ Some JavaScript engines internally optimize switch using jump tables for better execution speed.

5. Why is it important to use break in a switch statement?
✅ Without break, execution continues to the next case statement, potentially causing unintended results (fall-through behavior).
✅ In scenarios where fall-through is intended, it should be explicitly documented to avoid confusion.
✅ break ensures only the relevant case block executes before exiting the switch.

6. What is the difference between while and do…while loops?
✅ while is a pre-test loop that checks the condition before executing the loop body, meaning it may never execute if the condition is initially false.
✅ do…while is a post-test loop that executes the loop body at least once before checking the condition.
✅ do…while is useful when the loop body must run at least once, such as in user input validation.

7. How does the for loop provide more flexibility than while loops?
✅ The for loop allows initialization, condition checking, and iteration updates in a single line, improving readability and maintainability.
✅ It is commonly used when the number of iterations is known beforehand.
✅ Unlike while, which is better for indefinite loops, for is ideal for iterating over arrays, ranges, and counting-based logic.

8. What happens if a break statement is used inside a loop?
✅ break immediately terminates the loop execution, even if the condition has not been met.
✅ It is useful in cases like searching through data, where looping further is unnecessary once a match is found.
✅ Excessive use of break can make code harder to follow, so it should be used cautiously.

9. How does the continue statement differ from break in loop execution?
✅ continue skips the current iteration and moves to the next iteration of the loop, instead of terminating it.
✅ It is useful in cases where some elements should be skipped based on a condition but the loop should continue processing other elements.
✅ Overusing continue can lead to confusing logic, making it harder to debug.

10. What is the purpose of the comma (,) operator in a for loop?
✅ The comma operator allows multiple expressions to be evaluated in a single statement.
✅ It is often used in for loops to update multiple variables simultaneously.
✅ Although useful, excessive use can reduce readability and should be used only when necessary.