// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "handbook_module.proto" (syntax proto2)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ChatperElementInfo
 */
export interface ChatperElementInfo {
    /**
     * @generated from protobuf field: optional int32 element = 1;
     */
    element?: number;
    /**
     * @generated from protobuf field: int32 dialogIds = 2;
     */
    dialogIds: number;
}
/**
 * @generated from protobuf message GetHandbookInfoRequest
 */
export interface GetHandbookInfoRequest {
}
/**
 * @generated from protobuf message HandbookReadRequest
 */
export interface HandbookReadRequest {
    /**
     * @generated from protobuf field: optional int32 type = 1;
     */
    type?: number;
    /**
     * @generated from protobuf field: optional int32 id = 2;
     */
    id?: number;
}
/**
 * @generated from protobuf message HandbookReadReply
 */
export interface HandbookReadReply {
    /**
     * @generated from protobuf field: optional int32 type = 1;
     */
    type?: number;
    /**
     * @generated from protobuf field: optional int32 id = 2;
     */
    id?: number;
}
/**
 * @generated from protobuf message Handbook
 */
export interface Handbook {
    /**
     * @generated from protobuf field: optional int32 type = 1;
     */
    type?: number;
    /**
     * @generated from protobuf field: optional int32 id = 2;
     */
    id?: number;
    /**
     * @generated from protobuf field: optional bool isRead = 3;
     */
    isRead?: boolean;
}
/**
 * @generated from protobuf message GetHandbookInfoReply
 */
export interface GetHandbookInfoReply {
    /**
     * @generated from protobuf field: Handbook infos = 1;
     */
    infos?: Handbook;
    /**
     * @generated from protobuf field: ChatperElementInfo elementInfo = 2;
     */
    elementInfo?: ChatperElementInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChatperElementInfo$Type extends MessageType<ChatperElementInfo> {
    constructor() {
        super("ChatperElementInfo", [
            { no: 1, name: "element", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "dialogIds", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChatperElementInfo>): ChatperElementInfo {
        const message = { dialogIds: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChatperElementInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChatperElementInfo): ChatperElementInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 element */ 1:
                    message.element = reader.int32();
                    break;
                case /* int32 dialogIds */ 2:
                    message.dialogIds = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ChatperElementInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 element = 1; */
        if (message.element !== undefined)
            writer.tag(1, WireType.Varint).int32(message.element);
        /* int32 dialogIds = 2; */
        if (message.dialogIds !== 0)
            writer.tag(2, WireType.Varint).int32(message.dialogIds);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChatperElementInfo
 */
export const ChatperElementInfo = new ChatperElementInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHandbookInfoRequest$Type extends MessageType<GetHandbookInfoRequest> {
    constructor() {
        super("GetHandbookInfoRequest", []);
    }
    create(value?: PartialMessage<GetHandbookInfoRequest>): GetHandbookInfoRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetHandbookInfoRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetHandbookInfoRequest): GetHandbookInfoRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetHandbookInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHandbookInfoRequest
 */
export const GetHandbookInfoRequest = new GetHandbookInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HandbookReadRequest$Type extends MessageType<HandbookReadRequest> {
    constructor() {
        super("HandbookReadRequest", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<HandbookReadRequest>): HandbookReadRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HandbookReadRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HandbookReadRequest): HandbookReadRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* optional int32 id */ 2:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: HandbookReadRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* optional int32 id = 2; */
        if (message.id !== undefined)
            writer.tag(2, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HandbookReadRequest
 */
export const HandbookReadRequest = new HandbookReadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HandbookReadReply$Type extends MessageType<HandbookReadReply> {
    constructor() {
        super("HandbookReadReply", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<HandbookReadReply>): HandbookReadReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HandbookReadReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HandbookReadReply): HandbookReadReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* optional int32 id */ 2:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: HandbookReadReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* optional int32 id = 2; */
        if (message.id !== undefined)
            writer.tag(2, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HandbookReadReply
 */
export const HandbookReadReply = new HandbookReadReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Handbook$Type extends MessageType<Handbook> {
    constructor() {
        super("Handbook", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "isRead", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Handbook>): Handbook {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Handbook>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Handbook): Handbook {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* optional int32 id */ 2:
                    message.id = reader.int32();
                    break;
                case /* optional bool isRead */ 3:
                    message.isRead = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Handbook, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* optional int32 id = 2; */
        if (message.id !== undefined)
            writer.tag(2, WireType.Varint).int32(message.id);
        /* optional bool isRead = 3; */
        if (message.isRead !== undefined)
            writer.tag(3, WireType.Varint).bool(message.isRead);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Handbook
 */
export const Handbook = new Handbook$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHandbookInfoReply$Type extends MessageType<GetHandbookInfoReply> {
    constructor() {
        super("GetHandbookInfoReply", [
            { no: 1, name: "infos", kind: "message", T: () => Handbook },
            { no: 2, name: "elementInfo", kind: "message", T: () => ChatperElementInfo }
        ]);
    }
    create(value?: PartialMessage<GetHandbookInfoReply>): GetHandbookInfoReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetHandbookInfoReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetHandbookInfoReply): GetHandbookInfoReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Handbook infos */ 1:
                    message.infos = Handbook.internalBinaryRead(reader, reader.uint32(), options, message.infos);
                    break;
                case /* ChatperElementInfo elementInfo */ 2:
                    message.elementInfo = ChatperElementInfo.internalBinaryRead(reader, reader.uint32(), options, message.elementInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetHandbookInfoReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Handbook infos = 1; */
        if (message.infos)
            Handbook.internalBinaryWrite(message.infos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* ChatperElementInfo elementInfo = 2; */
        if (message.elementInfo)
            ChatperElementInfo.internalBinaryWrite(message.elementInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHandbookInfoReply
 */
export const GetHandbookInfoReply = new GetHandbookInfoReply$Type();