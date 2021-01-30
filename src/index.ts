import * as grpc from '@grpc/grpc-js';
import { MapPutRequest, MapPutResponse } from './proto/dsmap_pb';
import { DataStructureService, IDataStructureServer } from './proto/ds_grpc_pb';

// https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/doc/server_impl_signature.md
const impl: IDataStructureServer = {
    mapPut(
        call: grpc.ServerUnaryCall<MapPutRequest, MapPutResponse>,
        callback: grpc.sendUnaryData<MapPutResponse>
    ) {
        if (call.request) {
            console.log(
                `(server) Got client message: ${call.request.getKey()} => ${call.request.getValue()}`
            );
        }
        callback(null, new MapPutResponse());
    }
}

const port = process.env.PORT || '0.0.0.0:4000';
const server = new grpc.Server();
server.addService(DataStructureService, impl);
server.bindAsync(
    port,
    grpc.ServerCredentials.createInsecure(),
    () => {
        console.log(`Server is running port=${port}`);
    }
)