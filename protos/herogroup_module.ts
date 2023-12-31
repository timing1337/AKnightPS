// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "herogroup_module.proto" (syntax proto2)
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
import { HeroGroupInfo } from "./hero_def";
import { FightGroup } from "./fight_def";
import { HeroGroupEquip } from "./hero_def";
/**
 * @generated from protobuf message SetHeroGroupEquipRequest
 */
export interface SetHeroGroupEquipRequest {
    /**
     * @generated from protobuf field: optional int32 groupId = 1;
     */
    groupId?: number;
    /**
     * @generated from protobuf field: optional HeroGroupEquip equip = 2;
     */
    equip?: HeroGroupEquip;
}
/**
 * @generated from protobuf message SetHeroGroupEquipReply
 */
export interface SetHeroGroupEquipReply {
    /**
     * @generated from protobuf field: optional int32 groupId = 1;
     */
    groupId?: number;
    /**
     * @generated from protobuf field: optional HeroGroupEquip equip = 2;
     */
    equip?: HeroGroupEquip;
}
/**
 * @generated from protobuf message SetHeroGroupSnapshotRequest
 */
export interface SetHeroGroupSnapshotRequest {
    /**
     * @generated from protobuf field: optional int32 snapshotId = 1;
     */
    snapshotId?: number;
    /**
     * @generated from protobuf field: optional int32 snapshotSubId = 2;
     */
    snapshotSubId?: number;
    /**
     * @generated from protobuf field: optional FightGroup fightGroup = 3;
     */
    fightGroup?: FightGroup;
}
/**
 * @generated from protobuf message GetHeroGroupListReply
 */
export interface GetHeroGroupListReply {
    /**
     * @generated from protobuf field: repeated HeroGroupInfo groupInfoList = 1;
     */
    groupInfoList: HeroGroupInfo[];
}
/**
 * @generated from protobuf message UpdateHeroGroupReply
 */
export interface UpdateHeroGroupReply {
    /**
     * @generated from protobuf field: optional HeroGroupInfo groupInfo = 1;
     */
    groupInfo?: HeroGroupInfo;
}
/**
 * @generated from protobuf message SetHeroGroupSnapshotReply
 */
export interface SetHeroGroupSnapshotReply {
    /**
     * @generated from protobuf field: optional int32 snapshotId = 1;
     */
    snapshotId?: number;
    /**
     * @generated from protobuf field: optional int32 snapshotSubId = 2;
     */
    snapshotSubId?: number;
    /**
     * @generated from protobuf field: optional FightGroup fightGroup = 3;
     */
    fightGroup?: FightGroup;
}
/**
 * @generated from protobuf message UpdateHeroGroupRequest
 */
export interface UpdateHeroGroupRequest {
    /**
     * @generated from protobuf field: HeroGroupInfo groupInfo = 1;
     */
    groupInfo?: HeroGroupInfo;
}
/**
 * @generated from protobuf message UpdateHeroGroupPush
 */
export interface UpdateHeroGroupPush {
    /**
     * @generated from protobuf field: optional HeroGroupInfo groupInfo = 1;
     */
    groupInfo?: HeroGroupInfo;
}
/**
 * @generated from protobuf message GetHeroGroupListRequest
 */
