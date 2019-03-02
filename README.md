# Vue Highlight.js
[![license](https://img.shields.io/github/license/gluons/vue-highlight.js.svg?style=flat-square)](https://github.com/gluons/vue-highlight.js/blob/master/LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-highlight.js.svg?style=flat-square)](https://www.npmjs.com/package/vue-highlight.js)
[![npm](https://img.shields.io/npm/dt/vue-highlight.js.svg?style=flat-square)](https://www.npmjs.com/package/vue-highlight.js)
[![Travis](https://img.shields.io/travis/gluons/vue-highlight.js.svg?style=flat-square)](https://travis-ci.org/gluons/vue-highlight.js)
[![Codacy grade](https://img.shields.io/codacy/grade/3d15a7c11bfe47c69a2aed93cc67cc29.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-highlight.js)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)

📜 [Highlight.js](https://github.com/isagalaev/highlight.js) syntax highlighter component for [Vue](https://vuejs.org).

## ⚙️ Installation

**Via [npm](https://www.npmjs.com):**

[![npm](https://nodei.co/npm/vue-highlight.js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-highlight.js)

```bash
npm install highlight.js vue-highlight.js
```

**Or [Yarn](https://yarnpkg.com):**

```bash
yarn add highlight.js vue-highlight.js
```

## 🎬 Demo

Go to https://gluons.github.io/vue-highlight.js

## 🛂 Usage

**Main file:**

There are 2 ways to import Highlight.js languages.

1. Import only languages that you want.

	```js
	import Vue from 'vue';
	import VueHighlightJS from 'vue-highlight.js';

	// Highlight.js languages (Only required languages)
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import vue from 'vue-highlight.js/lib/languages/vue';

	/*
	* Import Highlight.js theme
	* Find more: https://highlightjs.org/static/demo/
	*/
	import 'highlight.js/styles/default.css';

	import App from './App';

	/*
	* Use Vue Highlight.js
	*/
	Vue.use(VueHighlightJS, {
		// Register only languages that you want
		languages: {
			css,
			javascript,
			vue
		}
	});

	new Vue({
		el: '#app',
		render: h => h(App)
	});
	```

2. Import all languages.

	```js
	import Vue from 'vue';
	import VueHighlightJS from 'vue-highlight.js';

	// Highlight.js languages (All languages)
	import 'vue-highlight.js/lib/allLanguages'

	/*
	* Import Highlight.js theme
	* Find more: https://highlightjs.org/static/demo/
	*/
	import 'highlight.js/styles/default.css';

	import App from './App';

	/*
	* Use Vue Highlight.js
	*/
	Vue.use(VueHighlightJS);

	new Vue({
		el: '#app',
		render: h => h(App)
	});
	```

**Vue file:**

```vue
<template>
	<div id="app">
		<!-- Code Block -->
		<highlight-code lang="javascript">
			let str = 'Hello, World!';
			console.log(str);
		</highlight-code>

		<!-- Inline Code Block -->
		<highlight-code lang="javascript" inline>alert('Hello, World!');</highlight-code>
	</div>
</template>

<script>
// JavaScript...
</script>

<style>
/* StyleSheet... */
</style>
```

## ⛕ Plugin Options

### `languages`
**Type:** `{ [name: string]: HLJSLang }`  
**Default:** `{}`

Highlight.js languages.  
Add the languages that you want to use here.

`name` is the name of language to register with **Highlight.js**' [`registerLanguage(name, language)`](https://highlightjs.readthedocs.io/en/latest/api.html#registerlanguage-name-language) API.

_See https://github.com/isagalaev/highlight.js#commonjs about importing each language from **highlight.js**._

## 📚 API

### `<highlight-code>`
Highlight.js code block.

#### 🔰 Slots
Static code content.

#### 🔰 Properties

##### lang
**Type:** `String`

Highlight.js [language](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases).

##### inline
**Type:** `Boolean`  
**Default:** `false`

Enable **inline** code block when set it to `true`.

##### code
**Type:** `String`

Code content in code block.  

> You can use this prop if you want to bind code content to your data source.  
  It's useful for dynamic code content.

**Component will ignore [`slot`](https://vuejs.org/v2/guide/components.html#Single-Slot) static content if you use this.**

##### auto
**Type:** `Boolean`

Enable auto detecting code language.

> Code will be detected by [highlight.js' `highlightAuto`](https://highlightjs.readthedocs.io/en/latest/api.html#highlightauto-value-languagesubset) function.

**`auto` will work well when you import all Highlight.js languages.**

**Component will ignore `lang` prop if you use `auto`.**

## ❓ FAQ

- **How to write HTML code inside slot?**

  You have to **escape** all HTML tags before add it into slot.  
  If you didn't do that, browser will interpret those tags as HTML element.  
  ℹ️ See [isagalaev/highlight.js#866](https://github.com/isagalaev/highlight.js/issues/866)

  > If you use `code` property instead of `slot`, you don't need to worry about this.  
    **Vue Highlight.js** will automatically escape it for you.
- **Why did I get `SyntaxError: Unterminated template literal` error when used `<script></script>` in `code` property?**

  If you add `</script>` at anywhere inside `script` tag, although it's a `string` inside quotes, it will **always** close the `script` tag.  
  ℹ️ See ["Unterminated template literal" syntax error when literal contains script tag](https://stackoverflow.com/q/36607932/1675907)
