require 'sinatra/base'
require 'sinatra/activerecord'

#Controller reqs
require './app/controllers/ApplicationController'
require './app/controllers/UserController'
require './app/controllers/AttemptController'

#Model reqs
require './app/models/UserModel'
require './app/models/AttemptModel'
require './app/models/ExcerptModel'

map('/') {
	run ApplicationController
}
map('/users') {
	run UserController
}
map('/attempts') {
	run AttemptController
}