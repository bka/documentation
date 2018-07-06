## Adding Feedback campaigns
You can add `ff-campaign-feedbacktext` anywhere in the document. Just set the `[label]` attribute to an appropriate value. This value has to match a configured label value inside the FACT-Finder backend. The only necessary {{data-binding}} is the {{text}}.

**NOTE**: If you are using **HTML feedacktexts** you need to use the **{{{triple mustache syntax}}}**

```html
<ff-campaign-feedbacktext label="above products">
    {{text}}
    <!--or mixed content-->
    <!--<div>{{text}}</div>-->
</ff-campaign-feedbacktext>
```

## Adding Advisor campaigns
To integrate Advisor campaigns properly, you need to use the `ff-campaign-advisor`, `ff-campaign-advisor-question` and `ff-campaign-advisor-answer` elements.

The `ff-campaign-advisor-question` is copied for each answer configured in FACT-Finder. It is inserted at its current position on element load. 
Annotate any html Element inside the question with the `[data-question]` attribute to use it for data binding purposes.

The `ff-campaign-advisor-answer` is copied for each answer which is configured in FACT-Finder. It is inserted at its current position on element load. In the following example the answers are always inserted at firstChild position

You can use the `[name]` attribute to use the `ff-campaign-advisor-answer` element as a template for a campaign with that name.

You can use the `[not]` attribute to use the `ff-campaign-advisor-answer` element NOT as a template for a campaign with that name.

```html
<ff-campaign-advisor name="Advisor Schuhe">
    <ff-campaign-advisor-question>
        <span><h1 data-question>{{text}}</h1></span>
        <div class="shoes-answers-box">
            <ff-campaign-advisor-answer>
                <div class="shoes-answers">
                    {{text}}
                </div>
            </ff-campaign-advisor-answer>
        </div>
    </ff-campaign-advisor-question>
</ff-campaign-advisor>
```

## Adding Redirect campaigns
You should add the `ff-campaign-redirect` element directly after the body tag to ensure it is executed before any other elements. As soon as a configured Redirect campaign matches the criteria of the last request, this element will redirect to the destination URL of the matching campaign. Internally the element uses `document.location.replace`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        ...
    </head>
    <body>
        <ff-campaign-redirect></ff-campaign-redirect>
        ...
    </body>
</html>
```