var _optcodes = [];


// ADC  Add Memory to Accumulator with Carry
_optcodes[0x69] = {f: ADC, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0x65] = {f: ADC, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0x75] = {f: ADC, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0x6D] = {f: ADC, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0x7D] = {f: ADC, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0x79] = {f: ADC, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0x61] = {f: ADC, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0x71] = {f: ADC, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z,C,V'}};


// AND  AND Memory with Accumulator
_optcodes[0x29] = {f: AND, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0x25] = {f: AND, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0x35] = {f: AND, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0x2D] = {f: AND, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x3D] = {f: AND, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x39] = {f: AND, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x21] = {f: AND, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0x31] = {f: AND, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z'}};


// ASL  Shift Left One Bit (Memory or Accumulator)
_optcodes[0x0A] = {f: ASL, addr: 'accumulator', cycles: 2, bytes: 1, flags: 'N,Z,C'}};
_optcodes[0x06] = {f: ASL, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x16] = {f: ASL, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x0E] = {f: ASL, addr: 'absolute', cycles: 6, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0x1E] = {f: ASL, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'N,Z,C'}};


// BCC  Branch on Carry Clear
_optcodes[0x90] = {f: BCC, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BCS  Branch on Carry Set
_optcodes[0xB0] = {f: BCS, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BEQ  Branch on Result Zero
_optcodes[0xF0] = {f: BEQ, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BIT  Test Bits in Memory with Accumulator
_optcodes[0x24] = {f: BIT, addr: 'zeropage', cycles: 3, bytes: 2, flags: ''}};
_optcodes[0x2C] = {f: BIT, addr: 'absolute', cycles: 4, bytes: 3, flags: ''}};


// BMI  Branch on Result Minus
_optcodes[0x30] = {f: BMI, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BNE  Branch on Result not Zero
_optcodes[0xD0] = {f: BNE, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BPL  Branch on Result Plus
_optcodes[0x10] = {f: BPL, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BRK  Force Break
_optcodes[0x00] = {f: BRK, addr: 'implied', cycles: 7, bytes: 1, flags: ''}};


// BVC  Branch on Overflow Clear
_optcodes[0x50] = {f: BVC, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// BVS  Branch on Overflow Set
_optcodes[0x70] = {f: BVC, addr: 'relative', cycles: 2, bytes: 2, flags: ''}};


// CLC  Clear Carry Flag
_optcodes[0x18] = {f: CLC, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// CLD  Clear Decimal Mode
_optcodes[0xD8] = {f: CLD, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// CLI  Clear Interrupt Disable Bit
_optcodes[0x58] = {f: CLI, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// CLV  Clear Overflow Flag
_optcodes[0xB8] = {f: CLV, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// CMP  Compare Memory with Accumulator
_optcodes[0xC9] = {f: CMP, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xC5] = {f: CMP, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xD5] = {f: CMP, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xCD] = {f: CMP, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0xDD] = {f: CMP, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0xD9] = {f: CMP, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0xC1] = {f: CMP, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xD1] = {f: CMP, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z,C'}};


// CPX  Compare Memory and Index X
_optcodes[0xE0] = {f: CPX, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xE4] = {f: CPX, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xEC] = {f: CPX, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z,C'}};


// CPY  Compare Memory and Index Y
_optcodes[0xC0] = {f: CPY, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xC4] = {f: CPY, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0xCC] = {f: CPY, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z,C'}};


// DEC  Decrement Memory by One
_optcodes[0xC6] = {f: DEC, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'N,Z'}};
_optcodes[0xD6] = {f: DEC, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0xCE] = {f: DEC, addr: 'absolute', cycles: 3, bytes: 3, flags: 'N,Z'}};
_optcodes[0xDE] = {f: DEC, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'N,Z'}};


// DEX  Decrement Index X by One
_optcodes[0xCA] = {f: DEC, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// DEY  Decrement Index Y by One
_optcodes[0x88] = {f: DEC, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// EOR  Exclusive-OR Memory with Accumulator
_optcodes[0x49] = {f: EOR, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0x45] = {f: EOR, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0x55] = {f: EOR, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0x4D] = {f: EOR, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x5D] = {f: EOR, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x59] = {f: EOR, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x41] = {f: EOR, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0x51] = {f: EOR, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z'}};


// INC  Increment Memory by One
_optcodes[0xE6] = {f: INC, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'N,Z'}};
_optcodes[0xF6] = {f: INC, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0xEE] = {f: INC, addr: 'absolute', cycles: 6, bytes: 3, flags: 'N,Z'}};
_optcodes[0xFE] = {f: INC, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'N,Z'}};


// INX  Increment Index X by One
_optcodes[0xE8] = {f: INX, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// INY  Increment Index Y by One
_optcodes[0xC8] = {f: INY, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// JMP  Jump to New Location
_optcodes[0x4C] = {f: JMP, addr: 'absolute', cycles: 3, bytes: 3, flags: ''}};
_optcodes[0x6C] = {f: JMP, addr: 'indirect', cycles: 5, bytes: 3, flags: ''}};


// JSR  Jump to New Location Saving Return Address
_optcodes[0x20] = {f: JSR, addr: 'absolute', cycles: 6, bytes: 3, flags: ''}};


// LDA  Load Accumulator with Memory
_optcodes[0xA9] = {f: LDA, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0xA5] = {f: LDA, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0xB5] = {f: LDA, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0xAD] = {f: LDA, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0xBD] = {f: LDA, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0xB9] = {f: LDA, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0xA1] = {f: LDA, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0xB1] = {f: LDA, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z'}};


// LDX  Load Index X with Memory
_optcodes[0xA2] = {f: LDX, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0xA6] = {f: LDX, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0xB6] = {f: LDX, addr: 'zeropage,Y', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0xAE] = {f: LDX, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0xBE] = {f: LDX, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z'}};


// LDY  Load Index Y with Memory
_optcodes[0xA0] = {f: LDY, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0xA4] = {f: LDY, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0xB4] = {f: LDY, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0xAC] = {f: LDY, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0xBC] = {f: LDY, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z'}};


// LSR  Shift One Bit Right (Memory or Accumulator)
_optcodes[0x4A] = {f: LSR, addr: 'accumulator', cycles: 2, bytes: 1, flags: 'Z,C'}};
_optcodes[0x46] = {f: LSR, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'Z,C'}};
_optcodes[0x56] = {f: LSR, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'Z,C'}};
_optcodes[0x4E] = {f: LSR, addr: 'absolute', cycles: 6, bytes: 3, flags: 'Z,C'}};
_optcodes[0x5E] = {f: LSR, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'Z,C'}};


// NOP  No Operation
_optcodes[0xEA] = {f: NOP, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// ORA  OR Memory with Accumulator
_optcodes[0x09] = {f: ORA, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z'}};
_optcodes[0x05] = {f: ORA, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z'}};
_optcodes[0x15] = {f: ORA, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z'}};
_optcodes[0x0D] = {f: ORA, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x1D] = {f: ORA, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x19] = {f: ORA, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z'}};
_optcodes[0x01] = {f: ORA, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z'}};
_optcodes[0x11] = {f: ORA, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z'}};


// PHA  Push Accumulator on Stack
_optcodes[0x48] = {f: PHA, addr: 'implied', cycles: 3, bytes: 1, flags: ''}};


// PHP  Push Processor Status on Stack
_optcodes[0x08] = {f: PHP, addr: 'implied', cycles: 3, bytes: 1, flags: ''}};


// PLA  Pull Accumulator from Stack
_optcodes[0x68] = {f: PLA, addr: 'implied', cycles: 4, bytes: 1, flags: 'N,Z'}};


// PLP  Pull Processor Status from Stack
_optcodes[0x28] = {f: PHP, addr: 'implied', cycles: 4, bytes: 1, flags: ''}};


// ROL  Rotate One Bit Left (Memory or Accumulator)
_optcodes[0x2A] = {f: ROL, addr: 'accumulator', cycles: 2, bytes: 1, flags: 'N,Z,C'}};
_optcodes[0x26] = {f: ROL, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x36] = {f: ROL, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x2E] = {f: ROL, addr: 'absolute', cycles: 6, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0x3E] = {f: ROL, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'N,Z,C'}};


// ROR  Rotate One Bit Right (Memory or Accumulator)
_optcodes[0x6A] = {f: ROR, addr: 'accumulator', cycles: 2, bytes: 1, flags: 'N,Z,C'}};
_optcodes[0x66] = {f: ROR, addr: 'zeropage', cycles: 5, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x76] = {f: ROR, addr: 'zeropage,X', cycles: 6, bytes: 2, flags: 'N,Z,C'}};
_optcodes[0x6E] = {f: ROR, addr: 'absolute', cycles: 6, bytes: 3, flags: 'N,Z,C'}};
_optcodes[0x7E] = {f: ROR, addr: 'absolute,X', cycles: 7, bytes: 3, flags: 'N,Z,C'}};


// RTI  Return from Interrupt
_optcodes[0x40] = {f: RTI, addr: 'implied', cycles: 6, bytes: 1, flags: ''}};


