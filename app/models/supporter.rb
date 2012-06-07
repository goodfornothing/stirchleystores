class Supporter < ActiveRecord::Base
  
  attr_accessible :name, :email
  
  validates :email,  :presence => true
  validates :name, :presence => true
  
  subscribe_to "Supporters", :using => { :api_key => 'b8bb743223437f266688797e0ca868df-us5',
                                        :email => :email, 
                                        :fields => {:NAME => :name}}
end