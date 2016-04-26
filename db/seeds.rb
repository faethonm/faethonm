def seed_image(file_name)
  File.join(Rails.root, "/app/assets/images/#{file_name}.jpg")
end

User.create(email: 'test@example.com', password: 'password')
Project.create(title: 'Foggy',
               url: 'https://hihiri.herokuapp.com/',
               description: 'We take of the little things for you so you can enjoy your big moments',
               image: 'foggy.png')

Project.create(title: 'Hihiri',
               url: 'https://hihiri.herokuapp.com/',
               description: 'Achieve great things together',
               image: 'hihiri.png')

Project.create(title: 'Salem',
               url: 'https://asksalem.herokuapp.com',
               description: 'Discover your social presence',
               image: 'salem.png')
