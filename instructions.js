

// ADC  Add Memory to Accumulator with Carry
//
//     A + M + C -> A, C                N Z C I D V
//                                      + + + - - +
//
function ADC() {
  throw 'ADC not implemented';
}


// AND  AND Memory with Accumulator
//
//     A AND M -> A                     N Z C I D V
//                                      + + - - - -
//
function AND() {
  throw 'AND not implemented';
}


// ASL  Shift Left One Bit (Memory or Accumulator)
//
//     C <- [76543210] <- 0             N Z C I D V
//                                      + + + - - -
//
function ASL() {
  throw 'ASL not implemented';
}


// BCC  Branch on Carry Clear
//
//     branch on C = 0                  N Z C I D V
//                                      - - - - - -
//
function BCC() {
  throw 'BCC not implemented';
}


// BCS  Branch on Carry Set
//
//     branch on C = 1                  N Z C I D V
//                                      - - - - - -
//
function BCS() {
  throw 'BCS not implemented';
}


// BEQ  Branch on Result Zero
//
//     branch on Z = 1                  N Z C I D V
//                                      - - - - - -
//
function BEQ() {
  throw 'BEQ not implemented';
}


// BIT  Test Bits in Memory with Accumulator
//
//     bits 7 and 6 of operand are transfered to bit 7 and 6 of SR (N,V);
//     the zeroflag is set to the result of operand AND accumulator.
//
//     A AND M, M7 -> N, M6 -> V        N Z C I D V
//                                     M7 + - - - M6
//
function BIT() {
  throw 'BIT not implemented';
}


// BMI  Branch on Result Minus
//
//     branch on N = 1                  N Z C I D V
//                                      - - - - - -
//
function BMI() {
  throw 'BMI not implemented';
}


// BNE  Branch on Result not Zero
//
//     branch on Z = 0                  N Z C I D V
//                                      - - - - - -
//
function BNE() {
  throw 'BNE not implemented';
}


// BPL  Branch on Result Plus
//
//     branch on N = 0                  N Z C I D V
//                                      - - - - - -
//
function BPL() {
  throw 'BPL not implemented';
}


// BRK  Force Break
//
//     interrupt,                       N Z C I D V
//     push PC+2, push SR               - - - 1 - -
//
function BRK() {
  throw 'BRK not implemented';
}


// BVC  Branch on Overflow Clear
//
//     branch on V = 0                  N Z C I D V
//                                      - - - - - -
//
function BVC() {
  throw 'BVC not implemented';
}


// BVS  Branch on Overflow Set
//
//     branch on V = 1                  N Z C I D V
//                                      - - - - - -
//
function BVS() {
  throw 'BVS not implemented';
}


// CLC  Clear Carry Flag
//
//     0 -> C                           N Z C I D V
//                                      - - 0 - - -
//
function CLC() {
  C = 0
}


// CLD  Clear Decimal Mode
//
//     0 -> D                           N Z C I D V
//                                      - - - - 0 -
//
function CLD() {
  D = 0
}


// CLI  Clear Interrupt Disable Bit
//
//     0 -> I                           N Z C I D V
//                                      - - - 0 - -
//
function CLI() {
  I = 0
}


// CLV  Clear Overflow Flag
//
//     0 -> V                           N Z C I D V
//                                      - - - - - 0
//
function CLV() {
  V = 0
}


// CMP  Compare Memory with Accumulator
//
//     A - M                            N Z C I D V
//                                    + + + - - -
//
function CMP() {
  throw 'CMP not implemented';
}


// CPX  Compare Memory and Index X
//
//     X - M                            N Z C I D V
//                                      + + + - - -
//
function CPX() {
  throw 'CPX not implemented';
}


// CPY  Compare Memory and Index Y
//
//     Y - M                            N Z C I D V
//                                      + + + - - -
//
function CPY() {
  throw 'CPY not implemented';
}


// DEC  Decrement Memory by One
//
//     M - 1 -> M                       N Z C I D V
//                                      + + - - - -
//
function DEC() {
  throw 'DEC not implemented';
}


// DEX  Decrement Index X by One
//
//     X - 1 -> X                       N Z C I D V
//                                      + + - - - -
//
function DEX() {
  X--
}


// DEY  Decrement Index Y by One
//
//     Y - 1 -> Y                       N Z C I D V
//                                      + + - - - -
//
function DEY() {
  throw 'DEY not implemented';
}


// EOR  Exclusive-OR Memory with Accumulator
//
//     A EOR M -> A                     N Z C I D V
//                                      + + - - - -
//
function EOR() {
  throw 'EOR not implemented';
}


// INC  Increment Memory by One
//
//     M + 1 -> M                       N Z C I D V
//                                      + + - - - -
//
function INC() {
  throw 'INC not implemented';
}


// INX  Increment Index X by One
//
//     X + 1 -> X                       N Z C I D V
//                                      + + - - - -
//
function INX() {
  X++
}


// INY  Increment Index Y by One
//
//     Y + 1 -> Y                       N Z C I D V
//                                      + + - - - -
//
function INY() {
  Y++
}


// JMP  Jump to New Location
//
//     (PC+1) -> PCL                    N Z C I D V
//     (PC+2) -> PCH                    - - - - - -
//
function JMP() {
  throw 'JMP not implemented';
}


