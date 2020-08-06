baz = lambda {|i, j| i * j * 1000}
def bar(&bk)
  puts bk.class
  bk.call(100, 200)
end
result = bar(&baz) 
p result