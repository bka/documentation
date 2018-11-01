## Upgrade from version 1.2.x to 3.0.0
We strongly recommend to upgrade your system to use the latest version of Web Components. While we maintain older versions, new features are likely
to be implemented only in newer versions. In addition the newer versions stick to newer technology decreasing your
loading time and improving internal speed. We promise to make each upgrade progress as ease as possible.

In general you can keep track of our progress, changes and new features in the [release notes](https://github.com/FACT-Finder-Web-Components/ff-web-components/blob/master/CHANGELOG).

There are only three major changes and some minor API changes to take care of when upgrading from version 1.2.x to version 3.0.0,
which can be taken care of quickly and easily:

### 3 major changes
- Aligning with the current trend Web Components no longer support [Bower](https://bower.io/). As a replacement you can use
[npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/)

- Aligning with the current trend Web Components are now shipped as ES6 Module instead of HTML Imports.
Hence you have to load `bundle.js` instead of the HTML import as followed:
   
```html
   <!-- Beofore -->
   <script>
       var Polymer = Polymer || {};
       Polymer.dom = 'shady';
   </script>
   <script src="../bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
   <link rel="import" href="../bower_components/ff-web-components/dist/elements.build_with_dependencies.html">
   <style>
       [unresolved] {
           opacity: 0;
       }        
   </style>
     
   <!-- In version 3. -->
   <script src="../node_modules/ff-web-components/dist/vendor/custom-elements-es5-adapter.js"></script>
   <script src="../node_modules/ff-web-components/dist/vendor/webcomponents-loader.js"></script>
   <script defer src="../node_modules/ff-web-components/dist/bundle.js"></script>
 <style>
     [unresolved] {
         opacity: 0;
     }        
 </style>
```

- With [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview) extending built-in HTML elements
is not possible anymore. Hence you have to nest an `input` into `ff-searchbox` and a `button` into `ff-searchbutton`
as followed:

```html
    <!-- Beofore -->
    <ff-searchbox ...></ff-searchbox>
    <ff-searchbutton ...></ff-searchbutton>
           
    <!-- In version 3. -->
    <ff-searchbox>
        <input .../>
    </ff-searchbox>
    <ff-searchbutton>
        <button ...></button>
    </ff-searchbutton>
```

If you had used css to style your search input and button don't forget to adjust your selectors accordingly.

If you had used `<style is="custom-style">...</style>` to style something you can use `<custom-style></custom-style>` instead.


### Minor API changes to take care of
Beside the three major changes the following list contains all breaking changing.
If we have missed something, we would be happy, if you [contact](contacts) us.

- `ff-asn-group-element`
    - use `<div slot="groupCaption" ...>` instead of `<div data-container="groupCaption" ...>`
    - use `<div slot="selected" ...>` instead of `<div data-selected ...>`
    - use `<div slot="unselected" ...>` instead of `<div data-unselected ...>`
- `ff-asn-group-slider`
    - use `<div slot="groupCaption" ...>` instead of `<div data-container="groupCaption" ...>`
- `ff-slider`
    - use `<div slot="slider1" id="slider1" ...></div>` instead of `<div data-slider="1" ...></div>`
    - use `<div slot="slider2" id="slider2" ...></div>` instead of `<div data-slider="2" ...></div>`
- `ff-carousel`
    - removed `getCurrentSlide` method, use `currentSlide` property directly instead
    - removed `getMaxSlides` method, use `maxSlides` property directly instead
- With [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview) `Polymer.dom(HTMLElement)`
is not possible anymore. You can use the standard HTML API directly instead.
- TODO TK / to be discussed: body unresolved
```js
function resolve() {
  document.body.removeAttribute('unresolved');
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  resolve();
} else {
  window.addEventListener('DOMContentLoaded', resolve);
}
```
