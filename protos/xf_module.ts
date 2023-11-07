// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "xf_module.proto" (syntax proto2)
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
 * @generated from protobuf message MinorPlayTimeOutPush
 */
export interface MinorPlayTimeOutPush {
    /**
     * @generated from protobuf field: optional int32 timeOutHour = 1;
     */
    timeOutHour?: number;
}
/**
 * @generated from protobuf message GuestTimeOutPush
 */
export interface GuestTimeOutPush {
}
/**
 * @generated from protobuf message MinorLimitLoginTimePush
 */
export interface MinorLimitLoginTimePush {
    /**
     * @generated from protobuf field: optional string limitLoginTime = 1;
     */
    limitLoginTime?: string;
    /**
     * @generated from protobuf field: optional bool isLogin = 2;
     */
    isLogin?: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class MinorPlayTimeOutPush$Type extends MessageType<MinorPlayTimeOutPush> {
    constructor() {
        super("MinorPlayTimeOutPush", [
            { no: 1, name: "timeOutHour", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<MinorPlayTimeOutPush>): MinorPlayTimeOutPush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MinorPlayTimeOutPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MinorPlayTimeOutPush): MinorPlayTimeOutPush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 timeOutHour */ 1:
                    message.timeOutHour = reader.int32();
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
    internalBinaryWrite(message: MinorPlayTimeOutPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 timeOutHour = 1; */
        if (message.timeOutHour !== undefined)
            writer.tag(1, WireType.Varint).int32(message.timeOutHour);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MinorPlayTimeOutPush
 */
export const MinorPlayTimeOutPush = new MinorPlayTimeOutPush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GuestTimeOutPush$Type extends MessageType<GuestTimeOutPush> {
    constructor() {
        super("GuestTimeOutPush", []);
    }
    create(value?: PartialMessage<GuestTimeOutPush>): GuestTimeOutPush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GuestTimeOutPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GuestTimeOutPush): GuestTimeOutPush {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GuestTimeOutPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GuestTimeOutPush
 */
export const GuestTimeOutPush = new GuestTimeOutPush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinorLimitLoginTimePush$Type extends MessageType<MinorLimitLoginTimePush> {
    constructor() {
        super("MinorLimitLoginTimePush", [
            { no: 1, name: "limitLoginTime", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "isLogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MinorLimitLoginTimePush>): MinorLimitLoginTimePush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MinorLimitLoginTimePush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MinorLimitLoginTimePush): MinorLimitLoginTimePush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string limitLoginTime */ 1:
                    message.limitLoginTime = reader.string();
                    break;
                case /* optional bool isLogin */ 2:
                    message.isLogin = reader.bool();
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
    internalBinaryWrite(message: MinorLimitLoginTimePush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string limitLoginTime = 1; */
        if (message.limitLoginTime !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.limitLoginTime);
        /* optional bool isLogin = 2; */
        if (message.isLogin !== undefined)
            writer.tag(2, WireType.Varint).bool(message.isLogin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MinorLimitLoginTimePush
 */
export const MinorLimitLoginTimePush = new MinorLimitLoginTimePush$Type();
