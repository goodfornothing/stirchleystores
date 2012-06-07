class SupportersController < ApplicationController

	def new
	  @supporter = Supporter.new
  end
  
  def create
    @supporter = Supporter.new(params[:supporter])
    
    respond_to do |format|
      if @supporter.save
        if request.xhr?
          format.js { render :layout => false }  
        else
          format.html { redirect_to subscribed_supporters_path }
        end
      else
        format.html { render :action => "new" }
      end
    end
    
  end
  
  def subscribed
    
  end

end
