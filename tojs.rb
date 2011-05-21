

f = File.new("Pacman.bin", "r")
print "var Pacman = [" + f.each_byte.map {|ch| "0x" + ch.to_s(16) }.join(", ") + "];"
f.close