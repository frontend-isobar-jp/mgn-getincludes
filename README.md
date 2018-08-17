# mgn-getincludes ( Don't Need jQuery )


Use XMLHttpRequest to include html files. Use this for when you can not include with php and SSI.

___

# Install

```
npm i mgn-getincludes -S
```

## Or Download raw data
[↓ download "mgn-getincludes.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-getincludes/master/src/mgn-getincludes.js)

___

# Import

```
import mgnInclude from 'mgn-getincludes';
```

___

# Constructor

```
new mgnInclude( element, path [, () => {} ] );
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|- (Required)|Specify target element.<br>ex) ".j-include"|
|path|String|- (Required)|Insert file path.|
|() => {}|Function|-|You can describe the process you want to execute after loading data here.|

___

# Property

|Property|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String (Required)|-|Same as parameter.|
|path|String|- (Required)|Same as parameter.|
|func|Function|-|Same as parameter.|

___

# Sample code

```
// HTML
<div id="j-include_header"></div>
```

```
// JS
import mgnInclude from 'mgn-getincludes';

new mgnInclude( "#j-include_header", "./path/to/header.html", () => {
    console.log(1);
} );

```
