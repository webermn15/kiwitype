class ExcerptController < ApplicationController

	get '/all' do 
		@excerpts = Excerpt.all 
		resp = {
			message: 'all good bro',
			excerpts: @excerpts
		}
		resp.to_json
	end


	get '/init' do 
		@array = []

		@excerpt = Excerpt.order("RANDOM()").first
		@excerpts = Excerpt.order("id ASC").limit(10)

		p @excerpts

		@allscores = @excerpt.all_high_scores().to_a
		@allscores.map {|i| @array.push(i.user)}
		allscores = @allscores.map(&:serializable_hash)
		array = @array.map(&:serializable_hash)

		allscores.each_with_index do |j, index|
			j.delete("id")
			j["username"] = array[index]["username"]
		end

		resp = {
			excerpt: @excerpt,
			allscores: allscores,
			filteredexcerpts: @excerpts
		}.to_json
	end


	get '/allscores' do 
		@excerpt = Excerpt.find(1)
		hs = @excerpt.all_high_scores()
		hs_arr = hs.to_a

		p hs_arr[0].user

		hs[0].user
		resp = {
			asdf: hs
		}.to_json
	end


	get '/userscores' do 
		'userscores'
	end

end