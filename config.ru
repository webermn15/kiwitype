require 'sinatra/base'
require 'sinatra/activerecord'

map('/') {
	run ApplicationController
}