// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "mail_module.proto" (syntax proto2)
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
 * @generated from protobuf message NewMailPush
 */
export interface NewMailPush {
    /**
     * @generated from protobuf field: optional Mail mail = 1;
     */
    mail?: Mail;
}
/**
 * @generated from protobuf message ReadMailBatchRequest
 */
export interface ReadMailBatchRequest {
    /**
     * @generated from protobuf field: optional uint32 type = 1;
     */
    type?: number;
}
/**
 * @generated from protobuf message DeleteMailBatchRequest
 */
export interface DeleteMailBatchRequest {
    /**
     * @generated from protobuf field: optional uint32 type = 1;
     */
    type?: number;
}
/**
 * @generated from protobuf message ReadMailReply
 */
export interface ReadMailReply {
    /**
     * @generated from protobuf field: optional uint64 incrId = 1;
     */
    incrId?: bigint;
}
/**
 * @generated from protobuf message MarkMailJumpRequest
 */
export interface MarkMailJumpRequest {
    /**
     * @generated from protobuf field: optional uint64 incrId = 1;
     */
    incrId?: bigint;
}
/**
 * @generated from protobuf message DeleteMailBatchReply
 */
export interface DeleteMailBatchReply {
    /**
     * @generated from protobuf field: repeated uint64 incrIds = 1;
     */
    incrIds: bigint[];
}
/**
 * @generated from protobuf message MarkMailJumpReply
 */
export interface MarkMailJumpReply {
    /**
     * @generated from protobuf field: optional uint64 incrId = 1;
     */
    incrId?: bigint;
}
/**
 * @generated from protobuf message ReadMailRequest
 */
export interface ReadMailRequest {
    /**
     * @generated from protobuf field: optional uint64 incrId = 1;
     */
    incrId?: bigint;
}
/**
 * @generated from protobuf message GetAllMailsReply
 */
export interface GetAllMailsReply {
    /**
     * @generated from protobuf field: repeated Mail mails = 1;
     */
    mails: Mail[];
}
/**
 * @generated from protobuf message Mail
 */
export interface Mail {
    /**
     * @generated from protobuf field: optional uint64 incrId = 1;
     */
    incrId?: bigint;
    /**
     * @generated from protobuf field: optional uint32 mailId = 2;
     */
    mailId?: number;
    /**
     * @generated from protobuf field: optional string params = 3;
     */
    params?: string;
    /**
     * @generated from protobuf field: optional string attachment = 4;
     */
    attachment?: string;
    /**
     * @generated from protobuf field: optional uint32 state = 5;
     */
    state?: number;
    /**
     * @generated from protobuf field: optional uint64 createTime = 6;
     */
    createTime?: bigint;
    /**
     * @generated from protobuf field: optional string sender = 7;
     */
    sender?: string;
    /**
     * @generated from protobuf field: optional string title = 8;
     */
    title?: string;
    /**
     * @generated from protobuf field: optional string content = 9;
     */
    content?: string;
    /**
     * @generated from protobuf field: optional string copy = 10;
     */
    copy?: string;
    /**
     * @generated from protobuf field: optional uint64 expireTime = 11;
     */
    expireTime?: bigint;
    /**
     * @generated from protobuf field: optional int32 senderType = 12;
     */
    senderType?: number;
}
/**
 * @generated from protobuf message DeleteMailsPush
 */
export interface DeleteMailsPush {
    /**
     * @generated from protobuf field: repeated uint64 incrIds = 1;
     */
    incrIds: bigint[];
}
/**
 * @generated from protobuf message GetAllMailsRequest
 */
export interface GetAllMailsRequest {
}
/**
 * @generated from protobuf message ReadMailBatchReply
 */
