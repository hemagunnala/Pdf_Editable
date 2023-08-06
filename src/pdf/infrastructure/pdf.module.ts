// pdf/infrastructure/pdf.module.ts
import { Module } from '@nestjs/common';
import { PdfRepository } from './pdf.repository';

@Module({
    providers: [PdfRepository],
    exports: [PdfRepository],
})
export class PdfInfrastructureModule {}
