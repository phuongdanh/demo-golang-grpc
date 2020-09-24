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


var user_message_pb = require('./user_message_pb.js')
const proto = {};
proto.protos = require('./user_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.UserServiceClient =
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
proto.protos.UserServicePromiseClient =
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
 *   !proto.protos.ListUserRequest,
 *   !proto.protos.ListUserResponse>}
 */
const methodDescriptor_UserService_list = new grpc.web.MethodDescriptor(
  '/protos.UserService/list',
  grpc.web.MethodType.UNARY,
  user_message_pb.ListUserRequest,
  user_message_pb.ListUserResponse,
  /**
   * @param {!proto.protos.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.ListUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.ListUserRequest,
 *   !proto.protos.ListUserResponse>}
 */
const methodInfo_UserService_list = new grpc.web.AbstractClientBase.MethodInfo(
  user_message_pb.ListUserResponse,
  /**
   * @param {!proto.protos.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.ListUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.ListUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.ListUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UserService/list',
      request,
      metadata || {},
      methodDescriptor_UserService_list,
      callback);
};


/**
 * @param {!proto.protos.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.ListUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.UserService/list',
      request,
      metadata || {},
      methodDescriptor_UserService_list);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.GetUserRequest,
 *   !proto.protos.GetUserResponse>}
 */
const methodDescriptor_UserService_get = new grpc.web.MethodDescriptor(
  '/protos.UserService/get',
  grpc.web.MethodType.UNARY,
  user_message_pb.GetUserRequest,
  user_message_pb.GetUserResponse,
  /**
   * @param {!proto.protos.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.GetUserRequest,
 *   !proto.protos.GetUserResponse>}
 */
const methodInfo_UserService_get = new grpc.web.AbstractClientBase.MethodInfo(
  user_message_pb.GetUserResponse,
  /**
   * @param {!proto.protos.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UserService/get',
      request,
      metadata || {},
      methodDescriptor_UserService_get,
      callback);
};


/**
 * @param {!proto.protos.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.UserService/get',
      request,
      metadata || {},
      methodDescriptor_UserService_get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.CreateUserRequest,
 *   !proto.protos.CreateUserResponse>}
 */
const methodDescriptor_UserService_create = new grpc.web.MethodDescriptor(
  '/protos.UserService/create',
  grpc.web.MethodType.UNARY,
  user_message_pb.CreateUserRequest,
  user_message_pb.CreateUserResponse,
  /**
   * @param {!proto.protos.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.CreateUserRequest,
 *   !proto.protos.CreateUserResponse>}
 */
const methodInfo_UserService_create = new grpc.web.AbstractClientBase.MethodInfo(
  user_message_pb.CreateUserResponse,
  /**
   * @param {!proto.protos.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UserService/create',
      request,
      metadata || {},
      methodDescriptor_UserService_create,
      callback);
};


/**
 * @param {!proto.protos.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.UserService/create',
      request,
      metadata || {},
      methodDescriptor_UserService_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.UpdateUserRequest,
 *   !proto.protos.UpdateUserResponse>}
 */
const methodDescriptor_UserService_update = new grpc.web.MethodDescriptor(
  '/protos.UserService/update',
  grpc.web.MethodType.UNARY,
  user_message_pb.UpdateUserRequest,
  user_message_pb.UpdateUserResponse,
  /**
   * @param {!proto.protos.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.UpdateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.UpdateUserRequest,
 *   !proto.protos.UpdateUserResponse>}
 */
const methodInfo_UserService_update = new grpc.web.AbstractClientBase.MethodInfo(
  user_message_pb.UpdateUserResponse,
  /**
   * @param {!proto.protos.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UserService/update',
      request,
      metadata || {},
      methodDescriptor_UserService_update,
      callback);
};


/**
 * @param {!proto.protos.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.UserService/update',
      request,
      metadata || {},
      methodDescriptor_UserService_update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.DeleteUserRequest,
 *   !proto.protos.DeleteUserResponse>}
 */
const methodDescriptor_UserService_delete = new grpc.web.MethodDescriptor(
  '/protos.UserService/delete',
  grpc.web.MethodType.UNARY,
  user_message_pb.DeleteUserRequest,
  user_message_pb.DeleteUserResponse,
  /**
   * @param {!proto.protos.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.DeleteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.DeleteUserRequest,
 *   !proto.protos.DeleteUserResponse>}
 */
const methodInfo_UserService_delete = new grpc.web.AbstractClientBase.MethodInfo(
  user_message_pb.DeleteUserResponse,
  /**
   * @param {!proto.protos.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_message_pb.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.protos.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.UserService/delete',
      request,
      metadata || {},
      methodDescriptor_UserService_delete,
      callback);
};


/**
 * @param {!proto.protos.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.DeleteUserResponse>}
 *     Promise that resolves to the response
 */
proto.protos.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.UserService/delete',
      request,
      metadata || {},
      methodDescriptor_UserService_delete);
};


module.exports = proto.protos;

