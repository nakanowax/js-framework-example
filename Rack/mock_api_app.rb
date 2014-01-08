require 'json'

class MockApiApp
  def call(env)
    p env
    case env['REQUEST_PATH']
    when '/get'
      return 200,
          { 
              'Content-Type' => 'application/json',
              'Access-Control-Allow-Origin' => '*'
          },
          [{
              :cause => 0,
              :data => [
                  {:id => '1', :name => 'hoge', :age => '21'},
                  {:id => '2', :name => 'boo', :age => '31'},
                  {:id => '3', :name => 'bar', :age => '41'}
              ],
          }.to_json ]
    else
        return 200, {'Content-Type' => 'text/plain'}, "Welcome to Rack".chars
    end
  end
end
