export default class ServerPacket {
    public static PACKET_HEADER = 10;

    constructor(readonly cmdId: number, readonly resultCode: number, readonly upTag: number, readonly downTag: number, readonly data: Buffer) {}

    static decode(buffer: Buffer): ServerPacket | undefined {
        const packetSize = buffer.readUInt32BE(); // 4 bytes
        const cmdId = buffer.readUInt16BE(4); // 2 bytes
        const resultCode = buffer.readUInt16BE(6); // 2 bytes
        const upTag = buffer.readUInt8(8); // 1 bytes
        const downTag = buffer.readUInt8(9); // 1 bytes
        const data = buffer.slice(ServerPacket.PACKET_HEADER);
        return new ServerPacket(cmdId, resultCode, upTag, downTag, data);
    }

    public encode(): Buffer {
        const buffer = Buffer.allocUnsafe(ServerPacket.PACKET_HEADER + this.data.length);
        buffer.writeUInt32BE(ServerPacket.PACKET_HEADER + this.data.length - 4, 0);
        buffer.writeUInt16BE(this.cmdId, 4);
        buffer.writeUInt16BE(this.resultCode, 6);
        buffer.writeUInt8(this.upTag, 8);
        buffer.writeUInt8(this.downTag, 9);
        this.data.copy(buffer, ServerPacket.PACKET_HEADER);
        return buffer;
    }
}
