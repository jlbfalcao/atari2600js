
// var req = new XMLHttpRequest();
// req.open('GET', '/Pacman.bin', false);
// req.overrideMimeType('text/plain; charset=x-user-defined');
// req.send(null);
// // if (req.status != 200) throwException(_exception.FileLoadFailed);
// 
// fileContents = req.responseText;
// fileSize = fileContents.length;
// 
// console.debug(fileContents)

  // this.readByteAt = function(i){
  //  return fileContents.charCodeAt(i) & 0xff;
  // }
  // 

function hex(v) {
  return "0x" + Number(v).toString(16);
}

function setFlag(f, v) {
  var el = document.getElementById(f);
  if (el) {
    el.className = (v) ? 'on' : '';
  }
}

function update(i,v) {
  var el = document.getElementById(i);
  if (el) {
    el.innerHTML = hex(v);
  }
}

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

$PC = define(16);
$AC = define(8);
$X = define(8);
$Y = define(8);
$SR = define(8);
$SP = define(8);

Function.prototype.inc = function() {
  if (this == $PC) {
    $PC($PC() + 1);
  }
}

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

function fname(v) {
  return "_" + new Number(v).toString(16);
}

// var optcodes = [];
// 
// function opt(opcode, f, addr) {
//   console.debug(opcode)
//   optcodes[opcode] = function() {
//     var $M; // memory address.
//     var M = addrmode(addr); // memory value.
//     eval("var _f = " + f.toString());
//     return _f();
//   }
// }

// function execute(opcode) {
//   if (typeof window[fname(opcode)] == 'function') {
//     window[fname(opcode)]();
//   } else {
//     throw fname(opcode) + "don't exists";
//   }
// }


CLOCK = (function(clk) {
  var cbl = []; // callback list.
  var _step = function() {
    for( var i = 0; i < cbl.length; i++ ) {
      try {
        cbl[i].apply(window);
      } catch (e) {
        console.error(e);
        return;
      }
    }
    setTimeout(_step, clk);
  };
  return {
    add:function(step) {
      cbl.push(step);
    },
    start: function() {
      setTimeout(_step, clk);
    }
  }
})(100); // 100hz :)
  

CLOCK.add(function() {
  var i = $PC(); // get PC
  var opc = $(i); // get opc
  console.debug("PC:", i, "OPC:", hex(opc)); // TODO: convert to hex.
  execute(opc);
});
// CLOCK.start();


var _6507 = (function() {
  
  var memory = []; // memory.
  
  var $M // memory address.
  var M; // memory value.

  var Y, X, PC = 0, AC, SR, SP; // registers
  var N, V, B, D, I, Z, C; // flags

  function fetch( offset ) { // fetch byte.
    var addr = PC + (offset || 0); 
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
  var optcodes = []
  for( var i in _optcodes ) {
    // console.debug(i, _optcodes[i])
    if (_optcodes[i] != undefined) {
      // console.debug(_optcodes[i])
      optcodes[i] = _optcodes[i];
      eval("optcodes[" + i + "].f = " + _optcodes[i].f.toString());
    }
  }




  // console.debug(optcodes)

  return {
    load: function(rom) {
      memory = rom; // wrong!
    },
    
    run: function() {
      for( var i = 0; i < 50; i++ ) {
        this.step();
      }
    },
    
    step: function() {
      var optcode = fetch();
      if ( typeof optcodes[optcode] == "object") {
        console.warn(hex(optcode), optcodes[optcode].f.prototype, optcodes[optcode].addr)
        // console.debug(optcodes[optcode].addr)
        // console.debug(optcodes[optcode].bytes)
        var r = optcodes[optcode].f();
        // USE RETURN TO CHANGE FLAGS?
        
        PC += optcodes[optcode].bytes;
      } else {
        console.error("method ", [hex(optcode), "don't exist"].join(" "))
      }
    }
  }

})();


_6507.load(Pacman);
window.onload = function() {
  _6507.foo = function() {
    console.debug(PC)
  }
  _6507.foo();
  _6507.run();
}







