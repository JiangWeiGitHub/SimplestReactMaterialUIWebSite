'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = (0, _express.Router)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_express2.default.static('public/dist'));

router.get('/', function (req, res, next) {
  res.sendFile(_path2.default.join(__dirname, '../public/dist/index.html'));
});

app.use('/', router);

app.listen(3333, function () {
  console.log('Listening at port 3333... ...');
});