// JSR  Jump to New Location Saving Return Address
//
//     push (PC+2),                     N Z C I D V
//     (PC+1) -> PCL                    - - - - - -
//     (PC+2) -> PCH
//
function JSR() {
  throw 'JSR not implemented';
}


// LDA  Load Accumulator with Memory
//
//     M -> A                           N Z C I D V
//                                      + + - - - -
//
function LDA() {
  throw 'LDA not implemented';
}


// LDX  Load Index X with Memory
//
//     M -> X                           N Z C I D V
//                                      + + - - - -
//
function LDX() {
  X = M
}


// LDY  Load Index Y with Memory
//
//     M -> Y                           N Z C I D V
//                                      + + - - - -
//
function LDY() {
  throw 'LDY not implemented';
}


// LSR  Shift One Bit Right (Memory or Accumulator)
//
//     0 -> [76543210] -> C             N Z C I D V
//                                      - + + - - -
//
function LSR() {
  throw 'LSR not implemented';
}


// NOP  No Operation
//
//     ---                              N Z C I D V
//                                      - - - - - -
//
function NOP() {
}


// ORA  OR Memory with Accumulator
//
//     A OR M -> A                      N Z C I D V
//                                      + + - - - -
//
function ORA() {
  throw 'ORA not implemented';
}


// PHA  Push Accumulator on Stack
//
//     push A                           N Z C I D V
//                                      - - - - - -
//
function PHA() {
  throw 'PHA not implemented';
}


// PHP  Push Processor Status on Stack
//
//     push SR                          N Z C I D V
//                                      - - - - - -
//
function PHP() {
  throw 'PHP not implemented';
}


// PLA  Pull Accumulator from Stack
//
//     pull A                           N Z C I D V
//                                      + + - - - -
//
function PLA() {
  throw 'PLA not implemented';
}


// PLP  Pull Processor Status from Stack
//
//     pull SR                          N Z C I D V
//                                      from stack
//
function PLP() {
  throw 'PLP not implemented';
}


// ROL  Rotate One Bit Left (Memory or Accumulator)
//
//     C <- [76543210] <- C             N Z C I D V
//                                      + + + - - -
//
function ROL() {
  throw 'ROL not implemented';
}


// ROR  Rotate One Bit Right (Memory or Accumulator)
//
//     C -> [76543210] -> C             N Z C I D V
//                                      + + + - - -
//
function ROR() {
  throw 'ROR not implemented';
}


// RTI  Return from Interrupt
//
//     pull SR, pull PC                 N Z C I D V
//                                      from stack
//
function RTI() {
  throw 'RTI not implemented';
}


// RTS  Return from Subroutine
//
//     pull PC, PC+1 -> PC              N Z C I D V
//                                      - - - - - -
//
function RTS() {
  throw 'RTS not implemented';
}


// SBC  Subtract Memory from Accumulator with Borrow
//
//     A - M - C -> A                   N Z C I D V
//                                      + + + - - +
//
function SBC() {
  throw 'SBC not implemented';
}


// SEC  Set Carry Flag
//
//     1 -> C                           N Z C I D V
//                                      - - 1 - - -
//
function SEC() {
  C = 1
}


// SED  Set Decimal Flag
//
//     1 -> D                           N Z C I D V
//                                      - - - - 1 -
//
function SED() {
  D = 1
}


// SEI  Set Interrupt Disable Status
//
//     1 -> I                           N Z C I D V
//                                      - - - 1 - -
//
function SEI() {
  I = 1
}


// STA  Store Accumulator in Memory
//
//     A -> M                           N Z C I D V
//                                      - - - - - -
//
function STA() {
  throw 'STA not implemented';
}


// STX  Store Index X in Memory
//
//     X -> M                           N Z C I D V
//                                      - - - - - -
//
function STX() {
  throw 'STX not implemented';
}


// STY  Sore Index Y in Memory
//
//     Y -> M                           N Z C I D V
//                                      - - - - - -
//
function STY() {
  throw 'STY not implemented';
}


// TAX  Transfer Accumulator to Index X
//
//     A -> X                           N Z C I D V
//                                      + + - - - -
//
function TAX() {
  throw 'TAX not implemented';
}


// TAY  Transfer Accumulator to Index Y
//
//     A -> Y                           N Z C I D V
//                                      + + - - - -
//
function TAY() {
  throw 'TAY not implemented';
}


// TSX  Transfer Stack Pointer to Index X
//
//     SP -> X                          N Z C I D V
//                                      + + - - - -
//
function TSX() {
  throw 'TSX not implemented';
}


// TXA  Transfer Index X to Accumulator
//
//     X -> A                           N Z C I D V
//                                      + + - - - -
//
function TXA() {
  A = X
}


// TXS  Transfer Index X to Stack Register
//
//     X -> SP                          N Z C I D V
//                                      + + - - - -
//
function TXS() {
  // TODO: adiciona X no stack ou o valor para Stack Register
  $SP($X());
}


// TYA  Transfer Index Y to Accumulator
//
//     Y -> A                           N Z C I D V
//                                      + + - - - -
//
function TYA() {
  AC = Y
}
