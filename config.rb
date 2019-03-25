activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets
activate :aria_current
# activate :relative_assets

set :fonts_dir, 'fonts'

configure :development do
    # activate :livereload
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end

activate :hotjar do |hj|
  hj.hotjar_id = '1244236' # Replace with your site's ID
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-136485527-1' # Replace with your property ID.
end

activate :imageoptim


activate :robots,
  rules: [
    { user_agent: '*', allow: %w[/] }
  ],
  sitemap: 'https://lewagonitalia.org/sitemap.xml'

