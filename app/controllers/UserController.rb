class UserController < ApplicationController

	post '/login' do 
		success = nil

		@pw = params["password"]
		@user = User.find_by(username: params["username"])

		if @user && @user.authenticate(@pw)
			success = true
			session[:username] = @user.username
			session[:logged_in] = true
			session[:user_id] = @user.id
			session[:session_token] = @user.session_token
			session[:message] = "Logged in as #{@user.username}"
		else
			success = false
			session[:message] = "Invalid username or password"
		end

		user_info = nil

		if success
			all_wpm = @user.lifetime_wpm().pluck(:wpm)
			wpm_avg = all_wpm.sum / all_wpm.length
			user_info = {
				id: @user.id,
				username: @user.username,
				lifetimeWpm: wpm_avg,
				session_token: @user.session_token
			}
		end

		resp = {
			user: user_info,
			message: session[:message],
			success: success
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