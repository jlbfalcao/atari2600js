

# generate opscode

current = nil
start_def = false
# 
addrmode = []
assemblers = []
flags = []

puts "var _opcodes = [];"
File.open("instructions.txt", "r").each_line do |l|
  if (l =~ /^[A-Z]/)
    puts "\n\n"
    puts "// #{l}"
    flags = []
    start_def = false
    current = l
  elsif start_def
    if l != "\n"
      tokens = l.strip().split(/[ ]+/)
      if tokens.length == 5
        addressing, assembler, opc, bytes, cycles = tokens
      else
        addressing, assembler, _, opc, bytes, cycles = tokens
      end
      bytes = bytes.to_i
      cycles = cycles.to_i
      
      # assembler = (cyles.nil?) ? cyles 
      puts "_opcodes[0x#{opc}] = {f: #{assembler}, addr: '#{addressing}', cycles: #{cycles}, bytes: #{bytes}, flags: '#{flags.join(',')}'};"
      assemblers << assembler
      addrmode << addressing
    end
  elsif current
    if l =~ /------/
      start_def = true
    elsif l =~ /([\+-] ?){6}/
      f = 'N Z C I D V'.split ' '
      l = l.strip!.split(" ").map {|i| i == '+'}
      l.each_with_index {|e,i| flags << f[i] if e }
      # p flags.join(",")
      # p l
      
    end
  end
end

# File.open("instructions.txt", "r").each_line do |l|
#   if (l =~ /^[A-Z]/)
#     puts "\n\n"
#     puts "// #{l}"
#     start_def = false
#     current = l
#   elsif start_def
#     if l != "\n"
#       # addressing, assembler, _, opc, bytes, cyles = l.strip().split(/[ ]+/)
#       # puts "opt(0x#{opc}, #{assembler}, '#{addressing}');"
#       # assemblers << assembler
#       # addrmode << addressing
#     end
#   elsif current
#     if l =~ /------/
#       start_def = true
#       v = current.split(" ")
#       puts "function #{v[0]}() {\n  throw '#{v[0]} not implemented';\n}"
#     end
#     if l !~ /addressing/ and l !~ /------/
#       puts "//#{l}"
#     end
#   end
# end