export interface ReadMailBatchReply {
    /**
     * @generated from protobuf field: repeated uint64 incrIds = 1;
     */
    incrIds: bigint[];
}
// @generated message type with reflection information, may provide speed optimized methods
class NewMailPush$Type extends MessageType<NewMailPush> {
    constructor() {
        super("NewMailPush", [
            { no: 1, name: "mail", kind: "message", T: () => Mail }
        ]);
    }
    create(value?: PartialMessage<NewMailPush>): NewMailPush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<NewMailPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NewMailPush): NewMailPush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional Mail mail */ 1:
                    message.mail = Mail.internalBinaryRead(reader, reader.uint32(), options, message.mail);
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
    internalBinaryWrite(message: NewMailPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional Mail mail = 1; */
        if (message.mail)
            Mail.internalBinaryWrite(message.mail, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message NewMailPush
 */
export const NewMailPush = new NewMailPush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadMailBatchRequest$Type extends MessageType<ReadMailBatchRequest> {
    constructor() {
        super("ReadMailBatchRequest", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReadMailBatchRequest>): ReadMailBatchRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadMailBatchRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadMailBatchRequest): ReadMailBatchRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 1:
                    message.type = reader.uint32();
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
    internalBinaryWrite(message: ReadMailBatchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadMailBatchRequest
 */
export const ReadMailBatchRequest = new ReadMailBatchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteMailBatchRequest$Type extends MessageType<DeleteMailBatchRequest> {
    constructor() {
        super("DeleteMailBatchRequest", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteMailBatchRequest>): DeleteMailBatchRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteMailBatchRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteMailBatchRequest): DeleteMailBatchRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 1:
                    message.type = reader.uint32();
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
    internalBinaryWrite(message: DeleteMailBatchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeleteMailBatchRequest
 */
export const DeleteMailBatchRequest = new DeleteMailBatchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadMailReply$Type extends MessageType<ReadMailReply> {
    constructor() {
        super("ReadMailReply", [
            { no: 1, name: "incrId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ReadMailReply>): ReadMailReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadMailReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadMailReply): ReadMailReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 incrId */ 1:
                    message.incrId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: ReadMailReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 incrId = 1; */
        if (message.incrId !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.incrId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadMailReply
 */
export const ReadMailReply = new ReadMailReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkMailJumpRequest$Type extends MessageType<MarkMailJumpRequest> {
    constructor() {
        super("MarkMailJumpRequest", [
            { no: 1, name: "incrId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<MarkMailJumpRequest>): MarkMailJumpRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarkMailJumpRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarkMailJumpRequest): MarkMailJumpRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 incrId */ 1:
                    message.incrId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: MarkMailJumpRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 incrId = 1; */
        if (message.incrId !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.incrId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MarkMailJumpRequest
 */
export const MarkMailJumpRequest = new MarkMailJumpRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteMailBatchReply$Type extends MessageType<DeleteMailBatchReply> {
    constructor() {
        super("DeleteMailBatchReply", [
            { no: 1, name: "incrIds", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteMailBatchReply>): DeleteMailBatchReply {
        const message = { incrIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteMailBatchReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteMailBatchReply): DeleteMailBatchReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 incrIds */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.incrIds.push(reader.uint64().toBigInt());
                    else
                        message.incrIds.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: DeleteMailBatchReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 incrIds = 1; */
        for (let i = 0; i < message.incrIds.length; i++)
            writer.tag(1, WireType.Varint).uint64(message.incrIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeleteMailBatchReply
 */
export const DeleteMailBatchReply = new DeleteMailBatchReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkMailJumpReply$Type extends MessageType<MarkMailJumpReply> {
    constructor() {
        super("MarkMailJumpReply", [
            { no: 1, name: "incrId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<MarkMailJumpReply>): MarkMailJumpReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarkMailJumpReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarkMailJumpReply): MarkMailJumpReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 incrId */ 1:
                    message.incrId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: MarkMailJumpReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 incrId = 1; */
        if (message.incrId !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.incrId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MarkMailJumpReply
 */
export const MarkMailJumpReply = new MarkMailJumpReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadMailRequest$Type extends MessageType<ReadMailRequest> {
    constructor() {
        super("ReadMailRequest", [
            { no: 1, name: "incrId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ReadMailRequest>): ReadMailRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadMailRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadMailRequest): ReadMailRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 incrId */ 1:
                    message.incrId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: ReadMailRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 incrId = 1; */
        if (message.incrId !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.incrId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadMailRequest
 */
export const ReadMailRequest = new ReadMailRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailsReply$Type extends MessageType<GetAllMailsReply> {
    constructor() {
        super("GetAllMailsReply", [
            { no: 1, name: "mails", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => Mail }
        ]);
    }
    create(value?: PartialMessage<GetAllMailsReply>): GetAllMailsReply {
        const message = { mails: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllMailsReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllMailsReply): GetAllMailsReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Mail mails */ 1:
                    message.mails.push(Mail.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetAllMailsReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Mail mails = 1; */
        for (let i = 0; i < message.mails.length; i++)
            Mail.internalBinaryWrite(message.mails[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllMailsReply
 */
export const GetAllMailsReply = new GetAllMailsReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mail$Type extends MessageType<Mail> {
    constructor() {
        super("Mail", [
            { no: 1, name: "incrId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "mailId", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "params", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "attachment", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "createTime", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "sender", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "copy", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "expireTime", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "senderType", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<Mail>): Mail {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Mail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mail): Mail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 incrId */ 1:
                    message.incrId = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 mailId */ 2:
                    message.mailId = reader.uint32();
                    break;
                case /* optional string params */ 3:
                    message.params = reader.string();
                    break;
                case /* optional string attachment */ 4:
                    message.attachment = reader.string();
                    break;
                case /* optional uint32 state */ 5:
                    message.state = reader.uint32();
                    break;
                case /* optional uint64 createTime */ 6:
                    message.createTime = reader.uint64().toBigInt();
                    break;
                case /* optional string sender */ 7:
                    message.sender = reader.string();
                    break;
                case /* optional string title */ 8:
                    message.title = reader.string();
                    break;
                case /* optional string content */ 9:
                    message.content = reader.string();
                    break;
                case /* optional string copy */ 10:
                    message.copy = reader.string();
                    break;
                case /* optional uint64 expireTime */ 11:
                    message.expireTime = reader.uint64().toBigInt();
                    break;
                case /* optional int32 senderType */ 12:
                    message.senderType = reader.int32();
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
    internalBinaryWrite(message: Mail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 incrId = 1; */
        if (message.incrId !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.incrId);
        /* optional uint32 mailId = 2; */
        if (message.mailId !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.mailId);
        /* optional string params = 3; */
        if (message.params !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.params);
        /* optional string attachment = 4; */
        if (message.attachment !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.attachment);
        /* optional uint32 state = 5; */
        if (message.state !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.state);
        /* optional uint64 createTime = 6; */
        if (message.createTime !== undefined)
            writer.tag(6, WireType.Varint).uint64(message.createTime);
        /* optional string sender = 7; */
        if (message.sender !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.sender);
        /* optional string title = 8; */
        if (message.title !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.title);
        /* optional string content = 9; */
        if (message.content !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.content);
        /* optional string copy = 10; */
        if (message.copy !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.copy);
        /* optional uint64 expireTime = 11; */
        if (message.expireTime !== undefined)
            writer.tag(11, WireType.Varint).uint64(message.expireTime);
        /* optional int32 senderType = 12; */
        if (message.senderType !== undefined)
            writer.tag(12, WireType.Varint).int32(message.senderType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Mail
 */
export const Mail = new Mail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteMailsPush$Type extends MessageType<DeleteMailsPush> {
    constructor() {
        super("DeleteMailsPush", [
            { no: 1, name: "incrIds", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteMailsPush>): DeleteMailsPush {
        const message = { incrIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteMailsPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteMailsPush): DeleteMailsPush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 incrIds */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.incrIds.push(reader.uint64().toBigInt());
                    else
                        message.incrIds.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: DeleteMailsPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 incrIds = 1; */
        for (let i = 0; i < message.incrIds.length; i++)
            writer.tag(1, WireType.Varint).uint64(message.incrIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeleteMailsPush
 */
export const DeleteMailsPush = new DeleteMailsPush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailsRequest$Type extends MessageType<GetAllMailsRequest> {
    constructor() {
        super("GetAllMailsRequest", []);
    }
    create(value?: PartialMessage<GetAllMailsRequest>): GetAllMailsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllMailsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllMailsRequest): GetAllMailsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetAllMailsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllMailsRequest
 */
export const GetAllMailsRequest = new GetAllMailsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadMailBatchReply$Type extends MessageType<ReadMailBatchReply> {
    constructor() {
        super("ReadMailBatchReply", [
            { no: 1, name: "incrIds", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ReadMailBatchReply>): ReadMailBatchReply {
        const message = { incrIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadMailBatchReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadMailBatchReply): ReadMailBatchReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 incrIds */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.incrIds.push(reader.uint64().toBigInt());
                    else
                        message.incrIds.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: ReadMailBatchReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 incrIds = 1; */
        for (let i = 0; i < message.incrIds.length; i++)
            writer.tag(1, WireType.Varint).uint64(message.incrIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadMailBatchReply
 */
export const ReadMailBatchReply = new ReadMailBatchReply$Type();
