class AttemptController < ApplicationController

	post '/new' do 
		@attempt = Attempt.new
		@attempt.user_id = params[:user_id]
		@attempt.excerpt_id = params[:excerpt_id]
		@attempt.wpm = params[:wpm]
		@attempt.save
		resp = {
			whatever: 'ok'
		}.to_json
	end

end