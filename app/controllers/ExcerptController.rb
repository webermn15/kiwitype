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

	get '/test' do 
		@excerpt = Excerpt.find(1)
		hs = @excerpt.all_high_scores()
		hs_arr = hs.to_a

		p hs_arr[0].user.class

		hs[0].user
		resp = {
			asdf: hs
		}.to_json
	end

end