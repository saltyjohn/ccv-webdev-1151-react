DAY 1

  Webpack, React, & Babel:
    - Webpack 4 Starter Tutorial:
      = https://www.valentinog.com/blog/webpack-4-tutorial/
    - Webpack 4 SurviveJS:
      = https://survivejs.com/webpack/developing/getting-started/
    - $ npm init
    - $ git init
  SASS:
    - Sass Loader: https://www.npmjs.com/package/sass-loader
      = node-sass, sass-loader, style-loader
  File Structure:
    - Good article: https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed
  Webpack issues:
    - Implicit file resolve, babel-loader wouldn't recognize .jsx files,
        Settings here worked: https://www.robinwieruch.de/minimal-react-webpack-babel-setup/


DAY 2:
  Eslint Airbnb Config:
    - install-peerdeps (global);
      = https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    - AirBnb Style Guide: https://github.com/airbnb/javascript
    - babel-eslint: https://github.com/babel/babel-eslint
    - prettier/eslint : https://www.youtube.com/watch?v=YIvjKId9m2c
      = $ install-peerdeps eslint-plugin-prettier

    ========================!!! ISSUES !!! ========================
      Prior-Knowledge:
        = CRLF/LF End of line: https://github.com/jlengstorf/learn-rollup/issues/8
        = allow both .js and .jsx: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md

  React:
    - Need Closing Tag with self-contained elements: '/src/layouts/Layout.jsx'
      = https://stackoverflow.com/questions/30852751/expected-corresponding-jsx-closing-tag-for-input-reactjs
    - Comments in JSX:
      = https://wesbos.com/react-jsx-comments/

  Layout:
    * Progressive Enhancement, Mobile-First, Responsive Design:
      ** using google chrome device toolbar with setting "iPhone 6/7/8", low-end-mobile

    - Header
      = Logo:
        += Original size for logo is too large to load effecitently with low-end mobile setting in chrome
        += file-loader: https://survivejs.com/webpack/loading/images/#setting-up-file-loader


Day 3:
  - Header and Logo:
    - Filled in layout.scss, mostly relearning variables, mixins, imported fonts, css shorthands
    - am thinking about looking into autoprefixer when I settle the logo loading time
    - dropped the size of Logo from ~700x900 (optimized SVG) to ~167x172 (png)
      = increased load-time on 3g mid-tier by 300% (~7.2s to ~2.2s)
  - Webpack:
    = need to go back and read about composition of webpack (getting started - webpack composition)

Day 4:
  - Eslint Prettier Config / Airbnb
    = forgot to add prettier config to node_modules
    = Airbnb/jsx-a11y asks the developer to insert alt attributes to images and add keyboard event listeners to click methods
  - Header:
    = From comments:   JSX requires closing tag for self-contained elements, <img> => <img />, images loaded through webpack-dev-server must be root-relative because assets are not yet loaded in production-mode: file-loader: https://survivejs.com/webpack/loading/images/#setting-up-file-loader
  - MenuBurger:
    = Had trouble getting state to change, but forgot to pass event handle prop to child component
    = needed to update menu to <button> element, am trying text as replacement for styled <div>, thinking of using icon instead of text.
      =+ https://icons8.com/line-awesome
    = prop-validation
  - Show/hide Menu:
    - ideas from:
    - https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
    - transition: https://css-tricks.com/almanac/properties/t/transition/
