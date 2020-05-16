# Breath Counter

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d4bbf66-75d2-415d-ba23-0902ff975bdd/deploy-status)](https://app.netlify.com/sites/breathrate/deploys)

![CICD](https://github.com/LucasCarioca/breath/workflows/CICD/badge.svg)

## Runing application locally

### Setup and run locally

~~~~bash
npm install
npm start
~~~~

### With Docker

~~~~bash
docker build -t breath
docker run -p 3000:3000 breath
~~~~
