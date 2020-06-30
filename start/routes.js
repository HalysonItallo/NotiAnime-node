'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/search', 'RequestApiController.searchAnime');
Route.post('/detail', 'RequestApiController.detailAnime');
Route.post('/register', 'AuthController.register');
Route.post('/login', 'AuthController.authenticate');
