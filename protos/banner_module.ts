// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "banner_module.proto" (syntax proto2)
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
 * @generated from protobuf message SetBannerNotShowReply
 */
export interface SetBannerNotShowReply {
    /**
     * @generated from protobuf field: optional int32 id = 1;
     */
    id?: number;
}
/**
 * @generated from protobuf message GetBannerInfoReply
 */
export interface GetBannerInfoReply {
    /**
     * @generated from protobuf field: repeated int32 notShowIds = 1;
     */
    notShowIds: number[];
}
/**
 * @generated from protobuf message GetBannerInfoRequest
 */
export interface GetBannerInfoRequest {
}
/**
 * @generated from protobuf message SetBannerNotShowRequest
 */
export interface SetBannerNotShowRequest {
    /**
     * @generated from protobuf field: optional int32 id = 1;
     */
    id?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SetBannerNotShowReply$Type extends MessageType<SetBannerNotShowReply> {
    constructor() {
        super("SetBannerNotShowReply", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<SetBannerNotShowReply>): SetBannerNotShowReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetBannerNotShowReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetBannerNotShowReply): SetBannerNotShowReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 id */ 1:
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
    internalBinaryWrite(message: SetBannerNotShowReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetBannerNotShowReply
 */
export const SetBannerNotShowReply = new SetBannerNotShowReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBannerInfoReply$Type extends MessageType<GetBannerInfoReply> {
    constructor() {
        super("GetBannerInfoReply", [
            { no: 1, name: "notShowIds", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetBannerInfoReply>): GetBannerInfoReply {
        const message = { notShowIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBannerInfoReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBannerInfoReply): GetBannerInfoReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 notShowIds */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notShowIds.push(reader.int32());
                    else
                        message.notShowIds.push(reader.int32());
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
    internalBinaryWrite(message: GetBannerInfoReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 notShowIds = 1; */
        for (let i = 0; i < message.notShowIds.length; i++)
            writer.tag(1, WireType.Varint).int32(message.notShowIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBannerInfoReply
 */
export const GetBannerInfoReply = new GetBannerInfoReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBannerInfoRequest$Type extends MessageType<GetBannerInfoRequest> {
    constructor() {
        super("GetBannerInfoRequest", []);
    }
    create(value?: PartialMessage<GetBannerInfoRequest>): GetBannerInfoRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBannerInfoRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBannerInfoRequest): GetBannerInfoRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetBannerInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBannerInfoRequest
 */
export const GetBannerInfoRequest = new GetBannerInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetBannerNotShowRequest$Type extends MessageType<SetBannerNotShowRequest> {
    constructor() {
        super("SetBannerNotShowRequest", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<SetBannerNotShowRequest>): SetBannerNotShowRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetBannerNotShowRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetBannerNotShowRequest): SetBannerNotShowRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 id */ 1:
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
    internalBinaryWrite(message: SetBannerNotShowRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetBannerNotShowRequest
 */
export const SetBannerNotShowRequest = new SetBannerNotShowRequest$Type();
