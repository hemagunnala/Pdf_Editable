// pdf/infrastructure/pdf.repository.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class PdfRepository {
    savePdf(buffer: Buffer, filename: string): void {
        fs.writeFileSync(`./pdfs/${filename}`, buffer);
    }
}
