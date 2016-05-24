class Session < ActiveRecord::Base
  belongs_to :user

  before_save :ensure_unique_token

  def self.find_user_by_token(token)
    session = Session.find_by(token: token)
    return session.user if session && session.active
    return nil
  end



  def ensure_unique_token
    token = SecureRandom.urlsafe_base64(16)
    while Session.exists?(token: token)
      token = SecureRandom.urlsafe_base64(16)
    end
  end

end
