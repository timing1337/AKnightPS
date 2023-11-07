// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "item_module.proto" (syntax proto2)
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
import { M2QEntry } from "./material_module";
/**
 * @generated from protobuf message Item
 */
export interface Item {
    /**
     * @generated from protobuf field: optional uint32 itemId = 1;
     */
    itemId?: number;
    /**
     * @generated from protobuf field: optional int32 quantity = 2;
     */
    quantity?: number;
    /**
     * @generated from protobuf field: optional uint64 lastUseTime = 3;
     */
    lastUseTime?: bigint;
    /**
     * @generated from protobuf field: optional int64 totalGainCount = 4;
     */
    totalGainCount?: bigint;
}
/**
 * @generated from protobuf message GetItemListRequest
 */
export interface GetItemListRequest {
}
/**
 * @generated from protobuf message PowerItem
 */
export interface PowerItem {
    /**
     * @generated from protobuf field: optional int64 uid = 1;
     */
    uid?: bigint;
    /**
     * @generated from protobuf field: optional int64 itemId = 2;
     */
    itemId?: bigint;
    /**
     * @generated from protobuf field: optional int32 quantity = 3;
     */
    quantity?: number;
    /**
     * @generated from protobuf field: optional int32 expireTime = 4;
     */
    expireTime?: number;
}
/**
 * @generated from protobuf message UseItemReply
 */
export interface UseItemReply {
}
/**
 * @generated from protobuf message ItemChangePush
 */
export interface ItemChangePush {
    /**
     * @generated from protobuf field: Item items = 1;
     */
    items?: Item;
    /**
     * @generated from protobuf field: PowerItem powerItems = 2;
     */
    powerItems?: PowerItem;
}
/**
 * @generated from protobuf message GetItemListReply
 */
export interface GetItemListReply {
    /**
     * @generated from protobuf field: Item items = 1;
     */
    items?: Item;
    /**
     * @generated from protobuf field: PowerItem powerItems = 2;
     */
    powerItems?: PowerItem;
}
/**
 * @generated from protobuf message UsePowerItemRequest
 */
export interface UsePowerItemRequest {
    /**
     * @generated from protobuf field: optional int64 uid = 1;
     */
    uid?: bigint;
}
/**
 * @generated from protobuf message UsePowerItemReply
 */
export interface UsePowerItemReply {
    /**
     * @generated from protobuf field: optional int64 uid = 1;
     */
    uid?: bigint;
}
/**
 * @generated from protobuf message UseItemRequest
 */
