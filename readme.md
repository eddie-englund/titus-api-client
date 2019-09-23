# @titus_creations/api

A lightweight and easy to use client wrapper for my [reddit caching api](https://titusentertainment/fetch-api).

## Tables of content

- Motivation
- Features
- Installation
- Common Usage
- Licence
- Contribution
- Final Words

## Motivation

Instead of having to define functions, queries and having to get node-fetch among other things I though that it would be easier to document and use a wrapper.

## Features

- Automatic querying.
- Checks for anomalies in the replies from the API.
- Uses promises, which in return allows for asynchronus operations.

## Installation

node:

    npm i @titus/api

yarn

    yarn add @titus/api

## Common Usage

Simply get the client by deconstructing the require.

```js
const { TitusClient } = require('@titus/client');
```

Then initalize it

```js
const client = new TitusClient();
```

if you're selfhosting the [reddit caching api](https://titusentertainment/fetch-api). You can tell the wrapper to use your url instead.

```js
const client = new TitusClient({ url: 'http://myurl' });
```

example:

- meme

```js
// If you're not in an async function you can use .then()
const meme = client.getMeme().then(res => console.log(res));

// Otherwise use await, like so;

const meme = await client.getMeme();
console.log(meme);
```

Avalible methods:

- getMeme();
- getUnixPorn();
- getNsfw();
- getHentai();

## License

<img src="https://i.imgur.com/rAvP1k0.jpg" width="100" >

**@titus_creations/api** © [Titus](https://github.com/TitusEntertainment)
Authored and maintained by Titus.

> GitHub [@TitusEntertainment](https://github.com/Titus)
> Npm [@Titus_entertainment]()
