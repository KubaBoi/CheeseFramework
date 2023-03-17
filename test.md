# kelp

## syscals

/usr/include/asm-generic/unistd.h

# Source

https://www.tutorialspoint.com/assembly_programming/index.htm

# Contents

- [Registers](#registers)
    - [Flags](#flags)
- [System calls](#system-calls)
- [Addressing](#addressing) 
- [Allocation](#allocation)
- [Constants](#constants)
- [Arithmetic instructions](#arithmetic-instruction)
- [Logical instructions](#logical-instructions)
- [Conditions](#conditions)
- [Loop](#loop)
- [Numbers](#numbers)
- [Strings](#strings)

# Registers

- General registers
    - [Data registers](#data-registers)
    - [Pointer registers](#pointer-registers)
    - [Index registers](#index-registers)
- [Control registers](#control-register)
- [Segment registers](#segment-registers)

## Data registers

| Code | Name | Description |
| --- | --- | --- |
| EAX | Accumulator | It is used in input/output and most arithmetic instructions. For example, in multiplication operation, one operand is stored in `EAX` or `AX` or `AL` register according to the size of the operand. |
| EBX | Base | It could be used in indexed addressing. |
| ECX | Counter | Store the loop count in iterative operations. |
| EDX | Data | It is also used in input/output operations. It is also used with `AX` register along with `DX` for multiply and divide operations involving large values. |

## Pointer registers

The pointer registers are 32-bit `EIP`, `ESP`, and `EBP` registers and corresponding 16-bit right portions `IP`, `SP`, and `BP`.

| Code | Name | Description |
| --- | --- | --- |
| EIP | Instruction pointer | The 16-bit `IP` register stores the offset address of the next instruction to be executed. `IP` in association with the `CS` register (as `CS:IP`) gives the complete address of the current instruction in the code segment. |
| ESP | Stack pointer | The 16-bit `SP` register provides the offset value within the program stack. `SP` in association with the `SS` register (`SS:SP`) refers to be current position of data or address within the program stack. |
| EBP | Base pointer | The 16-bit `BP` register mainly helps in referencing the parameter variables passed to a subroutine. The address in `SS` register is combined with the offset in `BP` to get the location of the parameter. `BP` can also be combined with DI and SI as base register for special addressing. |

## Index registers

The 32-bit index registers, `ESI` and `EDI`, and their 16-bit rightmost portions. `SI` and `DI`, are used for indexed addressing and sometimes used in addition and subtraction. 

| Code | Name | Description |
| --- | --- | --- |
| ESI | Source index | It is used as source index for string operations. |
| EDI | Destination index | It is used as destination index for string operations. |

## Control register

The 32-bit instruction pointer register and the 32-bit flags register combined are considered as the control registers.

Many instructions involve comparisons and mathematical calculations and change the status of the flags and some other conditional instructions test the value of these status flags to take the control flow to other location.

### Flags

| Code | Name | Description |
| --- | --- | --- |
| DF | Direction flag | It determines left or right direction for moving or comparing string data. When the DF value is 0, the string operation takes left-to-right direction and when the value is set to 1, the string operation takes right-to-left direction. |
| IF | Interrupt flag | It determines whether the external interrupts like keyboard entry, etc., are to be ignored or processed. It disables the external interrupt when the value is 0 and enables interrupts when set to 1. |
| TF | Trap flag | It allows setting the operation of the processor in single-step mode. The DEBUG program we used sets the trap flag, so we could step through the execution one instruction at a time. |
| STATUS FLAGS | | |
| OF | Overflow flag | It indicates the overflow of a high-order bit (leftmost bit) of data after a signed arithmetic operation. |
| SF | Sign flag | It shows the sign of the result of an arithmetic operation. This flag is set according to the sign of a data item following the arithmetic operation. The sign is indicated by the high-order of leftmost bit. A positive result clears the value of SF to 0 and negative result sets it to 1. |
| ZF | Zero flag | It indicates the result of an arithmetic or comparison operation. A nonzero result clears the zero flag to 0, and a zero result sets it to 1. |
| AF | Auxiliary carry flag | It contains the carry from bit 3 to bit 4 following an arithmetic operation; used for specialized arithmetic. The AF is set when a 1-byte arithmetic operation causes a carry from bit 3 into bit 4. |
| PF | Parity flag | It indicates the total number of 1-bits in the result obtained from an arithmetic operation. An even number of 1-bits clears the parity flag to 0 and an odd number of 1-bits sets the parity flag to 1. |
| CF | Carry flag | It contains the carry of 0 or 1 from a high-order bit (leftmost) after an arithmetic operation. It also stores the contents of last bit of a shift or rotate operation. |

Direction flag can be changed with:
- `CLD` (Clear Direction Flag, `DF` = 0) make string operation left to right
- `STD` (Set Direction Flag, `DF` = 1)  make string operation right to left

## Segment registers

Segments are specific areas defined in a program for containing data, code and stack.

Segments are specific areas defined in a program for containing data, code and stack. There are three main segments −

| Name | Description |
| --- | --- |
| Code Segment | It contains all the instructions to be executed. A 16-bit Code Segment register or `CS` register stores the starting address of the code segment. |
| Data Segment | It contains data, constants and work areas. A 16-bit Data Segment register or `DS` register stores the starting address of the data segment. |
| Stack Segment | It contains data and return addresses of procedures or subroutines. It is implemented as a 'stack' data structure. The Stack Segment register or SS register stores the starting address of the stack. |

Apart from the `DS`, `CS` and `SS` registers, there are other extra segment registers - `ES` (extra segment), `FS` and `GS`, which provide additional segments for storing data.

In assembly programming, a program needs to access the memory locations. All memory locations within a segment are relative to the starting address of the segment. A segment begins in an address evenly divisible by 16 or hexadecimal 10. So, the rightmost hex digit in all such memory addresses is 0, which is not generally stored in the segment registers.

The segment registers stores the starting addresses of a segment. To get the exact location of data or instruction within a segment, an offset value (or displacement) is required. To reference any memory location in a segment, the processor combines the segment address in the segment register with the offset value of the location.

# System calls

There are six registers that store the arguments of the system call used: `EBX`, `ECX`, `EDX`, `ESI`, `EDI` and `EBP`. Arguments are consecutive and starting by with the `EBX`. If there are more than six arguments, then the memory location of the first argument is stored in the EBX.

| %eax | Name | %ebx | %ecx | %edx | %esx | %edi |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | sys_exit | int | - | - | - | - |
| 2 | sys_fork | struct pt_regs | - | - | - | - |
| 3 | sys_read | unsigned int | char * | size_t | - | - |
| 4 | sys_write | unsigned int | const char * | size_t | - | - |
| 5 | sys_open | const char * | int | int | - | - |
| 6 | sys_close | unsigned int | - | - | - | - |

# Addressing

- Register addressing
- Immediate addressing
- Memory addressing

## Register addressing

Register contains the operand:

```json
MOV DX, TAX_RATE   ; Register in first operand
MOV COUNT, CX	   ; Register in second operand
MOV EAX, EBX	   ; Both the operands are in registers
```

Faster because data are stored in registers.

## Direct memory addressing

Data from memory. To locate the exact location of data in memory, we need the segment start address, which is typically found in the DS register and an offset value. The offset value is also called `effective address`.

The offset value specified by the variable name (pointer). The assembler calculates the offset value and maintains a symbol table, which stores the offset values of all the variables.

```json
ADD	BYTE_VALUE, DL	; Adds the register in the memory location
MOV	BX, WORD_VALUE	; Operand from the memory is added to register
```

## Direct-Offset addressing

```json
MOV CL, BYTE_TABLE[2]	; Gets the 3rd element of the BYTE_TABLE
MOV CL, BYTE_TABLE + 2	; Gets the 3rd element of the BYTE_TABLE
MOV CX, WORD_TABLE[3]	; Gets the 4th element of the WORD_TABLE
MOV CX, WORD_TABLE + 3	; Gets the 4th element of the WORD_TABLE
```

## Indirect Memory addressing

Used for variables containing several elements like arrays. Starting address of the array is stored in register.

```json
MY_TABLE TIMES 10 DW 0  ; Allocates 10 words (2 bytes) each initialized to 0
MOV EBX, [MY_TABLE]     ; Value of MY_TABLE[0] in EBX -> EBX = 0
MOV EBX, MY_TABLE     ; Effective Address of MY_TABLE in EBX -> EBX = address
MOV [EBX], 110          ; MY_TABLE[0] = 110
ADD EBX, 2              ; EBX = EBX +2 , 2 because dw is 2 bytes
MOV [EBX], 123          ; MY_TABLE[1] = 123
```

# Allocation

`[variable_name] define_directive initial_value [,initial_value]...`

| Directive | Purpose | Storage Space |
| --- | --- | --- |
| DB | Define Byte | 1 byte |
| DW | Define Word | 2 bytes |
| DD | Define Doubleword | 4 bytes |
| DQ | Define Quadword | 8 bytes |
| DT | Define Ten Bytes | 10 bytes |

- Each byte of character is stored as its ASCII value in hexadecimal.
- Each decimal value is automatically converted to its 16-bit binary equivalent and stored as a hexadecimal number.
- Processor uses the little-endian byte ordering.
- Negative numbers are converted to its 2's complement representation.
- Short and long floating-point numbers are represented using 32 or 64 bits, respectively.

## Allocation for uninitialized data

| Directive | Purpose | Storage Space |
| --- | --- | --- |
| RESB | Reserve a Byte | 1 byte |
| RESW | Reserve a Word | 2 bytes |
| RESD | Reserve a Doubleword | 4 bytes |
| RESQ | Reserve a Quadword | 8 bytes |
| REST | Reserve a Ten Bytes | 10 bytes |

# Constants

- EQU
- %assign
    - allows redefinition
- %define
    - works like #define in C

# Arithmetic instruction

| Instruction | Syntax | Description | Flags |
| --- | --- | --- | --- |
| INC | INC destination | Increase operand by one | idk (probably ZF) |
| DEC | DEC destination | Decrease operand by one | idk (probably ZF) |
| ADD | ADD destination source | Add source operand to destination operand | OF, CF |
| SUB | SUB destination source | Substruct source operanf from destination operand | OF, CF |
| MUL | MUL multiplier | Multiplicant will be in `RAX` and result in `RAX` !! `RDX` will be set to zero | OF, CF |
| IMUL | IMUL multiplier | Used for signed | OF, CF |
| DIV | DIV divisor | Divide `RAX` by divisor -> result (quotient) RAX, (reminder) `RDX` !! `RDX` need to be 0 | OF, SF, ZF, AF, PF, CF |
| IDIV | IDIV divisor | Used for signed | OF, SF, ZF, AF, PF, CF |

## MUL/IMUL

| Multiplicant | Multiplier | Product |
| --- | --- | --- |
| AL | 8 bit | AH AL (AX) |
| AX | 16 bit | DX AX |
| EAX | 32 bit | EDX EAX |

### When two bytes are multiplied

The multiplicant is in the `AL` register, and the multiplier is a byte in the memory or in another register. The product is in AX. High-order 8 bits of the product is stored in AH and the low-order 8 bits are stored in `AL`.

### When two one-word values are multiplied

The multiplicand should be in the `AX` register, and the multiplier is a word in memory or another register. For example, for an instruction like `MUL DX`, you must store the multiplier in DX and the multiplicant in `AX`.

The resultant product is a doubleword, which will need two registers. The high-order (leftmost) portion gets stored in DX and the lower-order (rightmost) portion gets stored in `AX`.

### When two doubleword values are multiplied

When two doubleword values are multiplied, the multiplicant should be in `EAX` and the multiplier is a doubleword value stored in memory or in another register. The product generated is stored in the `EDX:EAX` registers, i.e., the high order 32 bits gets stored in the `EDX` register and the low order 32-bits are stored in the `EAX` register.

## DIV/IDIV

| Divident size | Divident | Divisor | Quotient | Remainder |
| --- | --- | --- | --- | --- |
| 16 bit | AX | 8 bit | AL | AH |
| 32 bit | DX AX | 16 bit | AX | DX |
| 64 bit | EDX EAX | 32 bit | EAX | EDX |

### When the divisor is 1 byte

The dividend is assumed to be in the AX register (16 bits). After division, the quotient goes to the AL register and the remainder goes to the AH register.

### When the divisor is 1 word

The dividend is assumed to be 32 bits long and in the DX:AX registers. The high-order 16 bits are in DX and the low-order 16 bits are in AX. After division, the 16-bit quotient goes to the AX register and the 16-bit remainder goes to the DX register.

### When the divisor is doubleword

The dividend is assumed to be 64 bits long and in the EDX:EAX registers. The high-order 32 bits are in EDX and the low-order 32 bits are in EAX. After division, the 32-bit quotient goes to the EAX register and the 32-bit remainder goes to the EDX register.

# Logical instructions

| Sr.No. | Instruction | Format |
| --- | --- | --- |
| 1 | AND | AND operand1, operand2 |
| 2 | OR | OR operand1, operand2 |
| 3 | XOR | XOR operand1, operand2 |
| 4 | TEST | TEST operand1, operand2 |
| 5 | NOT | NOT operand1 |

First operand could be `register` or `memory`

Second operand could be `register`, `memory` or `immediate (constant) value`. However, memory-to-memory operations are not possible.

Sets OF, ZF, SF, PF and CF.

| - | AND | OR | XOR | NOT | TEST |
| --- | --- | --- | --- | --- | --- |
| Op1 | 0101 | 0101 | 0101 | 0101 | 0101 | 
| Op2 | 0011 | 0011 | 0011 | - | 0011 |
| Product | 0001 | 0111 | 0110 | 1010 | Same as AND but does not change Op1 | 

# Conditions

- Unconditional jump `JMP`
- Conditional jump `J<condition>`

`CMP` compares two operands. Substract second from first and decides whether operands are equal or not.

## Conditional jump

### Signed

| Instruction | Description | Flags tested |
| --- | --- | --- |
| JE/JZ | Equal or Zero | ZF |
| JNE/JNZ | not Equal or not Zero | ZF |
| JG/JNLE | Greater or not Less/Equal | OF, SF, ZF |
| JGE/JNL | Greater/Equal or not Less | OF, SF |
| JL/JNGE | Less or not Greater/Equal | OF, SF |
| JLE/JNG | Less/Equal or not Greater | OF, SF, ZF |

### Unsigned

| Instruction | Description | Flags tested |
| --- | --- | --- |
| JE/JZ | Equal - Zero | ZF |
| JNE/JNZ | not Equal - not Zero | ZF |
| JA/JNBE | Above - not Below/Equal | CF, ZF |
| JAE/JNB | Above/Equal - not Below | CF |
| JB/JNAE | Below - not Above/Equal | CF |
| JBE/JNA | Below/Equal - not Above | AF, CF |

### Check value of flags

| Instruction | Description | Flags tested |
| --- | --- | --- |
| JXCZ | if CX is Zero | none |
| JC | if Carry | CF |
| JNC | if not Carry | CF |
| JO | if Overflow | OF |
| JNO | if not Overflow | OF |
| JP/JPE | if Parity or Parity Even PF | |
| JNP/JPO | if no Parity or Parity Odd | PF |
| JS | Sign (negative value) | SF |
| JNS | No Sign (positive value) | SF |

# Loop

`LOOP` instuction jumps until `ECX` is not 0. And decrease `ECX` by one.

```
mov ECX, 10
l1:
loop l1
```

# Numbers 

## ASCII

I do not know what is this good for...

- AAA - ASCII Adjust After Addition
- AAS - ASCII Adjust After Subtraction
- AAM - ASCII Adjust After Multiplication
- AAD - ASCII Adjust After Division

```json
sub     ah, ah
mov     al, '9'
sub     al, '3'
aas
or      al, 30h
mov     [res], ax
```

## BCD

IDK

# Strings

`$` symbol is location counter. It represents the current value of location counter.

```json
msg db "Ahoj"
len equ $ - msg ; gives length of msg
```

## Instructions

Those instructions use `ESI` and `EDI` resp. `SI` and `DI` registers to point to the source and destination operands.

| Instruction | Description |
| --- | --- |
| MOVS | Moves 1 byte/word/doubleword of data from memory location to another. |
| LODS | Loads from memory. If operand is 1 byte, it is loaded into `AL`, 1 word is loaded into `AX` and 1 doubleword is loaded into `EAX`. |
| STOS | Stores data from register (`AL`, `AX`, `EAX`) to memory |
| CMPS | Compares two data items in memory. |
| SCAS | Compares the contents of register (`AL`, `AX`, `EAX`) with the contents of an item memory. | 

Each instuction has a byte, word and doubleword version and can be repeated by using a [repetition prefix](#repetition-prefixes).

| Basic Instruction | Operands at | Byte | Word | Doubleword |
| --- | --- | --- | --- | --- |
| MOVS | ES:DI, DS:SI | MOVSB | MOVSW | MOVSD |
| LODS | AX, DS:SI | LODSB | LODSW | LODSD |
| STOS | ES:DI, AX | STOSB | STOSW | STOSD |
| CMPS | DS:SI, ES:DI | CMPSB | CMPSW | CMPSD |
| SCAS | ES:DI, AX | SCASB | SCASW | SCASD |

These instructions use the `ES:DI` and `DS:SI` pair of registers, where `DI` and `SI` registers contain valid offset addresses that refers to bytes stored in memory. `SI` is normally associated with `DS` (data segment) and `DI` is always associated with `ES` (extra segment).

The `DS:SI` (or `ESI`) and `ES:DI` (or `EDI`) registers point to the source and destination operands, respectively. The source operand is assumed to be at `DS:SI` (or `ESI`) and the destination operand at `ES:DI` (or `EDI`) in memory.

For 16-bit addresses, the `SI` and `DI` registers are used, and for 32-bit addresses, the `ESI` and `EDI` registers are used.

### Repetition Prefixes

The `REP` prefix, when set before a string instruction, causes repetition of the instraction based on a counter placed at `CX` register. `REP` executes the instruction, decrease `CX` by 1, and checks whether `CX` is zero.

- `REP`: It is the unconditional repeat. It repeats the operation until `CX` is zero.
- `REPE` or `REPZ`: It is conditional repeat. It repeats the operation while the zero flag indicates equal/zero. It stops when the `ZF` indicates not equal/zero or when `CX` is zero.
- `REPNE` or `REPNZ`: It is also conditional repeat. It repeats the operation while the zero flag indicates not equal/zero. It stops when the `ZF` indicates equal/zero or when `CX` is decremented to zero.
