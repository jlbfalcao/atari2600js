
// format hex.
function hex(v) {
  return "0x" + Number(v).toString(16);
}

// old stuff
function fetchNextByte() {
  $PC.inc();
  return $($PC());
}
function fetchNextWord() {
  return (fetchNextByte() << 8) | fetchNextByte();
}

function addrmode(mode) {
  switch ( mode ) {
    case "immidiate": // immidiate
      return fetchNextByte();
    break;
    case "zeropage":
      return $(fetchNextByte());
    break;
    case "zeropage,X":
      return $(fetchNextByte()+$X());
    break;
    case "absolute":
      return $(fetchNextWord());
    break;
    case "absolute,X":
      return $(fetchNextWord()+$X());
    break;
    case "absolute,Y":
      return $(fetchNextWord()+$Y());
    break;
    case "relative":
      return $($PC() + fetchNextByte());
    case "(indirect,X)":
      return $($(fetchNextWord()+$X()));
    break;
    case "(indirect),Y":
      return $($(fetchNextWord())+$Y());
    break;
    case "accumulator":
      return $AC();
    case "implied":
      return 0;
    default:
      throw "addrmode " + mode + " don't exists";
  }
}



// 8 KB
// JUMP +-127
// Stack : 256bytes 100h ~ 1FFh

// 0000h - 00FFh (zero page): reserved for zero-page pointers. These pointers are used by zero-page addressing modes.
// 0100h - 01FFh: 256-byte stack.
// FFFAh - FFFBh: Pointer to NMI interrupt-processing routine.
// FFFCh - FFFDh: Pointer to a program handling Reset signal.
// FFFEh - FFFFh: Pointer to IRQ interrupt-processing routine.
// Some memory addresses may be reserved for memory mapped I/O as the processor doesn't have hardware I/O capability.


// Negative (N) - set if the most significant bit of the result is set.
// Overflow (V)
// Break command (B)
// Decimal mode (D) - set if the processor is in decimal mode.
// IRQ disable (I) - set if the IRQ interrupt is disabled.
// Zero (Z) - set if the result is zero.
// Carry (C) - set if there was a carry from or borrow to during last result calculation.

