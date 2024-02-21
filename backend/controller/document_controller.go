package controller

import (
	"context"
	"errors"

	"github.com/bufbuild/connect-go"

	v1 "github.com/Kimoto-Norihiro/file-uploader/api/documentservice/v1"
)

type DocumentController struct {
}

func NewDocumentController() *DocumentController {
	return &DocumentController{}
}

func (c *DocumentController) CreateDocument(ctx context.Context, req *connect.Request[v1.CreateDocumentRequest]) (*connect.Response[v1.CreateDocumentResponse], error) {
	return nil, errors.New("documentservice.v1.DocumentService.CreateDocument is not implemented")
}

func (c *DocumentController) GetDocument(ctx context.Context, req *connect.Request[v1.GetDocumentRequest]) (*connect.Response[v1.GetDocumentResponse], error) {
	return nil, errors.New("documentservice.v1.DocumentService.GetDocument is not implemented")
}
