package main

import (
	"net/http"

	"github.com/Kimoto-Norihiro/file-uploader/api/documentservice/v1/documentservicev1connect"
	"github.com/Kimoto-Norihiro/file-uploader/controller"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	dc := controller.NewDocumentController()

	mux := http.NewServeMux()
	mux.Handle(documentservicev1connect.NewDocumentServiceHandler(dc))

	err := http.ListenAndServe(
		"localhost:8080",
		// CORSハンドラでリクエストを許可する(本番では全ホスト許可ではなく特定のホストのみ許可するべき)
		cors.AllowAll().Handler(
			// HTTP1.1リクエストはHTTP/2にアップグレードされる
			h2c.NewHandler(mux, &http2.Server{}),
		),
	)

	if err != nil {
		panic(err)
	}
}
