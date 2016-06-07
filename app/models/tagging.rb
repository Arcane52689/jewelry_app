class Tagging < ActiveRecord::Base
  belongs_to :category
  belongs_to :taggable, polymorhpic: true
end
