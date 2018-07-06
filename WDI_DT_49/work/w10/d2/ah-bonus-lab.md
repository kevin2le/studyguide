## Bonus Lab: HTML Previewer

**Task**: Create a live HTML editor using React. You should be able to type in HTML into a text area and have the rendered HTML appear to the right of the text area as you type it.

It should look something like this: 

![html-preview](https://docs.google.com/drawings/d/e/2PACX-1vRLgF7eYdqNgnNTI5MCqG279ywaxuyBb6-I13b6hC-JhIro5k60bPwGlWpvWVHeuOqa6EseDnijcY-l/pub?w=626&h=293)

### Component Hierarchy

You will have two components: 

```
<DisplayContainer>
    <RawInput />
```

`<DisplayContainer>` should be the parent component of `<RawInput>`.

Here are some hints: 

* Use the native React `<textarea>` tag to make the area where you type the HTML into 
* You will need to grab the text from the `<textarea>`
    * To do this add a `ref` attribute to the `<textarea>` tag 

```js
ref={(input) => { this.textInput = input; }} 
```

### ref Attribute 

When the ref attribute is used on an HTML element, the `ref` callback receives the underlying DOM element as its argument.