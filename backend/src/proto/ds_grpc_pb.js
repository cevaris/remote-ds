// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// https://developers.google.com/protocol-buffers/docs/style
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_ds_pb = require('./ds_pb.js');
var proto_dsmap_pb = require('./dsmap_pb.js');

function serialize_ds_proto_MapPutRequest(arg) {
  if (!(arg instanceof proto_dsmap_pb.MapPutRequest)) {
    throw new Error('Expected argument of type ds.proto.MapPutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ds_proto_MapPutRequest(buffer_arg) {
  return proto_dsmap_pb.MapPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ds_proto_MapPutResponse(arg) {
  if (!(arg instanceof proto_dsmap_pb.MapPutResponse)) {
    throw new Error('Expected argument of type ds.proto.MapPutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ds_proto_MapPutResponse(buffer_arg) {
  return proto_dsmap_pb.MapPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataStructureService = exports.DataStructureService = {
  mapPut: {
    path: '/ds.proto.DataStructure/MapPut',
    requestStream: false,
    responseStream: false,
    requestType: proto_dsmap_pb.MapPutRequest,
    responseType: proto_dsmap_pb.MapPutResponse,
    requestSerialize: serialize_ds_proto_MapPutRequest,
    requestDeserialize: deserialize_ds_proto_MapPutRequest,
    responseSerialize: serialize_ds_proto_MapPutResponse,
    responseDeserialize: deserialize_ds_proto_MapPutResponse,
  },
};

exports.DataStructureClient = grpc.makeGenericClientConstructor(DataStructureService);
