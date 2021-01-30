// GENERATED CODE -- DO NOT EDIT!

// package: ds.proto
// file: proto/ds.proto

import * as proto_ds_pb from "./ds_pb";
import * as proto_dsmap_pb from "./dsmap_pb";
import * as grpc from "@grpc/grpc-js";

interface IDataStructureService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  mapPut: grpc.MethodDefinition<proto_dsmap_pb.MapPutRequest, proto_dsmap_pb.MapPutResponse>;
}

export const DataStructureService: IDataStructureService;

export interface IDataStructureServer extends grpc.UntypedServiceImplementation {
  mapPut: grpc.handleUnaryCall<proto_dsmap_pb.MapPutRequest, proto_dsmap_pb.MapPutResponse>;
}

export class DataStructureClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  mapPut(argument: proto_dsmap_pb.MapPutRequest, callback: grpc.requestCallback<proto_dsmap_pb.MapPutResponse>): grpc.ClientUnaryCall;
  mapPut(argument: proto_dsmap_pb.MapPutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_dsmap_pb.MapPutResponse>): grpc.ClientUnaryCall;
  mapPut(argument: proto_dsmap_pb.MapPutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_dsmap_pb.MapPutResponse>): grpc.ClientUnaryCall;
}
