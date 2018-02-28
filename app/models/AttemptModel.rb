class Attempts < ActiveRecord::Base

	belongs_to :user
	belongs_to :excerpt

end