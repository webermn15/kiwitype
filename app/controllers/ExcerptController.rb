class ExcerptController < ApplicationController

	get '/all' do 

		@excerpts = Excerpt.all 
		resp = {
			message: 'all good bro',
			excerpts: @excerpts
		}
		resp.to_json

	end

	get '/random' do 
		@excerpt = Excerpt.order("RANDOM()").first
		p @excerpt
		@excerpt.to_json
	end

end