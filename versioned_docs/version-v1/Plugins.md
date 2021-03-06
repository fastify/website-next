---
title: Plugins
---

Fastify allows the user to extend its functionalities with plugins.
A plugin can be a set of routes, a server [decorator](./Decorators.md) or whatever. The API that you will need to use one or more plugins, is `register`.


By default, `register` creates a *new scope*, this means that if you do some changes to the Fastify instance (via `decorate`), this change will not be reflected to the current context ancestors, but only to its sons. This feature allows us to achieve plugin *encapsulation* and *inheritance*, in this way we create a *direct acyclic graph* (DAG) and we will not have issues caused by cross dependencies.

You already see in the [getting started](./Getting-Started.md#register) section how using this API is pretty straightforward.
```
fastify.register(plugin, [options])
```

### Plugin Options
<a id="plugin-options"></a>

The optional `options` parameter for `fastify.register` supports a predefined set of options that Fastify itself will use, except when the plugin has been wrapped with [fastify-plugin](https://github.com/fastify/fastify-plugin). This options object will also be passed to the plugin upon invocation, regardless of whether or not the plugin has been wrapped. The currently supported list of Fastify specific options is:

+ [`logLevel`](./Routes.md#custom-log-level)
+ [`prefix`](./Plugins.md#route-prefixing-options)

It is possible that Fastify will directly support other options in the future. Thus, to avoid collisions, a plugin should consider namespacing its options. For example, a plugin `foo` might be registered like so:

```js
fastify.register(require('fastify-foo'), {
  prefix: '/foo',
  foo: {
    fooOption1: 'value',
    fooOption2: 'value'
  }
})
```

If collisions are not a concern, the plugin may simply accept the options object as-is:

```js
fastify.register(require('fastify-foo'), {
  prefix: '/foo',
  fooOption1: 'value',
  fooOption2: 'value'
})
```

#### Route Prefixing option
<a id="route-prefixing-option"></a>

If you pass an option with the key `prefix` with a `string` value, Fastify will use it to prefix all the routes inside the register, for more info check [here](./Routes.md#route-prefixing).

Be aware that if you use [`fastify-plugin`](https://github.com/fastify/fastify-plugin) this option won't work.

#### Error handling
<a id="error-handling"></a>

The error handling is done by [avvio](https://github.com/mcollina/avvio#error-handling).

As general rule, it is highly recommended that you handle your errors in the next `after` or `ready` block, otherwise you will get them inside the `listen` callback.

```js
fastify.register(require('my-plugin'))

// `after` will be executed once
// the previous declared `register` has finished
fastify.after(err => console.log(err))

// `ready` will be executed once all the registers declared
// have finished their execution
fastify.ready(err => console.log(err))

// `listen` is a special ready,
// so it behaves in the same way
fastify.listen(3000, (err, address) => {
  if (err) console.log(err)
})
```

*async-await* is supported only by `ready` and `listen`.
```js
fastify.register(require('my-plugin'))

await fastify.ready()

await fastify.listen(3000)
```
### Create a plugin
<a id="create-plugin"></a>

Creating a plugin is very easy, you just need to create a function that takes three parameters, the `fastify` instance, an options object and the next callback.

Example:
```js
module.exports = function (fastify, opts, next) {
  fastify.decorate('utility', () => {})

  fastify.get('/', handler)

  next()
}
```
You can also use `register` inside another `register`:
```js
module.exports = function (fastify, opts, next) {
  fastify.decorate('utility', () => {})

  fastify.get('/', handler)

  fastify.register(require('./other-plugin'))

  next()
}
```
Sometimes, you will need to know when the server is about to close, for example because you must close a connection to a database. To know when this is going to happen, you can use the [`'onClose'`](./Hooks.md#on-close) hook.

Do not forget that `register` will always create a new Fastify scope, if you don't need that, read the following section.

### Handle the scope
<a id="handle-scope"></a>

If you are using `register` only for extending the functionality of the server with  [`decorate`](./Decorators.md), it is your responsibility to tell Fastify to not create a new scope, otherwise your changes will not be accessible by the user in the upper scope.

You have two ways to tell Fastify to avoid the creation of a new context:
- Use the [`fastify-plugin`](https://github.com/fastify/fastify-plugin) module
- Use the `'skip-override'` hidden property

We recommend to using the `fastify-plugin` module, because it solves this problem for you, and you can pass a version range of Fastify as a parameter that your plugin will support.
```js
const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  fastify.decorate('utility', () => {})
  next()
}, '0.x')
```
Check the [`fastify-plugin`](https://github.com/fastify/fastify-plugin) documentation to know more about how use this module.

If you don't use the `fastify-plugin` module, you can use the `'skip-override'` hidden property, but we do not recommend it. If in the future the Fastify API changes it will be a your responsibility update the module, while if you use `fastify-plugin`, you can be sure about backwards compatibility.
```js
function yourPlugin (fastify, opts, next) {
  fastify.decorate('utility', () => {})
  next()
}
yourPlugin[Symbol.for('skip-override')] = true
module.exports = yourPlugin
```
