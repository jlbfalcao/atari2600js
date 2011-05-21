

// ADC  Add Memory to Accumulator with Carry
opt(0x69, ADC, 'immidiate');
opt(0x65, ADC, 'zeropage');
opt(0x75, ADC, 'zeropage,X');
opt(0x6D, ADC, 'absolute');
opt(0x7D, ADC, 'absolute,X');
opt(0x79, ADC, 'absolute,Y');
opt(0x61, ADC, '(indirect,X)');
opt(0x71, ADC, '(indirect),Y');


// AND  AND Memory with Accumulator
opt(0x29, AND, 'immidiate');
opt(0x25, AND, 'zeropage');
opt(0x35, AND, 'zeropage,X');
opt(0x2D, AND, 'absolute');
opt(0x3D, AND, 'absolute,X');
opt(0x39, AND, 'absolute,Y');
opt(0x21, AND, '(indirect,X)');
opt(0x31, AND, '(indirect),Y');


// ASL  Shift Left One Bit (Memory or Accumulator)
opt(0x0A, ASL, 'accumulator');
opt(0x06, ASL, 'zeropage');
opt(0x16, ASL, 'zeropage,X');
opt(0x0E, ASL, 'absolute');
opt(0x1E, ASL, 'absolute,X');


// BCC  Branch on Carry Clear
opt(0x90, BCC, 'relative');


// BCS  Branch on Carry Set
opt(0xB0, BCS, 'relative');


// BEQ  Branch on Result Zero
opt(0xF0, BEQ, 'relative');


// BIT  Test Bits in Memory with Accumulator
opt(0x24, BIT, 'zeropage');
opt(0x2C, BIT, 'absolute');


// BMI  Branch on Result Minus
opt(0x30, BMI, 'relative');


// BNE  Branch on Result not Zero
opt(0xD0, BNE, 'relative');


// BPL  Branch on Result Plus
opt(0x10, BPL, 'relative');


// BRK  Force Break
opt(0x00, BRK, 'implied');


// BVC  Branch on Overflow Clear
opt(0x50, BVC, 'relative');


// BVS  Branch on Overflow Set
opt(0x70, BVC, 'relative');


// CLC  Clear Carry Flag
opt(0x18, CLC, 'implied');


// CLD  Clear Decimal Mode
opt(0xD8, CLD, 'implied');


// CLI  Clear Interrupt Disable Bit
opt(0x58, CLI, 'implied');


// CLV  Clear Overflow Flag
opt(0xB8, CLV, 'implied');


// CMP  Compare Memory with Accumulator
opt(0xC9, CMP, 'immidiate');
opt(0xC5, CMP, 'zeropage');
opt(0xD5, CMP, 'zeropage,X');
opt(0xCD, CMP, 'absolute');
opt(0xDD, CMP, 'absolute,X');
opt(0xD9, CMP, 'absolute,Y');
opt(0xC1, CMP, '(indirect,X)');
opt(0xD1, CMP, '(indirect),Y');


// CPX  Compare Memory and Index X
opt(0xE0, CPX, 'immidiate');
opt(0xE4, CPX, 'zeropage');
opt(0xEC, CPX, 'absolute');


// CPY  Compare Memory and Index Y
opt(0xC0, CPY, 'immidiate');
opt(0xC4, CPY, 'zeropage');
opt(0xCC, CPY, 'absolute');


// DEC  Decrement Memory by One
opt(0xC6, DEC, 'zeropage');
opt(0xD6, DEC, 'zeropage,X');
opt(0xCE, DEC, 'absolute');
opt(0xDE, DEC, 'absolute,X');


// DEX  Decrement Index X by One
opt(0xCA, DEC, 'implied');


// DEY  Decrement Index Y by One
opt(0x88, DEC, 'implied');


// EOR  Exclusive-OR Memory with Accumulator
opt(0x49, EOR, 'immidiate');
opt(0x45, EOR, 'zeropage');
opt(0x55, EOR, 'zeropage,X');
opt(0x4D, EOR, 'absolute');
opt(0x5D, EOR, 'absolute,X');
opt(0x59, EOR, 'absolute,Y');
opt(0x41, EOR, '(indirect,X)');
opt(0x51, EOR, '(indirect),Y');


// INC  Increment Memory by One
opt(0xE6, INC, 'zeropage');
opt(0xF6, INC, 'zeropage,X');
opt(0xEE, INC, 'absolute');
opt(0xFE, INC, 'absolute,X');


// INX  Increment Index X by One
opt(0xE8, INX, 'implied');


// INY  Increment Index Y by One
opt(0xC8, INY, 'implied');


// JMP  Jump to New Location
opt(0x4C, JMP, 'absolute');
opt(0x6C, JMP, 'indirect');


// JSR  Jump to New Location Saving Return Address
opt(0x20, JSR, 'absolute');


