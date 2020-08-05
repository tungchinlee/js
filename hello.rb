# baz = lambda {|i, j| i * j * 1000}
# def bar(&bk)
#   puts bk.class
#   bk.call(100, 200)
# end
# result = bar(&baz) 
# p result

class Tcl
  class << self
    def speak
      puts "hello"
    end
  end
end

Tcl.speak

class Silly < (rand < 0.5 ? Array : Hash)
end

p Silly.new