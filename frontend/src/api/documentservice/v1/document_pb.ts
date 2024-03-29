// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file documentservice/v1/document.proto (package documentservice.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message documentservice.v1.Document
 */
export class Document extends Message<Document> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string base64pptx = 2;
   */
  base64pptx = "";

  /**
   * @generated from field: string base64pdf = 3;
   */
  base64pdf = "";

  constructor(data?: PartialMessage<Document>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "documentservice.v1.Document";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base64pptx", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "base64pdf", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Document {
    return new Document().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Document {
    return new Document().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Document {
    return new Document().fromJsonString(jsonString, options);
  }

  static equals(a: Document | PlainMessage<Document> | undefined, b: Document | PlainMessage<Document> | undefined): boolean {
    return proto3.util.equals(Document, a, b);
  }
}

/**
 * @generated from message documentservice.v1.CreateDocumentRequest
 */
export class CreateDocumentRequest extends Message<CreateDocumentRequest> {
  /**
   * @generated from field: documentservice.v1.Document document = 1;
   */
  document?: Document;

  constructor(data?: PartialMessage<CreateDocumentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "documentservice.v1.CreateDocumentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "document", kind: "message", T: Document },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDocumentRequest {
    return new CreateDocumentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDocumentRequest {
    return new CreateDocumentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDocumentRequest {
    return new CreateDocumentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDocumentRequest | PlainMessage<CreateDocumentRequest> | undefined, b: CreateDocumentRequest | PlainMessage<CreateDocumentRequest> | undefined): boolean {
    return proto3.util.equals(CreateDocumentRequest, a, b);
  }
}

/**
 * @generated from message documentservice.v1.CreateDocumentResponse
 */
export class CreateDocumentResponse extends Message<CreateDocumentResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<CreateDocumentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "documentservice.v1.CreateDocumentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDocumentResponse {
    return new CreateDocumentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDocumentResponse {
    return new CreateDocumentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDocumentResponse {
    return new CreateDocumentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDocumentResponse | PlainMessage<CreateDocumentResponse> | undefined, b: CreateDocumentResponse | PlainMessage<CreateDocumentResponse> | undefined): boolean {
    return proto3.util.equals(CreateDocumentResponse, a, b);
  }
}

/**
 * @generated from message documentservice.v1.GetDocumentRequest
 */
export class GetDocumentRequest extends Message<GetDocumentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetDocumentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "documentservice.v1.GetDocumentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDocumentRequest {
    return new GetDocumentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDocumentRequest {
    return new GetDocumentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDocumentRequest {
    return new GetDocumentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDocumentRequest | PlainMessage<GetDocumentRequest> | undefined, b: GetDocumentRequest | PlainMessage<GetDocumentRequest> | undefined): boolean {
    return proto3.util.equals(GetDocumentRequest, a, b);
  }
}

/**
 * @generated from message documentservice.v1.GetDocumentResponse
 */
export class GetDocumentResponse extends Message<GetDocumentResponse> {
  /**
   * @generated from field: documentservice.v1.Document document = 1;
   */
  document?: Document;

  constructor(data?: PartialMessage<GetDocumentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "documentservice.v1.GetDocumentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "document", kind: "message", T: Document },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDocumentResponse {
    return new GetDocumentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDocumentResponse {
    return new GetDocumentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDocumentResponse {
    return new GetDocumentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetDocumentResponse | PlainMessage<GetDocumentResponse> | undefined, b: GetDocumentResponse | PlainMessage<GetDocumentResponse> | undefined): boolean {
    return proto3.util.equals(GetDocumentResponse, a, b);
  }
}

