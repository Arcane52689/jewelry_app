module Taggable
  extend ActiveSupport::Concern
  included do
    has_many :taggings, as: :taggable, dependent: :destroy
  end

  def category_ids
    self.taggings.pluck(:category_id)
  end


end