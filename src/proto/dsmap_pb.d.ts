// package: ds.proto
// file: proto/dsmap.proto

import * as jspb from "google-protobuf";

export class MapPutRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getDataset(): string;
  setDataset(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapPutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapPutRequest): MapPutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapPutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapPutRequest;
  static deserializeBinaryFromReader(message: MapPutRequest, reader: jspb.BinaryReader): MapPutRequest;
}

export namespace MapPutRequest {
  export type AsObject = {
    accountId: number,
    dataset: string,
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

export class MapPutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapPutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MapPutResponse): MapPutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapPutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapPutResponse;
  static deserializeBinaryFromReader(message: MapPutResponse, reader: jspb.BinaryReader): MapPutResponse;
}

export namespace MapPutResponse {
  export type AsObject = {
  }
}

export class MapGetRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getDataset(): string;
  setDataset(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapGetRequest): MapGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapGetRequest;
  static deserializeBinaryFromReader(message: MapGetRequest, reader: jspb.BinaryReader): MapGetRequest;
}

export namespace MapGetRequest {
  export type AsObject = {
    accountId: number,
    dataset: string,
    key: Uint8Array | string,
  }
}

export class MapGetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MapGetResponse): MapGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapGetResponse;
  static deserializeBinaryFromReader(message: MapGetResponse, reader: jspb.BinaryReader): MapGetResponse;
}

export namespace MapGetResponse {
  export type AsObject = {
  }
}

export class MapDeleteRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getDataset(): string;
  setDataset(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapDeleteRequest): MapDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapDeleteRequest;
  static deserializeBinaryFromReader(message: MapDeleteRequest, reader: jspb.BinaryReader): MapDeleteRequest;
}

export namespace MapDeleteRequest {
  export type AsObject = {
    accountId: number,
    dataset: string,
    key: Uint8Array | string,
  }
}

export class MapDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MapDeleteResponse): MapDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapDeleteResponse;
  static deserializeBinaryFromReader(message: MapDeleteResponse, reader: jspb.BinaryReader): MapDeleteResponse;
}

export namespace MapDeleteResponse {
  export type AsObject = {
  }
}

export class MapIteratorRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getDataset(): string;
  setDataset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapIteratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapIteratorRequest): MapIteratorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapIteratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapIteratorRequest;
  static deserializeBinaryFromReader(message: MapIteratorRequest, reader: jspb.BinaryReader): MapIteratorRequest;
}

export namespace MapIteratorRequest {
  export type AsObject = {
    accountId: number,
    dataset: string,
  }
}

export class MapIteratorResponse extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapIteratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MapIteratorResponse): MapIteratorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapIteratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapIteratorResponse;
  static deserializeBinaryFromReader(message: MapIteratorResponse, reader: jspb.BinaryReader): MapIteratorResponse;
}

export namespace MapIteratorResponse {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

