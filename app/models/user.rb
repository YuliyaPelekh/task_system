class User < ActiveRecord::Base
  has_many :tasks, dependent: :destroy
  validates :name, presence: true
  validates :email, presence: true
  has_secure_password 
end
