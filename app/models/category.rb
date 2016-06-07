class Category < ActiveRecord::Base
  has_many :taggings, dependent: :destroy
end
