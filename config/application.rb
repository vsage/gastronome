require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Gastronome
  class Application < Rails::Application

    # config.action_controller.default_url_options = { :trailing_slash => true }
    # config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)
    config.assets.precompile << /\.(?:svg|eot|otf|woff|ttf)\z/
    # config.autoload_paths += %W(#{config.root}/lib)
    config.assets.initialize_on_precompile = false


    config.action_dispatch.perform_deep_munge = false

    config.angular_templates.module_name    = 'templates'
    config.angular_templates.ignore_prefix  = %w(angular/)
    config.angular_templates.inside_paths   = ['app/assets']
    config.angular_templates.markups        = %w(erb)
    config.angular_templates.extension      = 'html'
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
