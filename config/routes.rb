StirchleyStores::Application.routes.draw do
  
  root :to => "supporters#new"
  
  resources :supporters, :only => [:new,:create] do
    collection do 
	    get "subscribed"
	  end
	end

end