// RTS  Return from Subroutine
_optcodes[0x60] = {f: RTS, addr: 'implied', cycles: 6, bytes: 1, flags: ''}};


// SBC  Subtract Memory from Accumulator with Borrow
_optcodes[0xE9] = {f: SBC, addr: 'immidiate', cycles: 2, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0xE5] = {f: SBC, addr: 'zeropage', cycles: 3, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0xF5] = {f: SBC, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0xED] = {f: SBC, addr: 'absolute', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0xFD] = {f: SBC, addr: 'absolute,X', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0xF9] = {f: SBC, addr: 'absolute,Y', cycles: 4, bytes: 3, flags: 'N,Z,C,V'}};
_optcodes[0xE1] = {f: SBC, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: 'N,Z,C,V'}};
_optcodes[0xF1] = {f: SBC, addr: '(indirect),Y', cycles: 5, bytes: 2, flags: 'N,Z,C,V'}};


// SEC  Set Carry Flag
_optcodes[0x38] = {f: SEC, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// SED  Set Decimal Flag
_optcodes[0xF8] = {f: SED, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// SEI  Set Interrupt Disable Status
_optcodes[0x78] = {f: SEI, addr: 'implied', cycles: 2, bytes: 1, flags: ''}};


// STA  Store Accumulator in Memory
_optcodes[0x85] = {f: STA, addr: 'zeropage', cycles: 3, bytes: 2, flags: ''}};
_optcodes[0x95] = {f: STA, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: ''}};
_optcodes[0x8D] = {f: STA, addr: 'absolute', cycles: 4, bytes: 3, flags: ''}};
_optcodes[0x9D] = {f: STA, addr: 'absolute,X', cycles: 5, bytes: 3, flags: ''}};
_optcodes[0x99] = {f: STA, addr: 'absolute,Y', cycles: 5, bytes: 3, flags: ''}};
_optcodes[0x81] = {f: STA, addr: '(indirect,X)', cycles: 6, bytes: 2, flags: ''}};
_optcodes[0x91] = {f: STA, addr: '(indirect),Y', cycles: 6, bytes: 2, flags: ''}};


