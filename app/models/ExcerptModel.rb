class Excerpts < ActiveRecord::Base

	has_many :attempts
	has_many :hunts, :through => :participants

end