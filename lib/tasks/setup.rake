task :setup do
  Rake::Task["db:migrate"].invoke
  Dir.chdir('client') do
    sh %{ npm install }
  end
end
