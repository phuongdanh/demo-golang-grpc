/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var round_message_pb = require('./round_message_pb.js')
const proto = {};
proto.protos = require('./round_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.RoundServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.RoundServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.ListRoundRequest,
 *   !proto.protos.ListRoundResponse>}
 */
const methodDescriptor_RoundService_List = new grpc.web.MethodDescriptor(
  '/protos.RoundService/List',
  grpc.web.MethodType.UNARY,
  round_message_pb.ListRoundRequest,
  round_message_pb.ListRoundResponse,
  /**
   * @param {!proto.protos.ListRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.ListRoundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListRoundRequest,
 *   !proto.protos.ListRoundResponse>}
 */
const methodInfo_RoundService_List = new grpc.web.AbstractClientBase.MethodInfo(
  round_message_pb.ListRoundResponse,
  /**
   * @param {!proto.protos.ListRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.ListRoundResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListRoundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListRoundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.RoundServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.RoundService/List',
      request,
      metadata || {},
      methodDescriptor_RoundService_List,
      callback);
};


/**
 * @param {!proto.protos.ListRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListRoundResponse>}
 *     Promise that resolves to the response
 */
proto.protos.RoundServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.RoundService/List',
      request,
      metadata || {},
      methodDescriptor_RoundService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.GetRoundRequest,
 *   !proto.protos.GetRoundResponse>}
 */
const methodDescriptor_RoundService_Get = new grpc.web.MethodDescriptor(
  '/protos.RoundService/Get',
  grpc.web.MethodType.UNARY,
  round_message_pb.GetRoundRequest,
  round_message_pb.GetRoundResponse,
  /**
   * @param {!proto.protos.GetRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.GetRoundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetRoundRequest,
 *   !proto.protos.GetRoundResponse>}
 */
const methodInfo_RoundService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  round_message_pb.GetRoundResponse,
  /**
   * @param {!proto.protos.GetRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.GetRoundResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetRoundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetRoundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.RoundServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.RoundService/Get',
      request,
      metadata || {},
      methodDescriptor_RoundService_Get,
      callback);
};


/**
 * @param {!proto.protos.GetRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetRoundResponse>}
 *     Promise that resolves to the response
 */
proto.protos.RoundServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.RoundService/Get',
      request,
      metadata || {},
      methodDescriptor_RoundService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.CreateRoundRequest,
 *   !proto.protos.CreateRoundResponse>}
 */
const methodDescriptor_RoundService_Create = new grpc.web.MethodDescriptor(
  '/protos.RoundService/Create',
  grpc.web.MethodType.UNARY,
  round_message_pb.CreateRoundRequest,
  round_message_pb.CreateRoundResponse,
  /**
   * @param {!proto.protos.CreateRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.CreateRoundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateRoundRequest,
 *   !proto.protos.CreateRoundResponse>}
 */
const methodInfo_RoundService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  round_message_pb.CreateRoundResponse,
  /**
   * @param {!proto.protos.CreateRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.CreateRoundResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateRoundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateRoundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.RoundServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.RoundService/Create',
      request,
      metadata || {},
      methodDescriptor_RoundService_Create,
      callback);
};


/**
 * @param {!proto.protos.CreateRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateRoundResponse>}
 *     Promise that resolves to the response
 */
proto.protos.RoundServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.RoundService/Create',
      request,
      metadata || {},
      methodDescriptor_RoundService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.UpdateRoundRequest,
 *   !proto.protos.UpdateRoundResponse>}
 */
const methodDescriptor_RoundService_Update = new grpc.web.MethodDescriptor(
  '/protos.RoundService/Update',
  grpc.web.MethodType.UNARY,
  round_message_pb.UpdateRoundRequest,
  round_message_pb.UpdateRoundResponse,
  /**
   * @param {!proto.protos.UpdateRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.UpdateRoundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateRoundRequest,
 *   !proto.protos.UpdateRoundResponse>}
 */
const methodInfo_RoundService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  round_message_pb.UpdateRoundResponse,
  /**
   * @param {!proto.protos.UpdateRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.UpdateRoundResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateRoundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateRoundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.RoundServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.RoundService/Update',
      request,
      metadata || {},
      methodDescriptor_RoundService_Update,
      callback);
};


/**
 * @param {!proto.protos.UpdateRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateRoundResponse>}
 *     Promise that resolves to the response
 */
proto.protos.RoundServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.RoundService/Update',
      request,
      metadata || {},
      methodDescriptor_RoundService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.DeleteRoundRequest,
 *   !proto.protos.DeleteRoundResponse>}
 */
const methodDescriptor_RoundService_Delte = new grpc.web.MethodDescriptor(
  '/protos.RoundService/Delte',
  grpc.web.MethodType.UNARY,
  round_message_pb.DeleteRoundRequest,
  round_message_pb.DeleteRoundResponse,
  /**
   * @param {!proto.protos.DeleteRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.DeleteRoundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteRoundRequest,
 *   !proto.protos.DeleteRoundResponse>}
 */
const methodInfo_RoundService_Delte = new grpc.web.AbstractClientBase.MethodInfo(
  round_message_pb.DeleteRoundResponse,
  /**
   * @param {!proto.protos.DeleteRoundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  round_message_pb.DeleteRoundResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteRoundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteRoundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.RoundServiceClient.prototype.delte =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.RoundService/Delte',
      request,
      metadata || {},
      methodDescriptor_RoundService_Delte,
      callback);
};


/**
 * @param {!proto.protos.DeleteRoundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteRoundResponse>}
 *     Promise that resolves to the response
 */
proto.protos.RoundServicePromiseClient.prototype.delte =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.RoundService/Delte',
      request,
      metadata || {},
      methodDescriptor_RoundService_Delte);
};


module.exports = proto.protos;

