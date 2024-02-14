// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file fileservice/v1/file.proto (package fileservice.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateFileRequest, CreateFileResponse, GetFileRequest, GetFileResponse } from "./file_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service fileservice.v1.FileService
 */
export const FileService = {
  typeName: "fileservice.v1.FileService",
  methods: {
    /**
     * @generated from rpc fileservice.v1.FileService.CreateFile
     */
    createFile: {
      name: "CreateFile",
      I: CreateFileRequest,
      O: CreateFileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc fileservice.v1.FileService.GetFile
     */
    getFile: {
      name: "GetFile",
      I: GetFileRequest,
      O: GetFileResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