export interface UseItemRequest {
    /**
     * @generated from protobuf field: M2QEntry entry = 1;
     */
    entry?: M2QEntry;
    /**
     * @generated from protobuf field: optional uint64 targetId = 2;
     */
    targetId?: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class Item$Type extends MessageType<Item> {
    constructor() {
        super("Item", [
            { no: 1, name: "itemId", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "quantity", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "lastUseTime", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "totalGainCount", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Item>): Item {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Item>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Item): Item {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 itemId */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional int32 quantity */ 2:
                    message.quantity = reader.int32();
                    break;
                case /* optional uint64 lastUseTime */ 3:
                    message.lastUseTime = reader.uint64().toBigInt();
                    break;
                case /* optional int64 totalGainCount */ 4:
                    message.totalGainCount = reader.int64().toBigInt();
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
    internalBinaryWrite(message: Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 itemId = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.itemId);
        /* optional int32 quantity = 2; */
        if (message.quantity !== undefined)
            writer.tag(2, WireType.Varint).int32(message.quantity);
        /* optional uint64 lastUseTime = 3; */
        if (message.lastUseTime !== undefined)
            writer.tag(3, WireType.Varint).uint64(message.lastUseTime);
        /* optional int64 totalGainCount = 4; */
        if (message.totalGainCount !== undefined)
            writer.tag(4, WireType.Varint).int64(message.totalGainCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Item
 */
export const Item = new Item$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetItemListRequest$Type extends MessageType<GetItemListRequest> {
    constructor() {
        super("GetItemListRequest", []);
    }
    create(value?: PartialMessage<GetItemListRequest>): GetItemListRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetItemListRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetItemListRequest): GetItemListRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetItemListRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetItemListRequest
 */
export const GetItemListRequest = new GetItemListRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PowerItem$Type extends MessageType<PowerItem> {
    constructor() {
        super("PowerItem", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "itemId", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "quantity", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "expireTime", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<PowerItem>): PowerItem {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PowerItem>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PowerItem): PowerItem {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 uid */ 1:
                    message.uid = reader.int64().toBigInt();
                    break;
                case /* optional int64 itemId */ 2:
                    message.itemId = reader.int64().toBigInt();
                    break;
                case /* optional int32 quantity */ 3:
                    message.quantity = reader.int32();
                    break;
                case /* optional int32 expireTime */ 4:
                    message.expireTime = reader.int32();
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
    internalBinaryWrite(message: PowerItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, WireType.Varint).int64(message.uid);
        /* optional int64 itemId = 2; */
        if (message.itemId !== undefined)
            writer.tag(2, WireType.Varint).int64(message.itemId);
        /* optional int32 quantity = 3; */
        if (message.quantity !== undefined)
            writer.tag(3, WireType.Varint).int32(message.quantity);
        /* optional int32 expireTime = 4; */
        if (message.expireTime !== undefined)
            writer.tag(4, WireType.Varint).int32(message.expireTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PowerItem
 */
export const PowerItem = new PowerItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseItemReply$Type extends MessageType<UseItemReply> {
    constructor() {
        super("UseItemReply", []);
    }
    create(value?: PartialMessage<UseItemReply>): UseItemReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UseItemReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UseItemReply): UseItemReply {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UseItemReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseItemReply
 */
export const UseItemReply = new UseItemReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemChangePush$Type extends MessageType<ItemChangePush> {
    constructor() {
        super("ItemChangePush", [
            { no: 1, name: "items", kind: "message", T: () => Item },
            { no: 2, name: "powerItems", kind: "message", T: () => PowerItem }
        ]);
    }
    create(value?: PartialMessage<ItemChangePush>): ItemChangePush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ItemChangePush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ItemChangePush): ItemChangePush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Item items */ 1:
                    message.items = Item.internalBinaryRead(reader, reader.uint32(), options, message.items);
                    break;
                case /* PowerItem powerItems */ 2:
                    message.powerItems = PowerItem.internalBinaryRead(reader, reader.uint32(), options, message.powerItems);
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
    internalBinaryWrite(message: ItemChangePush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Item items = 1; */
        if (message.items)
            Item.internalBinaryWrite(message.items, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* PowerItem powerItems = 2; */
        if (message.powerItems)
            PowerItem.internalBinaryWrite(message.powerItems, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemChangePush
 */
export const ItemChangePush = new ItemChangePush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetItemListReply$Type extends MessageType<GetItemListReply> {
    constructor() {
        super("GetItemListReply", [
            { no: 1, name: "items", kind: "message", T: () => Item },
            { no: 2, name: "powerItems", kind: "message", T: () => PowerItem }
        ]);
    }
    create(value?: PartialMessage<GetItemListReply>): GetItemListReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetItemListReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetItemListReply): GetItemListReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Item items */ 1:
                    message.items = Item.internalBinaryRead(reader, reader.uint32(), options, message.items);
                    break;
                case /* PowerItem powerItems */ 2:
                    message.powerItems = PowerItem.internalBinaryRead(reader, reader.uint32(), options, message.powerItems);
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
    internalBinaryWrite(message: GetItemListReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Item items = 1; */
        if (message.items)
            Item.internalBinaryWrite(message.items, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* PowerItem powerItems = 2; */
        if (message.powerItems)
            PowerItem.internalBinaryWrite(message.powerItems, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetItemListReply
 */
export const GetItemListReply = new GetItemListReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UsePowerItemRequest$Type extends MessageType<UsePowerItemRequest> {
    constructor() {
        super("UsePowerItemRequest", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UsePowerItemRequest>): UsePowerItemRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UsePowerItemRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UsePowerItemRequest): UsePowerItemRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 uid */ 1:
                    message.uid = reader.int64().toBigInt();
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
    internalBinaryWrite(message: UsePowerItemRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, WireType.Varint).int64(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UsePowerItemRequest
 */
export const UsePowerItemRequest = new UsePowerItemRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UsePowerItemReply$Type extends MessageType<UsePowerItemReply> {
    constructor() {
        super("UsePowerItemReply", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UsePowerItemReply>): UsePowerItemReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UsePowerItemReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UsePowerItemReply): UsePowerItemReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 uid */ 1:
                    message.uid = reader.int64().toBigInt();
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
    internalBinaryWrite(message: UsePowerItemReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, WireType.Varint).int64(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UsePowerItemReply
 */
export const UsePowerItemReply = new UsePowerItemReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseItemRequest$Type extends MessageType<UseItemRequest> {
    constructor() {
        super("UseItemRequest", [
            { no: 1, name: "entry", kind: "message", T: () => M2QEntry },
            { no: 2, name: "targetId", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UseItemRequest>): UseItemRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UseItemRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UseItemRequest): UseItemRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* M2QEntry entry */ 1:
                    message.entry = M2QEntry.internalBinaryRead(reader, reader.uint32(), options, message.entry);
                    break;
                case /* optional uint64 targetId */ 2:
                    message.targetId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: UseItemRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* M2QEntry entry = 1; */
        if (message.entry)
            M2QEntry.internalBinaryWrite(message.entry, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 targetId = 2; */
        if (message.targetId !== undefined)
            writer.tag(2, WireType.Varint).uint64(message.targetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseItemRequest
 */
export const UseItemRequest = new UseItemRequest$Type();
