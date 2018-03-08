class ExcerptController < ApplicationController

	before do
		p session
		p "I just printed the session"
	end


	get '/all' do 
		@excerpts = Excerpt.all 
		resp = {
			message: 'all good bro',
			excerpts: @excerpts
		}
		resp.to_json
	end



	get '/init' do 
		@excerpt = Excerpt.order("RANDOM()").first
		@excerpts = Excerpt.order("id ASC").limit(10)

		@array = []
		@allscores = @excerpt.all_high_scores().to_a
		@allscores.map {|i| @array.push(i.user)}
		allscores = @allscores.map(&:serializable_hash)
		array = @array.map(&:serializable_hash)

		allscores.each_with_index do |j, index|
			j.delete("id")
			j["username"] = array[index]["username"]
		end

		@userscores = 
		Attempt.select("excerpt_id, user_id, wpm, creation_date")
			.where("excerpt_id = ? AND user_id = ?", @excerpt.id, session[:user_id]) 
			.order("wpm ASC").to_a

		@arraytwo = []
		@userscores.map {|k| @arraytwo.push(k.user)}
		userscores = @userscores.map(&:serializable_hash)
		arraytwo = @arraytwo.map(&:serializable_hash)

		userscores.each_with_index do |l, ind|
			l.delete("id")
			l["username"] = arraytwo[ind]["username"]
		end

		resp = {
			excerpt: @excerpt,
			allscores: allscores,
			userscores: userscores,
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


end