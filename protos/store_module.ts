// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "store_module.proto" (syntax proto2)
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
 * @generated from protobuf message GetStoreInfosReply
 */
export interface GetStoreInfosReply {
    /**
     * @generated from protobuf field: StoreInfo storeInfos = 1;
     */
    storeInfos?: StoreInfo;
}
/**
 * @generated from protobuf message GetStoreInfosRequest
 */
export interface GetStoreInfosRequest {
    /**
     * @generated from protobuf field: int32 storeIds = 1;
     */
    storeIds: number;
}
/**
 * @generated from protobuf message BuyGoodsRequest
 */
export interface BuyGoodsRequest {
    /**
     * @generated from protobuf field: repeated int32 storeId = 1;
     */
    storeId: number[];
    /**
     * @generated from protobuf field: repeated int32 goodsId = 2;
     */
    goodsId: number[];
    /**
     * @generated from protobuf field: repeated int32 num = 3;
     */
    num: number[];
    /**
     * @generated from protobuf field: optional int32 selectCost = 4;
     */
    selectCost?: number;
}
/**
 * @generated from protobuf message BuyGoodsReply
 */
export interface BuyGoodsReply {
    /**
     * @generated from protobuf field: repeated int32 storeId = 1;
     */
    storeId: number[];
    /**
     * @generated from protobuf field: repeated int32 goodsId = 2;
     */
    goodsId: number[];
    /**
     * @generated from protobuf field: repeated int32 num = 3;
     */
    num: number[];
    /**
     * @generated from protobuf field: optional int32 selectCost = 4;
     */
    selectCost?: number;
}
/**
 * @generated from protobuf message GoodsInfo
 */
export interface GoodsInfo {
    /**
     * @generated from protobuf field: repeated int32 goodsId = 1;
     */
    goodsId: number[];
    /**
     * @generated from protobuf field: repeated int32 buyCount = 2;
     */
    buyCount: number[];
    /**
     * @generated from protobuf field: optional int64 offlineTime = 3;
     */
    offlineTime?: bigint;
}
/**
 * @generated from protobuf message StoreInfo
 */
export interface StoreInfo {
    /**
     * @generated from protobuf field: repeated int32 id = 1;
     */
    id: number[];
    /**
     * @generated from protobuf field: repeated int64 nextRefreshTime = 2;
     */
    nextRefreshTime: bigint[];
    /**
     * @generated from protobuf field: GoodsInfo goodsInfos = 3;
     */
    goodsInfos?: GoodsInfo;
    /**
     * @generated from protobuf field: optional int64 offlineTime = 4;
     */
    offlineTime?: bigint;
}
/**
 * @generated from protobuf message ReadStoreNewReply
 */
export interface ReadStoreNewReply {
    /**
     * @generated from protobuf field: int32 goodsIds = 1;
     */
    goodsIds: number;
}
/**
 * @generated from protobuf message ReadStoreNewRequest
 */
