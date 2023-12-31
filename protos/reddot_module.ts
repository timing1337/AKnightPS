// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "reddot_module.proto" (syntax proto2)
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
 * @generated from protobuf message RedDotInfo
 */
export interface RedDotInfo {
    /**
     * @generated from protobuf field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: int32 value = 2;
     */
    value: number;
    /**
     * @generated from protobuf field: optional int32 time = 3;
     */
    time?: number;
    /**
     * @generated from protobuf field: optional string ext = 4;
     */
    ext?: string;
}
/**
 * @generated from protobuf message ShowRedDotReply
 */
export interface ShowRedDotReply {
}
/**
 * @generated from protobuf message GetRedDotInfosRequest
 */
export interface GetRedDotInfosRequest {
    /**
     * @generated from protobuf field: repeated int32 ids = 1;
     */
    ids: number[];
}
/**
 * @generated from protobuf message ShowRedDotRequest
 */
export interface ShowRedDotRequest {
    /**
     * @generated from protobuf field: optional int32 defineId = 1;
     */
    defineId?: number;
    /**
     * @generated from protobuf field: optional bool isVisible = 2;
     */
    isVisible?: boolean;
}
/**
 * @generated from protobuf message GetRedDotInfosReply
 */
export interface GetRedDotInfosReply {
    /**
     * @generated from protobuf field: repeated RedDotGroup redDotInfos = 1;
     */
    redDotInfos: RedDotGroup[];
}
/**
 * @generated from protobuf message RedDotGroup
 */
export interface RedDotGroup {
    /**
     * @generated from protobuf field: int32 defineId = 1;
     */
    defineId: number;
    /**
     * @generated from protobuf field: repeated RedDotInfo infos = 2;
     */
    infos: RedDotInfo[];
    /**
     * @generated from protobuf field: optional bool replaceAll = 3;
     */
    replaceAll?: boolean;
}
/**
 * @generated from protobuf message UpdateRedDotPush
 */
