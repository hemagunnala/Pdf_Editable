export interface PdfRepositoryInterface {
    savePdf(buffer: Buffer, filename: string): void;
}

export interface PdfApplicationInterface {
    loadPdf(): { url: string };
    savePdf(buffer: Buffer, filename: string): void;
}