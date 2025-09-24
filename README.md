# vue3-langjs


## IMPORTANT (SEP 2025)
#### New releases was introduced. If you experience any issues with the master branch (aligned with 1.0.2-dev), make sure to use the original 1.0.1 release. The new 1.0.2-dev version will be set to official after additional testing.
[Check the releases page](https://github.com/mi60dev/vue3-lang-js/releases)


## Information

This plugin was created in order to provide working Vue3 translations for a project of mine. It uses [mariuzzo/laravel-js-localization](https://github.com/rmariuzzo/Laravel-JS-Localization) & some code from [eli5-amsterdam/vue-lang-js](https://github.com/eli5-amsterdam/vue-lang-js). This package is by no means perfect, so any contribution is well appreciated.

## Installation

### Step 1: Install mariuzzo/laravel-js-localization
```
composer require mariuzzo/laravel-js-localization
```
### Step 2: Add LaravelJsLocalizationServiceProvider to your `config/app.php`
```
Mariuzzo\LaravelJsLocalization\LaravelJsLocalizationServiceProvider::class
```

### Step 3: Generate the `vue-translations.js`
```
php artisan lang:js resources/js/vue-translations.js --no-lib --quiet
```

### Step 4: Install the package
```
$ npm install -S vue3-langjs
```

## Initialization

Start by importing the component.

```javascript
import Vue from 'vue'
import Vue3Langjs from 'vue3-lang-js'
// get the data source
import translations from './vue-translations.js';

Vue.use(Vue3Langjs, {
    messages: translations, // Provide locale file
    locale: 'de', // Set locale
    fallback: 'en' // Set fallback lacale
})
```

## Usage (copied from the eli5-amsterdam/vue-lang-js repo)

Get language string
```javascript
    this.$trans('auth.title')
    this.$trans('auth.title', { name: 'eli5' })
    {{ $trans('auth.title') }}
    {{ $trans('auth.title', { name: 'eli5' }) }}

    // Alias
    this.$t('auth.title')
    this.$t('auth.title', { name: 'eli5' })
    {{ $t('auth.title') }}
    {{ $t('auth.title', { name: 'eli5' }) }}
```

Set locale
```javascript
    this.$lang.setLocale('en')
```
