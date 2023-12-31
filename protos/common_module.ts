// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "common_module.proto" (syntax proto2)
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
 * @generated from protobuf message GetServerTimeReply
 */
export interface GetServerTimeReply {
    /**
     * @generated from protobuf field: optional uint64 serverTime = 1;
     */
    serverTime?: bigint;
    /**
     * @generated from protobuf field: optional int64 offsetTime = 2;
     */
    offsetTime?: bigint;
}
/**
 * @generated from protobuf message GetServerTimeRequest
 */
export interface GetServerTimeRequest {
}
// @generated message type with reflection information, may provide speed optimized methods
class GetServerTimeReply$Type extends MessageType<GetServerTimeReply> {
    constructor() {
        super("GetServerTimeReply", [
            { no: 1, name: "serverTime", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "offsetTime", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<GetServerTimeReply>): GetServerTimeReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetServerTimeReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetServerTimeReply): GetServerTimeReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 serverTime */ 1:
                    message.serverTime = reader.uint64().toBigInt();
                    break;
                case /* optional int64 offsetTime */ 2:
                    message.offsetTime = reader.int64().toBigInt();
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
    internalBinaryWrite(message: GetServerTimeReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 serverTime = 1; */
        if (message.serverTime !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.serverTime);
        /* optional int64 offsetTime = 2; */
        if (message.offsetTime !== undefined)
            writer.tag(2, WireType.Varint).int64(message.offsetTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetServerTimeReply
 */
export const GetServerTimeReply = new GetServerTimeReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetServerTimeRequest$Type extends MessageType<GetServerTimeRequest> {
    constructor() {
        super("GetServerTimeRequest", []);
    }
    create(value?: PartialMessage<GetServerTimeRequest>): GetServerTimeRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetServerTimeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetServerTimeRequest): GetServerTimeRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetServerTimeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetServerTimeRequest
 */
export const GetServerTimeRequest = new GetServerTimeRequest$Type();
