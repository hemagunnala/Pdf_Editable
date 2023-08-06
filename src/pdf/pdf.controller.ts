// pdf/pdf.controller.ts
import {Controller, Post, Get, UploadedFile, UseInterceptors, Res, Param} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('pdf')
export class PdfController {
    constructor() {}

    @Get(':filename')
    async loadPdf(@Param('filename') filename: string, @Res() res: Response) {
        try {
            const filePath = path.join(process.cwd(), 'src', 'pdf', 'file', filename);

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ message: 'PDF not found', filePath: filePath });
            }

            const pdfFile = fs.createReadStream(filePath);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="${filename}"`);

            pdfFile.pipe(res);
        } catch (error) {
            return res.status(500).json({ message: 'Failed to load PDF' });
        }
    }

    @Post('save')
    @UseInterceptors(FileInterceptor('file'))
    async savePdf(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
        try {
            if (!file) {
                return res.status(400).json({ message: 'No PDF file provided' });
            }

            const filePath = path.join(process.cwd(), 'src', 'pdf', 'file', "example-saved.pdf");
            fs.writeFileSync(filePath, file.buffer);

            return res.json({ message: 'PDF saved successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Failed to save PDF', error: error });
        }
    }
}
