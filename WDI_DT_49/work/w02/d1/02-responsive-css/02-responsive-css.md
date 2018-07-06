# A Tour of Responsive Design Fundamentals

---

## Programmer Wisdom

>Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?

- Brian Kernighan

---

## What is Learning 

A computer program is said to learn from experience **E**, with respect to some class of tasks **T** and performance measure **P** if its performance at tasks in **T** as measured by **P** improves with experience **E**.

---

## The following is best enjoyed with the sound on.

---

## But First

*How are you?*

---

## CSS Refresher

**Cascading Style Sheets** or CSS is how we specify what we want our web pages to look like.

Atomic unit of CSS is a **CSS declaration**:

![declaration](https://mdn.mozillademos.org/files/3665/css%20syntax%20-%20declaration.png)

We write CSS either:

* **inline** or within our HTML
* in **linked** style sheets (preferred)

---

## What is a Repsonsive Web Page?

It's appearance *responds* to different screen sizes. 

One is not like the others:

* http://www.weslacotx.gov
* http://www.immersive-g.com
* http://www.tagteamsigns.net

Open up these in the DevTools Device Emulator.

---

## Why Do We Want Repsonsive Web Pages?

Websites are visited by many users on a variety of different devices with various screen widths and pixel densities. A web application that runs poorly on mobile can lose a company **A LOT** of $

---

## Define Viewport

The **viewport** is the visible part of a web page.

What's [your](http://viewportsizes.com/mine/) viewport?

---

## Pixels Ain't Pixels

Devices have different pixel densities. My computer has a resolution of 3200×1800 pixels, but that's not what DevTools is telling me.

What's going on here?

So what do we mean when we write?:

```css
* {
  margin: 20px;
}
```

---

## Hardware vs CSS Pixels

A **hardware pixel** is a single "dot of light" (LED)

A CSS pixel is defined as:

CSS Pixel = Hardware Pixel / Constant Ratio

This constant ratio is called the **Device Pixel Ratio**

*A CSS pixel will take up the same amount of space on a display regardless of the pixel density of the display*

![CSS pixel](https://www.smashingmagazine.com/wp-content/uploads/2012/07/css-device-pixels.png)

---

## What's the Max Viewport Size?

![viewport](https://docs.google.com/drawings/d/1iirE8QLk2js8RYGB-6j-awxyRTHOEaX-lxy0r9Utypw/pub?w=960&h=720)

---

## Viewport meta Tag

To prevent a browser from re-sizing a web page in an unexpected way use this tag:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Take a look at this:

* `viewport` set [here](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ui/responsive/vp.html)
* `viewport` not set [here](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ui/responsive/vp-no.html)

This ensures that the CSS pixels on a desktop browser will be the same on a mobile browser

---
## What's Really Going On Here

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

`content="width=device-width` is telling the browser to use the **ACTUAL** width of the device display the web page in CSS pixels

---

## Media Queries

CSS Media queries allow you to target CSS rules based on - for instance - screen size, device-orientation or display-density. This means you can use CSS media queries to write different styles for the phone, tablet and desktop version of the same site.

Most commonly they allow developers to apply different styles for different viewport widths.

---

## Basic Syntax

You can specify: 

* (a) what type of medium the site is going to be viewed on and 
* (b) for what screen conditions?

```css
@media <type-of-media> and (<condition-key>: <value>) {
  /*STANDARD CSS RULES */
}
```
---

## Type of Media and Conditions

<table>
<thead>
  <tr>
  <th>Value</th>
  <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td>all</td>
  <td>Used for all media type devices</td>
  </tr>
  <tr>
  <td>print</td>
  <td>Used for printers</td>
  </tr>
  <tr>
  <td>screen</td>
  <td>Used for computer screens, tablets, smart-phones etc.</td>
  </tr>
  <tr>
  <td>speech</td>
  <td>Used for screenreaders that "reads" the page out loud</td>
  </tr>
</tbody>
</table>

For a list of the different conditions see [this](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features)

---

## Media Query Example

Applies style when the browser is between 520px and 699px wide.

```css
@media screen and (max-width: 699px) and (min-width: 520px) {
  h1 {
    color: blue;
  }
}
```

Conditionals:

* `max-width`: when viewport is less than or greater than this
* `min-width`: when viewport is at least this wide

**Breakpoints** are the point a which your sites content will respond to provide the user with the best possible layout to consume the information. 

---

## Now You Try

Practice writing media queries with a partner [here](https://codepen.io/jtamsut/pen/mWjZmX).

---

## Responsive Images

* use relative widths (e.g., `max-width` : `100%` instead of `width`: `320px`); take a look at [this](https://codepen.io/jtamsut/pen/Opwejw) example
* `srcset` property allows you to use different images with different resolutions based on the screen resolution of a device (read more about them [here](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
* The `picture` element allows you to include completely different images (not just the same image re-sized) based on the screen the image is rendered on (read more about it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture))

---

## A Brief Intro to Flexbox

Flexbox allows you to easily make responsive layouts.

The central idea behind flexbox is that you make a flex "container" and put items inside this container. Inside the container items stretch and shrink to fill the available space and don't [overflow](https://codepen.io/jtamsut/pen/RpYLYR) their parent container.

---

## An Example

By default flex items will try to fit on one line. You can use the `flex-wrap` property to prevent this:

```
.container {
  flex-wrap: wrap;
```

![flex-wrap](https://css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

Let's look at an [example](https://codepen.io/jtamsut/pen/QpVqOO).

---

## Flexbox Froggy

Most fun way to learn: http://flexboxfroggy.com/

---

## Pragmatic CSS: Using a CSS Library

A CSS library is just a bunch of CSS code that someone else wrote. A lot comes for "free":

* grid system
* responsive grids
* common UI elements (forms, dropdowns, buttons)

---

## CSS Library Case Study: Skeleton

Let's take a tour of Skeleton: http://getskeleton.com/

---

## Fin

Google has some of the best resources on learning responsive design [here](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)
