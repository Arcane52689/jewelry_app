module Passwordable
  extend ActiveSupport::Concern

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def password
    @password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  included do
    def self.find_by_credentials(email, password)
      user = self.find_by(email: email)
      return nil unless user && user.is_password?(password)
      user
    end
  end

end