Rails.application.routes.draw do
  root 'home#index'
  get 'contact' => 'home#contact'
end
