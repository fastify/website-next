---
title: Decorators
---

If you need to add functionality to the Fastify instance, the `decorate` API is what you need.

The API allows you to add new properties to the Fastify instance. A value is not restricted to a function and could also be an object or a string, for example.

### Usage
<a id="usage"></a>

**decorate**
<a id="decorate"></a>

Just call the `decorate` API and pass the name of the new property and its value.
```js
fastify.decorate('utility', () => {
  // something very useful
})
```

As said above, you can also decorate the instance with non-function values:
```js
fastify.decorate('conf', {
  db: 'some.db',
  port: 3000
})
```

Once you decorate the instance, you can access the value by using the name you passed as a parameter:
```js
fastify.utility()

console.log(fastify.conf.db)
```

**decorateReply**
<a id="decorate-reply"></a>

As the name suggests, this API is needed if you want to add new methods to the `Reply` core object. Just call the `decorateReply` API and pass the name of the new property and its value:
```js
fastify.decorateReply('utility', function () {
  // something very useful
})
```

Note: using an arrow function will break the binding of `this` to the Fastify `reply` instance.

**decorateRequest**
<a id="decorate-request"></a>

As above, this API is needed if you want to add new methods to the `Request` core object. Just call the `decorateRequest` API and pass the name of the new property and its value:
```js
fastify.decorateRequest('utility', function () {
  // something very useful
})
```

Note: using an arrow function will break the binding of `this` to the Fastify `request` instance.

#### Decorators and encapsulation
<a id="decorators-encapsulation"></a>

If you define a decorator (using decorate, decorateRequest or decorateReply) with the same name more than once in the same **encapsulated** plugin, fastify will throw an exception.

As an example, the following will throw:

```js
const server = require('fastify')()

server.decorateReply('view', function (template, args) {
  // Amazing vew rendering engine.
})

server.get('/', (req, reply) => {
  reply.view('/index.html', { hello: 'world' })
})

// Somewhere else in our codebase, we define another
// view decorator. This throws.
server.decorateReply('view', function (template, args) {
  // another rendering engine
})

server.listen(3000)
```


But this will not:

```js
const server = require('fastify')()

server.decorateReply('view', function (template, args) {
  // Amazing vew rendering engine.
})

server.register(async function (server, opts) {
  // We add a view decorator to the current encapsulated
  // plugin. This will not throw as outside of this encapsulated
  // plugin view is the old one, while inside it is the new one.
  server.decorateReply('view', function (template, args) {
    // another rendering engine
  })

  server.get('/', (req, reply) => {
    reply.view('/index.page', { hello: 'world' })
  })
}, { prefix: '/bar' })

server.listen(3000)
```

#### Getters and Setters
<a id="getters-setters"></a>

Decorators accept special "getter/setter" objects. These objects have functions named `getter` and `setter` (though, the `setter` function is optional). This allows defining properties via decorators. For example:

```js
fastify.decorate('foo', {
  getter () {
    return 'a getter'
  }
})
```

Will define the `foo` property on the *Fastify* instance:

```js
console.log(fastify.foo) // 'a getter'
```

#### Usage Notes
<a id="usage_notes"></a>

`decorateReply` and `decorateRequest` are used to modify the `Reply` and `Request` constructors respectively by adding methods or properties. To update these properties you should directly access the desired property of the `Reply` or `Request` object.

As an example let's add a user property to the `Request` object:

```js
// Decorate request with a 'user' property
fastify.decorateRequest('user', '')

// Update our property
fastify.addHook('preHandler', (req, reply, next) => {
  req.user = 'Bob Dylan'
  next()
})
// And finally access it
fastify.get('/', (req, reply) => {
  reply.send(`Hello ${req.user}!`)
})
```
Note: The usage of `decorateReply` and `decorateRequest` is optional in this case but will allow Fastify to optimize for performance.

#### Sync and Async
<a id="sync-async"></a>

`decorate` is a *synchronous* API. If you need to add a decorator that has an *asynchronous* bootstrap, Fastify could boot up before your decorator is ready. To avoid this issue, you must use the `register` API in combination with `fastify-plugin`. To learn more, check out the [Plugins](./Plugins.md) documentation as well.

#### Dependencies
<a id="dependencies"></a>

If your decorator depends on another decorator, you can easily declare the other decorator as a dependency. You just need to add an array of strings (representing the names of the decorators on which yours depends) as the third parameter:
```js
fastify.decorate('utility', fn, ['greet', 'log'])
```

If a dependency is not satisfied, `decorate` will throw an exception, but don't worry: the dependency check is executed before the server boots up, so it won't ever happen at runtime.

#### hasDecorator
<a id="has-decorator"></a>

You can check for the presence of a decorator with the `hasDecorator` API:
```js
fastify.hasDecorator('utility')
```

#### hasRequestDecorator
<a id="has-request-decorator"></a>

You can check for the presence of a Request decorator with the `hasRequestDecorator` API:
```js
fastify.hasRequestDecorator('utility')
```

#### hasReplyDecorator
<a id="has-reply-decorator"></a>

You can check for the presence of a Reply decorator with the `hasReplyDecorator` API:
```js
fastify.hasReplyDecorator('utility')
```