export interface GetHeroGroupListRequest {
}
// @generated message type with reflection information, may provide speed optimized methods
class SetHeroGroupEquipRequest$Type extends MessageType<SetHeroGroupEquipRequest> {
    constructor() {
        super("SetHeroGroupEquipRequest", [
            { no: 1, name: "groupId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "equip", kind: "message", T: () => HeroGroupEquip }
        ]);
    }
    create(value?: PartialMessage<SetHeroGroupEquipRequest>): SetHeroGroupEquipRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetHeroGroupEquipRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetHeroGroupEquipRequest): SetHeroGroupEquipRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 groupId */ 1:
                    message.groupId = reader.int32();
                    break;
                case /* optional HeroGroupEquip equip */ 2:
                    message.equip = HeroGroupEquip.internalBinaryRead(reader, reader.uint32(), options, message.equip);
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
    internalBinaryWrite(message: SetHeroGroupEquipRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 groupId = 1; */
        if (message.groupId !== undefined)
            writer.tag(1, WireType.Varint).int32(message.groupId);
        /* optional HeroGroupEquip equip = 2; */
        if (message.equip)
            HeroGroupEquip.internalBinaryWrite(message.equip, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetHeroGroupEquipRequest
 */
export const SetHeroGroupEquipRequest = new SetHeroGroupEquipRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetHeroGroupEquipReply$Type extends MessageType<SetHeroGroupEquipReply> {
    constructor() {
        super("SetHeroGroupEquipReply", [
            { no: 1, name: "groupId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "equip", kind: "message", T: () => HeroGroupEquip }
        ]);
    }
    create(value?: PartialMessage<SetHeroGroupEquipReply>): SetHeroGroupEquipReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetHeroGroupEquipReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetHeroGroupEquipReply): SetHeroGroupEquipReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 groupId */ 1:
                    message.groupId = reader.int32();
                    break;
                case /* optional HeroGroupEquip equip */ 2:
                    message.equip = HeroGroupEquip.internalBinaryRead(reader, reader.uint32(), options, message.equip);
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
    internalBinaryWrite(message: SetHeroGroupEquipReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 groupId = 1; */
        if (message.groupId !== undefined)
            writer.tag(1, WireType.Varint).int32(message.groupId);
        /* optional HeroGroupEquip equip = 2; */
        if (message.equip)
            HeroGroupEquip.internalBinaryWrite(message.equip, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetHeroGroupEquipReply
 */
export const SetHeroGroupEquipReply = new SetHeroGroupEquipReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetHeroGroupSnapshotRequest$Type extends MessageType<SetHeroGroupSnapshotRequest> {
    constructor() {
        super("SetHeroGroupSnapshotRequest", [
            { no: 1, name: "snapshotId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "snapshotSubId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "fightGroup", kind: "message", T: () => FightGroup }
        ]);
    }
    create(value?: PartialMessage<SetHeroGroupSnapshotRequest>): SetHeroGroupSnapshotRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetHeroGroupSnapshotRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetHeroGroupSnapshotRequest): SetHeroGroupSnapshotRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 snapshotId */ 1:
                    message.snapshotId = reader.int32();
                    break;
                case /* optional int32 snapshotSubId */ 2:
                    message.snapshotSubId = reader.int32();
                    break;
                case /* optional FightGroup fightGroup */ 3:
                    message.fightGroup = FightGroup.internalBinaryRead(reader, reader.uint32(), options, message.fightGroup);
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
    internalBinaryWrite(message: SetHeroGroupSnapshotRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 snapshotId = 1; */
        if (message.snapshotId !== undefined)
            writer.tag(1, WireType.Varint).int32(message.snapshotId);
        /* optional int32 snapshotSubId = 2; */
        if (message.snapshotSubId !== undefined)
            writer.tag(2, WireType.Varint).int32(message.snapshotSubId);
        /* optional FightGroup fightGroup = 3; */
        if (message.fightGroup)
            FightGroup.internalBinaryWrite(message.fightGroup, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetHeroGroupSnapshotRequest
 */
export const SetHeroGroupSnapshotRequest = new SetHeroGroupSnapshotRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHeroGroupListReply$Type extends MessageType<GetHeroGroupListReply> {
    constructor() {
        super("GetHeroGroupListReply", [
            { no: 1, name: "groupInfoList", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => HeroGroupInfo }
        ]);
    }
    create(value?: PartialMessage<GetHeroGroupListReply>): GetHeroGroupListReply {
        const message = { groupInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetHeroGroupListReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetHeroGroupListReply): GetHeroGroupListReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HeroGroupInfo groupInfoList */ 1:
                    message.groupInfoList.push(HeroGroupInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetHeroGroupListReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HeroGroupInfo groupInfoList = 1; */
        for (let i = 0; i < message.groupInfoList.length; i++)
            HeroGroupInfo.internalBinaryWrite(message.groupInfoList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHeroGroupListReply
 */
export const GetHeroGroupListReply = new GetHeroGroupListReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateHeroGroupReply$Type extends MessageType<UpdateHeroGroupReply> {
    constructor() {
        super("UpdateHeroGroupReply", [
            { no: 1, name: "groupInfo", kind: "message", T: () => HeroGroupInfo }
        ]);
    }
    create(value?: PartialMessage<UpdateHeroGroupReply>): UpdateHeroGroupReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateHeroGroupReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateHeroGroupReply): UpdateHeroGroupReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional HeroGroupInfo groupInfo */ 1:
                    message.groupInfo = HeroGroupInfo.internalBinaryRead(reader, reader.uint32(), options, message.groupInfo);
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
    internalBinaryWrite(message: UpdateHeroGroupReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional HeroGroupInfo groupInfo = 1; */
        if (message.groupInfo)
            HeroGroupInfo.internalBinaryWrite(message.groupInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateHeroGroupReply
 */
export const UpdateHeroGroupReply = new UpdateHeroGroupReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetHeroGroupSnapshotReply$Type extends MessageType<SetHeroGroupSnapshotReply> {
    constructor() {
        super("SetHeroGroupSnapshotReply", [
            { no: 1, name: "snapshotId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "snapshotSubId", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "fightGroup", kind: "message", T: () => FightGroup }
        ]);
    }
    create(value?: PartialMessage<SetHeroGroupSnapshotReply>): SetHeroGroupSnapshotReply {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetHeroGroupSnapshotReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetHeroGroupSnapshotReply): SetHeroGroupSnapshotReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 snapshotId */ 1:
                    message.snapshotId = reader.int32();
                    break;
                case /* optional int32 snapshotSubId */ 2:
                    message.snapshotSubId = reader.int32();
                    break;
                case /* optional FightGroup fightGroup */ 3:
                    message.fightGroup = FightGroup.internalBinaryRead(reader, reader.uint32(), options, message.fightGroup);
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
    internalBinaryWrite(message: SetHeroGroupSnapshotReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 snapshotId = 1; */
        if (message.snapshotId !== undefined)
            writer.tag(1, WireType.Varint).int32(message.snapshotId);
        /* optional int32 snapshotSubId = 2; */
        if (message.snapshotSubId !== undefined)
            writer.tag(2, WireType.Varint).int32(message.snapshotSubId);
        /* optional FightGroup fightGroup = 3; */
        if (message.fightGroup)
            FightGroup.internalBinaryWrite(message.fightGroup, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetHeroGroupSnapshotReply
 */
export const SetHeroGroupSnapshotReply = new SetHeroGroupSnapshotReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateHeroGroupRequest$Type extends MessageType<UpdateHeroGroupRequest> {
    constructor() {
        super("UpdateHeroGroupRequest", [
            { no: 1, name: "groupInfo", kind: "message", T: () => HeroGroupInfo }
        ]);
    }
    create(value?: PartialMessage<UpdateHeroGroupRequest>): UpdateHeroGroupRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateHeroGroupRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateHeroGroupRequest): UpdateHeroGroupRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* HeroGroupInfo groupInfo */ 1:
                    message.groupInfo = HeroGroupInfo.internalBinaryRead(reader, reader.uint32(), options, message.groupInfo);
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
    internalBinaryWrite(message: UpdateHeroGroupRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* HeroGroupInfo groupInfo = 1; */
        if (message.groupInfo)
            HeroGroupInfo.internalBinaryWrite(message.groupInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateHeroGroupRequest
 */
export const UpdateHeroGroupRequest = new UpdateHeroGroupRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateHeroGroupPush$Type extends MessageType<UpdateHeroGroupPush> {
    constructor() {
        super("UpdateHeroGroupPush", [
            { no: 1, name: "groupInfo", kind: "message", T: () => HeroGroupInfo }
        ]);
    }
    create(value?: PartialMessage<UpdateHeroGroupPush>): UpdateHeroGroupPush {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateHeroGroupPush>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateHeroGroupPush): UpdateHeroGroupPush {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional HeroGroupInfo groupInfo */ 1:
                    message.groupInfo = HeroGroupInfo.internalBinaryRead(reader, reader.uint32(), options, message.groupInfo);
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
    internalBinaryWrite(message: UpdateHeroGroupPush, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional HeroGroupInfo groupInfo = 1; */
        if (message.groupInfo)
            HeroGroupInfo.internalBinaryWrite(message.groupInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateHeroGroupPush
 */
export const UpdateHeroGroupPush = new UpdateHeroGroupPush$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHeroGroupListRequest$Type extends MessageType<GetHeroGroupListRequest> {
    constructor() {
        super("GetHeroGroupListRequest", []);
    }
    create(value?: PartialMessage<GetHeroGroupListRequest>): GetHeroGroupListRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetHeroGroupListRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetHeroGroupListRequest): GetHeroGroupListRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetHeroGroupListRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHeroGroupListRequest
 */
export const GetHeroGroupListRequest = new GetHeroGroupListRequest$Type();
