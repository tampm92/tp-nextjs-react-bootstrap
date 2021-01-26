# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">TP NextJS Firebase React-Bootstrap</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup firebase for nextjs with Bootstrap CSS</h3>
  
<p align="center">
    <a href="https://github.com/tampm92/tp-nextjs-react-bootstrap"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/tampm92/tp-nextjs-react-bootstrap/build"></a>
    <a href="#changelog"><img src="https://img.shields.io/github/release-pre/nqtronix/git-template.svg" alt="release: NA"></a>
    <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
    <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/tampm92/tp-nextjs-react-bootstrap"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

1. You want integrated auth to your `NextJS project` and you choose `Firebase`.
2. This project will help you understand and can create a `React Context` to manager `Auth with Firebase`
  
**TP NextJS Firebase React-Bootstrap** is a small project for basic setup Firebase for NextJS. And it will use UI farmwork [React Bootstrap](react-bootstrap)

<br/>
  
## Key Features

- **Next JS**
- **Firebase**
- **react-bootstrap**
  
<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# run prod
yarn build
yarn start
```

This is post-code descriptive text.

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 auth
│   ├── 📝 fireinit.jsx
│   ├── 📝 index.jsx
│   └── 📝 routes.jsx
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📝 _app.jsx
│   ├── 📝 index.jsx
│   ├── 📝 login.jsx
│   └── 📝 user.jsx
├── 📁 public
├── 📁 shared
│   ├── 📝config.jsx
│   └── 📁 services
├── 📝 .env
├── 📝 .env.development
├── 📝 .env.production
├── 📝 jsconfig.js
├── 📝 next.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)

- [yarn](https://yarnpkg.com/getting-started/install)

  ```sh
  npm install -g yarn
  ```
  
## Documentation

### **Configuration**

- Add file `.env`

  ```js
  NEXT_PUBLIC_APP_NAME=
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_DATABASE_URL=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
  ```

Then your ENV will be loaded by `/shared/config.jsx`. And you can import this file to use config.

<br/>

### **API**

This section provides documentation on how each function in **TP NextJS Firebase React-Bootstrap** works.

<br/>

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: phanminhtam1992@gmail.com
- LinkedIn: http://linkedin.com/in/tampm
- Where I earn my $$$: https://www.upwork.com/fl/tampm
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[tampm.com]:https://tampm.com
[react-bootstrap]:https://react-bootstrap.github.io/
[backToTopButton]:http://randojs.com/images/backToTopButton.png

<!-- in-line references to github -->

[git-profile]:https://github.com/tampm92
[git-readme]:README.md
[git-license]:LICENSE.md
[git-contribute]:CONTRIBUTING.md