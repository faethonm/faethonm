class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:contact]
  def index
    @projects = Project.all
    @background1 = backgrounds.sample
    @background2 = backgrounds.sample
  end

  def contact
  end

  def projects
  end

  private

  def backgrounds
    [
      'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfa1/v/t1.0-9/12647276_10153879361060409_2239873098858253224_n.jpg?oh=14e34f97c49ee66f4dc05bb0439d5851&oe=579EA62F',
      'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtf1/v/t1.0-9/10411_10153818267460409_6323369116891191147_n.jpg?oh=4fe17cd838fef6e6f4122ff3818f5da0&oe=57A4BF90',
      'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xla1/v/t1.0-9/12391405_10153759651205409_18483193435840163_n.jpg?oh=816137fc159c802f524552b5fa12942d&oe=5772CE81',
      'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xal1/v/t1.0-9/12342453_10153759639915409_9108665616889247058_n.jpg?oh=0b4443b4e977ce24a759f6850a6fa3fa&oe=57A0B361',
    ]
  end
end
