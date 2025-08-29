
### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
1.Selects one element by its unique id.Returns a single DOM element. 
2.getElementsByClassName -- Selects all elements with a given class name.Returns a live HTMLCollection.
3.querySelectorSelects-- the first element that matches a CSS selector. 
4.querySelectorAllSelects-- all elements that match a CSS selector.Returns a static NodeList.

---

### 2. How do you create and insert a new element into the DOM?

Answer:
First we Use document.createElement() to create a new element, set its properties (like className or innerText), and then insert it into the DOM using appendChild() or insertBefore().

---

### 3. What is Event Bubbling and how does it work?
Answer:
Event Bubbling is when an event on a child element flows up to its parent elements.
It starts at the target element and moves up the DOM, triggering parent handlers unless stopPropagation() is used.

---

### 4.What is Event Delegation in JavaScript? Why is it useful?
Answer:Event Delegation is attaching a single event listener to a parent to handle events on its child elements.
It’s useful because it saves memory and works for dynamically added elements.


---

## 5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:preventDefault() stops the browser’s default action for an event (e.g., following a link, submitting a form). stopPropagation() stops the event from bubbling or capturing up/down the DOM, preventing parent handlers from firing.

---

