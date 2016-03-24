Rails.application.routes.draw do
  root 'home#index'
  get 'contact' => 'home#contact'
  get 'resume' => 'home#resume'
end
