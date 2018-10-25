# 3.0.0
## CHANGE
- internal rewrite from [Polymer 1](https://www.polymer-project.org/1.0/docs/devguide/feature-overview) to [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview)

## BREAKING
- The way of including our scripts has changed. See [Installation](http://127.0.0.1:8081/documentation/install-dist) for the right way to include our scripts
- According to actual trend, we have dropped [Bower](https://bower.io/) support. If you had used Bower, you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) instead
- `ff-searchbox`
    - extending built-in HTML elements is not supported anymore. Hence use `<ff-searchbox>` tag with mandatory `<input />` tag inside instead of `<input is="ff-searchbox" />`
    - If you don't want to use the first `input` tag within `<ff-searchbox>` you can use `SearchBox.resetInput(selector)` to set the input field.
- `ff-searchbutton`
    - extending built-in HTML elements is not supported anymore. Hence use `<ff-searchbutton>` tag with mandatory `<button />` tag inside instead of `<button is="ff-searchutton" />`
    - If you don't want to use the first `button` tag within `<ff-searchbutton>` you can use `SearchButton.resetInput(selector)` to set the button.
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
    
# 1.2.13
## ADD 
- new elements `ff-middleware` and `ff-multi-attribute-parsing`. These can be used to configure how multi-attribute fields in the FACT-Finder response shall be parsed in order to access their values more easily. Alternatively, the same configuration is also possible with plain JavaScript. See https://web-components.fact-finder.de/api/ff-middleware#tab=docs for details
- new element `ff-sortbox-select`
- new element `ff-products-per-page-select`
- for a better debugging experience `ff-header-navigation` logs now when it hides 2nd layer navigation elements without 3rd layer children. If you want to show 2nd layer navigation without 3rd layer children, you can set the attribute `hide-empty-groups="false"`

## FIX
- `ff-asn-group-slider` does not hide anymore when its `absoluteMinValue` is `0`
- CTRL + click now opens links from elements with `data-redirect` (click tracking) attributes in a new tab
- clicking history back redirects to previous page now when immediate search in on, there is no need to click twice

## CHANGE
- `query` parameter is no longer included in navigation requests


# 1.2.12
## ADD
- `ff-header-navigation` now renders `<a>` elements to allow right-click navigation. `href`'s are customizable. Also see breaking changes!
- log warning about improperly used Boolean properties
- `ff-campaign-redirect` now has a Boolean attribute `relative-to-origin` to optionally enable FACT-Finder redirect campaigns to be configured with relative destination urls

## FIX
- the `count` parameter in tracking requests now always defaults to 1 when not provided explicitly
- `ff-campaign-redirect` now immediately redirects preventing rendering of content
- do never provide master ID instead of tracking ID in recommendation click tracking
- fix `ff-onfocus-suggest` component, which wasn't shown due to an internal error
- `ff-campaign-shopping-cart` now respects comma separated values

## CHANGE
- navigation elements passed by the `navigation` event emitted by `factfinder.communication.ResultDispatcher` now have a `__SUB_ELEMENTS__` property containing all immediate child elements
- `ff-communication` registers with the `WebComponentsReady` event to call `factfinder.communication.ResultDispatcher.startDispatching()`. This is necessary due to a change in ff-core which now prevents search responses from going unnoticed by Web Components that are initialized too late. `ff-similar-products` and `ff-recommendation` combatted this behaviour by sending an extra request, which they no longer do
- `ff-communication` search-immediate does now invoke the search much earlier than before. Dispatching occurs on `WebComponentsReady` event. 

## BREAKING
- new `<a>` elements in `ff-header-navigation` are likely to break styling
- the `navigation` event emitted by `factfinder.communication.ResultDispatcher` now passes an array of navigation elements grouped by `clusterLevel` instead of a flat array of the first level of elements