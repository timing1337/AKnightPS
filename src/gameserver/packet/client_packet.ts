export default class ClientPacket {
    public static PACKET_HEADER = 11;

    constructor(readonly sequence: number, readonly cmdId: number, readonly upTag: number, readonly data: Buffer) {}

    //Will always use from client header
    //TODO: safety check
    static decode(buffer: Buffer): ClientPacket {
        const packetSize = buffer.readUInt32BE(); // 4 bytes
        const sequence = buffer.readUInt32BE(4); // 4 bytes
        const cmdId = buffer.readUInt16BE(8); // 2 bytes
        const upTag = buffer.readUInt8(10); // 1 bytes
        const data = buffer.slice(ClientPacket.PACKET_HEADER);
        return new ClientPacket(sequence, cmdId, upTag, data);
    }
}
