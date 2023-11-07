export default class ClientPacket {
    public static PACKET_HEADER = 11;

    constructor(readonly sequence: number, readonly cmdId: number, readonly upTag: number, readonly data: Buffer) {}

    //Will always use from client header
    //TODO: safety check
    static decode(buffer: Buffer): ClientPacket {
        const packetSize = buffer.readUInt32BE(); // 4 bytes || amount of this are 4 bytes of sequence + 2 bytes of cmdID + 1 byte of uptag = 7 + data size
        const sequence = buffer.readUInt32BE(4); // 4 bytes
        const cmdId = buffer.readInt16BE(8); // 2 bytes
        const upTag = buffer.readUInt8(10); // 1 bytes
        const data = buffer.subarray(ClientPacket.PACKET_HEADER, ClientPacket.PACKET_HEADER + buffer.length);
        if (buffer.length != packetSize + 4) {
            throw new Error(`Packet Size mismatch. Excepted size: ${packetSize + 4}. Actual result: ${buffer.length}.`);
        }
        return new ClientPacket(sequence, cmdId, upTag, data);
    }
}
