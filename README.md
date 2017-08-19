# Vue Highlight.js
[![license](https://img.shields.io/github/license/gluons/vue-highlight.js.svg?style=flat-square)](https://github.com/gluons/vue-highlight.js/blob/master/LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-highlight.js.svg?style=flat-square)](https://www.npmjs.com/package/vue-highlight.js)
[![npm](https://img.shields.io/npm/dt/vue-highlight.js.svg?style=flat-square)](https://www.npmjs.com/package/vue-highlight.js)
[![Travis](https://img.shields.io/travis/gluons/vue-highlight.js.svg?style=flat-square)](https://travis-ci.org/gluons/vue-highlight.js)
[![BCH compliance](https://bettercodehub.com/edge/badge/gluons/vue-highlight.js?style=flat-square&branch=master)](https://bettercodehub.com/)
[![Dependency Status](https://dependencyci.com/github/gluons/vue-highlight.js/badge?style=flat-square)](https://dependencyci.com/github/gluons/vue-highlight.js)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

📜 [Highlight.js](https://github.com/isagalaev/highlight.js) syntax highlighter component for [Vue](https://vuejs.org).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/vue-highlight.js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-highlight.js)

1. Install [**highlight.js**](https://github.com/isagalaev/highlight.js):

   ```bash
   npm install highlight.js
   ```

2. Install **Vue Highlight.js**:

   ```bash
   npm install vue-highlight.js
   ```

**Or [Yarn](https://yarnpkg.com):**

1. Install [**highlight.js**](https://github.com/isagalaev/highlight.js):

   ```bash
   yarn add highlight.js
   ```

2. Install **Vue Highlight.js**:

   ```bash
   yarn add vue-highlight.js
   ```

## Demo

Go to https://gluons.github.io/vue-highlight.js

## Usage

**Main file:**

```javascript
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS);

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import 'highlight.js/styles/default.css';

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

## API

### highlight-code
Highlight.js code block.

#### Slots
Static code content.

#### Properties

##### lang
Type: `String`

Highlight.js [language](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases).

##### inline
Type: `Boolean`  
Default: `false`

Enable **inline** code block when set it to `true`.

##### code
Type: `String`

Code content in code block.  

**Component will ignores `slots` static content if you use this.**

> You can use this property if you want to bind code content to your data source.  
  It's useful for dynamic code content.

<br>

## On Trello
<a href="https://trello.com/b/Fkbsxc2K">
	<img src="./media/trello-mark-blue.png" alt="Vue Highlight.js on Trello" width="100">
</a>
