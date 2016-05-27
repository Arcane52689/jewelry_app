class Image < ActiveRecord::Base

  has_attached_file :picture, styles: { thumb:"200 x 200" }, default_url: "missing.png"

  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


  belongs_to :imageable, polymorphic: true


  def url
    picture.url
  end

end


