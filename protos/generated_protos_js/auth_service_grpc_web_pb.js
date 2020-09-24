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


var auth_message_pb = require('./auth_message_pb.js')
const proto = {};
proto.protos = require('./auth_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.AuthServiceClient =
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
proto.protos.AuthServicePromiseClient =
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
 *   !proto.protos.LoginRequest,
 *   !proto.protos.LoginResponse>}
 */
const methodDescriptor_AuthService_login = new grpc.web.MethodDescriptor(
  '/protos.AuthService/login',
  grpc.web.MethodType.UNARY,
  auth_message_pb.LoginRequest,
  auth_message_pb.LoginResponse,
  /**
   * @param {!proto.protos.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_message_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.LoginRequest,
 *   !proto.protos.LoginResponse>}
 */
const methodInfo_AuthService_login = new grpc.web.AbstractClientBase.MethodInfo(
  auth_message_pb.LoginResponse,
  /**
   * @param {!proto.protos.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_message_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.protos.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protos.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protos.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protos.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protos.AuthService/login',
      request,
      metadata || {},
      methodDescriptor_AuthService_login,
      callback);
};


/**
 * @param {!proto.protos.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protos.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.protos.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protos.AuthService/login',
      request,
      metadata || {},
      methodDescriptor_AuthService_login);
};


module.exports = proto.protos;

