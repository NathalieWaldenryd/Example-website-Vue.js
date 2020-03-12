const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
// const nodemailer = require('nodemailer')
const https = require('https')
const querystring = require('querystring');
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()


app.use(bodyParser.json()) // support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// routes will go here
// POST http://localhost:8080/contact
// parameters sent with
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
app.post('/contact/', function (req, res) {
  const email = req.body.email
  const message = req.body.message

  // console.log('hello?')

  try {
    if (!re.test(String(email).toLowerCase())) {
      throw new Error("Email not valid'")
    }
    if (message.length < 20) {
      throw new Error('Message need to be 20 signs or more')
    }
  } catch (e) {
    res.status(400).send(e.message)
    return
  }

  // console.log('HELLO???')
  const data = querystring.stringify({
    from: 'Excited User <mailgun@swecoden.se>',
    to: 'contact@swecoden.se',
    subject: 'New form email',
    html: `<p>Email: ${email}. Text area: ${message}</p>`
  })
   
  const options = {
    hostname: 'api.eu.mailgun.net',
    port: 443,
    path: '/v3/mg.swecoden.se/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length,
      'Authorization': `Basic ${Buffer.from(`api:${process.env.API}`).toString('base64')}`
    }
  }
  // console.log('working')
  const request = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })

  console.log('working 2')
  request.on('error', (error) => {
    if (error) {
      console.log('doesnt work')
      console.error(error)
      res.status(500)
    } else {
      console.log('it worked?')
      res.status(201)
    }
  })

  request.write(data)
  res.end()
  request.end()
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()