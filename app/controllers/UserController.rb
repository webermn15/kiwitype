class UserController < ApplicationController

	post '/login' do 
		p params

		resp = {
			come_on: params
		}.to_json
	end

	post '/register' do
		@user = User.new
		@user.username = params["username"]
		@user.password = params["password"]
		# @user.save
		session[:logged_in] = true
		session[:username] = @user.username
		session[:user_id] = @user.id
		session[:session_token] = @user.session_token
		session[:message] = "You are now logged in as #{session[:username]}."
		resp = {
			user: @user,
			session: session
		}.to_json
	end

	post '/token/:token' do 
		@user = User.where("session_token = ?", params["token"])

		all_wpm = @user[0].lifetime_wpm().pluck(:wpm)

		wpm_avg = all_wpm.sum / all_wpm.length

		resp = {
			id: @user[0].id,
			username: @user[0].username,
			session_token: params["token"],
			lifetimeWpm: wpm_avg
		}.to_json
	end

	get '/test' do 
		@user = User.where("session_token = ?", 1)
		# token = @user[0].session_token
		p @user
		resp = {
			token: @user
		}.to_json
	end

end