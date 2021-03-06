var express = require('express');
var router = express.Router();

var locations = [
  {
    region: 'nürnberg',
    name: 'ER-Günther-Scharowsky-Straße',
    geoLocation: { latitude: 49.5743556, longitude: 10.998697 }
  },
  {
    region: 'nürnberg',
    name: 'ER-Röthelheimpark',
    geoLocation: { latitude: 49.5928416, longitude: 11.0250335 }
  },
  {
    region: 'nürnberg',
    name: 'ER-Tennenlohe',
    geoLocation: { latitude: 49.54475, longitude: 11.0223013 }
  },
  {
    region: 'nürnberg',
    name: 'FÜ-Würzburger-Strasse',
    geoLocation: { latitude: 49.4834389, longitude: 10.9596899 }
  },
  {
    region: 'nürnberg',
    name: 'N-Frankenstrasse',
    geoLocation: { latitude: 49.4295962, longitude: 11.0824009 }
  },
  {
    region: 'nürnberg',
    name: 'N-Marienberg',
    geoLocation: { latitude: 49.4869373, longitude: 11.0935294 }
  },
  {
    region: 'nürnberg',
    name: 'N-Milchhof-Palais',
    geoLocation: { latitude: 49.4495614, longitude: 11.0969089 }
  },
  {
    region: 'nürnberg',
    name: 'N-Nordostpark',
    geoLocation: { latitude: 49.4876925, longitude: 11.1119348 }
  },
  {
    region: 'nürnberg',
    name: 'N-Thomas-Mann-Straße',
    geoLocation: { latitude: 49.4100421, longitude: 11.1294845 }
  }
];

router.route('/')
  .get(function(req, res) {
    if (locations.length === 0) {
      res.sendStatus(204);
    } else {
      res.status(200).json({ data: locations });
    }
  });

router.route('/:region')
  .get(function(req, res) {
    var region = req.params.region;

    var filteredLocations = locations.filter(function(location) {
      return location.region === region.toLowerCase();
    });

    if (filteredLocations.length === 0) {
      res.sendStatus(204);
    } else {
      res.status(200).json({ data: filteredLocations });
    }
  });

module.exports = router;
