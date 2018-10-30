## Upgrade from version 1.2.x to 3.0.0
We strongly recommend to upgrade your system to use the latest version of Web Components. While we maintain older versions, new features are likely
to be implemented only in newer versions. In addition the newer versions stick to newer technology decreasing your
loading time and improving internal speed. We promise to make each upgrade progress as ease as possible.

In general you can keep track of our progress, changes and new features in the [release notes](documentation/release-notes).

There are only three major changes and some minor API changes to take care of when upgrading from version 1.2.x to version 3.0.0,
which can be taken care of quickly and easily:

### 3 major changes
- Like [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview) we have moved from 
[Bower](https://bower.io/) to [npm](https://www.npmjs.com/). If you have used Bower before please switch to
[npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/)

- Like [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview) we have moved from 
   HTML Imports to ES6 Modules. Hence you have to include our TODO js script instead of using the old HTML import as followed:
   
   ```html
       <!-- Beofore -->
       asfasf
       <!-- In version 3. -->
       asdf
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