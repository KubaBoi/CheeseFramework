s = "ahoj jak se mas -ˇ^˘^˛°˘`°˙÷×ds/(úsgfs) ja se mam docela fajn"
key = "kloujkkajjnrjjt"

def encode(s, key):
    newS = ""
    for i, ch in enumerate(s):
        keyIndex = i % len(key)

        newS += chr(ord(ch) + ord(key[keyIndex]))
    return newS

def decode(s, key):
    newS = ""
    for i, ch in enumerate(s):
        keyIndex = i % len(key)

        newS += chr(ord(ch) - ord(key[keyIndex]))
    return newS

codedS = encode(s, key)
print(codedS)
print(decode(codedS, key))
