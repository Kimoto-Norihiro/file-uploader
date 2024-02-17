import { createPromiseClient } from "@bufbuild/connect";
import { DocumentService } from "../api/documentservice/v1/document_connect";
import { createConnectTransport } from '@bufbuild/connect-web';

const transport = createConnectTransport({
	baseUrl: "http://localhost:8080",
});
const client = createPromiseClient(DocumentService, transport);

export const CreateDocument = async (base64pdf: string, base64pptx: string) => {
	const res = await client.createDocument({
		document: {
			base64pdf,
			base64pptx,
		}
	})
	console.log(res.id)
};

export const getdocument = async (id: string) => {
	const res = await client.getDocument({
		id,
	})
	return res.document
}