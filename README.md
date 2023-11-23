Theme that represents all DSFR components as ui patterns plugins or alters.

# Installation

No matter the solution you choose, you need to install the DSFR library such that at the end, 
the following file '/libraries/dsfr/dist/dsfr.module.js' should exist in your project,
relative to the drupal root directory.

## Install Manually

You need to place the DSFR library in the `libraries/dsfr` folder.

## With Composer

### Asset Packagist

If you are using the website [Asset Packagist](https://asset-packagist.org), the package 'npm-asset/gouvfr--dsfr' can be 
downloaded from this repository. The composer.json of your Drupal project can be like below.
In the example, "web" is the drupal root directory (see the rule on package "type:drupal-core").
the project 'oomphinc/composer-installers-extender' is used to relocate the package 'npm-asset/gouvfr--dsfr'. 
The relocation requires that :
 - composer plugin 'oomphinc/composer-installers-extender' is allowed in section 'extra.config.allow-plugins',
 - the package type 'npm-asset' is declared in the "extra.installer-types" section,
 - the target directory for the package 'npm-asset/gouvfr--dsfr' is declared in the "extra.installer-paths" section.

```json
{
  "require": {
    "npm-asset/gouvfr--dsfr": "1.9.3",
    "composer/installers": "^2",
    "oomphinc/composer-installers-extender": "2.*"
  },
  "repositories": {
    "asset-packagist": {
      "type": "composer",
      "url": "https://asset-packagist.org"
    }
  },
  "extra": {
    "config": {
      "allow-plugins": {
        "composer/installers": true,
        "oomphinc/composer-installers-extender": true
      }
    },
    "installer-types": [
      "npm-asset"
    ],
    "installer-paths": {
      "web/core": [
        "type:drupal-core"
      ],
      "web/libraries/dsfr": [
        "npm-asset/gouvfr--dsfr"
      ]
    }
  }
}
```

### With a composer package repository

Example:

```json
{
  "require": {
    "gouvernementfr/dsfr": "1.9.3",
    "composer/installers": "2.*"
  },
  "repositories": {
    "dsfr": {
      "type": "package",
      "package": {
        "name": "gouvernementfr/dsfr",
        "type": "drupal-library",
        "version": "1.9.3",
        "dist": {
          "type": "zip",
          "url": "https://github.com/GouvernementFR/dsfr/releases/download/v1.9.3/dsfr-v1.9.3.zip"
        }
      }
    }
  },
  "extra": {
    "installer-paths": {
      "web/core": [
        "type:drupal-core"
      ],
      "web/libraries/{$name}": [
        "type:drupal-library"
      ]
    }
  }
}
```

