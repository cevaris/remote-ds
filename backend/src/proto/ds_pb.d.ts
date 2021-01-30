// package: ds.proto
// file: proto/ds.proto

import * as jspb from "google-protobuf";
import * as proto_dsmap_pb from "../proto/dsmap_pb";

export class AuthError extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthError.AsObject;
  static toObject(includeInstance: boolean, msg: AuthError): AuthError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthError;
  static deserializeBinaryFromReader(message: AuthError, reader: jspb.BinaryReader): AuthError;
}

export namespace AuthError {
  export type AsObject = {
    message: string,
  }
}

export class DSError extends jspb.Message {
  hasAuthError(): boolean;
  clearAuthError(): void;
  getAuthError(): AuthError | undefined;
  setAuthError(value?: AuthError): void;

  getEventCase(): DSError.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DSError.AsObject;
  static toObject(includeInstance: boolean, msg: DSError): DSError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DSError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DSError;
  static deserializeBinaryFromReader(message: DSError, reader: jspb.BinaryReader): DSError;
}

export namespace DSError {
  export type AsObject = {
    authError?: AuthError.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    AUTH_ERROR = 1,
  }
}

