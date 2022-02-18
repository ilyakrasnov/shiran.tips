# Filename: __plugins/compile_tags.rb
# Jekyll post_write hook to run the page generator script
Jekyll::Hooks.register :posts, :post_write do
  system("python _plugins/compile_tags.py")
end