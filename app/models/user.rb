class User < ApplicationRecord
  # :confirmable, :trackable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :events, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :subscriptions, dependent: :destroy

  before_validation :set_name, on: :create

  after_commit :link_subscriptions, on: :create

  validates :name, presence: true, length: { maximum: 35 }

  mount_uploader :avatar, AvatarUploader

  private

  def set_name
    self.name = "#{I18n.t('activerecord.models.user')}#{rand(100000)}" if self.name.blank?
  end

  def link_subscriptions
    Subscription.where(user_id: nil, user_email: self.email).update_all(user_id: self.id)
  end
end