export interface ReadStoreNewRequest {
    /**
     * @generated from protobuf field: int32 goodsIds = 1;
     */
    goodsIds: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetStoreInfosReply$Type extends MessageType<GetStoreInfosReply> {
    constructor() {
        super("GetStoreInfosReply", [
            { no: 1, name: "storeInfos", kind: "message", T: () => StoreInfo }
        ]);
    }
    create(value?: PartialMessage<GetStoreInfosReply>): GetStoreInfosReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetStoreInfosReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetStoreInfosReply): GetStoreInfosReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* StoreInfo storeInfos */ 1:
                    message.storeInfos = StoreInfo.internalBinaryRead(reader, reader.uint32(), options, message.storeInfos);
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
    internalBinaryWrite(message: GetStoreInfosReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* StoreInfo storeInfos = 1; */
        if (message.storeInfos)
            StoreInfo.internalBinaryWrite(message.storeInfos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetStoreInfosReply
 */
export const GetStoreInfosReply = new GetStoreInfosReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetStoreInfosRequest$Type extends MessageType<GetStoreInfosRequest> {
    constructor() {
        super("GetStoreInfosRequest", [
            { no: 1, name: "storeIds", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetStoreInfosRequest>): GetStoreInfosRequest {
        const message = { storeIds: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetStoreInfosRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetStoreInfosRequest): GetStoreInfosRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 storeIds */ 1:
                    message.storeIds = reader.int32();
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
    internalBinaryWrite(message: GetStoreInfosRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 storeIds = 1; */
        if (message.storeIds !== 0)
            writer.tag(1, WireType.Varint).int32(message.storeIds);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetStoreInfosRequest
 */
export const GetStoreInfosRequest = new GetStoreInfosRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyGoodsRequest$Type extends MessageType<BuyGoodsRequest> {
    constructor() {
        super("BuyGoodsRequest", [
            { no: 1, name: "storeId", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "goodsId", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "num", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "selectCost", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<BuyGoodsRequest>): BuyGoodsRequest {
        const message = { storeId: [], goodsId: [], num: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuyGoodsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuyGoodsRequest): BuyGoodsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 storeId */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.storeId.push(reader.int32());
                    else
                        message.storeId.push(reader.int32());
                    break;
                case /* repeated int32 goodsId */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.goodsId.push(reader.int32());
                    else
                        message.goodsId.push(reader.int32());
                    break;
                case /* repeated int32 num */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.num.push(reader.int32());
                    else
                        message.num.push(reader.int32());
                    break;
                case /* optional int32 selectCost */ 4:
                    message.selectCost = reader.int32();
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
    internalBinaryWrite(message: BuyGoodsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 storeId = 1; */
        for (let i = 0; i < message.storeId.length; i++)
            writer.tag(1, WireType.Varint).int32(message.storeId[i]);
        /* repeated int32 goodsId = 2; */
        for (let i = 0; i < message.goodsId.length; i++)
            writer.tag(2, WireType.Varint).int32(message.goodsId[i]);
        /* repeated int32 num = 3; */
        for (let i = 0; i < message.num.length; i++)
            writer.tag(3, WireType.Varint).int32(message.num[i]);
        /* optional int32 selectCost = 4; */
        if (message.selectCost !== undefined)
            writer.tag(4, WireType.Varint).int32(message.selectCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuyGoodsRequest
 */
export const BuyGoodsRequest = new BuyGoodsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyGoodsReply$Type extends MessageType<BuyGoodsReply> {
    constructor() {
        super("BuyGoodsReply", [
            { no: 1, name: "storeId", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "goodsId", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "num", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "selectCost", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<BuyGoodsReply>): BuyGoodsReply {
        const message = { storeId: [], goodsId: [], num: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuyGoodsReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuyGoodsReply): BuyGoodsReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 storeId */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.storeId.push(reader.int32());
                    else
                        message.storeId.push(reader.int32());
                    break;
                case /* repeated int32 goodsId */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.goodsId.push(reader.int32());
                    else
                        message.goodsId.push(reader.int32());
                    break;
                case /* repeated int32 num */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.num.push(reader.int32());
                    else
                        message.num.push(reader.int32());
                    break;
                case /* optional int32 selectCost */ 4:
                    message.selectCost = reader.int32();
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
    internalBinaryWrite(message: BuyGoodsReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 storeId = 1; */
        for (let i = 0; i < message.storeId.length; i++)
            writer.tag(1, WireType.Varint).int32(message.storeId[i]);
        /* repeated int32 goodsId = 2; */
        for (let i = 0; i < message.goodsId.length; i++)
            writer.tag(2, WireType.Varint).int32(message.goodsId[i]);
        /* repeated int32 num = 3; */
        for (let i = 0; i < message.num.length; i++)
            writer.tag(3, WireType.Varint).int32(message.num[i]);
        /* optional int32 selectCost = 4; */
        if (message.selectCost !== undefined)
            writer.tag(4, WireType.Varint).int32(message.selectCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuyGoodsReply
 */
export const BuyGoodsReply = new BuyGoodsReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GoodsInfo$Type extends MessageType<GoodsInfo> {
    constructor() {
        super("GoodsInfo", [
            { no: 1, name: "goodsId", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "buyCount", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "offlineTime", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<GoodsInfo>): GoodsInfo {
        const message = { goodsId: [], buyCount: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GoodsInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GoodsInfo): GoodsInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 goodsId */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.goodsId.push(reader.int32());
                    else
                        message.goodsId.push(reader.int32());
                    break;
                case /* repeated int32 buyCount */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buyCount.push(reader.int32());
                    else
                        message.buyCount.push(reader.int32());
                    break;
                case /* optional int64 offlineTime */ 3:
                    message.offlineTime = reader.int64().toBigInt();
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
    internalBinaryWrite(message: GoodsInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 goodsId = 1; */
        for (let i = 0; i < message.goodsId.length; i++)
            writer.tag(1, WireType.Varint).int32(message.goodsId[i]);
        /* repeated int32 buyCount = 2; */
        for (let i = 0; i < message.buyCount.length; i++)
            writer.tag(2, WireType.Varint).int32(message.buyCount[i]);
        /* optional int64 offlineTime = 3; */
        if (message.offlineTime !== undefined)
            writer.tag(3, WireType.Varint).int64(message.offlineTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GoodsInfo
 */
export const GoodsInfo = new GoodsInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreInfo$Type extends MessageType<StoreInfo> {
    constructor() {
        super("StoreInfo", [
            { no: 1, name: "id", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "nextRefreshTime", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "goodsInfos", kind: "message", T: () => GoodsInfo },
            { no: 4, name: "offlineTime", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<StoreInfo>): StoreInfo {
        const message = { id: [], nextRefreshTime: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StoreInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StoreInfo): StoreInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 id */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.id.push(reader.int32());
                    else
                        message.id.push(reader.int32());
                    break;
                case /* repeated int64 nextRefreshTime */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.nextRefreshTime.push(reader.int64().toBigInt());
                    else
                        message.nextRefreshTime.push(reader.int64().toBigInt());
                    break;
                case /* GoodsInfo goodsInfos */ 3:
                    message.goodsInfos = GoodsInfo.internalBinaryRead(reader, reader.uint32(), options, message.goodsInfos);
                    break;
                case /* optional int64 offlineTime */ 4:
                    message.offlineTime = reader.int64().toBigInt();
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
    internalBinaryWrite(message: StoreInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int32 id = 1; */
        for (let i = 0; i < message.id.length; i++)
            writer.tag(1, WireType.Varint).int32(message.id[i]);
        /* repeated int64 nextRefreshTime = 2; */
        for (let i = 0; i < message.nextRefreshTime.length; i++)
            writer.tag(2, WireType.Varint).int64(message.nextRefreshTime[i]);
        /* GoodsInfo goodsInfos = 3; */
        if (message.goodsInfos)
            GoodsInfo.internalBinaryWrite(message.goodsInfos, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* optional int64 offlineTime = 4; */
        if (message.offlineTime !== undefined)
            writer.tag(4, WireType.Varint).int64(message.offlineTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StoreInfo
 */
export const StoreInfo = new StoreInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadStoreNewReply$Type extends MessageType<ReadStoreNewReply> {
    constructor() {
        super("ReadStoreNewReply", [
            { no: 1, name: "goodsIds", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReadStoreNewReply>): ReadStoreNewReply {
        const message = { goodsIds: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadStoreNewReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadStoreNewReply): ReadStoreNewReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 goodsIds */ 1:
                    message.goodsIds = reader.int32();
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
    internalBinaryWrite(message: ReadStoreNewReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 goodsIds = 1; */
        if (message.goodsIds !== 0)
            writer.tag(1, WireType.Varint).int32(message.goodsIds);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadStoreNewReply
 */
export const ReadStoreNewReply = new ReadStoreNewReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadStoreNewRequest$Type extends MessageType<ReadStoreNewRequest> {
    constructor() {
        super("ReadStoreNewRequest", [
            { no: 1, name: "goodsIds", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReadStoreNewRequest>): ReadStoreNewRequest {
        const message = { goodsIds: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReadStoreNewRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadStoreNewRequest): ReadStoreNewRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 goodsIds */ 1:
                    message.goodsIds = reader.int32();
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
    internalBinaryWrite(message: ReadStoreNewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 goodsIds = 1; */
        if (message.goodsIds !== 0)
            writer.tag(1, WireType.Varint).int32(message.goodsIds);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReadStoreNewRequest
 */
export const ReadStoreNewRequest = new ReadStoreNewRequest$Type();