// LDA  Load Accumulator with Memory
opt(0xA9, LDA, 'immidiate');
opt(0xA5, LDA, 'zeropage');
opt(0xB5, LDA, 'zeropage,X');
opt(0xAD, LDA, 'absolute');
opt(0xBD, LDA, 'absolute,X');
opt(0xB9, LDA, 'absolute,Y');
opt(0xA1, LDA, '(indirect,X)');
opt(0xB1, LDA, '(indirect),Y');


// LDX  Load Index X with Memory
opt(0xA2, LDX, 'immidiate');
opt(0xA6, LDX, 'zeropage');
opt(0xB6, LDX, 'zeropage,Y');
opt(0xAE, LDX, 'absolute');
opt(0xBE, LDX, 'absolute,Y');


// LDY  Load Index Y with Memory
opt(0xA0, LDY, 'immidiate');
opt(0xA4, LDY, 'zeropage');
opt(0xB4, LDY, 'zeropage,X');
opt(0xAC, LDY, 'absolute');
opt(0xBC, LDY, 'absolute,X');


// LSR  Shift One Bit Right (Memory or Accumulator)
opt(0x4A, LSR, 'accumulator');
opt(0x46, LSR, 'zeropage');
opt(0x56, LSR, 'zeropage,X');
opt(0x4E, LSR, 'absolute');
opt(0x5E, LSR, 'absolute,X');


// NOP  No Operation
opt(0xEA, NOP, 'implied');


// ORA  OR Memory with Accumulator
opt(0x09, ORA, 'immidiate');
opt(0x05, ORA, 'zeropage');
opt(0x15, ORA, 'zeropage,X');
opt(0x0D, ORA, 'absolute');
opt(0x1D, ORA, 'absolute,X');
opt(0x19, ORA, 'absolute,Y');
opt(0x01, ORA, '(indirect,X)');
opt(0x11, ORA, '(indirect),Y');


// PHA  Push Accumulator on Stack
opt(0x48, PHA, 'implied');


// PHP  Push Processor Status on Stack
opt(0x08, PHP, 'implied');


// PLA  Pull Accumulator from Stack
opt(0x68, PLA, 'implied');


// PLP  Pull Processor Status from Stack
opt(0x28, PHP, 'implied');


// ROL  Rotate One Bit Left (Memory or Accumulator)
opt(0x2A, ROL, 'accumulator');
opt(0x26, ROL, 'zeropage');
opt(0x36, ROL, 'zeropage,X');
opt(0x2E, ROL, 'absolute');
opt(0x3E, ROL, 'absolute,X');


// ROR  Rotate One Bit Right (Memory or Accumulator)
opt(0x6A, ROR, 'accumulator');
opt(0x66, ROR, 'zeropage');
opt(0x76, ROR, 'zeropage,X');
opt(0x6E, ROR, 'absolute');
opt(0x7E, ROR, 'absolute,X');


// RTI  Return from Interrupt
opt(0x40, RTI, 'implied');


// RTS  Return from Subroutine
opt(0x60, RTS, 'implied');


// SBC  Subtract Memory from Accumulator with Borrow
opt(0xE9, SBC, 'immidiate');
opt(0xE5, SBC, 'zeropage');
opt(0xF5, SBC, 'zeropage,X');
opt(0xED, SBC, 'absolute');
opt(0xFD, SBC, 'absolute,X');
opt(0xF9, SBC, 'absolute,Y');
opt(0xE1, SBC, '(indirect,X)');
opt(0xF1, SBC, '(indirect),Y');


// SEC  Set Carry Flag
opt(0x38, SEC, 'implied');


// SED  Set Decimal Flag
opt(0xF8, SED, 'implied');


// SEI  Set Interrupt Disable Status
opt(0x78, SEI, 'implied');


// STA  Store Accumulator in Memory
opt(0x85, STA, 'zeropage');
opt(0x95, STA, 'zeropage,X');
opt(0x8D, STA, 'absolute');
opt(0x9D, STA, 'absolute,X');
opt(0x99, STA, 'absolute,Y');
opt(0x81, STA, '(indirect,X)');
opt(0x91, STA, '(indirect),Y');


// STX  Store Index X in Memory
opt(0x86, STX, 'zeropage');
opt(0x96, STX, 'zeropage,Y');
opt(0x8E, STX, 'absolute');


// STY  Sore Index Y in Memory
opt(0x84, STY, 'zeropage');
opt(0x94, STY, 'zeropage,X');
opt(0x8C, STY, 'absolute');


// TAX  Transfer Accumulator to Index X
opt(0xAA, TAX, 'implied');


// TAY  Transfer Accumulator to Index Y
opt(0xA8, TAY, 'implied');


// TSX  Transfer Stack Pointer to Index X
opt(0xBA, TSX, 'implied');


// TXA  Transfer Index X to Accumulator
opt(0x8A, TXA, 'implied');


// TXS  Transfer Index X to Stack Register
opt(0x9A, TXS, 'implied');


// TYA  Transfer Index Y to Accumulator
opt(0x98, TYA, 'implied');
