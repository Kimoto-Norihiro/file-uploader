// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: fileservice/v1/file.proto

package fileservicev1connect

import (
	context "context"
	errors "errors"
	v1 "github.com/Kimoto-Norihiro/file-uploader/server/api/fileservice/v1"
	connect_go "github.com/bufbuild/connect-go"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// FileServiceName is the fully-qualified name of the FileService service.
	FileServiceName = "fileservice.v1.FileService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// FileServiceCreateFileProcedure is the fully-qualified name of the FileService's CreateFile RPC.
	FileServiceCreateFileProcedure = "/fileservice.v1.FileService/CreateFile"
	// FileServiceGetFileProcedure is the fully-qualified name of the FileService's GetFile RPC.
	FileServiceGetFileProcedure = "/fileservice.v1.FileService/GetFile"
)

// FileServiceClient is a client for the fileservice.v1.FileService service.
type FileServiceClient interface {
	CreateFile(context.Context, *connect_go.Request[v1.CreateFileRequest]) (*connect_go.Response[v1.CreateFileResponse], error)
	GetFile(context.Context, *connect_go.Request[v1.GetFileRequest]) (*connect_go.Response[v1.GetFileResponse], error)
}

// NewFileServiceClient constructs a client for the fileservice.v1.FileService service. By default,
// it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and
// sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC()
// or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewFileServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) FileServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &fileServiceClient{
		createFile: connect_go.NewClient[v1.CreateFileRequest, v1.CreateFileResponse](
			httpClient,
			baseURL+FileServiceCreateFileProcedure,
			opts...,
		),
		getFile: connect_go.NewClient[v1.GetFileRequest, v1.GetFileResponse](
			httpClient,
			baseURL+FileServiceGetFileProcedure,
			opts...,
		),
	}
}

// fileServiceClient implements FileServiceClient.
type fileServiceClient struct {
	createFile *connect_go.Client[v1.CreateFileRequest, v1.CreateFileResponse]
	getFile    *connect_go.Client[v1.GetFileRequest, v1.GetFileResponse]
}

// CreateFile calls fileservice.v1.FileService.CreateFile.
func (c *fileServiceClient) CreateFile(ctx context.Context, req *connect_go.Request[v1.CreateFileRequest]) (*connect_go.Response[v1.CreateFileResponse], error) {
	return c.createFile.CallUnary(ctx, req)
}

// GetFile calls fileservice.v1.FileService.GetFile.
func (c *fileServiceClient) GetFile(ctx context.Context, req *connect_go.Request[v1.GetFileRequest]) (*connect_go.Response[v1.GetFileResponse], error) {
	return c.getFile.CallUnary(ctx, req)
}

// FileServiceHandler is an implementation of the fileservice.v1.FileService service.
type FileServiceHandler interface {
	CreateFile(context.Context, *connect_go.Request[v1.CreateFileRequest]) (*connect_go.Response[v1.CreateFileResponse], error)
	GetFile(context.Context, *connect_go.Request[v1.GetFileRequest]) (*connect_go.Response[v1.GetFileResponse], error)
}

// NewFileServiceHandler builds an HTTP handler from the service implementation. It returns the path
// on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewFileServiceHandler(svc FileServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	fileServiceCreateFileHandler := connect_go.NewUnaryHandler(
		FileServiceCreateFileProcedure,
		svc.CreateFile,
		opts...,
	)
	fileServiceGetFileHandler := connect_go.NewUnaryHandler(
		FileServiceGetFileProcedure,
		svc.GetFile,
		opts...,
	)
	return "/fileservice.v1.FileService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case FileServiceCreateFileProcedure:
			fileServiceCreateFileHandler.ServeHTTP(w, r)
		case FileServiceGetFileProcedure:
			fileServiceGetFileHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedFileServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedFileServiceHandler struct{}

func (UnimplementedFileServiceHandler) CreateFile(context.Context, *connect_go.Request[v1.CreateFileRequest]) (*connect_go.Response[v1.CreateFileResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("fileservice.v1.FileService.CreateFile is not implemented"))
}

func (UnimplementedFileServiceHandler) GetFile(context.Context, *connect_go.Request[v1.GetFileRequest]) (*connect_go.Response[v1.GetFileResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("fileservice.v1.FileService.GetFile is not implemented"))
}
