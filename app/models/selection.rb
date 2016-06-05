class Selection < ActiveRecord::Base
  belongs_to :user
  belongs_to :item
  belongs_to :lot

  validate :unique_selection




  def unique_selection
    if self.id
      if self.item_id.nil?
        bool = false
      else
        bool = Selection.where("id != ?", self.id).exists?(user_id: self.user_id, item_id: self.item_id)
      end
    else
      bool = Selection.exists?(user_id: self.user_id, item_id: self.item_id)
    end
    self.errors[:item_id] << "Item has already been selected" if bool
  end

end
