Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
  resources :todo_lists do
    resources :todos
  end
  get '*path' => 'application#index'
end
