import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js';
import { MapPutRequest, MapPutResponse } from './proto/dsmap_pb';
import { DataStructureService, IDataStructureServer } from './proto/ds_grpc_pb';

// https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/doc/server_impl_signature.md
const impl: IDataStructureServer = {
    mapPut(
        call: ServerUnaryCall<MapPutRequest, MapPutResponse>,
        callback: sendUnaryData<MapPutResponse>
    ) {
        if (call.request) {
            console.log(
                `(server) Got client message: ${call.request.getKey()} => ${call.request.getValue()}`
            );
        }
        callback(null, new MapPutResponse());
    }
}

const host = process.env.HOST_PORT || '0.0.0.0:4000';
const server = new Server();
server.addService(DataStructureService, impl);
server.bindAsync(
    host,
    ServerCredentials.createInsecure(),
    () => {
        console.log(`Server is running port=${host}`);
    }
)