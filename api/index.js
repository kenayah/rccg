const express = require('express'),
      webpush = require('web-push'),
      analyse = require('body-parser'),
      path = require('path'),
      app = express(),
      publicKey = 'BIorPE4JQ7pvW3A_00_4cxwDDjDwWnQJ29Jhh5WMV3KJzxcMXiWC10iEZiDvmsPMPdV7sN09Uey0oCLP8kVtaQw',
      privateKey = 'wN21-4SBoXt1yg0AQdsb9A0X16HHZYEDVf8TEFg0Cio';

app.use(analyse.json())

webpush.setVapidDetails('mailto:mboudobab@gmail.com',publicVapidKey,privateVapidKey)

// routage d'inscription
app.get('/sinscrire', (req, res) => {
  //  Récup de l'objet d'inscription au service
  const inscription = req.body

  //  Signal le succès de l'operation
  res.status(201).json({})

  //  Crée un payload
  const payload = JSON.stringify({ title: 'Push test!!!' })

  //  Passe l'objet à la fonction d'envoie
  webpush.sendNotification(inscription, payload).catch(err => console.error(err))
})

app.get('/echo/:what', (req, res) => {
    res.json(req.params)
})

module.exports = {
   path: '/api',
   handler: app
}
