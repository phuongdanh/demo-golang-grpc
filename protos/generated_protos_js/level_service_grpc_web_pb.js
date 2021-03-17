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


var level_message_pb = require('./level_message_pb.js')
const proto = {};
proto.protos = require('./level_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.LevelServiceClient =
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
proto.protos.LevelServicePromiseClient =
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
 *   !proto.protos.ListLevelRequest,
 *   !proto.protos.ListLevelResponse>}
 */
const methodDescriptor_LevelService_list = new grpc.web.MethodDescriptor(
  '/protos.LevelService/list',
  grpc.web.MethodType.UNARY,
  level_message_pb.ListLevelRequest,
  level_message_pb.ListLevelResponse,
  /**
   * @param {!proto.protos.ListLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.ListLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListLevelRequest,
 *   !proto.protos.ListLevelResponse>}
 */
const methodInfo_LevelService_list = new grpc.web.AbstractClientBase.MethodInfo(
  level_message_pb.ListLevelResponse,
  /**
   * @param {!proto.protos.ListLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.ListLevelResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.LevelServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.LevelService/list',
      request,
      metadata || {},
      methodDescriptor_LevelService_list,
      callback);
};


/**
 * @param {!proto.protos.ListLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListLevelResponse>}
 *     Promise that resolves to the response
 */
proto.protos.LevelServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.LevelService/list',
      request,
      metadata || {},
      methodDescriptor_LevelService_list);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.GetLevelRequest,
 *   !proto.protos.GetLevelResponse>}
 */
const methodDescriptor_LevelService_get = new grpc.web.MethodDescriptor(
  '/protos.LevelService/get',
  grpc.web.MethodType.UNARY,
  level_message_pb.GetLevelRequest,
  level_message_pb.GetLevelResponse,
  /**
   * @param {!proto.protos.GetLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.GetLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetLevelRequest,
 *   !proto.protos.GetLevelResponse>}
 */
const methodInfo_LevelService_get = new grpc.web.AbstractClientBase.MethodInfo(
  level_message_pb.GetLevelResponse,
  /**
   * @param {!proto.protos.GetLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.GetLevelResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.LevelServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.LevelService/get',
      request,
      metadata || {},
      methodDescriptor_LevelService_get,
      callback);
};


/**
 * @param {!proto.protos.GetLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetLevelResponse>}
 *     Promise that resolves to the response
 */
proto.protos.LevelServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.LevelService/get',
      request,
      metadata || {},
      methodDescriptor_LevelService_get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.CreateLevelRequest,
 *   !proto.protos.CreateLevelResponse>}
 */
const methodDescriptor_LevelService_create = new grpc.web.MethodDescriptor(
  '/protos.LevelService/create',
  grpc.web.MethodType.UNARY,
  level_message_pb.CreateLevelRequest,
  level_message_pb.CreateLevelResponse,
  /**
   * @param {!proto.protos.CreateLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.CreateLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateLevelRequest,
 *   !proto.protos.CreateLevelResponse>}
 */
const methodInfo_LevelService_create = new grpc.web.AbstractClientBase.MethodInfo(
  level_message_pb.CreateLevelResponse,
  /**
   * @param {!proto.protos.CreateLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.CreateLevelResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.LevelServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.LevelService/create',
      request,
      metadata || {},
      methodDescriptor_LevelService_create,
      callback);
};


/**
 * @param {!proto.protos.CreateLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateLevelResponse>}
 *     Promise that resolves to the response
 */
proto.protos.LevelServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.LevelService/create',
      request,
      metadata || {},
      methodDescriptor_LevelService_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.UpdateLevelRequest,
 *   !proto.protos.UpdateLevelResponse>}
 */
const methodDescriptor_LevelService_update = new grpc.web.MethodDescriptor(
  '/protos.LevelService/update',
  grpc.web.MethodType.UNARY,
  level_message_pb.UpdateLevelRequest,
  level_message_pb.UpdateLevelResponse,
  /**
   * @param {!proto.protos.UpdateLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.UpdateLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateLevelRequest,
 *   !proto.protos.UpdateLevelResponse>}
 */
const methodInfo_LevelService_update = new grpc.web.AbstractClientBase.MethodInfo(
  level_message_pb.UpdateLevelResponse,
  /**
   * @param {!proto.protos.UpdateLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.UpdateLevelResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.LevelServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.LevelService/update',
      request,
      metadata || {},
      methodDescriptor_LevelService_update,
      callback);
};


/**
 * @param {!proto.protos.UpdateLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateLevelResponse>}
 *     Promise that resolves to the response
 */
proto.protos.LevelServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.LevelService/update',
      request,
      metadata || {},
      methodDescriptor_LevelService_update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.DeleteLevelRequest,
 *   !proto.protos.DeleteLevelResponse>}
 */
const methodDescriptor_LevelService_delete = new grpc.web.MethodDescriptor(
  '/protos.LevelService/delete',
  grpc.web.MethodType.UNARY,
  level_message_pb.DeleteLevelRequest,
  level_message_pb.DeleteLevelResponse,
  /**
   * @param {!proto.protos.DeleteLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.DeleteLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteLevelRequest,
 *   !proto.protos.DeleteLevelResponse>}
 */
const methodInfo_LevelService_delete = new grpc.web.AbstractClientBase.MethodInfo(
  level_message_pb.DeleteLevelResponse,
  /**
   * @param {!proto.protos.DeleteLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  level_message_pb.DeleteLevelResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteLevelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteLevelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.LevelServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.LevelService/delete',
      request,
      metadata || {},
      methodDescriptor_LevelService_delete,
      callback);
};


/**
 * @param {!proto.protos.DeleteLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteLevelResponse>}
 *     Promise that resolves to the response
 */
proto.protos.LevelServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.LevelService/delete',
      request,
      metadata || {},
      methodDescriptor_LevelService_delete);
};


module.exports = proto.protos;

