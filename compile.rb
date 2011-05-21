

# generate opscode

current = nil
start_def = false
# 
addrmode = []
assemblers = []

# File.open("instructions.txt", "r").each_line do |l|
#   if (l =~ /^[A-Z]/)
#     puts "\n\n"
#     puts "// #{l}"
#     start_def = false
#     current = l
#   elsif start_def
#     if l != "\n"
#       tokens = l.strip().split(/[ ]+/)
#       if tokens.length == 5
#         addressing, assembler, opc, bytes, cyles = tokens
#       else
#         addressing, assembler, _, opc, bytes, cyles = tokens
#       end
#       # assembler = (cyles.nil?) ? cyles 
#       puts "opt(0x#{opc}, #{assembler}, '#{addressing}');"
#       assemblers << assembler
#       addrmode << addressing
#     end
#   elsif current
#     if l =~ /------/
#       start_def = true
#     end
#   end
# end

File.open("instructions.txt", "r").each_line do |l|
  if (l =~ /^[A-Z]/)
    puts "\n\n"
    puts "// #{l}"
    start_def = false
    current = l
  elsif start_def
    if l != "\n"
      # addressing, assembler, _, opc, bytes, cyles = l.strip().split(/[ ]+/)
      # puts "opt(0x#{opc}, #{assembler}, '#{addressing}');"
      # assemblers << assembler
      # addrmode << addressing
    end
  elsif current
    if l =~ /------/
      start_def = true
      v = current.split(" ")
      puts "function #{v[0]}() {\n  throw '#{v[0]} not implemented';\n}"
    end
    if l !~ /addressing/ and l !~ /------/
      puts "//#{l}"
    end
  end
end