// STX  Store Index X in Memory
_optcodes[0x86] = {f: STX, addr: 'zeropage', cycles: 3, bytes: 2, flags: ''}};
_optcodes[0x96] = {f: STX, addr: 'zeropage,Y', cycles: 4, bytes: 2, flags: ''}};
_optcodes[0x8E] = {f: STX, addr: 'absolute', cycles: 4, bytes: 3, flags: ''}};


// STY  Sore Index Y in Memory
_optcodes[0x84] = {f: STY, addr: 'zeropage', cycles: 3, bytes: 2, flags: ''}};
_optcodes[0x94] = {f: STY, addr: 'zeropage,X', cycles: 4, bytes: 2, flags: ''}};
_optcodes[0x8C] = {f: STY, addr: 'absolute', cycles: 4, bytes: 3, flags: ''}};


// TAX  Transfer Accumulator to Index X
_optcodes[0xAA] = {f: TAX, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// TAY  Transfer Accumulator to Index Y
_optcodes[0xA8] = {f: TAY, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// TSX  Transfer Stack Pointer to Index X
_optcodes[0xBA] = {f: TSX, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// TXA  Transfer Index X to Accumulator
_optcodes[0x8A] = {f: TXA, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// TXS  Transfer Index X to Stack Register
_optcodes[0x9A] = {f: TXS, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};


// TYA  Transfer Index Y to Accumulator
_optcodes[0x98] = {f: TYA, addr: 'implied', cycles: 2, bytes: 1, flags: 'N,Z'}};
