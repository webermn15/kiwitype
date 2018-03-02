class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require

	ActiveRecord::Base.establish_connection(
 		:adapter => 'postgresql', 
 		:database => 'kiwitypedev'
	)

	register Sinatra::CrossOrigin

	configure do
		enable :cross_origin
	end

	set :allow_origin, :any
	set :allow_methods, [:get, :post, :options, :put, :delete]
	set :allow_credentials, true

	options "*" do
		response.headers["Allow"] = 'HEAD, GET, PUT, POST, DELETE, OPTIONS'
		response.headers['Access-Control-Allow-Origin'] = '*'
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

	include BCrypt

	use Rack::MethodOverride  
	set :method_override, true

	enable :sessions

	not_found do 
		halt 404
	end
	
end