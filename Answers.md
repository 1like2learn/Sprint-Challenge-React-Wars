# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a library that makes it easy to add elements to the DOM using JS. Without React you must use amend elements to the DOM using cumbersome comands like `document.querySelector('element')`. With React you can write out your HTML using HTMl.

1. Describe component state.

    Component state is a function of React that lets us have variables that will remain the same when our JS is run again. This is helpful when you need a variable to be change and then hold its value when the DOM is reloaded.

1. Describe props.

    Props are variables that can be passed from one component to another in a cascading manner. They are useful when a parent component has data it needs to pass to a child component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side effects are snippets of code that only run after the DOM has been loaded. After you write the callback function for your useEffect you can add another item after. That item takes the form of an empty set of brackets if you want the effect to only run once or brackets composed with a useState value or prop so when one of those values change the effect will be triggered again.
