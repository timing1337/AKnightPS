export default class ByteWriting {
    public static BYTE_SIZE = 256; //??? == var_0_1

    /*                  ? ? ?

    these looks like its just length + actual content size but i'll follow their code standard anyways
    
    function var_0_0.ReadString(arg_12_0, arg_12_1)
        local var_12_0 = string.byte(arg_12_0, arg_12_1)
        local var_12_1 = string.byte(arg_12_0, arg_12_1 + 1)
        local var_12_2 = var_12_0 * var_0_1 + var_12_1
        local var_12_3 = string.sub(arg_12_0, arg_12_1 + 2, arg_12_1 + 2 + var_12_2 - 1)
        return arg_12_1 + 2 + var_12_2, var_12_3
    end

    */

    public static readString(buffer: Buffer, offset: number = 0): [number, string] {
        const firstByte = buffer.readUInt8(offset);
        const secondByte = buffer.readUInt8(offset + 1);
        const length = firstByte * ByteWriting.BYTE_SIZE + secondByte;
        return [length, buffer.slice(offset + 2, offset + 2 + length).toString()];
    }

    /*

    function var_0_0.WriteString(arg_15_0)
        local var_15_0 = #arg_15_0
        local var_15_1 = math.floor(var_15_0 / var_0_1)
        local var_15_2 = math.floor(var_15_0 % var_0_1)
    
        return string.char(var_15_1) .. string.char(var_15_2) .. arg_15_0
    end

    */

    public static writeString(buffer: Buffer, string: string, offset: number = 0): Buffer {
        buffer.writeUInt8(string.length / ByteWriting.BYTE_SIZE, offset);
        buffer.writeUInt8(string.length % ByteWriting.BYTE_SIZE, offset + 1);
        Buffer.from(string, 'utf-8').copy(buffer, offset + 2); //ehm what the frick
        return buffer;
    }
}
