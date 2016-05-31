class Selection < ActiveRecord::Base
  belongs_to :user
  belongs_to :item

  validates :unique_selection




  def unique_selection
    if self.id
      bool = Selection.where("id != ?", self.id).exists?(user_id: self.user_id, item_id: self.item_id)
    else
      bool = Selection.exists?(user_id: self.user_id, item_id: self.item_id)
    end
    self.errors[:item_id] << "Item has already been selected"
  end

end
