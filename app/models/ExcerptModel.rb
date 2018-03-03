class Excerpt < ActiveRecord::Base

	has_many :attempts
	has_many :users, :through => :attempts

	def all_high_scores
		that = self
    Attempt.select("user_id, wpm, creation_date")
    	.where("excerpt_id = ?", that.id)
    	.order("wpm DESC")
    	.includes(:users)
	end

end