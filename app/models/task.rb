class Task < ActiveRecord::Base
  belongs_to :user
  validates :name, presence: true, length: { minimum: 5 }
  VALID_DEADLINE_REGEX = /(\d{2})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2})/
  validates :deadline, presence: true, format: { with: VALID_DEADLINE_REGEX }
  validates :user_id, presence: true
end
