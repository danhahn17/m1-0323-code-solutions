# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
It provides a way to debug and inspect our variables in the browser

- What is a "model"?
Representation of all page content as objects that can be modified (?)

- Which "document" is being referred to in the phrase Document Object Model?
The entire document/HTML document

- What is the word "object" referring to in the phrase Document Object Model?
Any HTML tag

- What is a DOM Tree?
The representation of an HTML document as a structure of tags/objects/nodes

- Give two examples of `document` methods that retrieve a single element from the DOM.
document.querySelector() - returns the first element for the given CSS selector
document.getElementById() - we get the element with the associated id

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
document.querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
To avoid confusion (?)

- What `console` method allows you to inspect the properties of a DOM element object?
console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
Because the browser needs to go through all of the elements in the HTML page before the JS code can access them

- What does `document.querySelector()` take as its argument and what does it return?
Argument: selectors
Return: an element object representing the first element in the document that mathces the specific set of CSS selectors OR null if there are no matches

- What does `document.querySelectorAll()` take as its argument and what does it return?
Argument: a string containing one or more selectors to match against
Return: non-live NodeList containing one element object for each element that matches at least one of the specified selectors OR an empty NodeList if there are no mathces

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
