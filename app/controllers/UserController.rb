class UserController < ApplicationController

	get '/login' do 
		resp = {
			come_on: 'chill bro'
		}.to_json
	end


	post '/register' do
		@user = User.new
		@user.username = params[:username]
		@user.password = params[:password]
		@user.save
		session[:logged_in] = true
		session[:username] = @user.username
		session[:user_id] = @user.id
		session[:session_token] = @user.session_token
		session[:message] = "You are now logged in as #{session[:username]}."
		resp = {
			message: session[:message],
		}.to_json
	end

	get '/test' do 
		resp = {
			session: session,
			username_via_session: session[:username]
		}.to_json
	end

end