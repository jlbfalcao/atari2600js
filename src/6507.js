
// format hex.
function hex(v) {
  return "0x" + Number(v).toString(16);
}


// old.
function define(bits) {
  var _v = 0;
  return function(v) {
    if( typeof v == "undefined" ) {
      return _v;
    } else {
      // FLAG!
      if (bits == 8) {
        _v = v && 0xff;
        $SP.Z(_v == 0)
        $SP.N(!(_v & 0x80)); // TODO: check if byte 8 is signal.
      } else {
        _v = v & 0xffff;
      }
      // _v = v & ((bits == 8) ? 0xff : 0xffff);
    }
  }
}

// Read/Write Byte.
$ = (function(rom) {
  var lastPosition = 0;
  var memory = Pacman || [];
  return function(addr, value) {
    if (typeof value == "undefined") {
      // just read.
      return memory[addr] & 0xff;
    } else {
      // write
      memory[addr] = value & 0xff
    }
  }
})(Pacman); // loading rom.

// OLD stuff.
$PC = define(16);
$AC = define(8);
$X = define(8);
$Y = define(8);
$SR = define(8);
$SP = define(8);

Function.prototype.inc = function() {
  // funny things :P
  if (this == $PC) {
    $PC($PC() + 1);
  }
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

// experimental.
function bitFlag(pos) {
  return function(v) {
    if ( this == $SR ) {
      var c = this();
      if (typeof v == "undefined") {
        return (c >> pos) & (0x01);
      } else {
        if (!!v) {
          this(c | (1 << pos));
        } else {
          this(c & ((1 << pos) ^ 0xff));
        }
      }
    }
  }
}

// SR flags
Function.prototype.N = bitFlag(7); // Negative
Function.prototype.V = bitFlag(6); // Overflow
Function.prototype._ = bitFlag(5); // ignored
Function.prototype.B = bitFlag(4); // Break
Function.prototype.D = bitFlag(3); // Decimal
Function.prototype.I = bitFlag(2); // Interrupt
Function.prototype.Z = bitFlag(1); // Zero
Function.prototype.C = bitFlag(0); // Carry


// console.debug("should be 0", $SR.N())
// console.debug($SR.N(1))
// console.debug("should be 1", $SR.N())
// console.debug("should be 128", $SR())
// console.debug($SR.N(0))
// console.debug("should be 0", $SR.N())

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


var $$ = (function() {
  var opscode = [];
  return function(opc, f) {
    if ( typeof f == "undefined" ) {
      if (typeof opscode[opc] == "function") {
        var pc = $PC();
        opscode[opc].apply(window);
        $PC.inc(); // next.
        console.debug($PC() - pc, "bytes")
      } else {
        throw ["0x", hex(opc), " not implemented"].join("")
      }
    } else {
      // register
      opscode[opc] = f;
    }
  }
})();


var _6507 = (function() {
  
  // 100h - 1FFh.Stack
  
  var memory = []; // memory.
  
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

  // var Y = 0, X = 0, PC = 0, AC = 0, SR = 0, SP = 0; // registers
  // var N, V, B, D, I, Z, C; // flags

  function fetch( offset ) { // fetch byte.
    var addr = offset || PC;
    // console.debug("fetch at", hex(addr), "value", hex(memory[addr]))
    return memory[addr] & 0xff;
  }
  
  // store byte.
  function store(addr, value) {
    memory[addr] = value & 0xff;
  }

  // flag N or Z 
  function FLAG_NZ(v) {
    N = !!(v & 0x80); //8th bit?
    Z = !!(v == 0)
  }
  
  // add function to 6507 scope.
  var opcodes = []
  for( var i in _optcodes ) {
    // console.debug(i, _optcodes[i])
    if (_optcodes[i] != undefined) {
      // console.debug(_optcodes[i])
      opcodes[i] = _optcodes[i];
      eval("opcodes[" + i + "].f = " + _optcodes[i].f.toString());
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
    },
    
    load: function(rom) {
      memory = rom; // wrong!
    },
    
    run: function() {
      for( var i = 0; i < 50; i++ ) {
        this.step();
      }
    },
    
    step: function() {
      var opcode = fetch();
      console.debug(hex(opcode))
      if ( typeof opcodes[opcode] == "object") {
        var addr = opcodes[opcode].addr;
        console.warn(hex(opcode), opcodes[opcode].f.prototype, addr);
        // console.debug(optcodes[optcode].addr)
        // console.debug(optcodes[optcode].bytes)
        
        switch(addr) {
          case "implied":break;
          case "immidiate":
            M = fetch(PC+1); break;
          case "zeropage,X":
            var addr = fetch(PC+1);
            M = fetch(addr + X);
            break;
          default:
            throw ["unknown ", addr, " mode"].join("");
        }

        var r = opcodes[opcode].f();
        // USE RETURN TO CHANGE FLAGS?
        PC += opcodes[opcode].bytes;
        this.debug();
      } else {
        console.error("method ", [hex(opcode), "don't exist"].join(" "))
      }
    }
  }
})();


_6507.load(Pacman);
window.onload = function() {
  _6507.run();
}







