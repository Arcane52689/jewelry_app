class Image < ActiveRecord::Base
  attr_accessor :picture
  has_attached_file :picture, styles: { thumb:"200 x 200" }, default_url: "missing.png"

  belongs_to :imageable, polymorhpic: true

end