export interface UpdateRedDotPush {
    /**
     * @generated from protobuf field: repeated RedDotGroup redDotInfos = 1;
     */
    redDotInfos: RedDotGroup[];
    /**
     * @generated from protobuf field: optional bool replaceAll = 2;
     */
    replaceAll?: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class RedDotInfo$Type extends MessageType<RedDotInfo> {
    constructor() {
        super("RedDotInfo", [
            { no: 1, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "value", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "time", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "ext", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RedDotInfo>): RedDotInfo {
        const message = { id: 0n, value: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RedDotInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RedDotInfo): RedDotInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* int32 value */ 2:
                    message.value = reader.int32();
                    break;
                case /* optional int32 time */ 3:
                    message.time = reader.int32();
                    break;
                case /* optional string ext */ 4:
                    message.ext = reader.string();
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
    internalBinaryWrite(message: RedDotInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).int64(message.id);
        /* int32 value = 2; */
        if (message.value !== 0)
            writer.tag(2, WireType.Varint).int32(message.value);
        /* optional int32 time = 3; */
        if (message.time !== undefined)
            writer.tag(3, WireType.Varint).int32(message.time);
        /* optional string ext = 4; */
        if (message.ext !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.ext);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RedDotInfo
 */
export const RedDotInfo = new RedDotInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowRedDotReply$Type extends MessageType<ShowRedDotReply> {
    constructor() {
        super("ShowRedDotReply", []);
    }
    create(value?: PartialMessage<ShowRedDotReply>): ShowRedDotReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShowRedDotReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShowRedDotReply): ShowRedDotReply {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ShowRedDotReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowRedDotReply
 */
export const ShowRedDotReply = new ShowRedDotReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRedDotInfosRequest$Type extends MessageType<GetRedDotInfosRequest> {
    constructor() {
        super("GetRedDotInfosRequest", [
            { no: 1, name: "ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetRedDotInfosRequest>): GetRedDotInfosRequest {
        const message = { ids: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetRedDotInfosRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetRedDotInfosRequest): GetRedDotInfosRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 ids */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ids.push(reader.int32());
                    else
                        message.ids.push(reader.int32());
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
    internalBinaryWrite(message: GetRedDotInfosRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 ids = 1; */
        for (let i = 0; i < message.ids.length; i++)
            writer.tag(1, WireType.Varint).int32(message.ids[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetRedDotInfosRequest
 */
export const GetRedDotInfosRequest = new GetRedDotInfosRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowRedDotRequest$Type extends MessageType<ShowRedDotRequest> {
    constructor() {
        super("ShowRedDotRequest", [
            { no: 1, name: "defineId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "isVisible", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ShowRedDotRequest>): ShowRedDotRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShowRedDotRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShowRedDotRequest): ShowRedDotRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 defineId */ 1:
                    message.defineId = reader.int32();
                    break;
                case /* optional bool isVisible */ 2:
                    message.isVisible = reader.bool();
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
    internalBinaryWrite(message: ShowRedDotRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 defineId = 1; */
        if (message.defineId !== undefined)
            writer.tag(1, WireType.Varint).int32(message.defineId);
        /* optional bool isVisible = 2; */
        if (message.isVisible !== undefined)
            writer.tag(2, WireType.Varint).bool(message.isVisible);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowRedDotRequest
 */
export const ShowRedDotRequest = new ShowRedDotRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRedDotInfosReply$Type extends MessageType<GetRedDotInfosReply> {
    constructor() {
        super("GetRedDotInfosReply", [
            { no: 1, name: "redDotInfos", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => RedDotGroup }
        ]);
    }
    create(value?: PartialMessage<GetRedDotInfosReply>): GetRedDotInfosReply {
        const message = { redDotInfos: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetRedDotInfosReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetRedDotInfosReply): GetRedDotInfosReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated RedDotGroup redDotInfos */ 1:
                    message.redDotInfos.push(RedDotGroup.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetRedDotInfosReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated RedDotGroup redDotInfos = 1; */
        for (let i = 0; i < message.redDotInfos.length; i++)
            RedDotGroup.internalBinaryWrite(message.redDotInfos[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetRedDotInfosReply
 */
export const GetRedDotInfosReply = new GetRedDotInfosReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RedDotGroup$Type extends MessageType<RedDotGroup> {
    constructor() {
        super("RedDotGroup", [
            { no: 1, name: "defineId", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "infos", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => RedDotInfo },
            { no: 3, name: "replaceAll", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<RedDotGroup>): RedDotGroup {
        const message = { defineId: 0, infos: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RedDotGroup>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RedDotGroup): RedDotGroup {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 defineId */ 1:
                    message.defineId = reader.int32();
                    break;
                case /* repeated RedDotInfo infos */ 2:
                    message.infos.push(RedDotInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool replaceAll */ 3:
                    message.replaceAll = reader.bool();
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
    internalBinaryWrite(message: RedDotGroup, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 defineId = 1; */
        if (message.defineId !== 0)
            writer.tag(1, WireType.Varint).int32(message.defineId);
        /* repeated RedDotInfo infos = 2; */
        for (let i = 0; i < message.infos.length; i++)
            RedDotInfo.internalBinaryWrite(message.infos[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* optional bool replaceAll = 3; */
        if (message.replaceAll !== undefined)
            writer.tag(3, WireType.Varint).bool(message.replaceAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RedDotGroup
 */
export const RedDotGroup = new RedDotGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateRedDotPush$Type extends MessageType<UpdateRedDotPush> {
    constructor() {
        super("UpdateRedDotPush", [
            { no: 1, name: "redDotInfos", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => RedDotGroup },
            { no: 2, name: "replaceAll", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateRedDotPush>): UpdateRedDotPush {
        const message = { redDotInfos: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateRedDotPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateRedDotPush): UpdateRedDotPush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated RedDotGroup redDotInfos */ 1:
                    message.redDotInfos.push(RedDotGroup.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool replaceAll */ 2:
                    message.replaceAll = reader.bool();
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
    internalBinaryWrite(message: UpdateRedDotPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated RedDotGroup redDotInfos = 1; */
        for (let i = 0; i < message.redDotInfos.length; i++)
            RedDotGroup.internalBinaryWrite(message.redDotInfos[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional bool replaceAll = 2; */
        if (message.replaceAll !== undefined)
            writer.tag(2, WireType.Varint).bool(message.replaceAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateRedDotPush
 */
export const UpdateRedDotPush = new UpdateRedDotPush$Type();
