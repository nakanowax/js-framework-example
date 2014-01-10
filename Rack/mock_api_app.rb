require 'json'

class MockApiApp
  def call(env)
    p env

    case env['REQUEST_METHOD']
    when 'GET'
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
        when '/people/get/all'
          return 200,
              { 
                  'Content-Type' => 'application/json',
                  'Access-Control-Allow-Origin' => '*'
              },
              [{
                  :people => {
                      :person => [
                          {:id => '1', :name => 'hoge', :age => '21'},
                          {:id => '2', :name => 'boo', :age => '31'},
                          {:id => '3', :name => 'bar', :age => '41'}
                  ]},
              }.to_json ]
        else
            return 200, {'Content-Type' => 'text/plain'}, "Welcome to Rack".chars
        end
    when 'POST'
        req = Rack::Request.new(env)
        json = JSON.parse(req.body.read)
        p json
        case json.fetch('method')
        when 'getUserData'
          return 200,
              { 
                  'Content-Type' => 'application/json',
                  'Access-Control-Allow-Origin' => '*'
              },
              [{
                  :cause => 0,
                  :data => [
                      {:id => '1', :name => 'AAA', :age => '20'},
                      {:id => '2', :name => 'BBB', :age => '30'},
                      {:id => '3', :name => 'CCC', :age => '40'}
                  ],
              }.to_json ]
        else
          return 200,
              { 
                  'Content-Type' => 'application/json',
                  'Access-Control-Allow-Origin' => '*'
              },
              [{
                  :cause => 1,
                  :data => [],
              }.to_json ]
        end
    end
  end
end
