// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        (unknown)
// source: protos/level/service.proto

package level

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

var File_protos_level_service_proto protoreflect.FileDescriptor

var file_protos_level_service_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x6c, 0x65,
	0x76, 0x65, 0x6c, 0x1a, 0x1a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6c, 0x65, 0x76, 0x65,
	0x6c, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32,
	0xce, 0x02, 0x0a, 0x0c, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x3b, 0x0a, 0x04, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x17, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c,
	0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x18, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4c, 0x65,
	0x76, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x38, 0x0a,
	0x03, 0x67, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x47, 0x65, 0x74,
	0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6c,
	0x65, 0x76, 0x65, 0x6c, 0x2e, 0x47, 0x65, 0x74, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x41, 0x0a, 0x06, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x12, 0x19, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x6c,
	0x65, 0x76, 0x65, 0x6c, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x41, 0x0a, 0x06, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x12, 0x19, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1a, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x65,
	0x76, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x41, 0x0a,
	0x06, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x19, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x42, 0x07, 0x5a, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var file_protos_level_service_proto_goTypes = []interface{}{
	(*ListLevelRequest)(nil),    // 0: level.ListLevelRequest
	(*GetLevelRequest)(nil),     // 1: level.GetLevelRequest
	(*CreateLevelRequest)(nil),  // 2: level.CreateLevelRequest
	(*UpdateLevelRequest)(nil),  // 3: level.UpdateLevelRequest
	(*DeleteLevelRequest)(nil),  // 4: level.DeleteLevelRequest
	(*ListLevelResponse)(nil),   // 5: level.ListLevelResponse
	(*GetLevelResponse)(nil),    // 6: level.GetLevelResponse
	(*CreateLevelResponse)(nil), // 7: level.CreateLevelResponse
	(*UpdateLevelResponse)(nil), // 8: level.UpdateLevelResponse
	(*DeleteLevelResponse)(nil), // 9: level.DeleteLevelResponse
}
var file_protos_level_service_proto_depIdxs = []int32{
	0, // 0: level.LevelService.list:input_type -> level.ListLevelRequest
	1, // 1: level.LevelService.get:input_type -> level.GetLevelRequest
	2, // 2: level.LevelService.create:input_type -> level.CreateLevelRequest
	3, // 3: level.LevelService.update:input_type -> level.UpdateLevelRequest
	4, // 4: level.LevelService.delete:input_type -> level.DeleteLevelRequest
	5, // 5: level.LevelService.list:output_type -> level.ListLevelResponse
	6, // 6: level.LevelService.get:output_type -> level.GetLevelResponse
	7, // 7: level.LevelService.create:output_type -> level.CreateLevelResponse
	8, // 8: level.LevelService.update:output_type -> level.UpdateLevelResponse
	9, // 9: level.LevelService.delete:output_type -> level.DeleteLevelResponse
	5, // [5:10] is the sub-list for method output_type
	0, // [0:5] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_protos_level_service_proto_init() }
func file_protos_level_service_proto_init() {
	if File_protos_level_service_proto != nil {
		return
	}
	file_protos_level_message_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_level_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_level_service_proto_goTypes,
		DependencyIndexes: file_protos_level_service_proto_depIdxs,
	}.Build()
	File_protos_level_service_proto = out.File
	file_protos_level_service_proto_rawDesc = nil
	file_protos_level_service_proto_goTypes = nil
	file_protos_level_service_proto_depIdxs = nil
}
