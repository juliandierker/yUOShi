# yUOShi
Gamification App for e-learning-seminars in context of psychological aspects of teaching and learning

## Getting Started

### Install meteor

- `curl https://install.meteor.com/ | sh` for OSX/Linux, `choco install meteor` for Windows

### Run locally

- `git clone git@github.com:juliandierker/yUOShi.git`

- `cd yUOShi`

- `meteor npm install` or `yarn install`

- `change the filename of settings.json to my-settings.json`

- Settingsfile using our Studip from https://vm621.rz.uos.de

`
{
  "public": {},
  "private": {
    "studip": {
      "url": "https://vm621.rz.uos.de",
      "apiPath": "/jsonapi.php/v1"
    },
    "oAuth": {
      "studip": {
        "key": "2051600f3cb8662230c1ef0365537367060b9d9b2",
        "secret": "91c8e446c474106753ddd1023cfd3ecf"
      }
    }
  }
}
{
  "public": {},
  "private": {
    "studip": {
      "url": "https://vm621.rz.uos.de",
      "apiPath": "/jsonapi.php/v1"
    },
    "oAuth": {
      "studip": {
        "key": "2051600f3cb8662230c1ef0365537367060b9d9b2",
        "secret": "91c8e446c474106753ddd1023cfd3ecf"
      }
    }
  }
}
`

- `npm start` or `yarn start` to fire the `meteor` start command using the settingsfile from above.
- You are now able to do Changes in the React-Front-End end test them.

### Run with Adapter

`yarn`
link all adapters
`yarn start`
Propper instructions here in the wiki

## Deployment
Deployment is not a github action yet but there is a dockerfile for this. You can start and restart the production at https://vm620.rz.uos.de using your LDAP and follow the instructions in the Wiki here.

## Rights 
This is an opensource-projects running under the MIT-License.