var _6507 = (function() {
  
  // 100h - 1FFh.Stack
  
  var memory = []; // memory.
  
  // byte.
  var $ = function(addr) {
    return memory[addr];
  }

  // word
  var $$ = function(addr) {
    return memory[addr] << 8 | (memory[addr+1]);
  }
  
  // sanity test.
  // memory[2] = 0xab;
  // memory[3] = 0xcd;
  // console.info(hex($(2)))
  // console.info(hex($$(2)))

  var addrmode;
  
  var $M // memory address.
  var M; // memory value.
  
  var flags = "N,V,B,D,I,Z,C".split(",");
  for( var i in flags ) {
    // console.debug(flags[i])
    eval("var " + flags[i] + " = 0;");
  }
  var registers = "Y,X,PC,AC,SR,SP".split(",");
  for( var i in registers ) {
    // console.debug(registers[i])
    eval("var " + registers[i] + " = 0;");
  }
  SP = 0x100; // stack pointer
  
  // 2byte stack (from 0xff -> 0x100)
  function push(v) {
    memory[SP] = v & 0xff;
    memory[SP+1] = (v & 0xff00) >> 0;
    SP+=2
    // TODO: check > 0x100 + 256
  }
  function pop() {
    var v = memory[SP-2] & ((memory[SP-1] << 0) & 0xff00);
    SP-=2
  }
  
  // var Y = 0, X = 0, PC = 0, AC = 0, SR = 0, SP = 0; // registers
  // var N, V, B, D, I, Z, C; // flags

  // store byte.
  function store(_addr, value) {
    memory[_addr] = value & 0xff;
  }

  // flag N or Z 
  function FLAG_NZ(v) {
    N = !!(v & 0x80); //8th bit?
    Z = !!(v == 0)
  }
  
  // add function to 6507 scope.
  var opcodes = []
  for( var i in _opcodes ) {
    // console.debug(i, _optcodes[i])
    if (_opcodes[i] != undefined) {
      // console.debug(_optcodes[i])
      opcodes[i] = _opcodes[i];
      eval("opcodes[" + i + "].f = " + _opcodes[i].f.toString());
    }
  }


  // console.debug(optcodes)
  var updateEl = function(id, value) {
    var el = document.getElementById(id);
    if (el) {
      el.innerHTML = value;
    }
  }


  return {

    debug: function() {
      for( var i in registers ) {
        var r = registers[i];
        updateEl(r, hex(eval(r)));
      }
      for( var i in flags ) {
        var f = flags[i];
        var el = document.getElementById(f);
        if (el) {
          el.className = (eval(f)) ? 'on' : '';
        }
      }
      
      
      // var t = document.getElementById("mem");
      // for (var i in memory) {
      //   var td = document.createElement("td");
      //   td.innerHTML = hex(memory[i])
      //   t.rows[1].appendChild(td)
      //   td = document.createElement("th");
      //   td.innerHTML = hex(i)
      //   t.rows[0].appendChild(td)
      // 
      // }
    },
    
    load: function(rom) {
      memory = rom; // wrong!
    },
    
    run: function() {
      // for( var i = 0; i < 50; i++ ) {
      //   this.step();
      // }
    },
    
    step: function() {
      var opcode = $(PC);
      if ( typeof opcodes[opcode] == "object") {
        addrmode = opcodes[opcode].addr;
        bytes = opcodes[opcode].bytes;
        console.warn(opcodes[opcode].f.prototype, addrmode);

        if (bytes == 1) {
          console.debug(hex(opcode))
        } else if (bytes == 2) {
          console.debug(hex(opcode), hex($(PC+1)))
        } else if (bytes == 3) {
          console.debug(hex(opcode), hex($(PC+1)), hex($(PC+2)))
        }
        // console.debug(optcodes[optcode].addr)
        // console.debug(optcodes[optcode].bytes)

        switch(addrmode) {
          case "accumulator": break;
          case "implied":break;
          case "immidiate":
            $M = PC+1;
            M = $($M); break;
          case "zeropage":
            $M = $(PC+1)
            M = $($M);
            break;
          case "zeropage,X":
            $M = $(PC+1) + X
            M = $($M);
            break;
          case "absolute":
            $M = $$(PC+1)
            M = $($M)
          case "relative":
            $M = PC+1
            M = $($M);
            break;
          default:
            throw ["unknown ", addrmode, " mode"].join("");
        }
        
        console.debug("$M", hex($M), "value=", hex(M));
        
        // save current status.
        for( var i in registers ) {
          // console.debug(registers[i], eval(registers[i]))
          eval("var _" + registers[i] + " = " + registers[i] + ";");
        }
        var _M = M; // memory value.
        
        // console.debug("opcode:", addr)
        var r = opcodes[opcode].f();
        
        // memory changed.
        if (_M != M) {
          memory[$M] = M
          console.debug("changed memory", hex(M), hex(_M), "at", hex($M))
        }

        for( var i in registers ) {
          // console.debug(registers[i], eval(registers[i]))
          eval("var changed = _" + registers[i] + " != " + registers[i] + ";");
          if (changed) {
            // set negative flag
            if ( opcodes[opcode].flags.indexOf("N") != -1 ) {
              if (eval(registers[i]) & 0x80) { // 8th bit?
                N = 1;
              }
            }
            // set zero flag
            if ( opcodes[opcode].flags.indexOf("Z") != -1 ) {
              if (eval(registers[i]) == 0) {
                Z = 1;
              }
            }
            // console.warn(registers[i], "changed", opcodes[opcode].flags, opcodes[opcode].flags.indexOf("N"))
          }
        }

        // isn't a branch
        if ( PC == _PC ) {
          PC += opcodes[opcode].bytes;
        }
        
        this.debug();
      } else {
        console.error("method ", [hex(opcode), "don't exist"].join(" "))
      }
    }
  }
})();


_6507.load(Pacman);
window.onload = function() {
  // 
  document.getElementById("step").onclick = function() {
    try {
      _6507.step();
    } catch (e) {
      console.debug(e)
    }
  }
}







